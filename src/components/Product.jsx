import styles from "../style/products.module.css";

const products = [
  {
    id: "sentinel",
    title: "Sentinel X",
    desc:
      "Provides early warning intelligence by detecting emerging geopolitical, cyber, economic, and strategic pressure before events materialize.",
  },
  {
    id: "lightbringer",
    title: "Lightbringer X",
    desc:
      "Conducts controlled adversary simulation and AI-assisted red teaming to identify real-world failure paths across systems, processes, and human behavior.",
  },
  {
    id: "gabrielle",
    title: "Gabrielle X",
    desc:
      "Ensures information integrity by detecting manipulated media, deepfake content, synthetic narratives, and coordinated disinformation campaigns.",
  },
  {
    id: "argus",
    title: "Argus X",
    desc:
      "Reconstructs illicit financial flows across banking systems and crypto networks, supporting AML, fraud detection, and corruption investigations.",
  },
  {
    id: "parasym",
    title: "Parasym OS",
    desc:
      "A unified operating environment for intelligence, cybersecurity, AI, and investigation.",
    coming: true,
  },
];

export default function Products() {
  return (
    <section id="products" className={styles.section}>

      <div className={styles.header} data-aos="fade-up">
        <h2>OUR PRODUCTS</h2>
        <p>CORE INTELLIGENCE CAPABILITIES</p>
      </div>

      <div className={styles.grid}>
        {products.map((item, index) => (
          <div
            key={item.id}
            className={styles.card}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            {item.coming && (
              <span className={styles.coming}>Coming Soon</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
