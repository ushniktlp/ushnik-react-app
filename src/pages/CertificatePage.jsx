import ProgramsComp from "../components/ProgramsComp";
import Footer from "../components/Footer";
import FooterData from "../data/FooterData";
import SEOComp from "../components/SEOComp";
import SEOMetaData from "../data/SEOMetaData";

const CertificatePage = () => {
  return (
    <div>
      <SEOComp {...SEOMetaData.certificate} />
      <ProgramsComp type="certificate" />
      <Footer data={FooterData} />
    </div>
  );
};

export default CertificatePage;
