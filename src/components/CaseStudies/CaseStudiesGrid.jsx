import { Link } from "react-router-dom";
import styles from "../../style/blogs.module.css";
import caseStudiesData from "../../data/caseStudiesData";
import CaseStudyCard from "./CaseStudyCard";

const CaseStudiesGrid = ({ limit }) => {
  const display = limit ? caseStudiesData.slice(0, limit) : caseStudiesData;

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {display.map((study, index) => (
          <CaseStudyCard
            key={study.id}
            study={study}
            aosDelay={index * 130}
          />
        ))}
      </div>

      {limit && (
        <div className={styles.seeMoreContainer}>
          <Link to="/case-studies" className={styles.seeMoreBtn}>
            See more details →
          </Link>
        </div>
      )}
    </div>
  );
};

export default CaseStudiesGrid;
