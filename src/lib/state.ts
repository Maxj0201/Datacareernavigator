// Browser-side persistence. Everything stays in the visitor's own browser
// (localStorage); nothing is sent anywhere. Every access is guarded because
// storage can be unavailable (private mode, blocked site data).

import type { SkillRatings } from "./scoring.ts";

const KEY = "dcn:v1";

export interface SavedState {
  answers?: (number | null)[];
  skills?: SkillRatings;
  target?: string; // role slug
  checklist?: Record<string, boolean>;
}

export function load(): SavedState {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as SavedState) : {};
  } catch {
    return {};
  }
}

export function save(patch: Partial<SavedState>): SavedState {
  const next = { ...load(), ...patch };
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* storage unavailable: the page still works for this visit */
  }
  return next;
}

export function clearAll(): void {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
}
