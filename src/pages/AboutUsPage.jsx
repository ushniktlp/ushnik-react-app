import React from "react";
import AboutUsPageData from "../data/AboutUsPageData";

const AboutUsPage = () => {
  return (
    <div className="about-page-wrapper">
      {/* Purpose */}
      <div className="section-block p-4 mb-5 rounded-3 shadow-sm bg-light">
        <h2 className="section-title mb-3">{AboutUsPageData.purpose.title}</h2>
        {AboutUsPageData.purpose.paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>

      {/* What We Offer */}
      <div className="section-block p-4 mb-5 rounded-3 shadow-sm bg-white border">
        <h2 className="section-title mb-3">
          {AboutUsPageData.whatWeOffer.title}
        </h2>
        <ul className="list-unstyled ms-2">
          {AboutUsPageData.whatWeOffer.items.map((item, index) => (
            <li className="mb-2" key={index}>
              <i
                className={`bi ${AboutUsPageData.whatWeOffer.icon} text-primary me-2`}
              ></i>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Training Philosophy */}
      <div className="section-block p-4 mb-5 rounded-3 shadow-sm bg-light">
        <h2 className="section-title mb-3">
          {AboutUsPageData.philosophy.title}
        </h2>
        <p>{AboutUsPageData.philosophy.intro}</p>

        <ul className="list-unstyled ms-2">
          {AboutUsPageData.philosophy.items.map((item, index) => (
            <li className="mb-2" key={index}>
              <i
                className={`bi ${AboutUsPageData.philosophy.icon} ${AboutUsPageData.philosophy.iconColor} me-2`}
              ></i>
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-3">{AboutUsPageData.philosophy.outro}</p>
      </div>

      {/* Vision */}
      <div className="section-block p-4 mb-5 rounded-3 shadow-sm bg-white border">
        <h2 className="section-title mb-3">{AboutUsPageData.vision.title}</h2>
        <p>{AboutUsPageData.vision.text}</p>
      </div>

      {/* Mission */}
      <div className="section-block p-4 rounded-3 shadow-sm bg-light">
        <h2 className="section-title mb-3">{AboutUsPageData.mission.title}</h2>
        <p>{AboutUsPageData.mission.text}</p>
      </div>
    </div>
  );
};

export default AboutUsPage;
