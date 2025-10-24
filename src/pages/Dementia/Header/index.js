// src/components/Header/index.js
import Image from 'next/image'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Image
            src="/images/OSDementiaLogoStandAlone.png"
            alt="OutSmart Dementia Logo"
            width={400}
            height={200}
            className={styles.logo}
            priority
          />
        </div>
{/*         <p className={styles.tagline}>
          Learn about cancer and prevention.
        </p> */}
        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            <li><a href="#about">About</a></li>
            <li><a href="#media">Media</a></li>
            {/* <li><a href="#resources">Resources</a></li> */}
            {/* <li><a href="#publications">Publications</a></li> */}
            <li><a href="#contact">Contact</a></li>
            {/* <li><a href="#funding">Funding Support</a></li> */}
          </ul>
        </nav>
      </div>
    </header>
  )
}