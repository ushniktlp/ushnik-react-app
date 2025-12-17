import HeroVideo from "../assets/Hero-Video.mp4";
import Student from "../images/student.png";
import AboutUsSection from "../components/AboutUsSection";
import { AboutUsSectionData } from "../data/AboutUsSectionData";
import { useEffect } from "react";
import { StatisticsData } from "../data/StatisticsData";
import { animateCounter } from "../config/script";
import Training from "../components/Training";
import { TrainingData } from "../data/TrainingData";
import GoogleMap from "../components/GoogleMap";
import MapData from "../data/MapData";
import Footer from "../components/Footer";
import FooterData from "../data/FooterData";
import SEOComp from "../components/SEOComp";
import SEOMetaData from "../data/SEOMetaData";

import SocialBar from "../components/SocialBar";
import SocialData from "../data/SocialData";
import CustomButton from "../components/CustomButton";

// import SEOComp from "../components/SEOComp";
// import SEOMetaData from "../data/SEOMetaData.js";

const Counter = ({ index, start, target, format, duration, pause }) => {
  useEffect(() => {
    const el = document.getElementById(`counter-${index}`);
    animateCounter(el, start, target, format, duration, pause);
  }, [index, start, target, format, duration, pause]);

  return (
    <h2 className="counter" id={`counter-${index}`}>
      0
    </h2>
  );
};

const Home = () => {
  return (
    <>
      <SEOComp {...SEOMetaData.home} />
      {/* HERO SECTION */}
      <section className="hero-section position-relative overflow-hidden d-flex align-items-center">
        {/* Background Video */}
        <video
          className="position-absolute top-0 start-0 w-100 h-100"
          autoPlay
          muted
          loop
          playsInline
          style={{
            objectFit: "cover",
            zIndex: "-1",
          }}
        >
          <source src={HeroVideo} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="dark-overlay position-absolute top-0 start-0 w-100 h-100"></div>

        <div className="container h-100">
          <div className="row align-items-center h-100">
            {/* Left side text */}
            <div className="col-lg-6 text-center text-lg-start text-white hero-text">
              <h1 className="fw-bold mb-4 fs-3 fs-lg-1">
                Build Your Future with Industry-Driven Tech Training
              </h1>

              <p className="mb-4 fs-6 fs-lg-5">
                Unleashing Skills for High-Impact Next-Gen Innovative Knowledge
              </p>

              <CustomButton href="ushnik.in">Enroll Now</CustomButton>
            </div>

            {/* Right side image */}
            <div className="col-lg-6 text-center mt-4 mt-lg-0">
              <img
                src={Student}
                alt="Student"
                className="hero-student-img img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <div className="statistics">
        {StatisticsData.map((c, i) => (
          <div key={i} className="counter-box">
            <Counter
              index={i}
              start={c.start}
              target={c.target}
              format={c.format}
              duration={6000}
              pause={7000}
            />
            <div className="label">{c.label}</div>
          </div>
        ))}
      </div>

      <SocialBar data={SocialData} />
      <AboutUsSection data={AboutUsSectionData} />
      <Training data={TrainingData} />
      <GoogleMap data={MapData} />
      <Footer data={FooterData} />
    </>
  );
};

export default Home;
