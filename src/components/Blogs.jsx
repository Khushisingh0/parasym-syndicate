import styles from "../style/blogs.module.css";

const blogsData = [
  {
    id: "future-intelligence",
    title: "The Future of Intelligence Architecture",
    category: "Intelligence",
    date: "Feb 2026",
    desc:
      "How multi-domain intelligence systems are redefining global security strategy and risk anticipation.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
  },
  {
    id: "ai-server-defence",
    title: "AI Server Defence Systems",
    category: "Artificial Intelligence",
    date: "Jan 2026",
    desc:
      "Next-generation AI-driven server defense mechanisms protecting critical infrastructure.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },
  {
    id: "geopolitical-risk",
    title: "Geopolitical Risk & Strategic Foresight",
    category: "Geopolitics",
    date: "Dec 2025",
    desc:
      "Understanding interconnected global pressures shaping modern governance decisions.",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
  },
];

export default function Blogs() {
  return (
    // ✅ Only this changed (div → section + id)
    <section id="blogs" className={styles.blogPage}>
      
      <div className={styles.hero}>
        <h1>BLOGS</h1>
        <p>Intelligence analysis, cyber evolution & risk foresight.</p>
      </div>

      <div className={styles.grid}>
        {blogsData.map((blog) => (
          <div key={blog.id} className={styles.card}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${blog.image})` }}
            >
              <div className={styles.overlay}></div>
            </div>

            <div className={styles.content}>
              <span className={styles.category}>{blog.category}</span>
              <h3>{blog.title}</h3>
              <p>{blog.desc}</p>
              <div className={styles.footer}>
                <span>{blog.date}</span>
                <button>Read Article →</button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}