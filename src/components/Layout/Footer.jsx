import styles from "../../style/footer.module.css";
import logo from "../../assets/logo.png"; // path check kar lena
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logoLink} aria-label="Go to home">
              <img src={logo} alt="Parasym Syndicate" />
            </Link>
            <p>
              All-in-one intelligence, security, and risk management platform
              designed to help institutions detect, understand, and respond
              before threats materialize.
            </p>
          </div>

          <nav className={styles.links} aria-label="Footer navigation">
            <div className={styles.linkCol}>
              <h4>Services</h4>
              <Link to="/services?active=cyber">Cybersecurity</Link>
              <Link to="/services?active=ai">Artificial Intelligence</Link>
              <Link to="/services?active=forensics">Digital Forensics</Link>
              <Link to="/services?active=legal">Legal Support</Link>
              <Link to="/services?active=strategic">Strategic Communications</Link>
              <Link to="/services?active=geo">Geopolitical Intelligence</Link>
              <Link to="/services?active=training">
                Cybersecurity &amp; AI Training
              </Link>
            </div>

            <div className={styles.linkCol}>
              <h4>Company</h4>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/blogs">Blog</Link>
              <a href="#case-studies">Case Studies</a>
            </div>

            <div className={styles.linkCol}>
              <h4>Legal</h4>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <div className={styles.legalContact}>
                <a href="mailto:info@parasym.in">info@parasym.in</a>
                <a href="tel:+919079867865">9079867865</a>
              </div>
            </div>
          </nav>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <span>© 2026 Parasym Syndicate. All rights reserved.</span>

          <div className={styles.socials}>
            <a
              href="#x"
              aria-label="Parasym on X"
              className={styles.socialBtn}
            >
              X
            </a>
            <a
              href="#linkedin"
              aria-label="Parasym on LinkedIn"
              className={styles.socialBtn}
            >
              in
            </a>
            <a
              href="#facebook"
              aria-label="Parasym on Facebook"
              className={styles.socialBtn}
            >
              f
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
