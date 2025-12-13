import React from "react";
import CoursesCardData from "../data/CoursesData";
import CustomButton from "../components/CustomButton";

import Footer from "../components/Footer";
import FooterData from "../data/FooterData";

const Courses = () => {
  return (
    <>
      <div className="container py-5">
        <h2 className="text-center mb-5 fw-bold">Our Courses</h2>

        <div className="row g-4">
          {CoursesCardData.map((course, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-3">
              <div className="course-card course-card-box shadow-sm">
                <img
                  src={course.img}
                  alt={course.title}
                  className="course-img"
                />
                <h4 className="course-title">{course.title}</h4>
                <CustomButton href={course.link}>Learn More</CustomButton>
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
