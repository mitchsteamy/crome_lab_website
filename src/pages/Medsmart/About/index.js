// src/components/About/index.js
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.sectionTitle}>About</h2>
      
      <div className={styles.subsection}>
        <h3>Introduction</h3>
        <p>
          MedSMA℞T: Adventures in PharmaCity was developed to educate adolescents about safe opioid management. 
          This game explores the life of Shan the sheep, who recently broke their arm. Players help Shan make 
          medication management decisions throughout the day. The goal of this game is to teach adolescents the 
          proper way to deal with these situations and make safe decisions for themselves and for others around them. 
          The game helps the player to learn by allowing their decisions to affect the outcome of the game. 
          By playing MEDSMA℞T, we hope adolescents will learn ways to keep themselves and others safe by exposing 
          them to real life conflicts they may face.
        </p>
      </div>

      <div className={styles.subsection}>
        <h3>Medication Misuse</h3>
        <p>
          In proper dosages, medication can lead to faster recovery and act as a treatment or cure of ailments. 
          However, when used improperly, medication can lead to many new issues that can be harmful or even fatal. 
          Medication misuse comes from improper consumption, including taking more medication than recommended, 
          taking medication too frequently, or taking medication that is not yours. A medical professional makes 
          a prescription decision based on an individual's health history, metabolism, and many other factors that 
          helps prevent dangerous situations. This is why medication must be taken as prescribed, by the person who 
          it is prescribed to, stored in a safe and secure location, and discarded properly when expired to ensure 
          that it poses no risk to anyone it is not meant for.
        </p>
      </div>

      <div className={styles.subsection}>
        <h3>Purpose</h3>
        <p>
          The purpose of MedSMA℞T: Adventures in PharmaCity is to educate adolescents about safe opioid management: 
          proper consumption, storage, and disposal of prescribed opioids. This is demonstrated through the life of 
          Shan the sheep who encounters various instances similar to those an adolescent may face with pressure to 
          take or give opioids. The player is meant to guide Shan to make safe decisions to learn proper care of opioids. 
          Even if players make a mistake in guiding Shan to make healthy choices, they are able to return to the 
          situation and attempt it again to make the safest decision. Adolescents are meant to learn to make safe 
          choices on their own without putting themselves in a dangerous situation, so that, if these situations 
          ever arose in real life, players would be able to make an educated and safe choice.
        </p>
      </div>

      <div className={styles.subsection}>
        <h3>Goals</h3>
        <p>
          The main goal of MedSMA℞T: Adventures in PharmaCity is to teach adolescents how to stay safe in situations 
          where they encounter opioid misuse. This educational game has many goals that will develop players' skills 
          in making informed decisions surrounding proper opioid usage.
        </p>
        
        <div className={styles.goalsList}>
          <p><strong>These goals include:</strong></p>
          <ul>
            <li>Proper storage of opioids in a secure location</li>
            <li>Proper consumption of opioids</li>
            <li>Rejecting opioids not prescribed to the player</li>
            <li>Ensuring that the player is the only one who takes their opioids</li>
            <li>Taking opioids at the appropriate frequency</li>
            <li>Disposal of opioids in a safe location and in a safe manner</li>
          </ul>
        </div>

        <div className={styles.goalsList}>
          <p><strong>Other goals of this game are more centered towards the lessons learned by the player:</strong></p>
          <ul>
            <li>Learning proper use of opioids and overall safety</li>
            <li>Application of these learned skills</li>
            <li>Remembering these skills for future use and education of peers</li>
          </ul>
        </div>

        <p>
          As technology advances, educational games are becoming more effective in teaching essential lessons and 
          skills for adolescents, as they better engage this audience. Leading an adolescent through a potentially 
          dangerous situation and demonstrating a safe choice is more impactful to their memory than simply reading 
          or visualizing a situation. This educational game provides these experiences by showing choices, as well 
          as the benefits and consequences that accompany them, without placing the player in danger. The engaged 
          player will hopefully develop a stronger association within their memory, leading to better practice and 
          action later in life.
        </p>
      </div>

      <a href="#top" className={styles.topLink}>TOP↑</a>
    </section>
  )
}