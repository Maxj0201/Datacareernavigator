import type { SkillId } from "./skills.ts";

/** Interest dimensions scored by the career quiz. */
export type Dimension =
  | "analyze" | "visualize" | "communicate" | "product"
  | "statistics" | "ml" | "engineering" | "software";

export const DIMENSIONS: { id: Dimension; label: string }[] = [
  { id: "analyze", label: "Investigating data" },
  { id: "visualize", label: "Visual reporting" },
  { id: "communicate", label: "Stakeholder communication" },
  { id: "product", label: "Product & users" },
  { id: "statistics", label: "Statistics & rigor" },
  { id: "ml", label: "Machine learning & AI" },
  { id: "engineering", label: "Data infrastructure" },
  { id: "software", label: "Software building" },
];

export interface BlsReference {
  occupation: string;
  median: number; // USD, annual
  growth: string; // e.g. "35% (2025–2035)"
  url: string;
  /** true when BLS tracks this exact job; false when it's the closest category. */
  exact: boolean;
}

export interface Role {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  /** 0–3 weight on each interest dimension. */
  interests: Record<Dimension, number>;
  /** Target self-rating (0–4) for a solid early-career hire. Omitted = not required. */
  skills: Partial<Record<SkillId, number>>;
  dayInLife: string[];
  tools: string[];
  entryPaths: string[];
  projects: { title: string; detail: string }[];
  interviewTopics: string[];
  ladder: { level: string; focus: string }[];
  related: string[];
  bls: BlsReference;
}

const BLS_YEAR_NOTE = "May 2025 median";
export { BLS_YEAR_NOTE };

