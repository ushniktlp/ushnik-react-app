import Freshers from "../components/CertFreshers";
import Footer from "../components/Footer";
import FooterData from "../data/FooterData";

const CertificatePage = () => {
  return (
    <div>
      <Freshers />
      <Footer data={FooterData} />
    </div>
  );
};

export default CertificatePage;
