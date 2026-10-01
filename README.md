# Data Pathfinder

A free, interactive guide for students and career-switchers exploring data careers.

**Live site:** https://maxj0201.github.io/Datacareernavigator/

## What it does

- **Career quiz:** 12 questions about how you like to work, scored across 8 interest dimensions and matched to 8 data roles.
- **Skill check:** self-rate 15 core skills (0–4, each level described) and see your readiness for every role.
- **Results:** top matches with a fit score, the reasons, skill gaps and a radar chart. Results can be shared as a link or printed.
- **Roadmap:** a personal checklist built from your skill gaps, with free resources first. Progress is saved in the browser.
- **Role pages:** day-to-day work, tools, required skills, entry paths, portfolio projects, interview topics, career ladder and BLS pay data.
- **Compare:** any two roles side by side.
- **Knowledge check:** 10 concept questions with explanations.
- **Resource library:** about 40 curated courses, books, practice sites and communities, filterable by skill, type and cost.

There are no accounts and no tracking. Everything a visitor enters stays in their own browser (`localStorage`).

The original 2024 version of the site is preserved unchanged at [`/archive/`](https://maxj0201.github.io/Datacareernavigator/archive/).

## Editing content

All content lives in typed data files. The pages are generated from them, so the quiz, role pages, comparisons and roadmap stay consistent.

| File | Contents |
|---|---|
| `src/data/skills.ts` | The 15 skills, what each level 0–4 means, and the next step to level up |
| `src/data/roles.ts` | The 8 roles: interest profile, skill targets, descriptions, projects, interview topics and BLS pay reference |
| `src/data/quiz.ts` | Career quiz questions and how each answer scores |
| `src/data/knowledge.ts` | Knowledge-check questions and explanations |
| `src/data/resources.ts` | The resource library |

Scoring logic is in `src/lib/scoring.ts` and is documented on the site's About page.

## Development

Requires Node.js 22+.

```bash
npm install
npm run dev        # local dev server at http://localhost:4321/Datacareernavigator/
npm test           # scoring and data-integrity tests
npx astro check    # type check
npm run build      # static site in dist/
```

Every push to `main` is tested, built and deployed to GitHub Pages by `.github/workflows/deploy.yml`.

## Tech

[Astro](https://astro.build) static site with plain TypeScript for the interactive tools. There's no UI framework and no runtime dependencies. Charts are hand-built SVG.

## Data sources

Pay and growth figures come from the U.S. Bureau of Labor Statistics [Occupational Outlook Handbook](https://www.bls.gov/ooh/) (May 2025 medians, 2025–2035 projections). Where BLS has no category for a title, the closest occupation is shown and labelled as such.

## License

Code is released under the [MIT License](LICENSE). Linked third-party resources belong to their respective owners.
