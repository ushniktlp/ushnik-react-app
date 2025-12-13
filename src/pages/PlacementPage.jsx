import PlacementComp from "../components/PlacementComp";
import Footer from "../components/Footer";
import FooterData from "../data/FooterData";

const PlacementPage = () => {
  return (
    <div>
      <PlacementComp />
      <Footer data={FooterData} />
    </div>
  );
};

export default PlacementPage;
