import styles from "./page.module.css";
import Search from "@/components/Search";
import CardsList from "@/components/CardsList";

export default function Home() {
  return (
    <main className={styles.main}>
      <CardsList/>
    </main>
  );
}
