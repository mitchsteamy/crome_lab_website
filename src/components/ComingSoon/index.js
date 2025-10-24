// src/components/ComingSoon/index.js
import Image from 'next/image'
import Link from 'next/link'
import styles from './ComingSoon.module.css'

export default function ComingSoon() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image
            src="/images/Crome Logo Icon.png"
            alt="CRoME Lab"
            width={120}
            height={120}
            className={styles.logo}
          />
        </div>
        
        <h1 className={styles.title}>
          CRoME Lab
        </h1>
        
        <div className={styles.tagline}>
          Collaborative Research On Medication use & family health
        </div>

        <div className={styles.comingSoonBox}>
          <h2 className={styles.comingSoonText}>Coming Soon</h2>
          <p className={styles.description}>
            We're working on something exciting! Our new research initiative will be launching soon.
            Stay tuned for updates on our innovative approach to improving medication safety and 
            health outcomes for families.
          </p>
        </div>

        <div className={styles.socialLinks}>
          <Link href="/" className={styles.homeButton}>
            Return to CRoME Lab Home
          </Link>
        </div>

        <div className={styles.footer}>
          <p>University of Kentucky | College of Pharmacy</p>
        </div>
      </div>

      {/* Animated background elements */}
      <div className={styles.backgroundCircle1}></div>
      <div className={styles.backgroundCircle2}></div>
      <div className={styles.backgroundCircle3}></div>
    </div>
  )
}