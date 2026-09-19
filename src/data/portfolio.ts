// ============================================================
// Portfolio Data — Source of Truth
// All content sourced strictly from Shantinath Patil's resume.
// DO NOT add invented metrics, stats, or unsupported claims.
// ============================================================

export const personal = {
  name: "Shantinath Patil",
  title: "AI Engineer",
  taglines: [
    "Building Intelligent Applications",
    "Machine Learning & Deep Learning",
    "Generative AI & RAG Systems",
    "NLP & LLM Applications",
  ],
  bio: "Aspiring AI Engineer with hands-on experience building and deploying end-to-end AI applications. Skilled across the full spectrum of modern AI — from classical Machine Learning and Deep Learning to cutting-edge Generative AI, Retrieval-Augmented Generation, and NLP-driven systems. Passionate about turning complex data into intelligent, production-ready solutions.",
  location: "Greater Bengaluru Area",
  email: "patilsammed188@gmail.com",
  phone: "9380861446",
  github: "https://github.com/Shantinathh",
  linkedin: "https://www.linkedin.com/in/shantinath-patil-8a7b842b3/",
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
  profilePhoto: `${import.meta.env.BASE_URL}profile.jpg`,
};

export const skills = [
  {
    category: "Programming",
    icon: "Code2",
    items: [
      { name: "Python", description: "Primary language for all AI/ML development" },
      { name: "C Programming", description: "Foundational systems programming" },
    ],
  },
  {
    category: "ML / Data Science",
    icon: "BarChart3",
    items: [
      { name: "Machine Learning", description: "Supervised & unsupervised learning models" },
      { name: "Data Preprocessing", description: "Cleaning, transforming, and preparing data" },
      { name: "EDA", description: "Exploratory Data Analysis for insight discovery" },
      { name: "Feature Engineering", description: "Crafting meaningful model inputs" },
      { name: "Model Evaluation", description: "Cross-validation, metrics, and performance tuning" },
      { name: "NumPy", description: "Numerical computing and array operations" },
      { name: "Pandas", description: "Data manipulation and analysis" },
      { name: "Scikit-learn", description: "ML algorithms and pipelines" },
      { name: "Matplotlib", description: "Data visualization and plotting" },
      { name: "Seaborn", description: "Statistical data visualization" },
    ],
  },
  {
    category: "AI / NLP",
    icon: "Brain",
    items: [
      { name: "Deep Learning", description: "Neural networks and model architecture" },
      { name: "NLP", description: "Natural Language Processing techniques" },
      { name: "Generative AI", description: "Building applications with generative models" },
      { name: "RAG", description: "Retrieval-Augmented Generation pipelines" },
    ],
  },
  {
    category: "GenAI / LLM Ecosystem",
    icon: "Sparkles",
    items: [
      { name: "LangChain", description: "LLM application framework and chains" },
      { name: "Hugging Face", description: "Transformers, models, and datasets" },
    ],
  },
  {
    category: "App Development",
    icon: "Layers",
    items: [
      { name: "FastAPI", description: "High-performance Python API framework" },
      { name: "Streamlit", description: "Rapid ML web app development" },
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    items: [
      { name: "MySQL", description: "Relational database management" },
      { name: "MongoDB", description: "NoSQL document database" },
      { name: "ChromaDB", description: "Vector database for embeddings and RAG" },
    ],
  },
  {
    category: "Developer Tools",
    icon: "Wrench",
    items: [
      { name: "Git", description: "Version control and collaboration" },
      { name: "GitHub", description: "Repository hosting and open-source" },
      { name: "Jupyter Notebook", description: "Interactive ML experimentation" },
      { name: "Google Colab", description: "Cloud-based GPU notebook environment" },
      { name: "VS Code", description: "Primary development environment" },
      { name: "Postman", description: "API testing and documentation" },
      { name: "MySQL Workbench", description: "Database design and management" },
    ],
  },
];

export const experience = [
  {
    id: "flyrank-ai",
    company: "FlyRank AI",
    role: "Machine Learning Intern",
    period: "Sep 2026 – Present",
    location: "Hybrid",
    type: "Internship",
    description:
      "Engaged in developing AI and data-driven solutions at FlyRank AI. Contributing to real-world projects while expanding expertise across Machine Learning, Deep Learning, and end-to-end intelligent systems.",
    skills: ["Machine Learning", "Deep Learning", "AI Solutions"],
    logo: "⚡",
    color: "#10b981",
  },
  {
    id: "aws-leader",
    company: "Amazon Web Services (AWS)",
    role: "AWS Student Builder Group Leader",
    period: "Sep 2026 – Present",
    location: "India · Remote",
    type: "Internship",
    description:
      "• Selected as an AWS Student Builder Group Leader to lead and support student-focused cloud learning initiatives.\n• Organizing technical sessions, workshops, and hands-on activities focused on AWS, AI/ML, and Generative AI.\n• Building a collaborative student community through peer learning, project development, and knowledge sharing.",
    skills: ["AWS", "AI/ML", "Generative AI", "Community Leadership"],
    logo: "☁️",
    color: "#f59e0b",
  },
  {
    id: "google-gemini",
    company: "Google Gemini",
    role: "Google Gemini Student Ambassador",
    period: "May 2026 – Present",
    location: "Karnataka, India · Remote",
    type: "Ambassador",
    description:
      "Represent and advocate for Google Gemini AI tools within the student community, driving program creation, workshops, and promoting AI literacy and adoption.",
    skills: ["Google Gemini", "Generative AI", "Program Creation", "AI Literacy"],
    logo: "🌟",
    color: "#4285F4",
  },
  {
    id: "iccc-intern",
    company: "ICCC Innovation and Incubation Center",
    role: "NLP Intern",
    period: "2024",
    location: "India",
    type: "Internship",
    description:
      "Developed an NLP-based chatbot applying natural language processing techniques to enable automated, context-aware conversational interactions.",
    skills: ["NLP", "Chatbots", "Python", "Conversational AI"],
    logo: "🤖",
    color: "#06b6d4",
  },
];

export const projects = [
  {
    id: "mental-health-signal",
    title: "Mental Health Signal",
    subtitle: "Student Wellness Analytics",
    description:
      "Trained a supervised ML model to predict student wellness scores from lifestyle and academic indicators and deployed it as a live web app.",
    flow: ["Student Data", "Feature Engineering", "ML Model", "Wellness Prediction", "Web App"],
    tags: ["Machine Learning", "Python", "Scikit-learn", "Streamlit", "EDA", "Data Preprocessing"],
    github: "https://github.com/Shantinathh/Mental-Health-Score-Predictor",
    demo: "https://mental-health-score-predictor-1-1ywi.onrender.com/",
    color: "#8b5cf6",
    accentColor: "#c4b5fd",
    icon: "🧠",
    category: "Machine Learning",
  },
  {
    id: "smart-clustering",
    title: "Smart Clustering System",
    subtitle: "Unsupervised Learning Explorer",
    description:
      "Built an interactive unsupervised learning application with dynamic visualization and parameter tuning in Streamlit for real-time clustering.",
    flow: ["Dataset Input", "Parameter Tuning", "Clustering Algorithm", "Real-time Visualization"],
    tags: ["Unsupervised Learning", "Scikit-learn", "Streamlit", "Matplotlib", "Python", "EDA"],
    github: "https://github.com/Shantinathh/smart_clustering_system",
    demo: "https://smart-clustering--system.streamlit.app/",
    color: "#0ea5e9",
    accentColor: "#7dd3fc",
    icon: "🔮",
    category: "Machine Learning",
  },
  {
    id: "ai-code-reviewer",
    title: "AI Code Reviewer",
    subtitle: "Generative AI Application",
    description:
      "Developed an AI-powered code review assistant leveraging Generative AI to analyze source code and provide automated, actionable feedback.",
    flow: ["Source Code", "AI Analysis", "Review Generation", "Actionable Feedback"],
    tags: ["Generative AI", "LLM", "Python", "FastAPI", "Streamlit"],
    github: "https://github.com/Shantinathh/AI_code_reviewer",
    demo: "#",
    color: "#f59e0b",
    accentColor: "#fcd34d",
    icon: "⚡",
    category: "Generative AI",
    featured: true,
  },
];

export const publication = {
  title: "Large Language Models Hallucinate and How Retrieval-Augmented Generation Mitigates It",
  journal: "IJRASET",
  volume: "Volume 14, Issue VIII",
  date: "August 2026",
  paperId: "IJRASET84752",
  url: "https://www.ijraset.com/best-journal/large-language-models-hallucinate-and-how-retrieval-augmented-generation-mitigates-it-886",
  abstract:
    "An academic study exploring the hallucination problem in Large Language Models and demonstrating how Retrieval-Augmented Generation (RAG) architectures ground model responses in verified external knowledge to improve factual reliability.",
  tags: ["LLMs", "RAG", "NLP", "Generative AI", "Hallucination"],
};

export const education = {
  institution: "Bahubali College of Engineering, Shravanabelagola",
  degree: "Bachelor of Engineering (BE)",
  field: "Artificial Intelligence and Machine Learning",
  period: "Jan 2023 – Dec 2027",
  cgpa: "8.80",
};

export const hackathons = [
  {
    name: "C3 Hackathon 2024",
    venue: "BCE Shravanabelagola",
    year: "2024",
  },
  {
    name: "C3 Hackathon 2026",
    venue: "BCE Shravanabelagola",
    year: "2026",
  },
  {
    name: "Techathon 1.0",
    venue: "BGMIT Mudhol",
    year: "2026",
  },
];

export const certifications = [
  {
    name: "AI/ML Certification",
    issuer: "Apna College",
    year: "2026",
    icon: "🤖",
    color: "#8b5cf6",
  },
  {
    name: "Geo Data Sharing and Cybersecurity",
    issuer: "ISRO",
    year: "",
    icon: "🛰️",
    color: "#0ea5e9",
  },
  {
    name: "Certified LLM Security Professional",
    issuer: "",
    year: "",
    icon: "🔐",
    color: "#f59e0b",
  },
  {
    name: "5-Day AI Agents Intensive Course",
    issuer: "Google",
    year: "",
    icon: "🌟",
    color: "#10b981",
  },
];

export const pipeline = [
  {
    step: "Data",
    icon: "Database",
    description: "Raw structured and unstructured data collection from diverse sources",
  },
  {
    step: "Preprocessing",
    icon: "Filter",
    description: "Cleaning, normalization, tokenization, and feature engineering",
  },
  {
    step: "ML / Deep Learning",
    icon: "BarChart3",
    description: "Training supervised and unsupervised models using Scikit-learn and neural networks",
  },
  {
    step: "NLP / LLM",
    icon: "MessageSquare",
    description: "Natural language understanding using transformers and Hugging Face models",
  },
  {
    step: "RAG / Generative AI",
    icon: "Sparkles",
    description: "Retrieval-Augmented Generation with ChromaDB, LangChain, and generative models",
  },
  {
    step: "API / Application",
    icon: "Layers",
    description: "Deploying intelligent systems via FastAPI and Streamlit interfaces",
  },
  {
    step: "Deployment",
    icon: "Rocket",
    description: "Live web applications accessible to end users",
  },
];
