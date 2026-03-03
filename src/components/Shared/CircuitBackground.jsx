import styles from "../style/circuit.module.css";

export default function CircuitBackground() {
  return (
    <div className={styles.circuitBg}>
      <div className={styles.circuitLayer}></div>
      <div className={styles.flowLayer}></div>
    </div>
  );
}
