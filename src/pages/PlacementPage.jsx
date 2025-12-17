import ProgramsComp from "../components/ProgramsComp";
import Footer from "../components/Footer";
import FooterData from "../data/FooterData";
import SEOComp from "../components/SEOComp";
import SEOMetaData from "../data/SEOMetaData";

const PlacementPage = () => {
  return (
    <div>
      <SEOComp {...SEOMetaData.placement} />
      <ProgramsComp type="placement" />
      <Footer data={FooterData} />
    </div>
  );
};

export default PlacementPage;
