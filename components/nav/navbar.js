import styles from '../../styles/navbar.module.css'
import Link from 'next/link'

export default function Navbar({ children }) {
    return (
        <nav className={styles.navbar}>
            <Link href="/"><a className={styles.navlogo}>Fagerbekk</a></Link>
            <ul className={styles.navmenu}>
                <li className={styles.navitem} >
                <Link href="/">Home</Link>
                </li>
                <li className={styles.navitem} >
                <Link href="/">Random</Link>
                </li>
                <li className={styles.navitem} >
                    <Link href="/contact"><a className={styles.navcontact}>Contact</a></Link>
                </li>
            </ul>
        </nav>
    )
}