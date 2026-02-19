import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../style/about.module.css";
import 'aos/dist/aos.css';
import AOS from 'aos';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const ref = useRef();

 useEffect(() => {
            AOS.init({ duration: 1000, once: true }); 
          }, []);
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { y: 60, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="about" className={styles.section}>
      
      {/* ================= SECTION 1 ================= */}
      <div className={styles.container}>
        <div className={styles.leftContent}           data-aos="fade-right"
>
          <h2 className={styles.title}>About</h2>

          <p className={styles.copy}>
            Parasym Syndicate is a private intelligence and security institution
            that designs and operates a unified, multi-domain intelligence
            platform. The organization addresses modern risk environments
            where threats do not exist in isolation.
          </p>

          <p className={styles.copy}>
            Financial crime, cyber operations, disinformation, geopolitical
            pressure, infrastructure fragility, and social instability
            increasingly intersect—rendering fragmented tools ineffective.
          </p>

          <p className={styles.copy}>
            Parasym provides a single operational framework where intelligence
            collection, analysis, simulation, governance, and decision synthesis
            function as one system.
          </p>
        </div>

        <div /> {/* Right empty */}
      </div>

      {/* ================= SECTION 2 ================= */}
      <div className={`${styles.container} ${styles.platformRow}`}>
        <div /> {/* LEFT 50% empty space */}

        <div className={styles.rightContent}           data-aos="fade-left"
>
          <h3 className={styles.subTitle}>The Parasym Platform</h3>

          <p className={styles.copy}>
            Parasym operates as a single, integrated intelligence platform
            rather than a collection of standalone tools.
          </p>

          <ul className={styles.list}>
            <li>A unified data ingestion layer</li>
            <li>A common intelligence graph</li>
            <li>Shared simulation and modeling engines</li>
            <li>Centralized governance and authorization controls</li>
          </ul>

          <p className={styles.copy}>
               This architecture ensures consistency across domains and prevents
            conflicting assessments. Intelligence produced in one domain
            automatically informs others, allowing financial, informational,
            behavioral, and geopolitical signals to be evaluated together.
          </p>

          <p className={styles.copy}>
            The platform is designed to scale across enterprise, national,
            and multi-agency environments while maintaining strict access
            control and auditability.
          </p>
        </div>
      </div>
    </section>
  );
}
