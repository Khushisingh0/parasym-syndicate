import { Link } from "react-router-dom";
import styles from "../../style/blogs.module.css";

const BlogCard = ({ blog }) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${blog.coverImage})` }}
      />

      <div className={styles.content}>
        <h3>{blog.title}</h3>
        <p className={styles.subtitle}>{blog.subtitle}</p>

        <div className={styles.footer}>
          <span>{blog.date}</span>
          <Link to={`/blogs/${blog.id}`}>
            <button className={styles.viewBtn}>View →</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;