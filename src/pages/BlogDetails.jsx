import { useParams } from "react-router-dom";
import blogsData from "../data/blogsData";
import styles from "../style/blogs.module.css";

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogsData.find((b) => b.id === id);

  if (!blog) return <h2>Article Not Found</h2>;

  return (
    <section className={styles.detailPage}>
      <h1>{blog.title}</h1>
      <h3>{blog.subtitle}</h3>
      <p className={styles.date}>{blog.date}</p>

      <img
        src={blog.coverImage}
        alt={blog.title}
        className={styles.detailImage}
      />

      <div className={styles.detailContent}>
        {blog.content.map((block, index) => {
          if (block.type === "paragraph") {
            return <p key={index}>{block.text}</p>;
          }

          if (block.type === "heading") {
            return <h2 key={index}>{block.text}</h2>;
          }

          return null;
        })}
      </div>
    </section>
  );
}