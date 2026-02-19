import { useEffect, useRef, useState } from "react";
import styles from "../style/whycareers.module.css";

export default function WhyCareers() {
  const wrapperRef = useRef(null);
  const careersRef = useRef(null);
  const [careersShift, setCareersShift] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const careers = careersRef.current;
      if (!careers) return;

      const isMobile = window.innerWidth <= 1100;
      if (isMobile) {
        setCareersShift(0);
        return;
      }

      const rect = careers.getBoundingClientRect();
      const vh = window.innerHeight;

      const progress = (vh - rect.top) / vh;
      const clamped = Math.max(0, Math.min(1, progress));

      setCareersShift(clamped * vh * 0.6);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className={styles.wrapper}>

      {/* ================= BANNER 1 ================= */}
      <div className={styles.bannerCard}>

        <h2 className={styles.bannerTitle}>WHY US</h2>

        <div className={styles.bannerGrid}>
          <div className={styles.innerBox}>
            <h3>INTEGRITY</h3>
            <p>
              We uphold the highest standards of integrity in all our activities,
              ensuring trust, ethical governance, and long-term accountability.
            </p>
          </div>

          <div className={styles.innerBox}>
            <h3>SECURITY</h3>
            <p>
              We design proactive, multi-layered security frameworks that
              anticipate threats and strengthen resilience across domains.
            </p>
          </div>

          <div className={styles.innerBox}>
            <h3>INNOVATION</h3>
            <p>
              We build adaptive intelligence systems that evolve with
              geopolitical, financial, and cyber risk environments.
            </p>
          </div>
        </div>

      </div>


      {/* ================= BANNER 2 ================= */}
      <div className={styles.bannerCard}>

        <div className={styles.bannerGridThree}>

          <div className={styles.innerBox}>
            <h3>Use Cases</h3>
            <p className={styles.subTitle}>Parasym supports:</p>
            <ul>
              <li>Early threat identification and prevention</li> <li>Financial crime and corruption investigations</li> <li>Cybersecurity readiness and adversarial testing</li> <li>Disinformation and information warfare defense</li> <li>Strategic planning and policy impact assessment</li> <li>Crisis prevention and escalation control</li>
            </ul>
          </div>

          <div className={styles.innerBox}>
            <h3>Who Parasym Serves</h3>   
                <p> Parasym works with organizations operating in high-stakes, complex environments, including: </p>
                 <ul>
                   <li>Government and public-sector institutions</li>
                 <li>Law enforcement and national security agencies</li> 
                 <li>Financial institutions and compliance bodies</li> 
                 <li>Critical infrastructure operators</li>
                  <li>Enterprises facing geopolitical risk</li> 
                  <li>Executive leadership and boards</li>
                   </ul>
          </div>

          <div className={styles.innerBox}>
            <h3>Governance & Ethics</h3>
            <p>Parasym operates under strict ethical and legal constraints.</p> <ul> <li>Non-autonomous</li> <li>Human-supervised</li> <li>Scope-limited</li> <li>Audit-ready</li> </ul>
          </div>

        </div>

      </div>

    </section>

  );
}
