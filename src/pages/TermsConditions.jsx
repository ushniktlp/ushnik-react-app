import React from "react";
import TermsData from "../data/TermsData";
import Footer from "../components/Footer";
import FooterData from "../data/FooterData";

const TermsConditions = () => {
  return (
    <>
      <div className="container my-5" style={{ paddingTop: "72px" }}>
        <div className="card shadow p-4">
          <h1 style={{ color: "#FDAE06" }} className="mb-1 pb-4">
            {TermsData.title}
          </h1>

          {TermsData.sections.map((section, index) => (
            <div key={index} className="mb-4">
              <h5 style={{ color: "#143264" }} className="fw-bold mb-2">
                {section.heading}
              </h5>
              <ul className="ps-3">
                {section.points.map((point, i) => (
                  <li key={i} className="mb-1">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Footer data={FooterData} />
    </>
  );
};

export default TermsConditions;
