import { useEffect, useState } from "react";
import styles from "../style/loader.module.css";
import logo from "../assets/logo.png";

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

 useEffect(() => {
  let current = 0;

  const interval = setInterval(() => {
    const increment =
      current < 50
        ? Math.random() * 5    
        : current < 80
        ? Math.random() * 3     
        : Math.random() * 2;    

    current += increment;

    if (current >= 100) {
      current = 100;
      clearInterval(interval);

      setTimeout(() => {
        setFadeOut(true);
        setTimeout(onFinish, 600);
      }, 300); 
    }

    setProgress(Math.floor(current));
  }, 40); 

  return () => clearInterval(interval);
}, [onFinish]);


  return (
    <div className={`${styles.loader} ${fadeOut ? styles.fadeOut : ""}`}>
      <div className={styles.gridBackground}></div>

      <p className={styles.topText}>INITIALIZING PARASYM PROTOCOL</p>

      <img src={logo} alt="Parasym Syndicate" className={styles.logo} />

      <div className={styles.barWrap}>
        <span className={styles.percent}>{progress}%</span>

        <div className={styles.bar}>
          <div
            className={styles.fill}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <p className={styles.bottomText}>LOADING PROTOCOLS...</p>
    </div>
  );
}
