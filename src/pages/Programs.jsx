import React from "react";
import ProgramsData from "../data/ProgramsData";
import ProgramsVideo from "../assets/Programs-Video.mp4";
//import "./Programs.css"; // optional if you want separate styling

const Programs = () => {
  return (
    <div className="programs-video text-center py-4">
      {/* Background Video */}
      <video
        className="w-100 position-absolute top-0 start-0 vh-100"
        autoPlay
        muted
        loop
        playsInline
        style={{ objectFit: "cover", zIndex: -2 }}
      >
        <source src={ProgramsVideo} type="video/mp4" />
      </video>

      <section className="video-section">
        <video className="bg-video" autoPlay muted loop playsInline>
          <source src="./programs-video.mp4" type="video/mp4" />
        </video>

        <div className="overlay-content">
          <div className="program-buttons">
            {/* MAP PROGRAMS FROM JSON */}
            {ProgramsData.map((program, index) => (
              <div className="program-card" key={index}>
                <img
                  src={program.img}
                  className="program-img"
                  alt={program.title}
                />

                <button className="button-64">
                  <span className="text">
                    <a
                      href={program.link}
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      {program.title}
                    </a>
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
