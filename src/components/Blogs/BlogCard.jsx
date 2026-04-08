import { Link } from "react-router-dom";
import styles from "../../style/blogs.module.css";

const BlogCard = ({ blog }) => {
  const hasExternalUrl = Boolean(blog?.url);
  const cover = blog?.coverImage || "";
  const openExternal = () => {
    if (!blog?.url) return;
    window.open(blog.url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={styles.card}
      onClick={hasExternalUrl ? openExternal : undefined}
      role={hasExternalUrl ? "link" : undefined}
      tabIndex={hasExternalUrl ? 0 : undefined}
      onKeyDown={
        hasExternalUrl
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") openExternal();
            }
          : undefined
      }
      style={hasExternalUrl ? { cursor: "pointer" } : undefined}
    >
      <div
        className={styles.image}
        style={{ backgroundImage: cover ? `url(${cover})` : undefined }}
      />

      <div className={styles.content}>
        <h3>{blog.title}</h3>
        <p className={styles.subtitle}>{blog.subtitle}</p>

        <div className={styles.footer}>
          <span>{blog.date}</span>
          {hasExternalUrl ? (
            <a
              href={blog.url}
              target="_blank"
              rel="noreferrer"
              className={styles.viewBtn}
              onClick={(e) => e.stopPropagation()}
            >
              View →
            </a>
          ) : (
            <Link to={`/blogs/${blog.id}`} className={styles.viewBtn}>
              View →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;