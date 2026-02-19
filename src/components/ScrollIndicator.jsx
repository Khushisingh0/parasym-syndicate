import { useEffect, useState } from "react";
import styles from "../style/scrollIndicator.module.css";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "products", label: "Products" },
  { id: "services", label: "Services" },
  { id: "why", label: "Why Us" },
  { id: "philosophy", label: "Philosophy" },
  { id: "contact", label: "Contact" },
  { id: "footer", label: "Footer" },
];


export default function ScrollIndicator() {
  const [active, setActive] = useState("hero");

  const dotSpacing = 64;
  const lineHeight = (sections.length - 1) * dotSpacing;

 useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    let currentSection = sections[0].id;

    sections.forEach((sec) => {
      const element = document.getElementById(sec.id);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          currentSection = sec.id;
        }
      }
    });

    setActive(currentSection);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <div className={styles.wrapper}>
      <div
        className={styles.line}
        style={{ height: `${lineHeight}px` }}
      >
        {sections.map((sec, i) => (
          <div
            key={sec.id}
            className={`${styles.dot} ${
              active === sec.id ? styles.active : ""
            }`}
            style={{ top: `${i * dotSpacing}px` }}
            onClick={() =>
              document
                .getElementById(sec.id)
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {active === sec.id && (
              <span className={styles.label}>{sec.label}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
