// src/components/About/index.js
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.sectionTitle}>About</h2>

      <div className={styles.subsection}>
        <h3>Introduction</h3>
        <p>
          The opioid crisis is a challenging problem that affects both adults and adolescents, thereby putting
          families at risk of the negative consequences of prescription opioid misuse. Many adolescents obtain
          prescription opioids from friends, relatives, or the healthcare system and are vulnerable to intentional
          misuse as well as accidental poisonings. Additionally, parents often model inappropriate prescription
          opioid use by sharing unused medications with their children to treat minor injuries, incorrectly storing
          opioids in the home, or giving their children incorrect dosages. Given that adolescents report parents,
          especially mothers, as useful resources for information about opioid safety, an opportunity exists to
          positively impact family communication and practices around opioid safety and the responsible management
          of prescription medication.
        </p>
      </div>

      <div className={styles.subsection}>
        <h3>Purpose</h3>
        <p>
          Currently, there are no standard ways to encourage parents to have medication safety conversations with
          their children. Prior research found that adolescents and parents desired innovative technologies, such
          as serious games, to facilitate communication about safe and responsible use of medications. “Serious
          games” are effective digital tools used to promote positive health behaviors and offer new, innovative,
          and self-directed learning methods for delivering health information. In collaboration with community
          partners and game developers, our team created an innovative, serious game, MEDSMA℞T: Adventures in
          PharmaCity, to improve prescription opioid safety for adolescents and their families. This novel and
          engaging game can be used as an interactive tool to promote and facilitate parent-child conversations
          about prescription opioid medication safety.
        </p>
      </div>

      <div className={styles.subsection}>
        <h3>Goal</h3>
        <p>
          Our goal is to teach adolescents and their families the proper way to handle and store
          prescription medications and make safe decisions for themselves and others around them.
          By playing MEDSMA℞T, we hope adolescents and their families will learn ways to keep
          themselves and others safe by exposing them to real life situations they may face. By
          utilizing these hands-on tools, we hope MEDSMA℞T and the Family Medication Safety Plan
          can help families facilitate family communication around medication practices and create
          personalized medication safety plans
        </p>
      </div>

      <a href="#top" className={styles.topLink}>TOP↑</a>
    </section>
  )
}