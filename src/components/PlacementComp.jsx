import React from "react";
import PlacementData from "../data/ProgramsData";

const PlacementComp = () => {
  return (
    <div className="container my-5">
      <div className="card shadow p-4">
        {PlacementData.map((section, index) => (
          <div key={index}>
            <h5 className="fw-bold mb-3">{section.level}:</h5>

            <div className="d-flex flex-wrap gap-2 mb-4">
              {section.items.map((item, idx) => {
                const Wrapper = item.link ? "a" : "span";

                return (
                  <Wrapper
                    key={idx}
                    href={item.link}
                    className={`btn ${section.buttonClass} d-flex align-items-center mb-2`}
                  >
                    <span className="me-2">{item.icon}</span>
                    {item.label}
                  </Wrapper>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacementComp;