export const ROLES: Role[] = [
  {
    slug: "data-analyst",
    title: "Data Analyst",
    tagline: "Turn questions into answers the business can act on.",
    summary:
      "Data analysts find, clean and analyse data to answer business questions: why a metric moved, which customers matter most, what's working. It's the most common entry point into data careers and rewards curiosity, SQL fluency and clear communication.",
    interests: { analyze: 3, visualize: 3, communicate: 3, product: 2, statistics: 2, ml: 0, engineering: 0, software: 0 },
    skills: { sql: 3, spreadsheets: 3, python: 2, stats: 2, viz: 3, bi: 2, modeling: 1, experiment: 1, communication: 3, business: 3 },
    dayInLife: [
      "Answer ad-hoc questions from teams (\"why did signups drop last week?\") with SQL.",
      "Build and maintain recurring reports and dashboards.",
      "Clean messy data and reconcile numbers that don't match between sources.",
      "Present findings and recommendations to managers.",
    ],
    tools: ["SQL", "Excel / Google Sheets", "Tableau or Power BI", "Python or R", "A cloud warehouse (BigQuery, Snowflake)"],
    entryPaths: [
      "Business, economics or social-science degree plus a SQL and dashboard portfolio.",
      "Career switch from operations, finance or marketing, where you already know the domain.",
      "A certificate program (e.g. Google Data Analytics) plus 2–3 original projects.",
    ],
    projects: [
      { title: "Business diagnostic case study", detail: "Take a public e-commerce dataset, model it in a database, answer five business questions in SQL and write recommendations." },
      { title: "Published dashboard", detail: "Build a 2-page Tableau Public or Power BI dashboard with clear metric definitions." },
      { title: "Messy-data cleanup", detail: "Document every data-quality issue you find in a real dataset and how you resolved it." },
    ],
    interviewTopics: ["SQL joins, aggregations and window functions", "Metric definitions and data quality", "Take-home analysis with a written summary", "Explaining a past project to a non-technical audience", "Basic statistics (averages vs. medians, significance)"],
    ladder: [
      { level: "Junior", focus: "Answers well-defined questions accurately." },
      { level: "Mid", focus: "Owns a domain's reporting and proactively finds insights." },
      { level: "Senior", focus: "Frames ambiguous problems and influences decisions." },
      { level: "Lead / Manager", focus: "Sets analytics priorities and develops other analysts." },
    ],
    related: ["bi-analyst", "product-analyst", "analytics-engineer"],
    bls: { occupation: "Operations research analysts", median: 88940, growth: "12% (2025–2035)", url: "https://www.bls.gov/ooh/math/operations-research-analysts.htm", exact: false },
  },
  {
    slug: "bi-analyst",
    title: "Business Intelligence Analyst",
    tagline: "Build the dashboards a whole company runs on.",
    summary:
      "BI analysts (or BI developers) design the reporting layer: trusted metrics, well-modeled data and dashboards people use every day. Compared with data analysts, the work leans more toward building durable, self-serve tools than one-off answers.",
    interests: { analyze: 2, visualize: 3, communicate: 2, product: 1, statistics: 0, ml: 0, engineering: 2, software: 0 },
    skills: { sql: 3, spreadsheets: 3, viz: 3, bi: 3, modeling: 3, python: 1, stats: 1, cloud: 1, communication: 3, business: 3 },
    dayInLife: [
      "Gather reporting requirements from stakeholders.",
      "Model data and define metrics so every dashboard agrees.",
      "Build, test and publish dashboards; fix broken ones.",
      "Train teams to self-serve and manage access permissions.",
    ],
    tools: ["Power BI (DAX) or Tableau", "Looker", "SQL", "Excel", "A cloud warehouse"],
    entryPaths: [
      "Data analyst who specializes in reporting and BI tools.",
      "Excel-heavy finance or operations role moving into Power BI.",
      "Microsoft Power BI Data Analyst (PL-300) certification plus a portfolio.",
    ],
    projects: [
      { title: "Executive KPI dashboard", detail: "A dashboard with documented metric definitions, filters and drill-downs on a public dataset." },
      { title: "Star schema behind a dashboard", detail: "Model a fact table and dimensions first, then build visuals on top." },
      { title: "Before/after redesign", detail: "Rebuild a cluttered public dashboard and explain each design decision." },
    ],
    interviewTopics: ["Dashboard design critique", "SQL and data modeling (facts, dimensions, grain)", "DAX or calculated fields", "Handling conflicting metric definitions", "Gathering requirements from stakeholders"],
    ladder: [
      { level: "Junior", focus: "Builds dashboards to spec." },
      { level: "Mid", focus: "Owns data models and metric definitions for a domain." },
      { level: "Senior", focus: "Designs the BI architecture and standards." },
      { level: "Lead", focus: "Runs the BI platform and governance." },
    ],
    related: ["data-analyst", "analytics-engineer"],
    bls: { occupation: "Operations research analysts", median: 88940, growth: "12% (2025–2035)", url: "https://www.bls.gov/ooh/math/operations-research-analysts.htm", exact: false },
  },
  {
    slug: "analytics-engineer",
    title: "Analytics Engineer",
    tagline: "Bring software practices to the data that analysts use.",
    summary:
      "Analytics engineers sit between data engineering and analysis. They transform raw data into clean, tested, documented models in the warehouse, usually with dbt, so analysts and dashboards can trust the numbers.",
    interests: { analyze: 1, visualize: 1, communicate: 1, product: 1, statistics: 0, ml: 0, engineering: 3, software: 2 },
    skills: { sql: 3, modeling: 3, pipelines: 3, cloud: 3, swe: 3, python: 2, bi: 2, viz: 1, stats: 1, communication: 2, business: 2 },
    dayInLife: [
      "Write and refactor dbt models that turn raw tables into analysis-ready ones.",
      "Add tests and documentation so data quality issues are caught early.",
      "Review pull requests and maintain CI for the data project.",
      "Work with analysts to define metrics once, in code.",
    ],
    tools: ["dbt", "SQL", "Snowflake / BigQuery / Databricks", "Git & GitHub", "Airflow or Dagster", "A BI tool"],
    entryPaths: [
      "Data or BI analyst who loves SQL and wants more engineering rigor.",
      "Software engineer moving toward data.",
      "Self-taught via dbt Learn plus a public dbt project.",
    ],
    projects: [
      { title: "Public dbt project", detail: "Staging, intermediate and mart models with tests and docs on a public dataset, with CI on GitHub." },
      { title: "Metric layer", detail: "Define core business metrics once and show two dashboards that agree." },
      { title: "Data-quality monitor", detail: "Add freshness and uniqueness tests and show how failures are surfaced." },
    ],
    interviewTopics: ["Advanced SQL and query performance", "Dimensional modeling and grain", "dbt features: tests, macros, incremental models", "Git workflow and code review", "Debugging a metric discrepancy"],
    ladder: [
      { level: "Junior", focus: "Builds and tests models within existing conventions." },
      { level: "Mid", focus: "Owns a domain's models and data quality." },
      { level: "Senior", focus: "Designs warehouse conventions and the metric layer." },
      { level: "Lead", focus: "Sets analytics-engineering standards across teams." },
    ],
    related: ["data-engineer", "bi-analyst", "data-analyst"],
    bls: { occupation: "Database architects", median: 139500, growth: "9% (2025–2035)", url: "https://www.bls.gov/ooh/computer-and-information-technology/database-administrators.htm", exact: false },
  },
  {
    slug: "product-analyst",
    title: "Product Analyst",
    tagline: "Help product teams learn what users actually do.",
    summary:
      "Product analysts partner with product managers and designers. They define product metrics, analyse user behaviour and funnels, and run A/B tests to show whether a feature actually worked.",
    interests: { analyze: 3, visualize: 1, communicate: 3, product: 3, statistics: 3, ml: 0, engineering: 0, software: 0 },
    skills: { sql: 3, stats: 3, experiment: 3, python: 2, viz: 2, bi: 2, spreadsheets: 2, communication: 3, business: 3 },
    dayInLife: [
      "Analyse funnels, retention and feature adoption.",
      "Design and read out A/B tests with the product team.",
      "Define success metrics and guardrails before launches.",
      "Investigate sudden metric changes.",
    ],
    tools: ["SQL", "Amplitude / Mixpanel", "Python or R", "Experimentation platforms", "A BI tool"],
    entryPaths: [
      "Data analyst moving closer to product decisions.",
      "Economics, psychology or statistics background with strong SQL.",
      "Product or growth role (e.g. marketing analytics) moving into analysis.",
    ],
    projects: [
      { title: "A/B test readout", detail: "Analyse a public experiment dataset with lift, confidence intervals and guardrail metrics, then write a ship/no-ship memo." },
      { title: "Funnel and retention study", detail: "Build a cohort retention analysis and identify the biggest drop-off step." },
      { title: "Metric framework", detail: "Define a north-star metric and supporting metrics for an app you use." },
    ],
    interviewTopics: ["Product-sense cases (\"how would you measure success of X?\")", "A/B testing design and pitfalls", "SQL on event data", "Investigating a metric drop", "Statistics: power, significance, confidence intervals"],
    ladder: [
      { level: "Junior", focus: "Analyses features and tests with guidance." },
      { level: "Mid", focus: "Embedded partner for a product area." },
      { level: "Senior", focus: "Shapes product strategy and experimentation practice." },
      { level: "Lead", focus: "Leads product analytics across multiple teams." },
    ],
    related: ["data-analyst", "data-scientist"],
    bls: { occupation: "Operations research analysts", median: 88940, growth: "12% (2025–2035)", url: "https://www.bls.gov/ooh/math/operations-research-analysts.htm", exact: false },
  },
  {
    slug: "data-scientist",
    title: "Data Scientist",
    tagline: "Use statistics and modeling to answer hard questions.",
    summary:
      "Data scientists combine statistics, programming and domain knowledge to build models, run experiments and answer questions that simple reporting can't. The title varies a lot between companies: some roles are analytics-heavy, others are close to machine learning engineering.",
    interests: { analyze: 3, visualize: 1, communicate: 2, product: 1, statistics: 3, ml: 3, engineering: 0, software: 1 },
    skills: { python: 3, sql: 3, stats: 3, ml: 3, experiment: 3, viz: 2, swe: 2, dl: 1, cloud: 1, modeling: 1, communication: 3, business: 3 },
    dayInLife: [
      "Frame a business problem as a statistical or modeling question.",
      "Explore data and engineer features.",
      "Build, validate and explain predictive models.",
      "Design experiments and communicate results and uncertainty.",
    ],
    tools: ["Python (pandas, scikit-learn)", "SQL", "Jupyter", "Statsmodels", "Git", "A cloud notebook platform"],
    entryPaths: [
      "Quantitative degree (statistics, math, economics, physics, CS).",
      "Data analyst who builds stronger statistics and ML skills.",
      "Master's program in data science or analytics.",
    ],
    projects: [
      { title: "End-to-end predictive model", detail: "Predict churn or demand with a proper validation strategy, leakage checks and a written model card." },
      { title: "Causal question", detail: "Estimate an effect from observational data and explain why the result should or shouldn't be trusted." },
      { title: "Experiment analysis", detail: "Analyse an A/B test including power and heterogeneous effects." },
    ],
    interviewTopics: ["Probability and statistics fundamentals", "ML concepts: bias/variance, metrics, regularization, leakage", "SQL and Python coding", "Case study: framing a business problem", "Explaining a model to stakeholders"],
    ladder: [
      { level: "Junior", focus: "Executes well-scoped analyses and models." },
      { level: "Mid", focus: "Owns projects from problem framing to delivery." },
      { level: "Senior", focus: "Chooses which problems are worth solving." },
      { level: "Staff / Manager", focus: "Sets technical direction or leads a team." },
    ],
    related: ["product-analyst", "ml-engineer", "data-analyst"],
    bls: { occupation: "Data scientists", median: 120230, growth: "35% (2025–2035)", url: "https://www.bls.gov/ooh/math/data-scientists.htm", exact: true },
  },
  {
    slug: "data-engineer",
    title: "Data Engineer",
    tagline: "Build the pipelines and platforms that move data.",
    summary:
      "Data engineers build and run the infrastructure that collects, stores and moves data reliably: pipelines, warehouses, lakes and streaming systems. It's an engineering role with heavy SQL, Python and cloud work.",
    interests: { analyze: 0, visualize: 0, communicate: 0, product: 0, statistics: 0, ml: 0, engineering: 3, software: 3 },
    skills: { sql: 3, python: 3, pipelines: 3, cloud: 3, modeling: 3, swe: 3, ml: 1, communication: 2, business: 1 },
    dayInLife: [
      "Build and maintain batch and streaming pipelines.",
      "Ingest data from APIs, databases and event streams.",
      "Monitor jobs, fix failures and improve reliability.",
      "Manage warehouse performance, cost and access.",
    ],
    tools: ["Python", "SQL", "Airflow / Dagster", "Spark", "Kafka", "Snowflake / BigQuery / Databricks", "Terraform", "Docker"],
    entryPaths: [
      "Software engineer specializing in data.",
      "Analytics engineer moving deeper into infrastructure.",
      "Computer science graduate plus a pipeline portfolio project.",
    ],
    projects: [
      { title: "End-to-end pipeline", detail: "Ingest from a public API on a schedule, land raw data in cloud storage, transform it in a warehouse and add quality checks." },
      { title: "Streaming demo", detail: "Process a live event stream with Kafka or a managed equivalent." },
      { title: "Infrastructure as code", detail: "Provision the project's cloud resources with Terraform." },
    ],
    interviewTopics: ["SQL and data modeling", "Python coding", "Pipeline and system design", "Distributed processing concepts (partitioning, shuffles)", "Reliability: idempotency, retries, backfills"],
    ladder: [
      { level: "Junior", focus: "Builds pipelines within an existing platform." },
      { level: "Mid", focus: "Owns pipelines and their reliability end to end." },
      { level: "Senior", focus: "Designs platform components and sets standards." },
      { level: "Staff / Lead", focus: "Architects the data platform." },
    ],
    related: ["analytics-engineer", "ml-engineer"],
    bls: { occupation: "Database architects", median: 139500, growth: "9% (2025–2035)", url: "https://www.bls.gov/ooh/computer-and-information-technology/database-administrators.htm", exact: false },
  },
  {
    slug: "ml-engineer",
    title: "Machine Learning Engineer",
    tagline: "Take models from notebook to production.",
    summary:
      "Machine learning engineers build, deploy and maintain ML systems in production. The work is software engineering applied to models: training pipelines, serving, monitoring and making models fast, reliable and reproducible.",
    interests: { analyze: 0, visualize: 0, communicate: 0, product: 0, statistics: 1, ml: 3, engineering: 2, software: 3 },
    skills: { python: 3, ml: 3, dl: 3, swe: 3, cloud: 3, pipelines: 3, sql: 2, stats: 3, communication: 2, business: 1 },
    dayInLife: [
      "Build training and feature pipelines.",
      "Deploy models as services and optimize latency and cost.",
      "Monitor models for drift and retrain them.",
      "Collaborate with data scientists to productionize research.",
    ],
    tools: ["Python", "PyTorch / scikit-learn", "Docker & Kubernetes", "MLflow or similar", "Cloud ML platforms", "Feature stores"],
    entryPaths: [
      "Software engineer who learns ML.",
      "Data scientist who builds strong engineering skills.",
      "CS or ML graduate with deployed projects.",
    ],
    projects: [
      { title: "Deployed model API", detail: "Train a model, serve it behind an API in Docker and add tests and CI." },
      { title: "Monitoring and retraining", detail: "Simulate data drift and trigger retraining automatically." },
      { title: "Reproducible pipeline", detail: "Track experiments and data versions so any result can be reproduced." },
    ],
    interviewTopics: ["Coding (data structures and algorithms)", "ML fundamentals and model evaluation", "ML system design", "Deployment, monitoring and drift", "Deep learning basics"],
    ladder: [
      { level: "Junior", focus: "Productionizes models with guidance." },
      { level: "Mid", focus: "Owns ML services end to end." },
      { level: "Senior", focus: "Designs ML platforms and infrastructure." },
      { level: "Staff", focus: "Sets ML engineering direction." },
    ],
    related: ["ai-engineer", "data-scientist", "data-engineer"],
    bls: { occupation: "Computer and information research scientists", median: 140300, growth: "22% (2025–2035)", url: "https://www.bls.gov/ooh/computer-and-information-technology/computer-and-information-research-scientists.htm", exact: false },
  },
  {
    slug: "ai-engineer",
    title: "AI Engineer",
    tagline: "Build products on top of large language models.",
    summary:
      "AI engineers build applications on foundation models: assistants, retrieval-augmented search, agents and automation. The role is newer and product-focused, combining software engineering with prompt design, retrieval and, above all, careful evaluation.",
    interests: { analyze: 0, visualize: 0, communicate: 1, product: 2, statistics: 0, ml: 2, engineering: 1, software: 3 },
    skills: { python: 3, dl: 3, swe: 3, cloud: 3, ml: 2, pipelines: 2, sql: 2, stats: 1, experiment: 1, communication: 2, business: 2 },
    dayInLife: [
      "Build LLM-powered features and integrate model APIs.",
      "Design retrieval: chunking, embeddings and vector search.",
      "Create evaluation sets and measure quality, cost and latency.",
      "Add guardrails and handle failure cases safely.",
    ],
    tools: ["Python / TypeScript", "LLM APIs", "Vector databases", "Embedding models", "Evaluation frameworks", "Cloud deployment"],
    entryPaths: [
      "Software engineer moving into AI products.",
      "ML engineer focusing on LLM applications.",
      "Builder with shipped AI projects and clear evaluations.",
    ],
    projects: [
      { title: "RAG assistant with evaluation", detail: "Answer questions over a document set and measure accuracy on a labelled test set." },
      { title: "Workflow automation", detail: "Use an LLM to extract structured data from documents, with validation and error handling." },
      { title: "Cost/quality comparison", detail: "Compare two models or prompting strategies on the same evaluation set." },
    ],
    interviewTopics: ["Software engineering and API design", "Retrieval and embeddings", "Evaluating LLM output", "Handling hallucinations, safety and cost", "System design for AI features"],
    ladder: [
      { level: "Junior", focus: "Builds features on established AI patterns." },
      { level: "Mid", focus: "Owns an AI feature, including evaluation." },
      { level: "Senior", focus: "Designs AI systems and evaluation strategy." },
      { level: "Staff", focus: "Sets AI platform direction." },
    ],
    related: ["ml-engineer", "data-scientist"],
    bls: { occupation: "Software developers", median: 135980, growth: "10% (2025–2035, incl. QA analysts and testers)", url: "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm", exact: false },
  },
];

export const ROLE_BY_SLUG = Object.fromEntries(ROLES.map((r) => [r.slug, r])) as Record<string, Role>;
