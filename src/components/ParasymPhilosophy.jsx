import styles from "../style/parasymPhilosophy.module.css";

export default function ParasymPhilosophy() {
  return (
   <section id="philosophy" className={styles.wrapper}>

  <div className={styles.splitBanner}>

    {/* LEFT SIDE */}
    <div className={styles.leftSide}>
      <h2>Parasym Philosophy</h2>

      <p>
        Parasym is founded on the principle that most large-scale failures occur
        not because of missing information, but because signals were misread,
        delayed, or acted upon without understanding second-order consequences.
      </p>

      <p>
        Traditional security and intelligence models prioritize detection after escalation.
        Parasym prioritizes regulation before escalation.
      </p>

      <p className={styles.subTitle}>This philosophy emphasizes:</p>

      <ul>
        <li>Early pressure detection rather than late-stage alarms</li>
        <li>Cross-domain correlation rather than siloed analysis</li>
        <li>Simulation of consequences rather than assumption-based planning</li>
        <li>Human judgment supported by structured intelligence</li>
      </ul>

      <p>
        Parasym improves the quality and timing of decisions under uncertainty.
      </p>
    </div>

    {/* VERTICAL DIVIDER */}
    <div className={styles.divider}></div>

    {/* RIGHT SIDE */}
    <div className={styles.rightSide}>
      <h2>What Differentiates Parasym</h2>

      <p>
        Parasym operates as a single, integrated intelligence platform
        rather than a collection of standalone tools.
      </p>

      <p className={styles.subTitle}>All capabilities share:</p>

      <ul>
        <li>A unified data ingestion layer</li>
        <li>A common intelligence graph</li>
        <li>Shared simulation and modeling engines</li>
        <li>Centralized governance and authorization controls</li>
      </ul>

      <p>
        The architecture ensures cross-domain consistency and enterprise-level auditability.
      </p>
    </div>

  </div>

</section>

  );
}
