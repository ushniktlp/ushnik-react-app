import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Splash from "./components/Splash";
import TopHeader from "./components/TopHeader";
import MainHeader from "./components/MainHeader";
import PopUpModal from "./components/PopUp";

import Home from "./pages/Home";
import AboutUsPage from "./pages/AboutUsPage";
import Courses from "./pages/Courses";
import Programs from "./pages/Programs";
import Schedule from "./pages/Schedule";
import CertificatePage from "./pages/CertificatePage";
import InternshipPage from "./pages/InternshipPage";
import PlacementPage from "./pages/PlacementPage";

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Splash state
  const [loading, setLoading] = useState(isHome);

  // Popup state
  const [showPopup, setShowPopup] = useState(false);

  // Trigger Splash ONLY on home page
  useEffect(() => {
    if (isHome) {
      const timer = setTimeout(() => setLoading(false), 6000);
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [isHome]);

  // Trigger Popup ONLY on home page
  useEffect(() => {
    if (isHome) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  }, [isHome]);

  // Show Splash only on first load of Home
  if (loading && isHome) return <Splash />;

  return (
    <>
      <TopHeader />
      <MainHeader />

      {/* Popup only on homepage */}
      {isHome && (
        <PopUpModal show={showPopup} onHide={() => setShowPopup(false)} />
      )}

      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/allcourses" element={<Courses />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/certificate" element={<CertificatePage />} />
          <Route path="/internship" element={<InternshipPage />} />
          <Route path="/placement" element={<PlacementPage />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </main>
    </>
  );
}

// APP WRAPPER
export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
