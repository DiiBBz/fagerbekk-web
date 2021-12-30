import styles from '../../styles/navbar.module.css'
import Link from 'next/link'

export default function Navbar({ children }) {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navlogo}>
            <Link className={styles.navlogo2} href="/">Fagerbekk</Link>
            </div>
            <ul>
              <li>
              <Link href="/">Home</Link>
              </li>
              <li>
              <Link href="/">Random</Link>
              </li>
              <li>
              <Link href="/">Dropdown</Link>
              </li>
              <li>
              <Link href="/">Contact</Link>
              </li>
            </ul>
        </nav>
    )
}