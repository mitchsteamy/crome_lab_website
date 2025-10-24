// src/pages/outsmart/Media/index.js
import styles from './Media.module.css'

export default function Media() {
  return (
    <section id="media" className={styles.media}>
      <h2 className={styles.sectionTitle}>Media</h2>

      <div className={styles.gallery}>
        <div className={styles.imageContainer}>
          <img src="/images/OSDementiaKeyArtWithLogo.png" alt="Bookshelf scene" className={styles.image} />
        </div>
        <div className={styles.imageContainer}>
          <img src="/images/OSDementiaInteraction.png" alt="Cafeteria scene" className={styles.image} />
        </div>
      </div>

      <a href="#top" className={styles.topLink}>TOP↑</a>
    </section>
  )
}