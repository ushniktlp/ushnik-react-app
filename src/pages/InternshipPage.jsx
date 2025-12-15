import ProgramsComp from "../components/ProgramsComp";
import Footer from "../components/Footer";
import FooterData from "../data/FooterData";

const InternshipPage = () => {
  return (
    <div>
      <ProgramsComp type="internship" />
      <Footer data={FooterData} />
    </div>
  );
};

export default InternshipPage;
