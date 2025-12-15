import { Link } from "react-router-dom";
import CertificateData from "../data/CertificateData";

const CertificateComp = () => {
  return (
    <div className="container my-5">
      <div className="card shadow p-4">
        <h5 className="fw-bold mb-3">Freshers:</h5>

        <div className="d-flex flex-wrap gap-2">
          {CertificateData.map((program, index) => (
            <Link
              key={index}
              to={program.path}
              className="btn btn-outline-primary d-flex align-items-center mb-2"
            >
              <span className="me-2">{program.icon}</span>
              {program.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificateComp;
