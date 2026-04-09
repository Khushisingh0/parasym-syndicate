import styles from "../style/blogs.module.css";
import CaseStudiesGrid from "../components/CaseStudies/CaseStudiesGrid";
import { useNavigate } from "react-router-dom";

export default function CaseStudies() {
  const navigate = useNavigate();
  return (
    <section className={styles.blogSection}>
      <button
        type="button"
        className={styles.closeBtn}
        aria-label="Close case studies"
        onClick={() => navigate("/")}
      >
        ✕
      </button>
      <h1
        className={styles.blogTitle}
        data-aos="fade-down"
        data-aos-duration="900"
        data-aos-easing="ease-out-cubic"
      >
        Case Studies
      </h1>

      <CaseStudiesGrid />
    </section>
  );
}