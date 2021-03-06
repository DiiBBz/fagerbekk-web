import styles from '../styles/MainComp.module.css'
import Image from 'next/image'

export default function MainComp() {
  return (
    <>
      <div className={styles.main}>
          {/*Image*/}
          <Image
          src="/images/profile.png"
          width="400px"
          height="400px"
          alt="Profile"
          />
          {/*Text*/}
          <div className={styles.textSection}>
            <h1 className={styles.subtitle}>Kristoffer Fagerbekk</h1>
            <p className={styles.subtitleText}>If you want to contact me you can send me an email! :D</p>
          </div>
      </div>
    </>
)}