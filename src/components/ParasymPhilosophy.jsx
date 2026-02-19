import styles from "../style/parasymPhilosophy.module.css";
import img1 from "../assets/logo.png";
import img2 from "../assets/logo.png";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect} from "react";


export default function ParasymPhilosophy() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);
  
  return (
    <section id="philosophy" className={styles.wrapper}>

      {/* ================= CARD 1 ================= */}
      <div className={styles.splitCard}>

        {/* LEFT IMAGE */}
        <div className={styles.imageSide}>
          <img src={img1} alt="Parasym Philosophy" />
        </div>

        {/* RIGHT CONTENT */}
        <div className={styles.contentSide}  data-aos="fade-left">
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
      </div>


      <div className={styles.splitCardReverse}>

        {/* LEFT CONTENT */}
        <div className={styles.contentSide} data-aos="fade-right">
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

        {/* RIGHT IMAGE */}
        <div className={styles.imageSide}>
          <img src={img2} alt="What Differentiates Parasym" />
        </div>

      </div>

    </section>
  );
}
