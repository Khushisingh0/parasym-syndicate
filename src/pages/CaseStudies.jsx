import styles from "../style/caseStudies.module.css";

const caseStudies = [
  {
    id: 1,
    title: "Predictive Risk Modeling for Cross-Border Instability",
    category: "Geopolitical Intelligence",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    desc: "Multi-domain intelligence deployment reducing geopolitical volatility exposure."
  },
  {
    id: 2,
    title: "Adaptive AI-Based Infrastructure Defense",
    category: "Cybersecurity & AI",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    desc: "AI-driven anomaly detection protecting enterprise-grade infrastructure."
  },
  {
    id: 3,
    title: "Illicit Crypto Flow Reconstruction",
    category: "Financial Intelligence",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040",
    desc: "Blockchain analytics uncovering complex cross-chain laundering networks."
  },
   {
    id: 4,
    title: "Illicit Crypto Flow Reconstruction",
    category: "Financial Intelligence",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    desc: "Blockchain analytics uncovering complex cross-chain laundering networks."
  },
   {
    id: 5,
    title: "Illicit Crypto Flow Reconstruction",
    category: "Financial Intelligence",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    desc: "Blockchain analytics uncovering complex cross-chain laundering networks."
  }
];

export default function CaseStudies() {
  return (
    <section className={styles.section} id="case-studies">
      
      <div className={styles.header}>
        <h1>CASE STUDIES</h1>
        <p>Operational Intelligence Deployments</p>
      </div>

      <div className={styles.grid}>
        {caseStudies.map((item, index) => (
          <div
            key={item.id}
            className={`${styles.card} ${index === 0 ? styles.featured : ""}`}
          >
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${item.image})` }}
            />

            <div className={styles.content}>
              <span>{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <button>View Case →</button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}