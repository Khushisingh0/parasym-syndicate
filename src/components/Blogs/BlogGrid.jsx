import blogsData from "../../data/blogsData";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";
import styles from "../../style/blogs.module.css";

const BlogGrid = ({ limit, blogs, loading }) => {
  const sourceBlogs = Array.isArray(blogs) ? blogs : blogsData;
  const displayBlogs = limit ? sourceBlogs.slice(0, limit) : sourceBlogs;

  return (
    <div className={styles.wrapper}>

      <div className={styles.grid}>
        {!displayBlogs.length && loading ? (
          <div style={{ color: "#fff", opacity: 0.8 }}>Loading blogs…</div>
        ) : null}
        {displayBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {/* 👇 Show See More button only on Home */}
      {limit && (
        <div className={styles.seeMoreContainer}>
          <Link to="/blogs">
            <button className={styles.seeMoreBtn}>
              See More →
            </button>
          </Link>
        </div>
      )}

    </div>
  );
};

export default BlogGrid;