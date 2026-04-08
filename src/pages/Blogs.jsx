import BlogGrid from "../components/Blogs/BlogGrid";
import styles from "../style/blogs.module.css";
import BackHomeButton from "../components/Shared/BackHomeButton";
import { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import blogsData from "../data/blogsData";

export default function Blogs() {
  const [remoteBlogs, setRemoteBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/medium");
        const data = await res.json();
        if (cancelled) return;

        if (res.ok && data?.ok && Array.isArray(data.items)) {
          setRemoteBlogs(data.items);
        }
      } catch {
        // fallback handled below
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const blogsToShow = useMemo(() => {
    const cleanedRemote = remoteBlogs.filter((b) => b?.title && b?.url);
    return cleanedRemote.length ? cleanedRemote : blogsData;
  }, [remoteBlogs]);

  useEffect(() => {
    if (!loading) {
      requestAnimationFrame(() => AOS.refresh());
    }
  }, [loading, blogsToShow.length]);

  return (
    <section className={styles.blogSection}>
      <BackHomeButton />
      <h1
        className={styles.blogTitle}
        data-aos="fade-down"
        data-aos-duration="900"
        data-aos-easing="ease-out-cubic"
      >
        Blogs
      </h1>

      <BlogGrid blogs={blogsToShow} loading={loading} />
    </section>
  );
}