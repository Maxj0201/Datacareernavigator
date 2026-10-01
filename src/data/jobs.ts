// Job-search destinations: company career sites, early-career programs,
// job boards (with search-link builders) and other useful places.
// Every URL here was checked when added; report broken links via GitHub issues.

export type CompanyGroup = "Big tech" | "Data & AI platforms" | "Consumer tech" | "Enterprise software" | "Finance";

export interface Company {
  name: string;
  group: CompanyGroup;
  careers: string;
  students?: string;
}

export const COMPANIES: Company[] = [
  { name: "Google", group: "Big tech", careers: "https://www.google.com/about/careers/applications/", students: "https://www.google.com/about/careers/applications/students/" },
  { name: "Microsoft", group: "Big tech", careers: "https://careers.microsoft.com/", students: "https://careers.microsoft.com/v2/global/en/students" },
  { name: "Amazon", group: "Big tech", careers: "https://www.amazon.jobs/", students: "https://www.amazon.jobs/en/teams/internships-for-students" },
  { name: "Apple", group: "Big tech", careers: "https://jobs.apple.com/", students: "https://www.apple.com/careers/us/students.html" },
  { name: "Meta", group: "Big tech", careers: "https://www.metacareers.com/", students: "https://www.metacareers.com/careerprograms/students" },
  { name: "NVIDIA", group: "Big tech", careers: "https://www.nvidia.com/en-us/about-nvidia/careers/", students: "https://www.nvidia.com/en-us/about-nvidia/careers/university-recruiting/" },
  { name: "Databricks", group: "Data & AI platforms", careers: "https://www.databricks.com/company/careers" },
  { name: "Snowflake", group: "Data & AI platforms", careers: "https://careers.snowflake.com/" },
  { name: "OpenAI", group: "Data & AI platforms", careers: "https://openai.com/careers/" },
  { name: "Anthropic", group: "Data & AI platforms", careers: "https://www.anthropic.com/careers" },
  { name: "Netflix", group: "Consumer tech", careers: "https://jobs.netflix.com/" },
  { name: "Airbnb", group: "Consumer tech", careers: "https://careers.airbnb.com/" },
  { name: "Spotify", group: "Consumer tech", careers: "https://www.lifeatspotify.com/" },
  { name: "LinkedIn", group: "Consumer tech", careers: "https://careers.linkedin.com/" },
  { name: "Salesforce (incl. Tableau)", group: "Enterprise software", careers: "https://careers.salesforce.com/" },
  { name: "Oracle", group: "Enterprise software", careers: "https://www.oracle.com/careers/" },
  { name: "IBM", group: "Enterprise software", careers: "https://www.ibm.com/careers" },
  { name: "JPMorgan Chase", group: "Finance", careers: "https://careers.jpmorgan.com/" },
  { name: "Capital One", group: "Finance", careers: "https://www.capitalonecareers.com/" },
];

export const COMPANY_GROUPS: CompanyGroup[] = ["Big tech", "Data & AI platforms", "Consumer tech", "Enterprise software", "Finance"];

/** Job boards. `search` builds a prefilled search URL when the site supports one. */
export interface Board {
  name: string;
  note: string;
  home: string;
  search?: (q: string, loc: string, level: Level) => string;
}

export type Level = "any" | "intern" | "entry";

const enc = encodeURIComponent;
const withLevel = (q: string, level: Level) =>
  level === "intern" ? `${q} intern` : level === "entry" ? `entry level ${q}` : q;

export const BOARDS: Board[] = [
  {
    name: "LinkedIn Jobs", note: "The largest professional network; filter by experience level.",
    home: "https://www.linkedin.com/jobs/",
    search: (q, loc, level) =>
      `https://www.linkedin.com/jobs/search/?keywords=${enc(q)}${loc ? `&location=${enc(loc)}` : ""}${level === "intern" ? "&f_E=1" : level === "entry" ? "&f_E=2" : ""}`,
  },
  {
    name: "Indeed", note: "Broad listings across every industry.",
    home: "https://www.indeed.com/",
    search: (q, loc, level) => `https://www.indeed.com/jobs?q=${enc(withLevel(q, level))}${loc ? `&l=${enc(loc)}` : ""}`,
  },
  {
    name: "Google job search", note: "Aggregates postings from many boards and company sites.",
    home: "https://www.google.com/search?q=data+jobs&ibp=htl;jobs",
    search: (q, loc, level) => `https://www.google.com/search?q=${enc(`${withLevel(q, level)} jobs${loc ? ` ${loc}` : ""}`)}&ibp=htl;jobs`,
  },
  {
    name: "Built In", note: "Tech-company jobs, with company profiles.",
    home: "https://builtin.com/jobs",
    search: (q, _loc, level) => `https://builtin.com/jobs?search=${enc(withLevel(q, level))}`,
  },
  {
    name: "USAJOBS", note: "U.S. federal government data roles.",
    home: "https://www.usajobs.gov/",
    search: (q, loc) => `https://www.usajobs.gov/Search/Results?k=${enc(q)}${loc ? `&l=${enc(loc)}` : ""}`,
  },
  { name: "Wellfound", note: "Startup jobs, often with salary and equity listed.", home: "https://wellfound.com/jobs" },
  { name: "Handshake", note: "Internships and new-grad roles through your university.", home: "https://joinhandshake.com/" },
];

/** Search keywords for each role on job boards (titles employers actually use). */
export const ROLE_KEYWORDS: Record<string, string> = {
  "data-analyst": "data analyst",
  "bi-analyst": "business intelligence analyst",
  "analytics-engineer": "analytics engineer",
  "product-analyst": "product analyst",
  "data-scientist": "data scientist",
  "data-engineer": "data engineer",
  "ml-engineer": "machine learning engineer",
  "ai-engineer": "AI engineer",
};

export interface Destination { name: string; url: string; note: string }

export const HELPFUL: { title: string; items: Destination[] }[] = [
  {
    title: "Research pay",
    items: [
      { name: "Levels.fyi", url: "https://www.levels.fyi/", note: "Self-reported compensation by company and level." },
      { name: "Glassdoor salaries", url: "https://www.glassdoor.com/Salaries/index.htm", note: "Salary ranges and company reviews." },
      { name: "BLS Occupational Outlook", url: "https://www.bls.gov/ooh/math/data-scientists.htm", note: "Official U.S. pay and job-growth data." },
    ],
  },
  {
    title: "Show your work",
    items: [
      { name: "GitHub", url: "https://github.com/", note: "Host code and project write-ups recruiters can read." },
      { name: "Kaggle", url: "https://www.kaggle.com/", note: "Datasets, notebooks and competitions for practice projects." },
      { name: "Tableau Public", url: "https://public.tableau.com/", note: "Publish dashboards to a public portfolio for free." },
    ],
  },
  {
    title: "Meet people",
    items: [
      { name: "Meetup: data science", url: "https://www.meetup.com/topics/data-science/", note: "Local and online data meetups." },
      { name: "Eventbrite: data science events", url: "https://www.eventbrite.com/d/online/data-science/", note: "Webinars, workshops and conferences." },
      { name: "LinkedIn", url: "https://www.linkedin.com/", note: "Follow companies and reach out to people in roles you want." },
    ],
  },
];
