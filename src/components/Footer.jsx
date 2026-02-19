import styles from "../style/footer.module.css";
import logo from "../assets/logo.png"; // path check kar lena

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.top}>
        {/* BRAND */}
        <div className={styles.brand}>
          <img src={logo} alt="Parasym Syndicate" />
          <p>
            All-in-one intelligence, security, and risk management platform
            designed to help institutions detect, understand, and respond
            before threats materialize.
          </p>
        </div>

        {/* LINKS */}
        <div className={styles.links}>
          <div>
            <h4>Product</h4>
            <a href="#">Features</a>
            <a href="#">How it Works</a>
            <a href="#">Pricing</a>
            <a href="#">Login</a>
          </div>

          <div>
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
          </div>

          <div>
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className={styles.divider}></div>

      {/* BOTTOM */}
      <div className={styles.bottom}>
        <span>© 2026 Parasym Syndicate. All rights reserved.</span>

        <div className={styles.socials}>
          <a href="#" aria-label="Twitter">X</a>
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="Facebook">f</a>
        </div>
      </div>
    </footer>
  );
}
