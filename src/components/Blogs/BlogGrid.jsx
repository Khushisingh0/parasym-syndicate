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
        {displayBlogs.map((blog, index) => (
          <BlogCard
            key={blog.id ?? blog.url ?? `blog-${index}`}
            blog={blog}
            aosDelay={index * 130}
          />
        ))}
      </div>

      {/* 👇 Show See More button only on Home */}
      {limit && (
        <div className={styles.seeMoreContainer}>
          <Link to="/blogs" className={styles.seeMoreBtn}>
            See More →
          </Link>
        </div>
      )}

    </div>
  );
};

export default BlogGrid;