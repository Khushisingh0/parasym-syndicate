import { useEffect, useRef, useState } from "react";
import styles from "../style/whycareers.module.css";

export default function WhyCareers() {
  const wrapperRef = useRef(null);
  const careersRef = useRef(null);
  const [careersShift, setCareersShift] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const wrapper = wrapperRef.current;
      const careers = careersRef.current;
      if (!wrapper || !careers) return;

      const isMobile = window.innerWidth <= 1200;
      if (isMobile) {
        setCareersShift(0);
        return;
      }

      const careersRect = careers.getBoundingClientRect();
      const viewportH = window.innerHeight;

      const start = viewportH;
      const end = viewportH * 0.1;
      const progress = (start - careersRect.top) / (start - end);
      const clamped = Math.max(0, Math.min(1, progress));

      const maxShift = viewportH * 0.72;
      setCareersShift(clamped * maxShift);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className={styles.wrapper} ref={wrapperRef}>
      <div className={styles.whySticky}>
        <div className={styles.whyCard}>
          <div className={styles.titleRow}>
            <h2 className={styles.title}>WHY US?</h2>
            <div className={styles.hexIcon}>
              <span>FIRE</span>
            </div>
          </div>

          <div className={styles.columns}>
            <div className={styles.whyCardBox}>
              <h3 className={styles.cardTitle}>INTEGRITY</h3>
              <p className={styles.cardText}>
                We uphold the highest standards of integrity in all our activities.
                We believe that fair trading practices are fundamental to our success
                and the trust our partners place in us.
              </p>
            </div>

            <div className={styles.whyCardBox}>
              <h3 className={styles.cardTitle}>TRANSPARENCY</h3>
              <p className={styles.cardText}>
                Transparency drives trust. We are committed to providing all the
                necessary and relevant information to our partners, empowering them to
                make informed decisions.
              </p>
            </div>

            <div className={styles.whyCardBox}>
              <h3 className={styles.cardTitle}>EXPEDIENCY</h3>
              <p className={styles.cardText}>
                High performance and rapid response to changes in market conditions
                ensure the optimal outcome for every project.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={styles.careersWrap}
        ref={careersRef}
        style={{ transform: `translateY(-${careersShift}px)` }}
      >
        <section className={styles.careersCard}>
          <div className={styles.titleRow}>
            <h2 className={styles.title}>CAREERS</h2>
            <div className={styles.hexIcon}>
              <span>CUP</span>
            </div>
          </div>

          <div className={styles.careersGrid}>
            <div className={styles.photoBlock}>
              <img
                className={styles.photoImage}
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
                alt="Team collaboration at workplace"
                loading="lazy"
              />
              <div className={styles.photoOverlay} aria-hidden="true" />
            </div>

            <div className={styles.careerContent}>
              <h3 className={styles.careerHeading}>WORKING AT RAVEN</h3>
              <p>
                Your ambition is boundless?
                <br />
                Your long-term plan is to rock?
                <br />
                You play to win?
              </p>
              <p>If yes - come and work with us.</p>
              <p>We work as a team, united by a common goal - to succeed.</p>
              <button type="button" className={styles.openPositionsBtn}>
                EXPLORE OPEN POSITIONS
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
