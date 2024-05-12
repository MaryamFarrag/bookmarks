'use client'
import Card from "@/components/Card";
import styles from "./page.module.css";
import { Repo } from "./interface";

export default function Page() {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
  
  return (
    <section className={styles.bookmark}>
      <h1>Your Bookmarks</h1>
      {bookmarks.length > 0 ? (
        <div className={styles.cardList}>
          {bookmarks.map((bookmark:Repo,index:number) => (
            <Card
              key={bookmark.id || index}
              repoName={bookmark.repoName}
              ownerName={bookmark.ownerName}
              starCount={bookmark.starCount}
            />
          ))}
        </div>
      ) : (
        <p>No bookmarks found.</p>
      )}
    </section>
  );
}
