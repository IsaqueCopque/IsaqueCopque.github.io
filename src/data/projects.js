const projects = [
  {
    title: "ProfileMind",
    subtitle: "AI-Powered RAG Platform",
    description:
      "An AI-powered portfolio assistant that answers natural language questions using Retrieval-Augmented Generation (RAG). The application indexes Markdown documents into vector embeddings, retrieves the most relevant context through semantic search, and generates grounded responses with Google Gemini. It was designed with a clean, modular architecture, making it easy to extend with new AI models, embedding providers, and document sources.",
    bulletPoints: [
      "Designed and implemented a complete Retrieval-Augmented Generation (RAG) pipeline.",
      "Built a document indexing system that transforms Markdown files into vector embeddings.",
      "Implemented semantic search using PostgreSQL and pgvector.",
      "Integrated Google Gemini for answer generation and Ollama for local embedding creation.",
      "Added request validation, rate limiting, and production-ready configuration management.",
      "Containerized the application with Docker and prepared it for cloud deployment.",
      "Applied clean architecture principles to create a modular and maintainable codebase."
    ],
    github: "https://github.com/IsaqueCopque/profile-mind",
    technologies: [
      "Java 21",
      "Spring Boot",
      "Spring AI",
      "REST API",
      "Docker",
      "PostgreSQL",
      "pgvector",
      "Google Gemini",
      "Ollama",
      "RAG",
      "LLM"
    ],
    architectureImage: "/project-imgs/profilemind-architecture.svg"
  },

  {
    title: "Integrated Smart Home Scene Recommender",
    subtitle: "Distributed AI & IoT Platform",
    description:
      "A distributed smart home platform built with a microservices architecture to explore AI-powered IoT automation through personalized recommendations. Developed as part of my master's research, the platform combines backend engineering, asynchronous communication, and machine learning to simulate intelligent smart home environments.",
    bulletPoints: [
      "Designed and implemented a microservices architecture using Spring Boot and Flask.",
      "Developed an AI-powered recommendation engine for personalized smart home scenes.",
      "Implemented asynchronous communication between services with RabbitMQ.",
      "Integrated PostgreSQL and MongoDB for transactional and recommendation data.",
      "Containerized every service using Docker.",
      "Simulated IoT devices to validate end-to-end recommendation workflows."
    ],
    github: "https://github.com/IsaqueCopque/ishsrec",
    technologies: [
      "Java",
      "Spring Boot",
      "Python",
      "Flask",
      "RabbitMQ",
      "Docker",
      "PostgreSQL",
      "MongoDB",
      "Microservices",
      "Machine Learning",
      "Recommender Systems",
      "IoT"
    ],
    architectureImage: "/project-imgs/ishsrec-architecture.svg"
  },

  {
    title: "EventIC",
    subtitle: "Academic Event Recommendation Platform",
    description:
      "A full-stack web application created to centralize academic and technology events while improving event discovery through personalized recommendations. As part of my undergraduate thesis, I designed and implemented the recommendation module, applying recommender system techniques to increase user engagement and content personalization.",
    bulletPoints: [
      "Developed frontend and backend features using Next.js, React, and TypeScript.",
      "Designed and implemented a personalized event recommendation module.",
      "Applied recommender system and information retrieval techniques.",
      "Contributed to the architecture of a centralized academic event platform."
    ],
    github: "https://github.com/IsaqueCopque/eventic",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Recommender Systems",
      "Web Development"
    ],
    architectureImage: "/project-imgs/eventic-architecture.png"
  },

  {
    title: "Mobile Time Tracker",
    subtitle: "Cross-Platform Productivity Application",
    description:
      "A cross-platform productivity application that helps users organize projects, manage tasks, and monitor work sessions through integrated time tracking, Pomodoro support, and productivity reports. The application focuses on providing a clean user experience for personal productivity management.",
    bulletPoints: [
      "Developed a cross-platform mobile application using Flutter and Dart.",
      "Implemented project and task management features.",
      "Built integrated timer and Pomodoro functionality.",
      "Created productivity reports and time allocation statistics.",
      "Designed an intuitive user interface focused on usability."
    ],
    github: "https://github.com/IsaqueCopque/mob-time-tracker",
    technologies: [
      "Flutter",
      "Dart",
      "Mobile Development",
      "Project Management",
    ],
    architectureImage: "/project-imgs/timetracker.png"
  }
];

export default projects;