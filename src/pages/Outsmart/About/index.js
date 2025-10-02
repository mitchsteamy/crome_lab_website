// src/components/About/index.js
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.sectionTitle}>About</h2>

      <div className={styles.subsection}>
        <h3>Introduction</h3>
        <p>
          Cancer is one of the leading causes of death within the United States and the fourth leading cause of
          death in adolescents, followed by accidents, suicide, and homicide. Additionally, members of
          racial/ethnic minorities, people living in rural areas with limited access to health care, and/or of
          lower socioeconomic status, report having higher rates of cancer with worse outcomes. Studies have shown
          unhealthy lifestyle factors significantly contribute to cancer diagnosis among adolescents. Nearly half
          of all cancer diagnoses among adolescents are subject to five main lifestyle factors: tobacco use,
          alcohol consumption, eating habits, lack of exercise, and unprotected sunlight exposure. Prior research
          indicates there is a significant knowledge gap among youth about their perceived susceptibility and cancer
          risks. Given this gap, it is essential to include youth voices and perspectives in the development of a
          serious game to heighten relevance for young people. Since adolescents are highly engaged users of digital
          technology, and educational games can foster positive health behaviors, we have the potential to affect
          change with a well-designed serious game for adolescents. To our knowledge, there have been limited cancer
          prevention education programs designed and tailored for youth in the U.S schools. Thus, it is critical to
          educate vulnerable adolescents about cancer prevention because they are at a pivotal time of susceptibility
          and active learning of healthy behaviors to decrease their cancer risks.
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

      <div className={styles.subsection}>
        <h3>OutSMA℞T Cancer Game</h3>
        <p>
          OutSMA℞T Cancer focuses on cancer prevention among adolescents using an iterative engagement process. The initial 
          conceptualization of the game was informed by Dr. Abraham’s Serious Game Behavior Change Framework and the Cancer 
          Clear & Simple curriculum created by the University of Wisconsin-Madison Cancer Health Disparities Initiatives. 
          In addition, preliminary data from a mixed-methods, participatory pilot study, “Cancer Awareness Among Teens,” 
          funded by the American Cancer Society and the UW Carbone Cancer Center provided the foundation of OutSMA℞T Cancer. 
          This serious game aims to provide game-based cancer education targeted towards adolescents. Adolescents are meant 
          to learn to make healthy lifestyle choices while receiving cancer education along the way. Through acquiring this 
          information, the adolescent will be able to make an educated and safe choice if these situations ever arose in 
          real life.
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