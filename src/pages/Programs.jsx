import React from "react";
import ProgramsData from "../data/ProgramsData";
import ProgramsVideo from "../assets/Programs-Video.mp4";
import Footer from "../components/Footer";
import FooterData from "../data/FooterData";

import { Link } from "react-router-dom";

const Programs = () => {
  return (
    <>
      {/* VIDEO SECTION */}
      <section className="programs-video position-relative min-vh-100">
        <video
          className="w-100 h-100 position-absolute top-0 start-0"
          autoPlay
          muted
          loop
          playsInline
          style={{ objectFit: "cover", zIndex: -1 }}
        >
          <source src={ProgramsVideo} type="video/mp4" />
        </video>

        <div className="overlay-content d-flex align-items-center justify-content-center h-10">
          <div className="program-buttons mt-5 pt-5">
            {ProgramsData.map((program, index) => (
              <div className="program-card" key={index}>
                <img
                  src={program.img}
                  className="program-img"
                  alt={program.title}
                />

                <Link
                  to={program.link}
                  className="button-64 text-decoration-none text-white"
                >
                  <span className="text">{program.title}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER (NOW BELOW VIDEO) */}
      <Footer data={FooterData} />
    </>
  );
};

export default Programs;
