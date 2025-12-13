import InternshipComp from "../components/InternshipComp";
import Footer from "../components/Footer";
import FooterData from "../data/FooterData";

const InternshipPage = () => {
  return (
    <div>
      <InternshipComp />
      <Footer data={FooterData} />
    </div>
  );
};

export default InternshipPage;
