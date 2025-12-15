import ProgramsComp from "../components/ProgramsComp";
import Footer from "../components/Footer";
import FooterData from "../data/FooterData";

const CertificatePage = () => {
  return (
    <div>
      <ProgramsComp type="certificate" />
      <Footer data={FooterData} />
    </div>
  );
};

export default CertificatePage;
