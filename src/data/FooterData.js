import UshnikLogo from "../images/ushnik-logo.png";
import YT from "../images/youtube.png";
import FB from "../images/facebook.png";
import WA from "../images/whatsapp.png";
import IG from "../images/instagram.png";
import LIN from "../images/linkedin.png";

const FooterData = {
  brand: {
    logo: UshnikLogo,
    link: "https://ushnik.in",
  },

  usefulLinks: [
    { label: "Home", url: "https://ushnik.in" },
    { label: "About Us", url: "https://ushnik.in" },
    { label: "Enroll Now", url: "https://ushnik.in" },
    { label: "Refer & Earn", url: "https://ushnik.in" },
  ],

  courses: [
    { label: "UI/UX Developer", url: "/uiux" },
    { label: "AI & Machine Learning Program", url: "/aiml" },
    { label: "Python Full Stack Developer", url: "/python-fullstack" },
    { label: "Python for AI & ML", url: "/python-aiml" },
    { label: "Advanced Math for ML", url: "/maths-ml" },
    { label: "MERN Stack Developer", url: "/mern" },
    { label: "DevOps Program", url: "/devops" },
  ],

  contact: {
    phone: "+91 77029 01217",
    phoneLink: "tel:+917702901217",
    email: "info@ushnik.in",
    address: {
      title: "Corporate Office:",
      lines: [
        "4th Floor, Vamsiram Jyothi Imperial Building, Janardhan Hills",
        "Plot No. 189 - 198, Survey No. 50,",
        "Telecom Nagar, Near Gachibowli Flyover, Hyderabad, Telangana - 500032, India",
      ],
    },
  },

  social: [
    { icon: YT, url: "https://ushnik.in", alt: "YouTube" },
    { icon: FB, url: "https://ushnik.in", alt: "Facebook" },
    { icon: WA, url: "https://wa.me/917702901217", alt: "WhatsApp" },
    { icon: IG, url: "https://ushnik.in", alt: "Instagram" },
    { icon: LIN, url: "https://ushnik.in", alt: "LinkedIn" },
  ],

  copyright: "© Ushnik Technologies Pvt. Ltd. — All rights reserved.",
};

export default FooterData;
