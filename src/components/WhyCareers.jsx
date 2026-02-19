import styles from "../style/whycareers.module.css";
import careerImg from "../assets/logo.png";


export default function RavenSectionFive() {
  return (
    <section id="why" className={styles.wrapper}>

      {/* WHY US */}
      <div className={styles.whyCard}>

        <div className={styles.cardInner}>

          <h2 className={styles.titleOrange}>WHY US?</h2>
<div className={styles.columns}>

  <div className={styles.whyCardBox}>
    <h3 className={styles.cardTitle}>INTELLIGENCE</h3>
    <p className={styles.cardText}>
     We transform fragmented data into actionable insight. By integrating cyber, financial, geopolitical, and operational signals, we enable informed decision-making in complex risk environments.
    </p>
  </div>

  <div className={styles.whyCardBox}>
    <h3 className={styles.cardTitle}>SECURITY</h3>
    <p className={styles.cardText}>
   We design proactive, multi-layered security frameworks that anticipate threats before they materialize. Our approach strengthens resilience across digital, physical, and strategic domains.
    </p>
  </div>

  <div className={styles.whyCardBox}>
    <h3 className={styles.cardTitle}>INNOVATION</h3>
    <p className={styles.cardText}>
      We build adaptive solutions at the intersection of technology, strategy, and intelligence. Through continuous research and advanced capabilities, we stay ahead of evolving global risks.
    </p>
  </div>

</div>


        </div>

      </div>


      {/* CAREERS */}
{/* CONNECTED SC BANNER */}
<section className={styles.scSection}>
  <div className={styles.scConnectedCard}>

    <div className={styles.scColumn}>
      <h2>Use Cases</h2>
      <p className={styles.subTitle}>Parasym supports:</p>
      <ul>
        <li>Early threat identification and prevention</li>
        <li>Financial crime and corruption investigations</li>
        <li>Cybersecurity readiness and adversarial testing</li>
        <li>Disinformation and information warfare defense</li>
        <li>Strategic planning and policy impact assessment</li>
        <li>Crisis prevention and escalation control</li>
      </ul>
    </div>

    <div className={styles.divider}></div>

    <div className={styles.scColumn}>
      <h2>Who Parasym Serves</h2>
      <p>
        Parasym works with organizations operating in high-stakes,
        complex environments, including:
      </p>
      <ul>
        <li>Government and public-sector institutions</li>
        <li>Law enforcement and national security agencies</li>
        <li>Financial institutions and compliance bodies</li>
        <li>Critical infrastructure operators</li>
        <li>Enterprises facing geopolitical risk</li>
        <li>Executive leadership and boards</li>
      </ul>
    </div>

    <div className={styles.divider}></div>

    <div className={styles.scColumn}>
      <h2>Governance & Ethics</h2>
      <p>Parasym operates under strict ethical and legal constraints.</p>
      <ul>
        <li>Non-autonomous</li>
        <li>Human-supervised</li>
        <li>Scope-limited</li>
        <li>Audit-ready</li>
      </ul>
      <p>
        Access to sensitive functions requires authorization,
        justification, and oversight.
      </p>
    </div>

  </div>
</section>




    </section>
  );
}
