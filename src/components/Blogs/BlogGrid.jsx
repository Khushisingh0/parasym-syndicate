import blogsData from "../../data/blogsData";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";
import styles from "../../style/blogs.module.css";

const BlogGrid = ({ limit }) => {
  const displayBlogs = limit
    ? blogsData.slice(0, limit)
    : blogsData;

  return (
    <div className={styles.wrapper}>

      <div className={styles.grid}>
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