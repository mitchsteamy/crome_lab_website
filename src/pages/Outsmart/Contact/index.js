// src/components/Contact/index.js
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.sectionTitle}>Contact</h2>
      
      <div className={styles.contactInfo}>
        <p>
          If you have questions about this research, please contact the Principal Investigator, Dr. Olufunmilola Abraham by email: <a href="mailto:Olufunmilola.Abraham@uky.edu">Olufunmilola.Abraham@uky.edu</a>.
        </p>
        
        <p>
          If you have questions about the <a href="https://pharmacy.uky.edu/crome" target="_blank" rel="noopener noreferrer">CRoME Lab</a>, our studies, becoming a participant, or want to join the team, please contact the Research Coordinator by email: <a href="mailto:crome.lab@uky.edu">crome.lab@uky.edu</a>.
        </p>
        
        <p>
          The CRoME Lab's mission is to develop, implement, and disseminate novel methods for improving medication safety and health behaviors for vulnerable and underserved populations, while training the next generation of researchers. Projects within the CRoME research core share the common goal of applying community-engaged, collaborative, and transdisciplinary approaches to improving medication use and health outcomes for families through education, prevention, and intervention programs. For more information, please visit our website: <a href="https://pharmacy.uky.edu/crome/" target="_blank" rel="noopener noreferrer">https://pharmacy.uky.edu/crome/</a>
        </p>
      </div>

      <a href="#top" className={styles.topLink}>TOP↑</a>
    </section>
  )
}