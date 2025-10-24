// src/components/Plan/index.js
import styles from './Plan.module.css'

export default function Plan() {
  return (
    <section id="plan" className={styles.plan}>
      <h2 className={styles.sectionTitle}>Family Medication Safety Plan</h2>
      
      <div className={styles.intro}>
        <p>
          We believe medications should work for you and work within your family values and parenting style. 
          As a result, our team created the Family Medication Safety Plan, a tool that will help you and your 
          children think about medication use in and outside the home and create goals and rules that align 
          with your family's values.
        </p>
      </div>

      <div className={styles.planSections}>
        <div className={styles.planSection}>
          <h3><u>Medication and Family Information</u></h3>
          <p>This section includes the family members' name, age, and the medication(s) they are taking.</p>
        </div>

        <div className={styles.planSection}>
          <h3><u>Dosage and Instructions</u></h3>
          <p>Here, the family member can record information about their medication(s) such as reason for use, benefits, side effects etc.</p>
        </div>

        <div className={styles.planSection}>
          <h3><u>Medication Schedule</u></h3>
          <p>The schedule will help the family member remember when to take their medication(s) and allow them to record when they took a medication.</p>
        </div>

        <div className={styles.planSection}>
          <h3><u>Proper Storage and Disposal</u></h3>
          <p>This section allows the family member to know where they should store and dispose of their medication(s).</p>
        </div>

        <div className={styles.planSection}>
          <h3><u>Positive Communication</u></h3>
          <p>Here is where the family member can list who to contact medication professionals for questions as well as what to do for family members who are at school and what do it if an overdoes occurs.</p>
        </div>

        <div className={styles.planSection}>
          <h3><u>Discussion section</u></h3>
          <p>There are write in sections for family members to talk about medication storage, disposal, positive communication, and questions.</p>
        </div>
      </div>

      <div className={styles.conclusion}>
        <p>
          We hope a Personalized Family Medication Safety Plan will make family members be more aware of using 
          medications safety and responsibility to achieve positive health outcomes. If you would like more 
          information about the Family Medication Safety Plan, please our please contact our Research Coordinator 
          by email: <a href="mailto:crome.lab@uky.edu">crome.lab@uky.edu</a>.
        </p>
      </div>

      <a href="#top" className={styles.topLink}>TOP↑</a>
    </section>
  )
}