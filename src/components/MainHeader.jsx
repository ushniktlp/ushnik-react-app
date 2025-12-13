import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import UshnikLogo from "../images/ushnik-logo.png";
import Collapse from "bootstrap/js/dist/collapse";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "All Courses", path: "/allcourses" },
  { label: "Explore Programs", path: "/programs" },
  { label: "Course Schedule", path: "/schedule" },
  { label: "Contact Us", path: "/contact" },
  { label: "Placements", path: "/placements" },
];

const MainHeader = () => {
  const navRef = useRef(null);
  const collapseInstanceRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      collapseInstanceRef.current = new Collapse(navRef.current, {
        toggle: false,
      });
    }
  }, []);

  const handleNavClick = () => {
    if (collapseInstanceRef.current) {
      collapseInstanceRef.current.hide();
    }
  };

  return (
    <nav
      style={{ top: "40px" }}
      className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow"
    >
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img style={{ width: "200px" }} src={UshnikLogo} alt="Ushnik Logo" />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Dynamic Menu */}
        <div
          ref={navRef}
          className="collapse navbar-collapse justify-content-center"
          id="mainNavbar"
        >
          <ul className="navbar-nav gap-4">
            {navLinks.map((item, index) => (
              <li key={index} className="nav-item">
                <Link
                  className="nav-link nav-link-dark"
                  to={item.path}
                  onClick={handleNavClick}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;
