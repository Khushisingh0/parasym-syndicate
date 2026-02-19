import { useState } from "react";
import styles from "../style/navbar.module.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img
            src={logo}
            alt="Parasym Syndicate"
            onClick={() => scrollToSection("hero")}
            style={{ cursor: "pointer" }}
          />
        </div>

        <button
          className={styles.menuBtn}
          onClick={() => setOpen(true)}
        >
          MENU
        </button>
      </nav>

      {open && (
        <>
          <div
            className={styles.overlay}
            onClick={() => setOpen(false)}
          />

          <aside className={styles.sideMenu}>
            <button
              className={styles.closeBtn}
              onClick={() => setOpen(false)}
            >
              ✕ MENU
            </button>

            <ul className={styles.menuList}>
              <li onClick={() => scrollToSection("hero")}>START</li>
              <li onClick={() => scrollToSection("about")}>ABOUT US</li>
              <li onClick={() => scrollToSection("product")}>PRODUCT</li>
              <li onClick={() => scrollToSection("services")}>SERVICES</li>
              <li onClick={() => scrollToSection("why-us")}>WHY US</li>
              <li onClick={() => scrollToSection("philosophy")}>PHILOSOPHY</li>
              <li onClick={() => scrollToSection("contact")}>CONTACT</li>
            </ul>
          </aside>
        </>
      )}
    </>
  );
}
