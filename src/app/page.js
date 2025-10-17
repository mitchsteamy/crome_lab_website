// src/app/page.js - Homepage
import styles from './page.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroLogoContainer}>
            <Image
              src="/images/CRoME-lab-logo_2000x680.png"
              alt="CRoME Lab Logo"
              width={500}
              height={170}
              className={styles.heroLogo}
              priority
            />
          </div>
          <p className={styles.heroSubtitle}>
            Community-Engaged Research in Medication Education
          </p>
          <p className={styles.heroDescription}> 
            Developing novel methods for improving medication safety and health behaviors
            for vulnerable and underserved populations
          </p>
          <nav className={styles.navigation}>
            <ul className={styles.navList}>
              <li><a href="https://pharmacy.uky.edu/crome/crome-philosophy">Our Philosophy</a></li>
              <li><a href="https://pharmacy.uky.edu/crome/crome-interdisciplinary-approach">Our Interdisciplinary Approach</a></li>
              <li><a href="https://pharmacy.uky.edu/crome/crome-team">Our Team</a></li>
              <li><a href="https://pharmacy.uky.edu/crome/crome-collaborators">Our Collaborators</a></li>
              <li><a href="https://pharmacy.uky.edu/crome/crome-advisory-boards">Advisory Boards</a></li>
              <li><a href="https://pharmacy.uky.edu/crome/medsmart-games">The Games</a></li>
              <li><a href="https://pharmacy.uky.edu/crome/crome-lab-publications">Publications</a></li>
              <li><a href="https://pharmacy.uky.edu/crome/youth-research-opportunities">Research Opportunities</a></li>
              <li><a href="https://pharmacy.uky.edu/crome/crome-lab-news">News</a></li>

            </ul>
          </nav>
        </section>

        {/* Vision Section */}
        <section id="mission" className="section">
          <div className="container">
            <h2 className="section-title">Vision Statement</h2>
            <p className={styles.visionText}>
              Our vision is to build a thriving community of collaboration, excellence, innovation & leadership.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="section">
          <div className="container">
            <h2 className="section-title">Mission Statement</h2>
            <p className={styles.missionText}>
              Our mission is to develop, implement, and disseminate novel methods for improving
              medication safety and health behaviors for vulnerable and underserved populations,
              while training the next generation of researchers. Research projects within the CRoME Lab
              share the common goal of applying community-engaged, collaborative, and transdisciplinary
              approaches to improving medication use and health outcomes for families through education,
              prevention, and intervention programs.
            </p>
          </div>
        </section>

        {/* Research Cores Section */}
        <section id="research-cores" className={styles.researchCores}>
          <div className="container">
            <h2 className="section-title">Research Cores</h2>
            <p className={styles.coresDescription}>
              Our research team is dedicated to understanding the connections between families,
              healthcare teams, and technology (particularly serious games) in improving medication use,
              health outcomes, and overall wellbeing for vulnerable and under-served populations.
              Our four main cores include:
            </p>
            <div className={styles.coresGrid}>
              <div className={styles.coreCard}>
                <h3>Medication & Vaping Safety Interventions</h3>
                <p>Promoting safe medication practices through education and intervention programs.</p>
              </div>
              <div className={styles.coreCard}>
                <h3>Game-Based Learning</h3>
                <p>Developing serious games to engage users in health education and behavior change.</p>
              </div>
              {/*               <div className={styles.coreCard}>
                <h3>Culturally-centered Complementary and Alternative Medicine</h3>
                <p>C-CAM</p>
              </div> */}
              <div className={styles.coreCard}>
                <h3>Cancer Education and Literacy</h3>
                <p>Educating communities about cancer prevention and early detection strategies.</p>
              </div>
              <div className={styles.coreCard}>
                <h3>Cystic Fibrosis and Medication Management</h3>
                <p>Supporting families managing complex medication regimens for chronic conditions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Collaborative Research Section */}
        <section id="collaboration" className="section">
          <div className="container">
            <h2 className="section-title">Collaborative Research</h2>
            <p className={styles.collaborationText}>
              Collaboration is at the heart of our work. Collaborative partnerships and interdisciplinary
              research processes are essential to our ability to identify innovative solutions that address
              complex medication use and health challenges for patients and their families. These solutions
              require contextual understanding, longitudinal efforts, collaboration on multiple system levels,
              and interdisciplinary designs.
            </p>
            <ul className={styles.collaborationList}>
              <li>Collaboration via education</li>
              <li>Collaboration by engaging patients and family members</li>
              <li>Collaboration in overall research development and design</li>
              <li>Collaboration enhanced by the dual role of health professionals and researchers</li>
              <li>Collaborative involvement of community stakeholders throughout the research process</li>
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={styles.projects}>
          <div className="container">
            <h2 className="section-title">Our Projects</h2>
            <div className={styles.projectsGrid}>
              <div className={styles.projectCard}>
                <h3>MedSmart</h3>
                <p>
                  Adventures in PharmaCity - An educational game teaching adolescents about
                  safe opioid management through interactive scenarios.
                </p>
                <a href="/medsmart" className={styles.projectLink}>Learn More →</a>
              </div>
              <div className={styles.projectCard}>
                <h3>OutSmart Cancer</h3>
                <p>
                  A serious game focused on cancer prevention education for adolescents,
                  promoting healthy lifestyle choices.
                </p>
                <a href="/outsmart" className={styles.projectLink}>Learn More →</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}