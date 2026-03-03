import BlogGrid from "../components/Blogs/BlogGrid";
import styles from "../style/blogs.module.css";

export default function Blogs() {
  return (
    <section className={styles.blogSection}>
      <h1 className={styles.blogTitle}>
        Blogs
      </h1>

      <BlogGrid />
    </section>
  );
}