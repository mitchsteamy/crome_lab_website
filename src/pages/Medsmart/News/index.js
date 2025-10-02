// src/components/News/index.js
import styles from './News.module.css'

export default function News() {
  return (
    <section id="news" className={styles.news}>
      <h2 className={styles.sectionTitle}>In the News</h2>
      
      <div className={styles.newsItem}>
        <p>
          <a href="https://attcnetwork.org/centers/great-lakes-attc/news/medsmart-adventures-pharmacity-game-based-learning-teach-safe" target="_blank" rel="noopener noreferrer">"MedSMART: Adventures in PharmaCity" - Game based Learning to Teach Safe Medication Handling</a>: This article written by the Great Lakes Addiction Technology Transfer Center (ATTC) covers an interview with the Principal Investigator, Dr. Abraham, on the serious game MedSMART: Adventures in PharmCity. This article answers many questions about the intentions of the game and how it will be used to further prescription drug knowledge in adolescents.
        </p>
      </div>

      <div className={styles.newsItem}>
        <p>
          <a href="https://pharmacy.wisc.edu/breaking-the-opioid-cycle-part-3/" target="_blank" rel="noopener noreferrer">Breaking the Opioid Cycle</a>: This article, written by Katie Gerhards, gives detailed information about the developmental phases of the serious game, MedSMART: Adventures in PharmCity. Its goal to help aid in the fight against opioid misuse. It also includes descriptions of the game, information from various professionals in the field, and how this game is being used to better prepare adolescents for risks they may face someday.
        </p>
      </div>

      <div className={styles.newsItem}>
        <p>
          <a href="https://buzz.pharmacy.wisc.edu/december-16-2019/#Abraham" target="_blank" rel="noopener noreferrer">Rennebohm Buzz</a>: This section of the UW-Madison School of Pharmacy's Rennebohm Buzz covers information regarding the inspiration and application of the MedSMART game from an interview with Dr. Abraham. The article also gives details on the future of this game and possible settings for use in opioid management education.
        </p>
      </div>

      <a href="#top" className={styles.topLink}>TOP↑</a>
    </section>
  )
}