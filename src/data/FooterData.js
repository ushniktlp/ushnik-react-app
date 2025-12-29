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
    { label: "Home", url: "/", type: "internal" },
    { label: "About Us", url: "/about", type: "internal" },
    { label: "Enroll Now", url: "https://ushnik.in", type: "external" },
    { label: "Refer & Earn", url: "https://ushnik.in", type: "external" },
    { label: "Terms & Conditions", url: "/terms", type: "internal" },
    { label: "Placement Consulting Program", url: "/pcp", type: "internal" },
  ],

  courses: [
    { label: "UI/UX Developer", url: "/courses/ui-ux" },
    {
      label: "AI & Machine Learning Program",
      url: "/courses/ai-machine-learning",
    },
    { label: "Python Full Stack Developer", url: "/courses/python-full-stack" },
    { label: "Python for AI & ML", url: "/courses/python-ai-ml" },
    { label: "Advanced Math for ML", url: "/courses/maths-ml" },
    { label: "MERN Stack Developer", url: "/courses/mern-stack" },
    { label: "DevOps Program", url: "/courses/dev-ops" },
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
