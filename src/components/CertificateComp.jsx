import { Link } from "react-router-dom";
import CertificateData from "../data/ProgramsData";

const CertificateComp = () => {
  return (
    <div className="container my-5" style={{ paddingTop: "72px" }}>
      <div className="card shadow p-4 mt-4">
        <h5 className="mb-4 mt-3 fw-bold fs-2 fs-md-1 text-break">Freshers:</h5>

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
