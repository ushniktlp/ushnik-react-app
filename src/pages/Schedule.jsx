// src/components/Batches.js
import React from "react";
import BatchesData from "../data/BatchesData";

import Footer from "../components/Footer";
import FooterData from "../data/FooterData";

const Batches = () => {
  const renderTable = (title, data) => (
    <div className="col-12 col-md-6">
      <div className="card shadow-sm">
        <div
          style={{ backgroundColor: "#143264" }}
          className="card-header text-white text-center fw-bold"
        >
          {title}
        </div>

        <div className="table-responsive">
          <table className="table table-striped table-bordered mb-0">
            <thead className="table-light">
              <tr className="fw-bold">
                <th>Course Name</th>
                <th>Day & Time</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.course}</td>
                  <td>{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="container py-5 batches-container">
        <div className="row g-4">
          {renderTable("Weekday Batches", BatchesData.weekday)}
          {renderTable("Weekend Batches", BatchesData.weekend)}
        </div>
      </div>

      <Footer data={FooterData} />
    </>
  );
};

export default Batches;
