import CERT from "../images/certificate.png";
import INTER from "../images/internship.png";
import PLACE from "../images/placement.png";

const ProgramsData = {
  /* =========================
     Programs Landing Page
     ========================= */
  overview: [
    {
      title: "Certificate Program",
      img: CERT,
      link: "/certificate",
    },
    {
      title: "Internship Program",
      img: INTER,
      link: "/internship",
    },
    {
      title: "Placement Program",
      img: PLACE,
      link: "/placement",
    },
  ],

  /* =========================
     Certificate Programs
     ========================= */
  certificates: {
    title: "Freshers",
    buttonClass: "btn-outline-primary",
    items: [
      { label: "UI/UX Developer", icon: "🎨", path: "/uiux" },
      { label: "AI & Machine Learning Program", icon: "🤖", path: "/aiml" },
      {
        label: "Python Full Stack Developer",
        icon: "🐍",
        path: "/pythonfullstack",
      },
      { label: "Python for AI and ML", icon: "🧠", path: "/pythonaiml" },
      {
        label: "Advanced Mathematics for Machine Learning",
        icon: "📊",
        path: "/mathsml",
      },
      { label: "MERN Stack Developer Program", icon: "💻", path: "/mern" },
      { label: "DevOps Program", icon: "⚙️", path: "/devops" },
      { label: "SOC Analyst Program", icon: "🛡️", path: "/socanalyst" },
      { label: "Digital Marketing", icon: "📈", path: "/digitalmarketing" },
    ],
  },

  /* =========================
     Internship Programs
     ========================= */
  internships: [
    {
      title: "Freshers",
      buttonClass: "btn-outline-success",
      items: [
        { label: "Digital Marketing", icon: "📈", path: "/digitalmarketing" },
        {
          label: "Python Full Stack Developer",
          icon: "🐍",
          path: "/pythonfullstack",
        },
        { label: "Python for AI and ML", icon: "🧠", path: "/pythonaiml" },
        { label: "MERN Stack Developer Program", icon: "💻", path: "/mern" },
      ],
    },
    {
      title: "2+ Years Experience",
      buttonClass: "btn-outline-primary",
      items: [
        { label: "Digital Marketing", icon: "📈", path: "/digitalmarketing" },
        {
          label: "Python Full Stack Developer",
          icon: "🐍",
          path: "/pythonfullstack",
        },
        { label: "Python for AI and ML", icon: "🧠", path: "/pythonaiml" },
        { label: "MERN Stack Developer Program", icon: "💻", path: "/mern" },
      ],
    },
  ],

  /* =========================
     Placement Programs
     ========================= */
  placements: [
    {
      title: "Freshers",
      buttonClass: "btn-outline-success",
      items: [{ label: "Digital Marketing", icon: "📈" }],
    },
    {
      title: "2+ Years Experience",
      buttonClass: "btn-outline-primary",
      items: [
        { label: "DevOps", icon: "⚙️", link: "devops.html" },
        { label: "Server Maintenance", icon: "🖥️" },
        { label: "Corporate Readiness", icon: "🏢" },
        { label: "SOC Analyst Program", icon: "🛡️" },
      ],
    },
    {
      title: "5+ Years Experience",
      buttonClass: "btn-outline-warning",
      items: [
        { label: "Project Management", icon: "📋" },
        { label: "Professional Communication & Soft Skills", icon: "💬" },
        { label: "SCRUM", icon: "🏃‍♂️" },
        { label: "User Journeys", icon: "🗺️" },
        { label: "Color Theory", icon: "🌈" },
        { label: "UI Components", icon: "🧩" },
        { label: "Mobile/Web Layouts", icon: "📱" },
      ],
    },
  ],
};

export default ProgramsData;
