import Link from 'next/link'
import styles from './styles.module.css'

const Navbar = () => { 
  return (
    <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/bookmarks">Your Bookmarks</Link>
    </nav>     
  )
}

export default Navbar
