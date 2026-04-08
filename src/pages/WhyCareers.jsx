import styles from "../style/whycareers.module.css";

function IconIntelligence() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={styles.cardIconSvg}>
      <path
        d="M12 3v3M12 18v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M3 12h3M18 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function IconSecurity() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={styles.cardIconSvg}>
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconInnovation() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={styles.cardIconSvg}>
      <path
        d="M9 18h6M10 22h4M12 2v1M12 15v-1M4.22 4.22l.7.7M19.78 4.22l-.7.7M3 12h1M20 12h1M4.22 19.78l.7-.7M19.78 19.78l-.7-.7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 5a4 4 0 100 8 4 4 0 000-8z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

const WHY_CARDS = [
  {
    title: "INTELLIGENCE",
    Icon: IconIntelligence,
    text:
      "We transform fragmented data into actionable insight. By integrating cyber, financial, geopolitical, and operational signals, we enable informed decision-making in complex risk environments.",
  },
  {
    title: "SECURITY",
    Icon: IconSecurity,
    text:
      "We design proactive, multi-layered security frameworks that anticipate threats before they materialize. Our approach strengthens resilience across digital, physical, and strategic domains.",
  },
  {
    title: "INNOVATION",
    Icon: IconInnovation,
    text:
      "We build adaptive solutions at the intersection of technology, strategy, and intelligence. Through continuous research and advanced capabilities, we stay ahead of evolving global risks.",
  },
];

export default function WhyCareers() {
  return (
    <section className={styles.wrapper}>
      <div
        className={styles.bannerCard}
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-easing="ease-out-cubic"
      >
        <header className={styles.bannerHeader}>
          <h2 className={styles.bannerTitle}>WHY US</h2>
          <span className={styles.bannerTag} aria-hidden>
            why us
          </span>
        </header>

        <div className={styles.bannerGrid}>
          {WHY_CARDS.map(({ title, Icon, text }, index) => (
            <article
              key={title}
              className={styles.innerBox}
              data-aos="fade-up"
              data-aos-duration="850"
              data-aos-delay={120 + index * 140}
              data-aos-easing="ease-out-cubic"
            >
              <div className={styles.cardTop}>
                <span className={styles.cardIconWrap}>
                  <Icon />
                </span>
                <h3 className={styles.cardTitle}>{title}</h3>
              </div>
              <p className={styles.cardBody}>{text}</p>
            </article>
          ))}
        </div>
      </div>

      <div
        className={styles.bannerCard}
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="80"
        data-aos-easing="ease-out-cubic"
      >
        <div className={styles.bannerGridThree}>
          <div
            className={styles.innerBox}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="0"
          >
            <h3 className={styles.cardTitlePlain}>Use Cases</h3>
            <p className={styles.subTitle}>Parasym supports:</p>
            <ul className={styles.list}>
              <li>Early threat identification and prevention</li>
              <li>Financial crime and corruption investigations</li>
              <li>Cybersecurity readiness and adversarial testing</li>
              <li>Disinformation and information warfare defense</li>
              <li>Strategic planning and policy impact assessment</li>
              <li>Crisis prevention and escalation control</li>
            </ul>
          </div>

          <div
            className={styles.innerBox}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="120"
          >
            <h3 className={styles.cardTitlePlain}>Who Parasym Serves</h3>
            <p>
              Parasym works with organizations operating in high-stakes, complex environments,
              including:
            </p>
            <ul className={styles.list}>
              <li>Government and public-sector institutions</li>
              <li>Law enforcement and national security agencies</li>
              <li>Financial institutions and compliance bodies</li>
              <li>Critical infrastructure operators</li>
              <li>Enterprises facing geopolitical risk</li>
              <li>Executive leadership and boards</li>
            </ul>
          </div>

          <div
            className={styles.innerBox}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="240"
          >
            <h3 className={styles.cardTitlePlain}>Governance &amp; Ethics</h3>
            <p>Parasym operates under strict ethical and legal constraints.</p>
            <ul className={styles.list}>
              <li>Non-autonomous</li>
              <li>Human-supervised</li>
              <li>Scope-limited</li>
              <li>Audit-ready</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
