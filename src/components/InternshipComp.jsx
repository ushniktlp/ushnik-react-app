import React from "react";
import InternshipData from "../data/ProgramsData";
import { Link } from "react-router-dom";

const InternshipComp = () => {
  return (
    <div className="container my-5">
      <div className="card shadow p-4">
        {InternshipData.map((section, index) => (
          <div key={index}>
            <h5 className="fw-bold mb-3">{section.category}:</h5>

            <div className="d-flex flex-wrap gap-2 mb-4">
              {section.programs.map((program, i) => (
                <Link
                  key={i}
                  to={program.link}
                  className={`btn ${section.buttonClass} d-flex align-items-center mb-2`}
                >
                  <span className="me-2">{program.icon}</span>
                  {program.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternshipComp;
