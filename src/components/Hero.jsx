import HeroVideo from "../assets/Hero-Video.mp4";
import Student from "../images/student.png";

const {
  Hero,
} = () => {
  return (
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

            <a href="ushnik.in" className="btn btn-lg">
              Enroll Now
            </a>
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
  );
};

export default Hero;
