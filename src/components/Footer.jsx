import React from "react";
import FooterData from "../data/FooterData";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-5 pb-4 footer-lightgrey">
      <div className="container">
        <div className="row gy-4">
          {/* Brand */}
          <div className="col-12 col-sm-6 col-lg-3 text-center text-sm-start">
            <a href={FooterData.brand.link} aria-label="USHNIK home">
              <img
                src={FooterData.brand.logo}
                alt="USHNIK footer logo"
                className="img-fluid mb-3"
                style={{ maxWidth: "180px" }}
              />
            </a>
          </div>

          {/* Useful Links */}
          <div className="col-6 col-sm-6 col-lg-3">
            <h5 className="mb-3">Useful Links</h5>
            <ul className="list-unstyled footer-links">
              {FooterData.usefulLinks.map((item, index) => (
                <li key={index}>
                  {item.type === "internal" ? (
                    <Link
                      to={item.url}
                      className="text-white text-decoration-none"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.url}
                      className="text-white text-decoration-none"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="col-6 col-sm-6 col-lg-3">
            <h5 className="mb-3">All Courses</h5>
            <ul className="list-unstyled footer-links">
              {FooterData.courses.map((course, index) => (
                <li key={index}>
                  <a
                    href={course.url}
                    className="text-white text-decoration-none"
                  >
                    {course.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h5 className="mb-3">Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <strong>Phone:</strong>{" "}
                <a
                  href={FooterData.contact.phoneLink}
                  className="text-white text-decoration-none"
                >
                  {FooterData.contact.phone}
                </a>
              </li>

              <li className="mt-2">
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${FooterData.contact.email}`}
                  className="text-white text-decoration-none"
                >
                  {FooterData.contact.email}
                </a>
              </li>

              <li className="mt-2">
                <strong className="d-block mb-2">
                  {FooterData.contact.address.title}
                </strong>

                {FooterData.contact.address.lines.map((line, index) => (
                  <p key={index} className="mb-1">
                    {line}
                  </p>
                ))}
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="row mt-4">
          <div className="col text-center">
            <ul className="list-inline mb-0">
              {FooterData.social.map((social, index) => (
                <li key={index} className="list-inline-item mx-2">
                  <a href={social.url} target="_blank" rel="noreferrer">
                    <img
                      src={social.icon}
                      alt={social.alt}
                      className="social-icon-footer"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="row mt-3">
          <div className="col text-center">
            {FooterData.usefulLinks
              .filter((item) => item.label === "Terms & Conditions")
              .map((item, index) => (
                <Link
                  key={index}
                  to={item.url}
                  className="text-white text-decoration-none fw-medium"
                >
                  {item.label}
                </Link>
              ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-4">
          <div className="col text-center">
            <p className="mb-0">{FooterData.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
