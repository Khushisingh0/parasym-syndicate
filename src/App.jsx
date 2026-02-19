import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Loader from "./components/Loader";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Product";
import ScrollIndicator from "./components/ScrollIndicator";
import Services from "./components/Services";
import WhyCareers from "./components/WhyCareers";
import ParasymPhilosophy from "./components/ParasymPhilosophy";
import NetworkBackground from "./components/NetworkBackground";
import ContactUs from "./components/ContactUs";
import About from "./components/About";

function App() {
  const [loading, setLoading] = useState(true);

  // ✅ Initialize AOS only once here
 AOS.init({
  duration: 1200,
  once: false,   // 🔥 Important
  mirror: true,  // Scroll up pe bhi animation chalega
  easing: "ease-out-cubic"
});


  // ✅ Refresh AOS after loader disappears
  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        AOS.refresh();
      }, 500);
    }
  }, [loading]);

  return (
    <>
      <NetworkBackground />

      <div style={{ position: "relative", zIndex: 1 }}>
        {loading && <Loader onFinish={() => setLoading(false)} />}

        {!loading && (
          <>
            <Navbar />
            <ScrollIndicator />

            <section id="hero"><Hero /></section>
            <section id="about"><About /></section>
            <section id="products"><Products /></section>
            <section id="services"><Services /></section>
            <section id="why"><WhyCareers /></section>
            <section id="philosophy"><ParasymPhilosophy /></section>
            <section id="contact"><ContactUs /></section>

            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default App;
