import ProgramsComp from "../components/ProgramsComp";
import Footer from "../components/Footer";
import FooterData from "../data/FooterData";

// import SEOComp from "../components/SEOComp";
// import SEOMetaData from "../data/SEOMetaData.js";

const InternshipPage = () => {
  return (
    <div>
      {/* <SEOComp {...SEOMetaData.internship} /> */}
      <ProgramsComp type="internship" />
      <Footer data={FooterData} />
    </div>
  );
};

export default InternshipPage;
