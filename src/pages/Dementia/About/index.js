// src/components/About/index.js
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.sectionTitle}>About</h2>

      <div className={styles.subsection}>
        <h3>Introduction</h3>
        <p>
          Dementia affects more than 6 million Americans, with numbers expected to nearly double by 2050. While much attention 
          is given to those living with dementia, family caregivers face significant challenges that are often overlooked. 
          OutSMA℞T Dementia is a new serious game under development by the CRoME Lab. This new evidence-based serious game is designed
          with caregivers in mind. In the game, players take on the role of both an older adult living with dementia who interacts with
          other adults, family members, medical professionals, and their adult child who is acting as their caregiver. During the game,
          players will be immersed in different realistic contexts, from holidays at a relative’s house to complex social scenarios that
          include distracting environmental dynamics. The game will help develop and sharpen caregiving strategies, help caregivers
          manage the emotional aspects of caring for someone living with dementia, and also provide a glimpse into what it is like to
          live with cognitive decline.
        </p>
      </div>

      <div className={styles.subsection}>
        <h3>Serious Games</h3>
        <p>
          “Serious games” are digital tools that promote positive health behaviors by offering innovative learning methods
          for delivering health information. While serious games have been shown to be successful in cancer medication
          adherence and self-advocacy during cancer treatment, a theory-driven serious game to educate youth about cancer
          and how to reduce cancer risk has not been developed and evaluated to date. Serious games can encourage active
          engagement and foster positive health behaviors, thus, we have the potential to affect change with a well-designed
          serious game targeted for adolescents. Because of their frequent use and repetitive nature, serious games are an
          ideal educational tool for positive health impact. They have been shown to enhance learning and reinforce content
          by providing immediate feedback to the player. While serious games have been successful in cancer medication
          adherence and self-advocacy during cancer treatment, a serious game that teaches adolescents about cancer basics
          and risk has not been found in the literature to date.
        </p>
        <p>
          Our long-term goal is to determine whether a game-based intervention can improve adolescents’ cancer knowledge
          and reduce risky behaviors. This research builds upon Dr. Abraham’s prior ICTR-funded work focused on a serious
          game-based intervention to promote safe prescription opioid use.
        </p>
      </div>
      <a href="#top" className={styles.topLink}>TOP↑</a>
    </section>
  )
}