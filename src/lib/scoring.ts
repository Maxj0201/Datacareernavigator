// Pure scoring logic shared by the quiz, results, compare and roadmap pages.
// No DOM access here, so it can be unit-tested with `node --test`.

import { DIMENSIONS, ROLES, type Dimension, type Role } from "../data/roles.ts";
import { QUIZ } from "../data/quiz.ts";
import { SKILLS, type SkillId } from "../data/skills.ts";

export type InterestProfile = Record<Dimension, number>;
export type SkillRatings = Partial<Record<SkillId, number>>;

/** Sum the points from the chosen option of each answered question. */
export function interestProfile(answers: (number | null)[]): InterestProfile {
  const profile = Object.fromEntries(DIMENSIONS.map((d) => [d.id, 0])) as InterestProfile;
  QUIZ.forEach((q, i) => {
    const choice = answers[i];
    if (choice == null) return;
    const option = q.options[choice];
    if (!option) return;
    for (const [dim, pts] of Object.entries(option.points) as [Dimension, number][]) {
      profile[dim] += pts;
    }
  });
  return profile;
}

function cosine(a: number[], b: number[]): number {
  let dot = 0, na = 0, nb = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    na += a[i] * a[i];
    nb += b[i] * b[i];
  }
  return na === 0 || nb === 0 ? 0 : dot / Math.sqrt(na * nb);
}

/** Interest fit 0–100: cosine similarity between the user's and the role's interest profile. */
export function interestFit(profile: InterestProfile, role: Role): number {
  const u = DIMENSIONS.map((d) => profile[d.id]);
  const r = DIMENSIONS.map((d) => role.interests[d.id]);
  return Math.round(cosine(u, r) * 100);
}

/**
 * Readiness 0–100: how much of the role's required skill level the user already
 * has, weighting each skill by its required level (so core skills count more).
 * Skills above the requirement don't compensate for gaps elsewhere.
 */
export function readiness(ratings: SkillRatings, role: Role): number {
  let have = 0, need = 0;
  for (const [id, req] of Object.entries(role.skills) as [SkillId, number][]) {
    if (!req) continue;
    have += Math.min(ratings[id] ?? 0, req) * req;
    need += req * req;
  }
  return need === 0 ? 0 : Math.round((have / need) * 100);
}

export interface Gap { skill: SkillId; current: number; target: number; priority: number }

/** Skills where the user is below the role's target, most important first. */
export function skillGaps(ratings: SkillRatings, role: Role): Gap[] {
  return (Object.entries(role.skills) as [SkillId, number][])
    .filter(([id, req]) => (ratings[id] ?? 0) < req)
    .map(([id, req]) => {
      const current = ratings[id] ?? 0;
      return { skill: id, current, target: req, priority: (req - current) * req };
    })
    .sort((a, b) => b.priority - a.priority || b.target - a.target);
}

export interface RoleMatch { role: Role; fit: number; ready: number | null }

/** All roles ranked by interest fit (readiness shown alongside when skills are rated). */
export function rankRoles(profile: InterestProfile, ratings: SkillRatings | null): RoleMatch[] {
  return ROLES.map((role) => ({
    role,
    fit: interestFit(profile, role),
    ready: ratings ? readiness(ratings, role) : null,
  })).sort((a, b) => b.fit - a.fit || (b.ready ?? 0) - (a.ready ?? 0));
}

/** The two dimensions that contributed most to a role's match, for the "why" text. */
export function topReasons(profile: InterestProfile, role: Role, n = 2): Dimension[] {
  return DIMENSIONS.map((d) => ({ id: d.id, score: profile[d.id] * role.interests[d.id] }))
    .filter((d) => d.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, n)
    .map((d) => d.id);
}

// ---- Compact encoding for shareable result links ---------------------------

/** Quiz answers as one character per question ("-" = unanswered). */
export function encodeAnswers(answers: (number | null)[]): string {
  return QUIZ.map((_, i) => (answers[i] == null ? "-" : String(answers[i]))).join("");
}

export function decodeAnswers(s: string | null): (number | null)[] | null {
  if (!s || s.length !== QUIZ.length) return null;
  const out = [...s].map((c, i) => {
    if (c === "-") return null;
    const n = Number(c);
    return Number.isInteger(n) && n >= 0 && n < QUIZ[i].options.length ? n : NaN;
  });
  return out.some((v) => Number.isNaN(v)) ? null : (out as (number | null)[]);
}

/** Skill ratings as one digit (0–4) per skill in catalogue order. */
export function encodeSkills(r: SkillRatings): string {
  return SKILLS.map((s) => String(r[s.id] ?? 0)).join("");
}

export function decodeSkills(s: string | null): SkillRatings | null {
  if (!s || s.length !== SKILLS.length || !/^[0-4]+$/.test(s)) return null;
  return Object.fromEntries(SKILLS.map((sk, i) => [sk.id, Number(s[i])])) as SkillRatings;
}
