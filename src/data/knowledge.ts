// Knowledge check. Based on the original site's 10-question skills quiz, with
// an outdated answer updated (Q10) and an explanation added to every question.

export interface KnowledgeQuestion {
  topic: "Python" | "Machine learning" | "Statistics" | "Deep learning";
  prompt: string;
  choices: string[];
  answer: number;
  explanation: string;
}

export const KNOWLEDGE: KnowledgeQuestion[] = [
  {
    topic: "Python",
    prompt: "Which Python library is primarily used for data manipulation?",
    choices: ["TensorFlow", "pandas", "Seaborn", "NumPy"],
    answer: 1,
    explanation: "pandas provides DataFrames for loading, cleaning, joining and reshaping tabular data. NumPy handles arrays, Seaborn plots, and TensorFlow trains neural networks.",
  },
  {
    topic: "Machine learning",
    prompt: "What is a confusion matrix used for?",
    choices: ["Measuring the accuracy of a regression model", "Comparing different regression models", "Evaluating classification model performance", "Optimizing hyperparameters"],
    answer: 2,
    explanation: "A confusion matrix counts true/false positives and negatives for a classifier. Precision, recall and accuracy are all derived from it.",
  },
  {
    topic: "Machine learning",
    prompt: "Which technique is used for dimensionality reduction?",
    choices: ["Linear regression", "PCA", "K-means", "Random forest"],
    answer: 1,
    explanation: "Principal component analysis (PCA) projects data onto fewer dimensions that capture most of the variance.",
  },
  {
    topic: "Statistics",
    prompt: "What does a p-value represent?",
    choices: ["The probability that the null hypothesis is true", "The probability of data at least this extreme, assuming the null hypothesis is true", "The significance level you chose", "The size of the effect"],
    answer: 1,
    explanation: "A p-value is computed assuming the null hypothesis is true. It is not the probability that the null is true, and it says nothing about effect size.",
  },
  {
    topic: "Machine learning",
    prompt: "Which metric is appropriate for evaluating a classification model?",
    choices: ["RMSE", "R-squared", "F1 score", "MAE"],
    answer: 2,
    explanation: "F1 is the harmonic mean of precision and recall. RMSE, R-squared and MAE are regression metrics.",
  },
  {
    topic: "Deep learning",
    prompt: "What is an epoch in deep learning?",
    choices: ["One full pass through the training dataset", "A single update to the weights", "A layer in a neural network", "None of the above"],
    answer: 0,
    explanation: "An epoch is one pass over all training examples. A single weight update happens per batch, so one epoch usually contains many updates.",
  },
  {
    topic: "Machine learning",
    prompt: "Which technique directly helps prevent overfitting?",
    choices: ["Feature engineering", "Batch normalization", "Regularization", "Normalization"],
    answer: 2,
    explanation: "Regularization (e.g. L1/L2 penalties) discourages overly complex models. Cross-validation and early stopping also help detect or limit overfitting.",
  },
  {
    topic: "Machine learning",
    prompt: "Which statement about K-means is correct?",
    choices: ["It is a supervised learning algorithm", "It requires choosing the number of clusters in advance", "It is used for regression problems", "None of the above"],
    answer: 1,
    explanation: "K-means is unsupervised and you must choose k up front, often with the elbow method or silhouette scores.",
  },
  {
    topic: "Machine learning",
    prompt: "What is a ROC curve mainly used for?",
    choices: ["Finding optimal hyperparameters", "Measuring regression performance", "Showing the trade-off between true-positive and false-positive rates", "Reducing dimensionality"],
    answer: 2,
    explanation: "A ROC curve plots the true-positive rate against the false-positive rate across thresholds. The area under it (AUC) summarizes ranking quality.",
  },
  {
    topic: "Deep learning",
    prompt: "Which architecture underlies most modern natural language processing models, including large language models?",
    choices: ["Random forest", "Convolutional neural network", "Transformer", "Support vector machine"],
    answer: 2,
    explanation: "Transformers, built on self-attention, replaced recurrent networks as the standard for language tasks and power today's large language models.",
  },
];
