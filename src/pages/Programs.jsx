// import React from "react";
// import ProgramsData from "../data/ProgramsData";
// import ProgramsVideo from "../assets/Programs-Video.mp4";

// import Footer from "../components/Footer";
// import FooterData from "../data/FooterData";

// const Programs = () => {
//   return (
//     <>
//       <div className="programs-video text-center py-4">
//         {/* Background Video */}
//         <video
//           className="w-100 position-absolute top-0 start-0 vh-100"
//           autoPlay
//           muted
//           loop
//           playsInline
//           style={{ objectFit: "cover", zIndex: -2 }}
//         >
//           <source src={ProgramsVideo} type="video/mp4" />
//         </video>

//         <section className="video-section">
//           <video className="bg-video" autoPlay muted loop playsInline>
//             <source src="./programs-video.mp4" type="video/mp4" />
//           </video>

//           <div className="overlay-content">
//             <div className="program-buttons">
//               {/* MAP PROGRAMS FROM JSON */}
//               {ProgramsData.map((program, index) => (
//                 <div className="program-card" key={index}>
//                   <img
//                     src={program.img}
//                     className="program-img"
//                     alt={program.title}
//                   />

//                   <button className="button-64">
//                     <span className="text">
//                       <a
//                         href={program.link}
//                         style={{ color: "white", textDecoration: "none" }}
//                       >
//                         {program.title}
//                       </a>
//                     </span>
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </div>

//       <Footer data={FooterData} />
//     </>
//   );
// };

// export default Programs;

import React from "react";
import ProgramsData from "../data/ProgramsData";
import ProgramsVideo from "../assets/Programs-Video.mp4";
import Footer from "../components/Footer";
import FooterData from "../data/FooterData";

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

      {/* FOOTER (NOW BELOW VIDEO) */}
      <Footer data={FooterData} />
    </>
  );
};

export default Programs;
