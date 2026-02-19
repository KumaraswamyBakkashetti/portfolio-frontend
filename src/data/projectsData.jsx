export const PROJECTS = [
  {
    id: "tabulax",
    title: "TabulaX",
    subtitle: "LLM-Powered Multi-Class Table Transformation Framework",
    desc: `Designed an AI-driven framework to automatically transform heterogeneous tabular data using LLM-based classification. Implemented a classifier to route data into string, numerical, algorithmic, or general transformation pipelines. Generated human-interpretable transformation functions using LLMs, reducing manual scripting and transformation errors. Enabled seamless integration across CSV files, databases, APIs, and web tables with standardized outputs. Focused on scalability, automation, and correctness for enterprise-scale data integration workflows.`,
    tech: ["Python", "FastAPI", "LLMs", "Pandas", "NumPy", "React"]
  },
  {
    id: "agent-monitor",
    title: "Agent Monitor",
    subtitle: "Multi-Agent LLM Execution & Safety Pipeline",
    desc: `Built a multi-agent system where outputs flow agent-to-agent with validation at every stage. Implemented automated safety checks to inspect and sanitize intermediate agent outputs. Developed a frontend to visualize agent execution, transformations, and final responses. Improved observability and reliability of LLM workflows through modular agent design.`,
    tech: ["Python", "LLMs", "Frontend Visualization"]
  },
  {
    id: "ai-wiki-quiz",
    title: "AI Wiki Quiz Generator",
    subtitle: "FastAPI, PostgreSQL, LangChain",
    desc: `Developed a FastAPI service that generates quizzes automatically from Wikipedia articles using LangChain and PostgreSQL. Integrated dynamic content generation with persistent storage.`,
    tech: ["FastAPI", "PostgreSQL", "LangChain"],
    url: "https://ai-wiki-alpha.vercel.app/"
  }
];
