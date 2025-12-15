import ProgramsComp from "../components/ProgramsComp";
import Footer from "../components/Footer";
import FooterData from "../data/FooterData";

const PlacementPage = () => {
  return (
    <div>
      <ProgramsComp type="placement" />
      <Footer data={FooterData} />
    </div>
  );
};

export default PlacementPage;
