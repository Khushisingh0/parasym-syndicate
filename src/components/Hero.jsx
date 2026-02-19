import styles from "../style/hero.module.css";
import logo from "../assets/logo.png";

export default function Hero() {
  return (
    <section className={styles.hero}>

      {/* LEFT SIDE LOGO */}
      <div className={styles.logo}>
        <img src={logo} alt="Parasym Syndicate" />
      </div>

      {/* RIGHT CONTENT */}
      <div className={styles.content}>

        {/* HEADINGS */}
        <div 
          className={styles.headings}
          data-aos="fade-left"
        >
          <h1 className={styles.line}>Intelligence</h1>
          <h1 className={styles.line}>Security</h1>
          <h1 className={styles.line}>Innovation</h1>
        </div>

        {/* ABOUT TEXT */}
        <div 
  className={styles.about}
  data-aos="fade-left"
  data-aos-delay="300"
  data-aos-anchor-placement="top-bottom"
>

          <span>WE ARE PARASYM SYNDICATE</span>

          <p className={styles.pa}>
            Parasym Syndicate is a private intelligence and security institution
            that operates a unified, multi-domain platform to address
            interconnected modern threats such as cyber operations, financial
            crime, and geopolitical risk. It focuses on early insight,
            strategic control, and informed decision-making rather than reactive
            responses.
          </p>
        </div>

      </div>
    </section>
  );
}
