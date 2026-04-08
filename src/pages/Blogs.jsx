import BlogGrid from "../components/Blogs/BlogGrid";
import styles from "../style/blogs.module.css";
import BackHomeButton from "../components/Shared/BackHomeButton";

export default function Blogs() {
  return (
    <section className={styles.blogSection}>
      <BackHomeButton />
      <h1 className={styles.blogTitle}>
        Blogs
      </h1>

      <BlogGrid />
    </section>
  );
}