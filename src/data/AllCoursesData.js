// /src/data/AllCoursesData.js
import UIUX from "../images/uiux.jpg";
import AIML from "../images/aiml.jpg";
import PYTHONFS from "../images/pythondevops.jpg";
import PYTHONAIML from "../images/pythonaiml.jpg";
import MATHSML from "../images/mathsml.jpg";
import MERN from "../images/mern.jpg";
import DEVOPS from "../images/devops.jpg";
import SOC from "../images/socanalyst.jpg";
import DOTNET from "../images/DOTNET.png";
import PYGENAI from "../images/PYGENAI.png";

const AllCoursesData = {
  "ui-ux": {
    slug: "ui-ux",
    title: "UI/UX Developer Course",
    img: UIUX,
    description:
      "This program empowers you to design engaging, user-centric digital products that blend creativity with functionality. Learn how to craft seamless experiences using modern design tools and research-driven strategies.",
    takeaways: [
      "Understand the fundamentals of UI/UX design and design thinking.",
      "Create prototypes, wireframes, and mockups using Figma & Adobe XD.",
      "Learn usability testing, accessibility, and interaction design.",
      "Build a professional portfolio with real-world projects.",
    ],
    industrySkills:
      "Gain practical design experience through live case studies, team projects, and portfolio-based learning guided by industry experts.",
    careers: [
      { icon: "🎨", label: "UI/UX Designer" },
      { icon: "🔍", label: "UX Researcher" },
      { icon: "🖱️", label: "Interaction Designer" },
      { icon: "🖌️", label: "Visual Designer" },
    ],
    skills: [
      { icon: "🎨", label: "Figma" },
      { icon: "🧪", label: "Prototyping" },
      { icon: "💡", label: "Design Thinking" },
      { icon: "🗺️", label: "User Journeys" },
      { icon: "🌈", label: "Color Theory" },
      { icon: "🧩", label: "UI Components" },
    ],
    outcome: "Portfolio + 3 Complete UI/UX Projects.",
    registerLink: "/register/ui-ux",
  },

  "ai-machine-learning": {
    slug: "ai-machine-learning",
    title: "AI & Machine Learning Program",
    img: AIML,
    description:
      "An in-depth, hands-on program designed to help you master artificial intelligence and machine learning concepts, tools, and applications — from fundamentals to advanced model deployment.",
    takeaways: [
      "Learn supervised, unsupervised, and deep learning techniques.",
      "Gain expertise in Python, TensorFlow, and Scikit-learn.",
      "Work on real-world AI case studies and predictive models.",
      "Understand AI ethics, data pipelines, and model optimization.",
    ],
    industrySkills:
      "Through practical labs and applied learning, you’ll develop end-to-end AI project skills — making you industry-ready for data-driven roles.",
    careers: [
      { label: "Machine Learning Engineer" },
      { label: "AI Specialist" },
      { label: "Data Scientist" },
      { label: "Research Analyst" },
      { label: "AI Product Developer" },
    ],
    skills: [
      { label: "Python for AI" },
      { label: "Data Analysis" },
      { label: "Regression Models" },
      { label: "Classification Models" },
      { label: "Neural Networks" },
      { label: "CNNs" },
      { label: "NLP" },
      { label: "Reinforcement Learning" },
      { label: "Supervised & Unsupervised ML" },
      { label: "Regression & Classification Models" },
      { label: "Deep Learning Fundamentals" },
      { label: "NLP Techniques" },
      { label: "Reinforcement Learning Essentials" },
      { label: "Model Evaluation & Optimization" },
      { label: "MLOps & AI Workflow Automation" },
    ],
    outcome:
      "ML-ready mathematical foundation and hands-on experience with AI/ML projects.",
    registerLink: "/register/ai-ml",
  },

  "python-full-stack": {
    slug: "python-full-stack",
    title: "Python Full Stack Developer",
    img: PYTHONFS,
    description:
      "Become a versatile developer by mastering both front-end and back-end technologies with Python as the core language. Build dynamic, data-driven web applications from scratch.",
    technologies: [
      "Python",
      "Django / Flask",
      "HTML / CSS / JS",
      "APIs",
      "SQL / NoSQL",
      "Cloud Deployment",
    ],
    takeaways: [
      "Learn front-end (HTML, CSS, JS) and back-end (Flask/Django) development.",
      "Work with APIs, databases, and deployment tools.",
      "Build complete web projects with real-world use cases.",
      "Strengthen debugging, testing, and version control skills.",
    ],
    industrySkills:
      "Hands-on coding sessions and full-cycle development projects ensure you can design, develop, and deploy scalable web applications confidently.",
    careers: [
      { label: "Full Stack Developer" },
      { label: "Python Developer" },
      { label: "Web Developer" },
      { label: "Software Engineer" },
      { label: "Automation Engineer" },
    ],
    outcome:
      "Complete production-ready web application and hands-on portfolio projects.",
    registerLink: "/register/python-fullstack",
  },

  "python-ai-ml": {
    slug: "python-ai-ml",
    title: "Python for AI & ML Program",
    img: PYTHONAIML,
    description:
      "This focused program bridges your Python programming skills with core AI and ML concepts, preparing you to build intelligent systems and data-driven solutions.",
    technologies: [
      "Python",
      "Django/Flask",
      "HTML/CSS/JS",
      "APIs",
      "SQL/NoSQL",
      "Cloud Deployment",
    ],
    takeaways: [
      "Learn Python libraries: NumPy, Pandas, Matplotlib, Scikit-learn.",
      "Understand data preprocessing, visualization, and model training.",
      "Implement regression, classification, and clustering algorithms.",
      "Get exposure to real-world datasets and AI applications.",
    ],
    industrySkills:
      "Hands-on experience in using Python for analytics and AI ensures you can handle data-centric roles confidently and effectively.",
    careers: [
      { label: "Data Analyst" },
      { label: "Machine Learning Developer" },
      { label: "AI Programmer" },
      { label: "Data Engineer" },
    ],
    outcome: "Complete production-ready AI & ML projects.",
    registerLink: "/register/python-for-ai-ml",
  },

  // --- Newly Added Courses ---

  "maths-ml": {
    slug: "maths-ml",
    title: "Advanced Mathematics for ML",
    img: MATHSML,
    description:
      "Strengthen your foundation in the mathematical concepts that drive AI and ML. Learn how calculus, linear algebra, probability, and statistics form the backbone of intelligent systems.",
    technologies: [
      "Python",
      "Django/Flask",
      "HTML/CSS/JS",
      "APIs",
      "SQL/NoSQL",
      "Cloud Deployment",
    ],
    takeaways: [
      "Understand linear algebra, vectors, and matrices in ML contexts.",
      "Grasp calculus and optimization fundamentals for model training.",
      "Explore probability, statistics, and distributions.",
      "Learn practical applications through Python-based exercises.",
    ],
    industrySkills:
      "By mastering the math behind AI, you’ll enhance your analytical thinking and be ready for complex ML model design and interpretation.",
    careers: [
      { label: "Data Scientist" },
      { label: "ML Researcher" },
      { label: "Quantitative Analyst" },
      { label: "AI Engineer" },
    ],
    outcome: "ML-ready mathematical foundation.",
    registerLink: "/register/maths-ml",
  },

  "mern-stack": {
    slug: "mern-stack",
    title: "MERN Full Stack Developer Program",
    img: MERN,
    description:
      "Learn to develop powerful, full-stack web applications using MongoDB, Express.js, React, and Node.js — the most in-demand stack for modern web development.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "HTML5, CSS3, JS (ES6+)",
      "React Components & Hooks",
      "Redux / Context API",
      "Node.js & Express",
      "REST APIs & JWT Auth",
      "MongoDB & Mongoose",
      "Full Stack Integration",
      "Deployment (Vercel/Netlify/Render)",
      "Git & GitHub",
      "API Testing with Postman",
    ],
    takeaways: [
      "Build responsive, single-page applications using React.",
      "Create robust back-end APIs with Node.js and Express.",
      "Integrate MongoDB for data management.",
      "Deploy live projects and manage cloud hosting environments.",
    ],
    industrySkills:
      "Project-based learning ensures you gain hands-on coding expertise to confidently handle front-end, back-end, and database development.",
    careers: [
      { label: "MERN Stack Developer" },
      { label: "Front-End Engineer" },
      { label: "Back-End Developer" },
      { label: "Web Application Developer" },
    ],
    outcome: "A full-featured web application + Deployment.",
    registerLink: "/register/mern",
  },

  "dev-ops": {
    slug: "dev-ops",
    title: "DevOps Program",
    img: DEVOPS,
    description:
      "Master the DevOps culture of continuous integration, deployment, and delivery. Learn the essential tools and practices that bridge development and operations for faster, more reliable software delivery.",
    technologies: [
      "Python",
      "Django/Flask",
      "HTML/CSS/JS",
      "APIs",
      "SQL/NoSQL",
      "Cloud Deployment",
    ],
    takeaways: [
      "Learn CI/CD, containerization, and cloud deployment.",
      "Hands-on practice with Docker, Jenkins, Git, and Kubernetes.",
      "Understand infrastructure automation and monitoring.",
      "Work on real-time DevOps pipelines and project simulations.",
    ],
    industrySkills:
      "Through real-world DevOps project exposure, you’ll gain the confidence to automate, optimize, and manage software delivery efficiently.",
    careers: [
      { label: "DevOps Engineer" },
      { label: "Cloud Engineer" },
      { label: "Build & Release Engineer" },
      { label: "Site Reliability Engineer" },
    ],
    outcome: "Hands-on DevOps pipelines + cloud deployment.",
    registerLink: "/register/devops",
  },

  "soc-analyst": {
    slug: "soc-analyst",
    title: "SOC Analyst Program",
    img: SOC,
    description:
      "This program equips you with the skills to detect, analyze, and respond to cyber threats in real time. Learn how to monitor security events, investigate incidents, and safeguard digital environments using industry-standard tools and structured methodologies.",
    takeaways: [
      "Master Threat Detection – Identify suspicious activities, anomalies, and potential cyber attacks through continuous monitoring.",
      "Hands-On Incident Response – Investigate breaches, contain threats, and document incident workflows.",
      "Proficiency in SOC Tools – Work with SIEM platforms, endpoint security solutions, threat intelligence feeds, and log analysis systems.",
      "Strong Analytical & Reporting Skills – Interpret security data, create incident reports, and communicate findings effectively.",
      "Understanding of Security Frameworks – Learn MITRE ATT&CK, NIST, and ISO frameworks to structure defense strategies.",
    ],
    industrySkills:
      "Guaranteed Interview-Ready SOC Training. USHNIK bridges the gap between industry expectations and your skills. Master SIEM, Incident Response, Threat Intelligence & more.",
    careers: [
      { label: "Digital Forensics Analyst" },
      { label: "Cybersecurity Engineer" },
      { label: "Security Consultant" },
      { label: "Threat Hunter" },
    ],
    skills: [
      { label: "SIEM Proficiency" },
      { label: "Security Frameworks" },
      { label: "Network Security Fundamentals" },
      { label: "Endpoint Security Tools" },
      { label: "Threat Intelligence Understanding" },
      { label: "Log Analysis Skills" },
      { label: "Incident Response Knowledge" },
    ],
    outcome:
      "Advance your expertise in threat detection, SIEM fine-tuning, and complex incident handling to operate at a senior SOC analyst level. Strengthen your ability to conduct deep investigations, optimize playbooks, and communicate RCA and security insights to leadership teams.",
    registerLink: "/register/soc-analyst",
  },

  "dot-net": {
    slug: "dot-net",
    title: ".Net Program",
    img: DOTNET,
    description: "",
    highlevel: [
      "Advanced C# & .NET Core",
      "Enterprise-grade API development",
      "Microservices & cloud-ready backend",
      "Security, performance & scalability",
      "Full-stack integration",
      "DevOps, CI/CD & deployment",
      "Real-time apps (SignalR)",
      "Capstone + interview readiness",
    ],
    registerLink: "/register/dot-net",
  },

  "python-gen-ai": {
    slug: "python-gen-ai",
    title: "Python and Gen AI Crash Course",
    img: PYGENAI,
    focus: [
      "Practical, job-oriented AI training",
      "Python fundamentals for AI",
      "Generative AI & LLM basics",
      "Build AI chatbots & PDF Q&A bots",
      "Web-based AI applications",
      "Weekly hands-on assignments",
    ],

    highlights: [
      "Training + internship",
      "Hands-on project work",
      "Build real-world chatbot applications",
      "Industry-ready skills",
      "Course and Intenrship Certification.(If enrolled for internship program)",
    ],
    registerLink: "/register/python-gen-ai",
  },
};

export default AllCoursesData;
