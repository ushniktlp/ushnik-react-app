import React from "react";
import { useParams } from "react-router-dom";
import coursesData from "../data/AllCoursesData";

const CourseDetails = () => {
  const { courseSlug } = useParams();
  const course = coursesData[courseSlug];

  if (!course) {
    return (
      <div className="container text-center my-5">
        <h2>Course not found</h2>
        <p>Please check the course link.</p>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="card shadow p-4">
        {/* Title */}
        <h1 className="mb-4">{course.title}</h1>

        {/* Description */}
        {course.description && (
          <>
            <h5 className="fw-bold">What is this Program?</h5>
            <p className="text-secondary mb-4">{course.description}</p>
          </>
        )}

        {/* Technologies */}
        {course.technologies?.length > 0 && (
          <>
            <h5 className="fw-bold mb-3">Technologies Covered</h5>
            <div className="d-flex flex-wrap gap-2 mb-4">
              {course.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="badge fs-6 py-2 px-3"
                  style={{ backgroundColor: "#143264" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </>
        )}

        {/* Key Takeaways */}
        {course.takeaways?.length > 0 && (
          <>
            <h5 className="fw-bold">Key Takeaways</h5>
            <ul className="list-group list-group-flush mb-4">
              {course.takeaways.map((item, i) => (
                <li key={i} className="list-group-item">
                  {item}
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Industry Skills */}
        {course.industrySkills && (
          <>
            <h5 className="fw-bold">Industry-Ready Skills</h5>
            <p className="text-secondary mb-4">{course.industrySkills}</p>
          </>
        )}

        {/* Careers */}
        {course.careers?.length > 0 && (
          <>
            <h5 className="fw-bold mb-3">Career Pathways</h5>
            <div className="d-flex flex-wrap gap-2 mb-4">
              {course.careers.map((career, i) => (
                <span
                  key={i}
                  className="badge fs-6 py-2 px-3"
                  style={{ backgroundColor: "#143264" }}
                >
                  {career.icon && <span className="me-1">{career.icon}</span>}
                  {career.label}
                </span>
              ))}
            </div>
          </>
        )}

        {/* Skills */}
        {course.skills?.length > 0 && (
          <>
            <h5 className="fw-bold mb-3">Key Skills You Will Learn</h5>
            <div className="d-flex flex-wrap gap-2 mb-4">
              {course.skills.map((skill, i) => (
                <span
                  key={i}
                  className="badge fs-6 py-2 px-3"
                  style={{ backgroundColor: "#143264" }}
                >
                  {skill.icon && <span className="me-1">{skill.icon}</span>}
                  {skill.label}
                </span>
              ))}
            </div>
          </>
        )}

        {/* Outcome */}
        {course.outcome && (
          <>
            <h5 className="fw-bold">Outcome</h5>
            <p className="text-secondary mb-4">{course.outcome}</p>
          </>
        )}

        {/* Register Button */}
        {course.registerLink && (
          <div className="mb-3">
            <a
              href={course.registerLink}
              className="btn btn-lg rounded-pill px-5"
              style={{
                fontWeight: 700,
                backgroundColor: "#fdae06",
                color: "#143264",
              }}
            >
              Register Now
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetails;
