import { test } from "node:test";
import assert from "node:assert/strict";
import { QUIZ } from "../src/data/quiz.ts";
import { ROLES, ROLE_BY_SLUG } from "../src/data/roles.ts";
import { SKILLS, SKILL_BY_ID, type SkillId } from "../src/data/skills.ts";
import { RESOURCE_BY_ID } from "../src/data/resources.ts";
import { KNOWLEDGE } from "../src/data/knowledge.ts";
import {
  interestProfile, rankRoles, readiness, skillGaps,
  encodeAnswers, decodeAnswers, encodeSkills, decodeSkills,
} from "../src/lib/scoring.ts";

/** Pick, for every question, the option whose points include `dim` most strongly. */
function answersFavoring(dim: string): number[] {
  return QUIZ.map((q) => {
    let best = 0, bestPts = -1;
    q.options.forEach((o, i) => {
      const p = (o.points as Record<string, number>)[dim] ?? 0;
      if (p > bestPts) { best = i; bestPts = p; }
    });
    return best;
  });
}

test("data integrity: every referenced id exists", () => {
  for (const role of ROLES) {
    for (const id of Object.keys(role.skills)) assert.ok(SKILL_BY_ID[id as SkillId], `${role.slug}: unknown skill ${id}`);
    for (const rel of role.related) assert.ok(ROLE_BY_SLUG[rel], `${role.slug}: unknown related role ${rel}`);
    for (const lvl of Object.values(role.skills)) assert.ok(lvl! >= 1 && lvl! <= 3, "early-career targets cap at Strong (3)");
  }
  for (const s of SKILLS) for (const r of s.resources) assert.ok(RESOURCE_BY_ID[r], `${s.id}: unknown resource ${r}`);
  for (const k of KNOWLEDGE) assert.ok(k.answer >= 0 && k.answer < k.choices.length);
  assert.equal(new Set(ROLES.map((r) => r.slug)).size, ROLES.length);
});

test("every quiz option fits in a one-character share code", () => {
  for (const q of QUIZ) assert.ok(q.options.length <= 10);
});

test("clear-cut answer patterns rank the expected role first", () => {
  const cases: [string, string[]][] = [
    ["engineering", ["data-engineer", "analytics-engineer"]],
    ["visualize", ["bi-analyst", "data-analyst"]],
    ["product", ["product-analyst"]],
    ["ml", ["ml-engineer", "data-scientist"]],
    ["statistics", ["data-scientist", "product-analyst"]],
  ];
  for (const [dim, expected] of cases) {
    const top = rankRoles(interestProfile(answersFavoring(dim)), null)[0].role.slug;
    assert.ok(expected.includes(top), `${dim}-heavy answers ranked ${top} first`);
  }
});

test("every role can be reached as a top match", () => {
  // Sanity check that no role is unreachable: for each role, answering each
  // question with the option closest to the role's interests puts it in the top 3.
  for (const role of ROLES) {
    const answers = QUIZ.map((q) => {
      let best = 0, bestScore = -1;
      q.options.forEach((o, i) => {
        const score = Object.entries(o.points).reduce((s, [d, p]) => s + (p as number) * role.interests[d as keyof typeof role.interests], 0);
        if (score > bestScore) { best = i; bestScore = score; }
      });
      return best;
    });
    const top3 = rankRoles(interestProfile(answers), null).slice(0, 3).map((m) => m.role.slug);
    assert.ok(top3.includes(role.slug), `${role.slug} not in top 3 for its own ideal answers: ${top3}`);
  }
});

test("readiness is 0 with no skills, 100 when every target is met, and monotonic", () => {
  const role = ROLE_BY_SLUG["data-analyst"];
  assert.equal(readiness({}, role), 0);
  const full = Object.fromEntries(Object.entries(role.skills)) as Record<SkillId, number>;
  assert.equal(readiness(full, role), 100);
  const over = Object.fromEntries(SKILLS.map((s) => [s.id, 4]));
  assert.equal(readiness(over, role), 100, "exceeding targets caps at 100");
  const partial = { ...full, sql: 1 };
  assert.ok(readiness(partial, role) < 100 && readiness(partial, role) > 0);
});

test("skill gaps list only shortfalls, biggest first", () => {
  const role = ROLE_BY_SLUG["data-engineer"];
  const gaps = skillGaps({ sql: 4, python: 1 }, role);
  assert.ok(!gaps.some((g) => g.skill === "sql"));
  for (let i = 1; i < gaps.length; i++) assert.ok(gaps[i - 1].priority >= gaps[i].priority);
  assert.deepEqual(skillGaps(Object.fromEntries(SKILLS.map((s) => [s.id, 4])), role), []);
});

test("share codes round-trip and reject garbage", () => {
  const answers = [0, 1, 2, null, 3, 0, 1, 2, 3, 5, 0, 1];
  assert.deepEqual(decodeAnswers(encodeAnswers(answers)), answers);
  assert.equal(decodeAnswers("123"), null);
  assert.equal(decodeAnswers("9".repeat(QUIZ.length)), null);
  const skills = Object.fromEntries(SKILLS.map((s, i) => [s.id, i % 5]));
  assert.deepEqual(decodeSkills(encodeSkills(skills)), skills);
  assert.equal(decodeSkills("5".repeat(SKILLS.length)), null);
});
