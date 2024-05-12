import styles from "./page.module.css";
import BookmarksList from "@/components/BookmarksList";

export default function Page() {  
  return (
    <section className={styles.bookmark}>
      <h1>Your Bookmarks</h1>
      <BookmarksList /> {/* Use the BookmarksList component */}

    </section>
  );
}
