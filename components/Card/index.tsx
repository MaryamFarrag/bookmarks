'use client'
import { useState, useEffect } from 'react';
import { RepoCardProps } from './interface'
import styles from './styles.module.css'


const Card = ({ repoName, ownerName, starCount }: RepoCardProps) => { 
  const [isBookmarked, setIsBookmarked] = useState(false);
  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');

    const isBookmarked = bookmarks.some(
      (bookmark: RepoCardProps) =>
        bookmark.repoName === repoName &&
        bookmark.ownerName === ownerName &&
        bookmark.starCount === starCount
    );
    setIsBookmarked(isBookmarked);
  }, [repoName, ownerName, starCount]);

  const handleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    const repoData = { repoName, ownerName, starCount };

    if (isBookmarked) {
      const updatedBookmarks = bookmarks.filter(
        (bookmark: RepoCardProps) =>
          bookmark.repoName !== repoName ||
          bookmark.ownerName !== ownerName ||
          bookmark.starCount !== starCount
      );
      localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
      setIsBookmarked(false);
    } else {
      bookmarks.push(repoData);
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      setIsBookmarked(true);
    }
  };

  return (
        <div className={styles.card}>
          <div className={styles.repoInfo}>
            <h3 className={styles.repoName}>{repoName}</h3>
            <p className={styles.ownerName}>Owner: {ownerName}</p>
            <p className={styles.starCount}>Stars: {starCount}</p>
          </div>
        <button className={styles.bookmarkButton} onClick={handleBookmark}>
          {isBookmarked ? 'Remove from Bookmark' : 'Add to Bookmark'}
        </button>
      </div>
      )
}

export default Card
