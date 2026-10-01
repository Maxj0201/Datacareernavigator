import type { Dimension } from "./roles.ts";

export interface QuizOption {
  text: string;
  points: Partial<Record<Dimension, number>>;
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  options: QuizOption[];
}

// Interest quiz. Each answer adds points to one or more interest dimensions;
// roles are then ranked by how closely their interest profile matches.
export const QUIZ: QuizQuestion[] = [
  {
    id: "afternoon",
    prompt: "You have a free afternoon at work. Which task sounds best?",
    options: [
      { text: "Digging into a messy dataset to find out why sales dropped", points: { analyze: 2, statistics: 1 } },
      { text: "Building a dashboard leaders will open every Monday", points: { visualize: 2, communicate: 1 } },
      { text: "Automating a pipeline so clean data arrives every morning", points: { engineering: 2, software: 1 } },
      { text: "Training a model that predicts which customers will leave", points: { ml: 2, statistics: 1 } },
    ],
  },
  {
    id: "proud",
    prompt: "Which result would make you proudest?",
    options: [
      { text: "My recommendation changed a product decision", points: { product: 2, communicate: 1 } },
      { text: "A system I built handles millions of records without breaking", points: { engineering: 2, software: 1 } },
      { text: "My model clearly beat the old approach", points: { ml: 2, statistics: 1 } },
      { text: "One chart made a complicated story obvious to everyone", points: { visualize: 2, communicate: 1 } },
    ],
  },
  {
    id: "code",
    prompt: "How do you feel about writing code?",
    options: [
      { text: "I'd rather use SQL and visual tools than write programs", points: { visualize: 1, analyze: 1 } },
      { text: "Scripts are great when they help me answer a question", points: { analyze: 1, statistics: 1 } },
      { text: "I enjoy building real software: tests, versions, deployments", points: { software: 3 } },
      { text: "I like code that connects systems and moves data around", points: { engineering: 2, software: 1 } },
    ],
  },
  {
    id: "math",
    prompt: "How do you feel about math and statistics?",
    options: [
      { text: "I love probability, inference and getting the uncertainty right", points: { statistics: 3 } },
      { text: "Comfortable with the basics; I care most about practical use", points: { analyze: 1, product: 1 } },
      { text: "I'm drawn to the linear algebra and optimization behind models", points: { ml: 2, statistics: 1 } },
      { text: "I'd prefer to keep it light", points: { visualize: 1, engineering: 1 } },
    ],
  },
  {
    id: "people",
    prompt: "Who would you most like to work with every day?",
    options: [
      { text: "Business leaders deciding where to invest", points: { communicate: 2, analyze: 1 } },
      { text: "Product managers and designers shaping an app", points: { product: 2, communicate: 1 } },
      { text: "Software and platform engineers", points: { software: 2, engineering: 1 } },
      { text: "Researchers and scientists", points: { statistics: 2, ml: 1 } },
    ],
  },
  {
    id: "question",
    prompt: "Which question excites you most?",
    options: [
      { text: "\"Did the new feature actually work?\"", points: { product: 2, statistics: 2 } },
      { text: "\"Why is the number on this dashboard wrong?\"", points: { engineering: 1, analyze: 1, visualize: 1 } },
      { text: "\"Can we predict demand for next month?\"", points: { ml: 2, statistics: 1 } },
      { text: "\"Can we build an assistant that answers support questions?\"", points: { software: 2, ml: 1, product: 1 } },
    ],
  },
  {
    id: "output",
    prompt: "What would you most like to hand over at the end of a project?",
    options: [
      { text: "A clear memo or presentation with a recommendation", points: { communicate: 2, analyze: 1 } },
      { text: "An interactive dashboard people use on their own", points: { visualize: 3 } },
      { text: "A working service or API in production", points: { software: 2, ml: 1 } },
      { text: "Reliable, documented data tables everyone builds on", points: { engineering: 3 } },
    ],
  },
  {
    id: "day",
    prompt: "How would you like to spend most of your day?",
    options: [
      { text: "Talking with people, then turning the conversation into analysis", points: { communicate: 2, product: 1 } },
      { text: "Long focus blocks building and coding", points: { software: 2, engineering: 1 } },
      { text: "Running experiments and reading research", points: { ml: 2, statistics: 1 } },
      { text: "Exploring data and answering questions as they come up", points: { analyze: 3 } },
    ],
  },
  {
    id: "ambiguity",
    prompt: "Which kind of problem do you prefer?",
    options: [
      { text: "Open-ended: \"something's off, find out what\"", points: { analyze: 2, product: 1 } },
      { text: "Clear requirements that I build to a high standard", points: { engineering: 2, software: 1 } },
      { text: "Well-defined with a measurable score to improve", points: { ml: 2, statistics: 1 } },
      { text: "Turning messy requests into a clean, repeatable report", points: { visualize: 2, communicate: 1 } },
    ],
  },
  {
    id: "tool",
    prompt: "Which tool would you most like to master?",
    options: [
      { text: "Tableau or Power BI", points: { visualize: 3 } },
      { text: "dbt and a cloud warehouse", points: { engineering: 2, analyze: 1 } },
      { text: "scikit-learn and PyTorch", points: { ml: 3 } },
      { text: "Airflow, Spark and Kafka", points: { engineering: 2, software: 1 } },
      { text: "LLM APIs and vector databases", points: { software: 2, ml: 1 } },
      { text: "An experimentation platform", points: { product: 2, statistics: 1 } },
    ],
  },
  {
    id: "draw",
    prompt: "What draws you to working with data?",
    options: [
      { text: "Understanding how people and customers behave", points: { product: 2, analyze: 1 } },
      { text: "The engineering challenge of scale and reliability", points: { engineering: 2, software: 1 } },
      { text: "Artificial intelligence and where it's heading", points: { ml: 2, software: 1 } },
      { text: "Helping organizations make better decisions", points: { communicate: 2, analyze: 1 } },
    ],
  },
  {
    id: "background",
    prompt: "Which background is closest to yours?",
    options: [
      { text: "Business, economics or social science", points: { communicate: 1, product: 1, analyze: 1 } },
      { text: "Math, statistics or physics", points: { statistics: 2, ml: 1 } },
      { text: "Computer science or engineering", points: { software: 2, engineering: 1 } },
      { text: "Something else, or I'm switching careers", points: { analyze: 1, visualize: 1 } },
    ],
  },
];
