'use client'
import Card from "@/components/Card";
import styles from "./styles.module.css";
import { Repo } from "./interface";



const BookmarksList = () => {
    const bookmarks = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("bookmarks") || "[]") : [];
    return (
    <div className={styles.cardList}>
      {bookmarks.length > 0 ? (
        bookmarks.map((bookmark: Repo, index: number) => (
          <Card
            key={bookmark.id || index}
            repoName={bookmark.repoName}
            ownerName={bookmark.ownerName}
            starCount={bookmark.starCount}
          />
        ))
      ) : (
        <p>No bookmarks found.</p>
      )}
    </div>
  );
};

export default BookmarksList;