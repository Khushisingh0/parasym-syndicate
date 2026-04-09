import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import caseStudiesData from "../data/caseStudiesData";
import styles from "../style/blogs.module.css";

function splitIntoBlocks(text) {
  const raw = String(text ?? "").trim();
  if (!raw) return [];

  // normalize newlines and split by blank lines
  return raw
    .replace(/\r\n/g, "\n")
    .split(/\n\s*\n/g)
    .map((b) => b.trim())
    .filter(Boolean);
}

function isHeading(block) {
  const s = block.trim();
  if (s.length > 120) return false;
  if (/^(Phase\s+[IVX]+:)/i.test(s)) return true;
  if (/^\d+\.\s+/.test(s)) return true;
  if (
    /^(Background|Client Profile|Strategic Approach|Quantifiable Results|Why This Matters|The Landscape Before the Break|The Moment of Rupture|The Immediate Fallout|The Intervention|The Outcome|Client Reflection)/i.test(
      s
    )
  )
    return true;
  return false;
}

export default function CaseStudyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const study = caseStudiesData.find((c) => c.id === id);

  const blocks = useMemo(() => splitIntoBlocks(study?.body), [study?.body]);

  if (!study) return <h2 style={{ color: "#fff" }}>Case Study Not Found</h2>;

  return (
    <section className={styles.detailPage}>
      <button
        type="button"
        className={styles.closeBtn}
        aria-label="Close case study"
        onClick={() => navigate("/case-studies")}
      >
        ✕
      </button>

      <h1>{study.title}</h1>
      <h3>{study.serviceLine}</h3>
      <div className={styles.metaBlock}>
        {study.client && study.client !== "Confidential" ? (
          <div className={styles.metaRow}>
            <span className={styles.metaLabel}>Client:</span>{" "}
            <span className={styles.metaValue}>{study.client}</span>
          </div>
        ) : null}
        <div className={styles.metaRow}>
          <span className={styles.metaLabel}>Sector:</span>{" "}
          <span className={styles.metaValue}>{study.sector}</span>
        </div>
        <div className={styles.metaRow}>
          <span className={styles.metaLabel}>Crisis:</span>{" "}
          <span className={styles.metaValue}>{study.crisis}</span>
        </div>
        <div className={styles.metaRow}>
          <span className={styles.metaLabel}>Service Line:</span>{" "}
          <span className={styles.metaValue}>{study.serviceLine}</span>
        </div>
      </div>

      <div className={styles.detailContent}>
        {blocks.map((block, idx) =>
          isHeading(block) ? (
            <h2 key={idx}>{block}</h2>
          ) : (
            <p key={idx}>{block}</p>
          )
        )}
      </div>
    </section>
  );
}

