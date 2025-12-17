import React from "react";
import { Link } from "react-router-dom";
import coursesData from "../data/AllCoursesData";
import Footer from "../components/Footer";
import FooterData from "../data/FooterData";

// import SEOComp from "../components/SEOComp";
// import SEOMetaData from "../data/SEOMetaData.js";

const Courses = () => {
  const coursesArray = Object.values(coursesData); // convert object to array

  return (
    <>
      {/* <SEOComp {...SEOMetaData.allCourses} /> */}
      <div className="container py-5">
        <h2 className="text-center mb-5 fw-bold">Our Courses</h2>

        <div className="row g-4">
          {coursesArray.map((course, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-3">
              <div className="course-card course-card-box shadow-sm">
                {course.img && (
                  <img
                    src={course.img}
                    alt={course.title}
                    className="course-img"
                  />
                )}
                <h4 className="course-title mt-3">{course.title}</h4>
                <Link
                  to={`/courses/${course.slug}`}
                  className="btn btn-lg rounded-pill px-4 mt-2"
                  style={{
                    fontWeight: 700,
                    backgroundColor: "#fdae06",
                    color: "#143264",
                  }}
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer data={FooterData} />
    </>
  );
};

export default Courses;
