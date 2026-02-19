import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "../style/chip.module.css";

export default function LeftChipAnimation() {
  const chipRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      chipRef.current,
      { x: -80, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div ref={chipRef} className={styles.wrapper}>
      <div className={styles.circuit} />

      <div className={styles.chips}>
        <div className={styles.chip}>
          <div className={styles.chipTop} />
          <div className={styles.chipGlow} />
        </div>

        <div className={styles.chip}>
          <div className={styles.chipTop} />
          <div className={styles.chipGlow} />
        </div>

        <div className={styles.chip}>
          <div className={styles.chipTop} />
          <div className={styles.chipGlow} />
        </div>
      </div>

      <div className={styles.flowLines} />
    </div>
  );
}
