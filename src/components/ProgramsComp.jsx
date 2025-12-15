import React from "react";
import { Link } from "react-router-dom";
import ProgramsData from "../data/ProgramsData";

const ProgramsSection = ({ type }) => {
  let sectionData = [];
  let buttonClass = "btn-outline-primary";
  let sectionTitle = "";

  switch (type) {
    case "certificate":
      sectionData = ProgramsData.certificates.items;
      sectionTitle = ProgramsData.certificates.title;
      buttonClass = ProgramsData.certificates.buttonClass;
      break;

    case "internship":
      sectionData = ProgramsData.internships;
      break;

    case "placement":
      sectionData = ProgramsData.placements;
      break;

    default:
      return null;
  }

  return (
    <div
      className="container my-5"
      style={{
        paddingTop: "72px",
      }}
    >
      <div
        className="card shadow p-4"
        style={{
          paddingTop: "2rem", // default padding for larger screens
        }}
      >
        {type === "certificate" && (
          <>
            <h5 className="mb-4 mt-3 fw-bold fs-2 fs-md-1 text-break">
              {sectionTitle}:
            </h5>
            <div className="d-flex flex-wrap gap-2">
              {sectionData.map((program, index) => (
                <Link
                  key={index}
                  to={program.path}
                  className={`btn ${buttonClass} d-flex align-items-center mb-2`}
                >
                  <span className="me-2">{program.icon}</span>
                  {program.label}
                </Link>
              ))}
            </div>
          </>
        )}

        {(type === "internship" || type === "placement") &&
          sectionData.map((section, idx) => (
            <div
              key={idx}
              className="mb-4"
              style={{
                paddingTop: "1rem",
                // Add extra spacing on tablets (md screens)
              }}
            >
              <h5 className="fw-bold mb-3">{section.title}:</h5>
              <div className="d-flex flex-wrap gap-2">
                {section.items.map((item, i) => {
                  const Wrapper =
                    type === "placement" && item.link ? "a" : Link;

                  return Wrapper === Link ? (
                    <Link
                      key={i}
                      to={item.path || "#"}
                      className={`btn ${section.buttonClass} d-flex align-items-center mb-2`}
                    >
                      <span className="me-2">{item.icon}</span>
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={i}
                      href={item.link || "#"}
                      className={`btn ${section.buttonClass} d-flex align-items-center mb-2`}
                    >
                      <span className="me-2">{item.icon}</span>
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProgramsSection;
