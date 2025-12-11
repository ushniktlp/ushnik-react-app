import YT from "../images/youtube.png";
import FB from "../images/facebook.png";
import WA from "../images/whatsapp.png";
import IG from "../images/instagram.png";
import LIN from "../images/linkedin.png";

const TopHeader = () => {
  // Contact Information (Dynamic)
  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      label: "Hyderabad",
      href: "#hyderabad",
    },
    {
      icon: "fas fa-phone-alt",
      label: "+91 77029 01217",
      href: "https://wa.me/917702901217",
    },
    {
      icon: "fas fa-envelope",
      label: "info@ushnik.in",
      href: "mailto:info@ushnik.in",
    },
  ];

  // Social Icons (Dynamic)
  const socialLinks = [
    { img: YT, alt: "YouTube", href: "https://ushnik.in" },
    { img: FB, alt: "Facebook", href: "https://ushnik.in" },
    { img: WA, alt: "WhatsApp", href: "https://ushnik.in" },
    { img: IG, alt: "Instagram", href: "https://ushnik.in" },
    { img: LIN, alt: "LinkedIn", href: "https://ushnik.in" },
  ];

  return (
    <nav className="navbar navbar-expand-lg py-2 fixed-top shadow">
      <div className="container">
        <div className="d-flex w-100 justify-content-between align-items-center">
          {/* Left Section - Contact Info */}
          <div className="contact-info d-flex gap-3" style={{ color: "white" }}>
            {contactInfo.map((item, index) => (
              <span key={index}>
                <i className={`${item.icon} me-1`}></i>
                <a
                  href={item.href}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {item.label}
                </a>
              </span>
            ))}
          </div>

          {/* Right Section - Social Icons */}
          <div className="top-header-wrapper">
            <div className="social-icons d-flex gap-3">
              {socialLinks.map((icon, index) => (
                <a href={icon.href} key={index}>
                  <img
                    className="social-icon-header"
                    src={icon.img}
                    alt={icon.alt}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopHeader;
