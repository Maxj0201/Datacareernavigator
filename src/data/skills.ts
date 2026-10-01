// Skill catalogue. Every role requirement, skill-check question and roadmap
// step refers to these ids, so this file is the single source of truth.

export type SkillId =
  | "sql" | "spreadsheets" | "python" | "stats" | "viz" | "bi" | "modeling"
  | "pipelines" | "cloud" | "ml" | "dl" | "experiment" | "swe"
  | "communication" | "business";

export type SkillCategory = "Data foundations" | "Analysis & insight" | "Engineering" | "Machine learning & AI" | "Business impact";

export interface Skill {
  id: SkillId;
  name: string;
  short: string; // label for charts
  category: SkillCategory;
  description: string;
  /** What each self-rating 0-4 looks like in practice. */
  levels: [string, string, string, string, string];
  /** Concrete next steps to move from level n to n+1 (index = current level). */
  levelUp: [string, string, string, string];
  resources: string[]; // resource ids
}

export const LEVEL_NAMES = ["None", "Aware", "Working", "Strong", "Expert"] as const;

export const SKILLS: Skill[] = [
  {
    id: "sql", name: "SQL", short: "SQL", category: "Data foundations",
    description: "Querying relational databases: filtering, joining, aggregating and shaping data.",
    levels: [
      "I haven't written SQL yet.",
      "I can write SELECT, WHERE and ORDER BY on a single table.",
      "I use JOINs, GROUP BY and subqueries to answer real questions.",
      "I write window functions and CTEs, and I check results for join fan-out and NULL pitfalls.",
      "I design performant queries on large warehouses and review others' SQL.",
    ],
    levelUp: [
      "Work through SQLBolt end to end (about 3–4 hours).",
      "Practice JOINs and GROUP BY on a public dataset until you can answer business questions without hints.",
      "Learn window functions (RANK, LAG, running totals) and CTEs; solve 30 medium interview problems.",
      "Read query plans, learn partitioning and clustering in a cloud warehouse, and review a teammate's queries.",
    ],
    resources: ["sqlbolt", "mode-sql", "datalemur", "stratascratch"],
  },
  {
    id: "spreadsheets", name: "Spreadsheets", short: "Sheets", category: "Data foundations",
    description: "Excel or Google Sheets for quick analysis, lookups, pivots and simple models.",
    levels: [
      "I rarely use spreadsheets.",
      "I can sort, filter and write basic formulas.",
      "I use pivot tables, lookups (XLOOKUP/VLOOKUP) and conditional logic.",
      "I build clean, auditable models and charts others rely on.",
      "I build complex models with scenario analysis and automation.",
    ],
    levelUp: [
      "Learn sorting, filtering, SUM/AVERAGE/IF and basic charts.",
      "Master pivot tables and XLOOKUP on a real dataset.",
      "Build a small forecasting or budget model with clear inputs, calculations and outputs tabs.",
      "Add scenario analysis and learn Power Query or Apps Script for automation.",
    ],
    resources: ["google-da-cert"],
  },
  {
    id: "python", name: "Python (or R) for data", short: "Python", category: "Data foundations",
    description: "Using a programming language to clean, analyse and automate data work.",
    levels: [
      "I haven't programmed before.",
      "I understand variables, loops and functions.",
      "I use pandas (or dplyr) to clean, merge and summarise data in notebooks.",
      "I write reusable, tested functions and modules, not just notebooks.",
      "I write production-quality, well-structured code that others build on.",
    ],
    levelUp: [
      "Complete the official Python tutorial chapters 1–5 or Kaggle's Python course.",
      "Learn pandas: loading, filtering, groupby, merge and reshaping. Analyse one dataset end to end.",
      "Move notebook logic into functions and modules, add type hints and a few pytest tests.",
      "Learn packaging, profiling and code review; contribute to a shared codebase.",
    ],
    resources: ["python-tutorial", "kaggle-learn", "pandas-getting-started"],
  },
  {
    id: "stats", name: "Statistics & probability", short: "Stats", category: "Analysis & insight",
    description: "Describing data, quantifying uncertainty and drawing valid conclusions.",
    levels: [
      "I haven't studied statistics.",
      "I know means, medians and basic distributions.",
      "I use confidence intervals, hypothesis tests and regression correctly.",
      "I handle confounding, multiple testing and model assumptions with care.",
      "I choose and justify advanced methods (Bayesian, causal, time series).",
    ],
    levelUp: [
      "Learn descriptive statistics and probability basics (Khan Academy or OpenIntro chapters 1–3).",
      "Study sampling, confidence intervals, hypothesis tests and linear regression.",
      "Learn when tests are invalid: dependence, multiple comparisons, confounding.",
      "Study causal inference, Bayesian methods or time series in depth.",
    ],
    resources: ["khan-stats", "openintro-stats", "statquest", "islp"],
  },
  {
    id: "viz", name: "Data visualization", short: "Viz", category: "Analysis & insight",
    description: "Choosing and designing charts that make the point clear and honest.",
    levels: [
      "I rarely make charts.",
      "I can make default charts in a tool.",
      "I pick the right chart type and label it clearly.",
      "I design charts that tell a story and avoid misleading readers.",
      "I set visualization standards for a team.",
    ],
    levelUp: [
      "Learn the core chart types (bar, line, scatter, histogram) and when to use each.",
      "Read Storytelling with Data and remake three charts you've seen at work or online.",
      "Build a portfolio of explanatory charts with clear titles and annotations.",
      "Create a chart style guide and review others' visuals.",
    ],
    resources: ["storytelling-with-data", "tableau-public", "kaggle-learn"],
  },
  {
    id: "bi", name: "BI tools & dashboards", short: "BI", category: "Analysis & insight",
    description: "Tableau, Power BI, Looker and similar tools for self-serve reporting.",
    levels: [
      "I haven't used a BI tool.",
      "I can view and filter existing dashboards.",
      "I build dashboards with filters and calculated fields.",
      "I design maintainable dashboards on a clean data model with defined metrics.",
      "I run a BI platform: governance, performance, permissions.",
    ],
    levelUp: [
      "Download Tableau Public or Power BI Desktop and follow a beginner tutorial.",
      "Build a 2–3 page dashboard on a public dataset and publish it.",
      "Learn data modeling inside the tool (relationships, LOD/DAX measures) and dashboard UX.",
      "Learn row-level security, performance tuning and metric governance.",
    ],
    resources: ["tableau-public", "powerbi-learn"],
  },
  {
    id: "modeling", name: "Data modeling", short: "Modeling", category: "Engineering",
    description: "Designing tables, keys and grains so data is correct and easy to query.",
    levels: [
      "I don't know what a schema or grain is.",
      "I understand tables, primary keys and foreign keys.",
      "I can design a star schema with facts and dimensions.",
      "I model data for analytics with tests, documentation and slowly changing dimensions.",
      "I set modeling conventions for an entire warehouse.",
    ],
    levelUp: [
      "Learn relational basics: tables, keys, normalization, and one-to-many relationships.",
      "Study star schemas (facts, dimensions, grain) and model a small business process.",
      "Build a dbt project with tests and documentation on a public dataset.",
      "Read The Data Warehouse Toolkit and design conventions for a multi-domain warehouse.",
    ],
    resources: ["dbt-learn", "kimball"],
  },
  {
    id: "pipelines", name: "Data pipelines & ETL", short: "Pipelines", category: "Engineering",
    description: "Moving and transforming data reliably on a schedule.",
    levels: [
      "I haven't built a pipeline.",
      "I understand what ETL/ELT means.",
      "I can schedule a script that loads and transforms data.",
      "I build orchestrated pipelines with retries, monitoring and data-quality checks.",
      "I design streaming and batch architectures at scale.",
    ],
    levelUp: [
      "Learn what ETL/ELT, batch and orchestration mean; read one pipeline's code.",
      "Write a Python script that pulls from an API, cleans data and loads it into a database on a schedule.",
      "Follow the Data Engineering Zoomcamp: orchestration, warehousing and data-quality tests.",
      "Learn Spark and streaming (Kafka) and read Designing Data-Intensive Applications.",
    ],
    resources: ["de-zoomcamp", "ddia", "dbt-learn"],
  },
  {
    id: "cloud", name: "Cloud & data platforms", short: "Cloud", category: "Engineering",
    description: "Warehouses and cloud services: Snowflake, BigQuery, Databricks, AWS, GCP, Azure.",
    levels: [
      "I haven't used cloud data tools.",
      "I've run queries in a cloud warehouse.",
      "I can set up storage, a warehouse and permissions for a small project.",
      "I manage cost, performance and infrastructure-as-code for data workloads.",
      "I architect multi-environment data platforms.",
    ],
    levelUp: [
      "Use the BigQuery sandbox or a Snowflake trial to query a public dataset.",
      "Deploy a small end-to-end project: object storage, a warehouse table and a scheduled load.",
      "Learn IAM, cost monitoring and Terraform basics.",
      "Study platform architecture: environments, CI/CD for data and governance.",
    ],
    resources: ["de-zoomcamp"],
  },
  {
    id: "ml", name: "Machine learning", short: "ML", category: "Machine learning & AI",
    description: "Building and evaluating predictive models on tabular and other data.",
    levels: [
      "I haven't trained a model.",
      "I understand supervised vs. unsupervised learning.",
      "I train and evaluate models with scikit-learn using proper validation.",
      "I handle feature engineering, leakage, imbalance and model selection rigorously.",
      "I design ML systems end to end and know their failure modes.",
    ],
    levelUp: [
      "Take Kaggle's Intro to Machine Learning course.",
      "Study train/test splits, cross-validation and metrics; enter a beginner Kaggle competition.",
      "Read ISLP chapters on resampling, trees and regularization; check every project for leakage.",
      "Learn ML system design: monitoring, drift, retraining and serving.",
    ],
    resources: ["kaggle-learn", "ml-specialization", "islp", "ml-zoomcamp"],
  },
  {
    id: "dl", name: "Deep learning & LLMs", short: "DL / LLMs", category: "Machine learning & AI",
    description: "Neural networks, Transformers and building applications on large language models.",
    levels: [
      "I haven't worked with neural networks or LLM APIs.",
      "I understand what neural networks and LLMs do at a high level.",
      "I've fine-tuned a pretrained model or built an app on an LLM API.",
      "I build retrieval-augmented and evaluated LLM or deep learning systems.",
      "I design, evaluate and optimize large models in production.",
    ],
    levelUp: [
      "Watch an introductory series on neural networks and try an LLM API in a notebook.",
      "Complete fast.ai lesson 1–3 or the Hugging Face LLM course chapters 1–3.",
      "Build a retrieval-augmented app with an evaluation set measuring answer quality.",
      "Learn fine-tuning, inference optimization and LLM evaluation at scale.",
    ],
    resources: ["fastai", "hf-llm-course", "statquest"],
  },
  {
    id: "experiment", name: "Experimentation & A/B testing", short: "A/B tests", category: "Analysis & insight",
    description: "Designing and analysing experiments to measure causal impact.",
    levels: [
      "I haven't analysed an experiment.",
      "I know what an A/B test is.",
      "I can compute lift, a confidence interval and a p-value for a simple test.",
      "I plan sample sizes, guardrail metrics and avoid peeking and novelty pitfalls.",
      "I design experimentation programs and advanced causal methods.",
    ],
    levelUp: [
      "Learn the logic of randomized experiments and control groups.",
      "Analyse a sample A/B test dataset: lift, confidence interval, p-value.",
      "Read Trustworthy Online Controlled Experiments; learn power analysis and guardrails.",
      "Study variance reduction (CUPED), sequential testing and quasi-experiments.",
    ],
    resources: ["trustworthy-experiments", "openintro-stats"],
  },
  {
    id: "swe", name: "Software engineering practices", short: "SWE", category: "Engineering",
    description: "Git, testing, code review, CI/CD and writing maintainable code.",
    levels: [
      "I haven't used Git.",
      "I can commit and push to a repository.",
      "I use branches, pull requests and write some tests.",
      "I set up CI, write tested modular code and review others' PRs.",
      "I design systems and lead engineering standards.",
    ],
    levelUp: [
      "Learn the command line and Git basics (MIT Missing Semester lectures 1 and 6).",
      "Use branches and pull requests on every project; add pytest tests to one.",
      "Set up GitHub Actions CI with linting and tests; practise code review.",
      "Study system design, observability and reliability.",
    ],
    resources: ["missing-semester", "git-book", "made-with-ml"],
  },
  {
    id: "communication", name: "Communication & storytelling", short: "Comms", category: "Business impact",
    description: "Explaining findings, trade-offs and uncertainty to people who decide.",
    levels: [
      "I find it hard to explain technical work.",
      "I can describe what I did.",
      "I lead with the conclusion and tailor detail to the audience.",
      "I influence decisions with clear memos, presentations and honest caveats.",
      "I shape strategy through communication across the organization.",
    ],
    levelUp: [
      "Write a one-paragraph summary for every analysis you do.",
      "Practise the pyramid principle: conclusion first, then supporting evidence.",
      "Present to a non-technical audience and ask what they'd do differently afterwards.",
      "Write decision memos that state options, trade-offs and a recommendation.",
    ],
    resources: ["storytelling-with-data"],
  },
  {
    id: "business", name: "Business & product sense", short: "Business", category: "Business impact",
    description: "Understanding how the organization makes money and which metrics matter.",
    levels: [
      "I'm not sure how metrics connect to business goals.",
      "I know common metrics (revenue, retention, conversion).",
      "I can choose the right metric for a question and explain why.",
      "I frame ambiguous problems and prioritize work by impact.",
      "I shape product or business strategy with data.",
    ],
    levelUp: [
      "Learn common metrics: conversion, retention, churn, LTV, CAC.",
      "For a product you use, define its north-star metric and three supporting metrics.",
      "Practise product-sense case questions and metric-change investigations.",
      "Own a metric end to end: definition, monitoring and the decisions it drives.",
    ],
    resources: ["ace-ds-interview"],
  },
];

export const SKILL_BY_ID = Object.fromEntries(SKILLS.map((s) => [s.id, s])) as Record<SkillId, Skill>;
