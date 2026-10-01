import type { SkillId } from "./skills.ts";

export type ResourceType = "Course" | "Tutorial" | "Book" | "Practice" | "Tool" | "Video" | "Article" | "Community" | "Jobs" | "Reference";
export type Cost = "Free" | "Freemium" | "Paid";
export type Level = "Beginner" | "Intermediate" | "Advanced";

export interface Resource {
  id: string;
  title: string;
  url: string;
  provider: string;
  type: ResourceType;
  cost: Cost;
  level: Level;
  skills: SkillId[];
  note: string;
}

export const RESOURCES: Resource[] = [
  // SQL
  { id: "sqlbolt", title: "SQLBolt", url: "https://sqlbolt.com/", provider: "SQLBolt", type: "Tutorial", cost: "Free", level: "Beginner", skills: ["sql"], note: "Short interactive lessons that run in the browser. The fastest way to start SQL." },
  { id: "mode-sql", title: "SQL Tutorial for Data Analysis", url: "https://mode.com/sql-tutorial/", provider: "Mode", type: "Tutorial", cost: "Free", level: "Intermediate", skills: ["sql"], note: "Analysis-focused SQL from basics to window functions." },
  { id: "datalemur", title: "DataLemur SQL interview questions", url: "https://datalemur.com/", provider: "DataLemur", type: "Practice", cost: "Freemium", level: "Intermediate", skills: ["sql", "stats"], note: "Real SQL and statistics interview questions from tech companies." },
  { id: "stratascratch", title: "StrataScratch", url: "https://www.stratascratch.com/", provider: "StrataScratch", type: "Practice", cost: "Freemium", level: "Intermediate", skills: ["sql", "python"], note: "Interview-style SQL and Python problems on realistic datasets." },
  // Python
  { id: "python-tutorial", title: "The Python Tutorial", url: "https://docs.python.org/3/tutorial/", provider: "Python.org", type: "Tutorial", cost: "Free", level: "Beginner", skills: ["python"], note: "The official introduction to the language." },
  { id: "pandas-getting-started", title: "pandas: Getting started", url: "https://pandas.pydata.org/docs/getting_started/index.html", provider: "pandas", type: "Tutorial", cost: "Free", level: "Beginner", skills: ["python"], note: "Official tutorials covering the operations you'll use daily." },
  { id: "kaggle-learn", title: "Kaggle Learn", url: "https://www.kaggle.com/learn", provider: "Kaggle", type: "Course", cost: "Free", level: "Beginner", skills: ["python", "sql", "ml", "viz"], note: "Bite-size hands-on courses: Python, pandas, SQL, visualization and ML." },
  // Statistics
  { id: "khan-stats", title: "Statistics and probability", url: "https://www.khanacademy.org/math/statistics-probability", provider: "Khan Academy", type: "Course", cost: "Free", level: "Beginner", skills: ["stats"], note: "Clear foundations with practice exercises." },
  { id: "openintro-stats", title: "OpenIntro Statistics", url: "https://www.openintro.org/book/os/", provider: "OpenIntro", type: "Book", cost: "Free", level: "Beginner", skills: ["stats", "experiment"], note: "A free, widely used introductory statistics textbook." },
  { id: "statquest", title: "StatQuest", url: "https://www.youtube.com/@statquest", provider: "Josh Starmer", type: "Video", cost: "Free", level: "Beginner", skills: ["stats", "ml", "dl"], note: "Friendly visual explanations of statistics and ML concepts." },
  { id: "islp", title: "An Introduction to Statistical Learning (Python edition)", url: "https://www.statlearning.com/", provider: "James, Witten, Hastie, Tibshirani, Taylor", type: "Book", cost: "Free", level: "Intermediate", skills: ["stats", "ml"], note: "The standard applied introduction to statistical learning, free online." },
  // Visualization & BI
  { id: "storytelling-with-data", title: "Storytelling with Data", url: "https://www.storytellingwithdata.com/books", provider: "Cole Nussbaumer Knaflic", type: "Book", cost: "Paid", level: "Beginner", skills: ["viz", "communication"], note: "How to design charts that communicate one clear message." },
  { id: "tableau-public", title: "Tableau Public", url: "https://public.tableau.com/", provider: "Tableau", type: "Tool", cost: "Free", level: "Beginner", skills: ["bi", "viz"], note: "Free Tableau for public portfolios, plus a gallery to learn from." },
  { id: "powerbi-learn", title: "Power BI training", url: "https://learn.microsoft.com/en-us/training/powerplatform/power-bi", provider: "Microsoft Learn", type: "Course", cost: "Free", level: "Beginner", skills: ["bi", "modeling"], note: "Official learning paths, including PL-300 certification prep." },
  // Engineering
  { id: "dbt-learn", title: "dbt Learn", url: "https://learn.getdbt.com/", provider: "dbt Labs", type: "Course", cost: "Free", level: "Intermediate", skills: ["modeling", "pipelines", "sql"], note: "Official courses on building tested, documented data models." },
  { id: "kimball", title: "The Data Warehouse Toolkit", url: "https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/books/data-warehouse-dw-toolkit/", provider: "Ralph Kimball & Margy Ross", type: "Book", cost: "Paid", level: "Intermediate", skills: ["modeling"], note: "The classic reference on dimensional modeling." },
  { id: "de-zoomcamp", title: "Data Engineering Zoomcamp", url: "https://github.com/DataTalksClub/data-engineering-zoomcamp", provider: "DataTalks.Club", type: "Course", cost: "Free", level: "Intermediate", skills: ["pipelines", "cloud", "modeling"], note: "A free project-based course: Docker, orchestration, warehouses, Spark and streaming." },
  { id: "ddia", title: "Designing Data-Intensive Applications", url: "https://dataintensive.net/", provider: "Martin Kleppmann", type: "Book", cost: "Paid", level: "Advanced", skills: ["pipelines", "swe"], note: "The deep reference for how data systems work." },
  { id: "missing-semester", title: "The Missing Semester of Your CS Education", url: "https://missing.csail.mit.edu/", provider: "MIT", type: "Course", cost: "Free", level: "Beginner", skills: ["swe"], note: "Shell, Git, debugging and the tools no one teaches you." },
  { id: "git-book", title: "Pro Git", url: "https://git-scm.com/book/en/v2", provider: "Scott Chacon & Ben Straub", type: "Book", cost: "Free", level: "Beginner", skills: ["swe"], note: "The free official book on Git." },
  // ML & AI
  { id: "ml-specialization", title: "Machine Learning Specialization", url: "https://www.coursera.org/specializations/machine-learning-introduction", provider: "DeepLearning.AI & Stanford (Coursera)", type: "Course", cost: "Freemium", level: "Beginner", skills: ["ml"], note: "Andrew Ng's foundational ML course; free to audit." },
  { id: "ml-zoomcamp", title: "Machine Learning Zoomcamp", url: "https://github.com/DataTalksClub/machine-learning-zoomcamp", provider: "DataTalks.Club", type: "Course", cost: "Free", level: "Intermediate", skills: ["ml", "swe"], note: "Practical ML through to deployment." },
  { id: "made-with-ml", title: "Made With ML", url: "https://madewithml.com/", provider: "Goku Mohandas", type: "Course", cost: "Free", level: "Intermediate", skills: ["ml", "swe"], note: "Production ML: testing, reproducibility and MLOps." },
  { id: "fastai", title: "Practical Deep Learning for Coders", url: "https://course.fast.ai/", provider: "fast.ai", type: "Course", cost: "Free", level: "Intermediate", skills: ["dl", "ml"], note: "Top-down, code-first deep learning." },
  { id: "hf-llm-course", title: "Hugging Face LLM Course", url: "https://huggingface.co/learn/llm-course", provider: "Hugging Face", type: "Course", cost: "Free", level: "Intermediate", skills: ["dl"], note: "Transformers, fine-tuning and building with open models." },
  // Experimentation & business
  { id: "trustworthy-experiments", title: "Trustworthy Online Controlled Experiments", url: "https://experimentguide.com/", provider: "Kohavi, Tang & Xu", type: "Book", cost: "Paid", level: "Intermediate", skills: ["experiment", "stats"], note: "The practical guide to A/B testing at real companies." },
  { id: "ace-ds-interview", title: "Ace the Data Science Interview", url: "https://www.acethedatascienceinterview.com/", provider: "Nick Singh & Kevin Huo", type: "Book", cost: "Paid", level: "Intermediate", skills: ["business", "stats", "sql"], note: "Interview prep covering statistics, SQL, ML and product sense." },
  // Certificates & platforms (from the original site)
  { id: "google-da-cert", title: "Google Data Analytics Certificate", url: "https://www.coursera.org/professional-certificates/google-data-analytics", provider: "Google (Coursera)", type: "Course", cost: "Paid", level: "Beginner", skills: ["spreadsheets", "sql", "viz"], note: "A structured beginner path into data analysis." },
  { id: "ibm-ds-cert", title: "IBM Data Science Professional Certificate", url: "https://www.coursera.org/professional-certificates/ibm-data-science", provider: "IBM (Coursera)", type: "Course", cost: "Paid", level: "Beginner", skills: ["python", "sql", "ml"], note: "A broad beginner program covering Python, SQL and introductory ML." },
  { id: "datacamp", title: "DataCamp courses", url: "https://www.datacamp.com/courses-all", provider: "DataCamp", type: "Course", cost: "Freemium", level: "Beginner", skills: ["python", "sql", "viz"], note: "Interactive in-browser courses across data skills." },
  { id: "linkedin-learning", title: "LinkedIn Learning: Data Science", url: "https://www.linkedin.com/learning/topics/data-science", provider: "LinkedIn", type: "Course", cost: "Paid", level: "Beginner", skills: ["python", "stats", "viz"], note: "Video courses; often free through public libraries and universities." },
  // Career advice, jobs and community (from the original site)
  { id: "tds-advice", title: "My honest advice for someone who wants to become a data scientist", url: "https://towardsdatascience.com/my-honest-advice-for-someone-who-wants-to-become-a-data-scientist-1ecc018fb0b2", provider: "Towards Data Science", type: "Article", cost: "Free", level: "Beginner", skills: ["communication"], note: "Candid career advice for newcomers." },
  { id: "tds-networking", title: "How to network as a data scientist", url: "https://towardsdatascience.com/how-to-network-as-a-data-scientist-12fd3ed8d176", provider: "Towards Data Science", type: "Article", cost: "Free", level: "Beginner", skills: ["communication"], note: "Practical networking strategies." },
  { id: "datacamp-resume", title: "Tips to build your data scientist resume", url: "https://www.datacamp.com/blog/tips-to-build-your-data-scientist-resume", provider: "DataCamp", type: "Article", cost: "Free", level: "Beginner", skills: ["communication"], note: "Resume structure and what hiring managers look for." },
  { id: "bls-ooh-ds", title: "Occupational Outlook Handbook: Data Scientists", url: "https://www.bls.gov/ooh/math/data-scientists.htm", provider: "U.S. Bureau of Labor Statistics", type: "Reference", cost: "Free", level: "Beginner", skills: ["business"], note: "Official pay, job outlook and education data." },
  { id: "builtin-jobs", title: "Built In: data science jobs", url: "https://builtin.com/data-science/data-science-jobs", provider: "Built In", type: "Jobs", cost: "Free", level: "Beginner", skills: [], note: "Job listings and descriptions across data roles." },
  { id: "indeed-jobs", title: "Indeed: data scientist jobs", url: "https://www.indeed.com/q-data-scientist-jobs.html", provider: "Indeed", type: "Jobs", cost: "Free", level: "Beginner", skills: [], note: "Broad job search; change the keyword to any role." },
  { id: "eventbrite", title: "Data science events", url: "https://www.eventbrite.com/d/online/data-science/", provider: "Eventbrite", type: "Community", cost: "Freemium", level: "Beginner", skills: ["communication"], note: "Online meetups, webinars and conferences. Switch the location to find local events." },
  { id: "dsc", title: "Data Science Central", url: "https://www.datasciencecentral.com/", provider: "Data Science Central", type: "Community", cost: "Free", level: "Beginner", skills: [], note: "Articles and community discussion on data science." },
  { id: "datafloq", title: "Datafloq", url: "https://datafloq.com/", provider: "Datafloq", type: "Community", cost: "Free", level: "Beginner", skills: [], note: "News and articles on data and emerging technology." },
];

export const RESOURCE_BY_ID = Object.fromEntries(RESOURCES.map((r) => [r.id, r])) as Record<string, Resource>;

/** Company career pages from the original site, kept as plain text links. */
export const COMPANY_CAREERS = [
  { name: "Microsoft", url: "https://careers.microsoft.com/" },
  { name: "NVIDIA", url: "https://www.nvidia.com/en-us/about-nvidia/careers/" },
  { name: "Google", url: "https://www.google.com/about/careers/applications/" },
  { name: "Meta", url: "https://www.metacareers.com/" },
  { name: "Oracle", url: "https://www.oracle.com/careers/" },
  { name: "Airbnb", url: "https://careers.airbnb.com/" },
];
