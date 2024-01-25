const taskData = [
  {
    id: crypto.randomUUID(),
    title: "Integration API",
    description:
      "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
    tags: ["Web", "Python", "API"],
    priority: "High",
    isFavourite: false,
  },
  {
    id: crypto.randomUUID(),
    title: "API Data Synchronization with Python",
    description:
      "Implement a Python solution to synchronize data between an API and a third-party database securely, optimizing data exchange.",
    tags: ["Data", "Python", "API"],
    priority: "Low",
    isFavourite: true,
  },
  {
    id: crypto.randomUUID(),
    title: "Efficient Web API Connectivity in Python",
    description:
      "Develop a Python-based solution for connecting an API to a third-party database securely, focusing on efficient data handling and exchange.",
    tags: ["Web", "Python", "API"],
    priority: "High",
    isFavourite: false,
  },
];

function getTaskData() {
  return taskData;
}

export { getTaskData };
