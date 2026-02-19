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

 AOS.init({
  duration: 1200,
  once: false,  
  mirror: true,  
  easing: "ease-out-cubic"
});


  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        AOS.refresh();
      }, 500);
    }
  }, [loading]);

  useEffect(() => {
    if (loading) return;

    const headings = Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6"));
    const animatedHeadings = [];

    headings.forEach((heading) => {
      const rawText = heading.textContent ?? "";
      if (!rawText.trim()) return;

      heading.dataset.originalHeading = rawText;
      heading.setAttribute("aria-label", rawText.trim());
      heading.textContent = "";
      heading.classList.add("global-heading-rtl");

      const chars = Array.from(rawText);
      chars.forEach((char, index) => {
        const span = document.createElement("span");
        span.className = "global-heading-char";
        span.style.setProperty("--char-delay", `${(chars.length - 1 - index) * 36}ms`);
        span.setAttribute("aria-hidden", "true");

        if (char === " ") {
          span.classList.add("space");
          span.innerHTML = "&nbsp;";
        } else {
          span.textContent = char;
        }

        heading.appendChild(span);
      });

      animatedHeadings.push(heading);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(
            "global-heading-inview",
            entry.isIntersecting
          );
        });
      },
      {
        threshold: 0.28,
        rootMargin: "0px 0px -12% 0px",
      }
    );

    animatedHeadings.forEach((heading) => observer.observe(heading));

    return () => {
      observer.disconnect();
      animatedHeadings.forEach((heading) => {
        heading.classList.remove("global-heading-rtl", "global-heading-inview");
        if (heading.dataset.originalHeading) {
          heading.textContent = heading.dataset.originalHeading;
          delete heading.dataset.originalHeading;
        }
      });
    };
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
