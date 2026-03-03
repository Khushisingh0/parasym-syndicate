import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Loader from "./components/Layout/Loader";
import NetworkBackground from "./components/Shared/NetworkBackground";

import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Services from "./pages/Services";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Initialize AOS once
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  // Refresh AOS on route change
  useEffect(() => {
    AOS.refresh();
  }, [location]);

  return (
    <>
      <NetworkBackground />

      {loading && <Loader onFinish={() => setLoading(false)} />}

      {!loading && (
        <>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/services" element={<Services />} />
          </Routes>

          <Footer />
        </>
      )}
    </>
  );
}

export default App;