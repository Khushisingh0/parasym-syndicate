import { Link } from "react-router-dom";
import styles from "../../style/blogs.module.css";

const CaseStudyCard = ({ study, aosDelay = 0 }) => {
  return (
    <div
      className={styles.card}
      data-aos="fade-up"
      data-aos-duration="850"
      data-aos-easing="ease-out-cubic"
      data-aos-delay={aosDelay}
    >
      <div className={styles.content}>
        <h3>{study.title}</h3>
        <p className={styles.subtitle}>{study.serviceLine}</p>

        <div className={styles.footer}>
          <span>{study.sector}</span>
          <Link to={`/case-studies/${study.id}`} className={styles.viewBtn}>
            View →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
