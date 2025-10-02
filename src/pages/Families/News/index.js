// src/components/FamiliesNews/index.js
import styles from './News.module.css'

export default function FamiliesNews() {
  return (
    <section id="news" className={styles.news}>
      <h2 className={styles.sectionTitle}>In the News</h2>
      
      <div className={styles.newsItem}>
        <p>
          <a href="https://prc.wisc.edu/a-game-based-approach-to-engage-teens-on-medication-safety-uwprc-small-grant-projects/" target="_blank" rel="noopener noreferrer">A game-based approach to engage teens on medication safety- UWPRC Small Grant Projects</a>: This article discusses Dr. Abraham's project Assessing the Feasibility of Utilizing a Game-based Participatory Approach to Co-create Personalized Family Opioid Medication Safety Plans. The focus of this study is to see how using a game-based intervention, MEDSMA℞T: Adventures in PharmaCity, can help promote medication safety among family members. It also gives parent a fun way to engage with their child/children in conversations about medication safety.
        </p>
      </div>

      <a href="#top" className={styles.topLink}>TOP↑</a>
    </section>
  )
}