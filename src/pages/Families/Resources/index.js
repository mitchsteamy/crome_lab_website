// src/components/FamiliesResources/index.js
import styles from './Resources.module.css'

export default function FamiliesResources() {
  return (
    <section id="resources" className={styles.resources}>
      <h2 className={styles.sectionTitle}>Resources</h2>
      
      <div className={styles.subsection}>
        <h3>Medication Safety Resources</h3>
        
        <p>
          <a href="https://www.drugabuse.gov/sites/default/files/opioid_factsforparents.pdf" target="_blank" rel="noopener noreferrer">A Letter to Parents</a>: The National Institute on Drug Abuse (NIDA) developed a guide to help parents talk with their children about opioids. We hope this booklet can help parents better understand opioids and start a conversation with their child.
        </p>

        <p>
          <a href="https://www.childrenssafetynetwork.org/injury-topics/prescription-drug-misuse-abuse" target="_blank" rel="noopener noreferrer">Children's Safety Network</a>: Children's Safety Network offers child safety topics specifically for prescription drug misuse and abuse. They also provide strategies to reduce prescription medication abuse among youth.
        </p>

        <p>
          <a href="https://doseofrealitywi.gov/get-support/educators/" target="_blank" rel="noopener noreferrer">Dose of Reality for Educators</a>: A Dose of Reality for Educators gives a detailed description of sings to look for if a student is suspected to be at risk of opioid misuse. They also provide helpful tips on what educators can do for their students who are at risk.
        </p>

        <p>
          <a href="https://doseofrealitywi.gov/parents/" target="_blank" rel="noopener noreferrer">Dose of Reality for Parents</a>: Dose of Reality is a website that details the issue of painkiller abuse in Wisconsin. It gives a detailed description of how painkiller abuse can occur, how to prevent this from happening, and what you should do if you think your child is at risk.
        </p>

        <p>
          <a href="https://doseofrealitywi.gov/get-support/siblings-and-friends/" target="_blank" rel="noopener noreferrer">Dose of Reality for Siblings and Friends</a>: A Dose of Reality for Siblings and Friends offers a detailed description of how painkiller abuse can occur, how to prevent this from happening, and what you should do if you think your friend or sibling is at risk.
        </p>

        <p>
          <a href="https://everfi.com/networks/prescription-drug-safety-network/parents/" target="_blank" rel="noopener noreferrer">EVERFI</a>: EVERFI encourages schools to provide prescription safety education to their students. Learn how you can encourage your child's school to offer the Prescription Drug Safety course.
        </p>

        <p>
          <a href="https://generationrx.org/learn/learn-at-home/" target="_blank" rel="noopener noreferrer">GenerationRx</a>: GenerationRx is an organization dedicated to spreading knowledge about safe medication practice. This website contains three activities you and your teen can do at home to start conversations about prescription drug misuse.
        </p>

        <p>
          <a href="https://www.safekids.org/medicinesafety" target="_blank" rel="noopener noreferrer">Safe Kids Worldwide</a>: Safe Kids Worldwide offers tips on how to keep kids safe around medications. They encourage you to include medicine safety when childproofing your home.
        </p>

        <p>
          <a href="https://www.scholastic.com/otc-med-safety/index.html" target="_blank" rel="noopener noreferrer">Scholastic</a>: Scholastic provides information about over the counter (OTC) medication safety for young adults as well as resources for young adults to learn about common medication safety topics in an interactive style. They also provide information for educators and parents.
        </p>

        <p>
          <a href="https://www.upandaway.org/" target="_blank" rel="noopener noreferrer">Up and Away</a>: Up and Away teaches families how to properly store their medications in the house and keep their child safe. They have several free materials and resources you can download to help you learn more about keeping your child safe by storing medications safely.
        </p>
      </div>

      <div className={styles.subsection}>
        <h3>National Resources</h3>
        
        <div className={styles.contactInfo}>
          <p>
            <strong>Substance Abuse and Mental Health Services Administration (SAMHSA)</strong><br/>
            The SAMHSA hotline is a confidential, free, 24-hour-a-day, 365-day-a-year, information service, in English and Spanish, for individuals and family members facing mental and/or substance use disorders.<br/>
            Treatment Referral Helpline<br/>
            1-800-662-HELP (4357)<br/>
            <a href="https://www.samhsa.gov/find-help/national-helpline" target="_blank" rel="noopener noreferrer">https://www.samhsa.gov/find-help/national-helpline</a><br/>
            If you have questions or concerns about opioid use and safety, please contact your doctor, a school counselor, or refer to <a href="http://www.hhs.gov/opioids" target="_blank" rel="noopener noreferrer">www.hhs.gov/opioids</a>.
          </p>
          
          <p>
            <strong>NAMI HELPLINE</strong><br/>
            The NAMI HelpLine is a free service that provides information, resources, and support to people living with a mental health condition, as well as their family members and caregivers.<br/>
            800-950-NAMI<br/>
            <a href="mailto:info@nami.org">info@nami.org</a>
          </p>
        </div>
      </div>

      <div className={styles.subsection}>
        <h3>Common Medication Safety Tips to Know</h3>
        
        <div className={styles.tipsList}>
          <h4>Your Medication(s)</h4>
          <ul>
            <li>Know the generic and brand names and dose(s) of your medicine(s).</li>
            <li>Understand why the medicine is important and why you take it.</li>
            <li>Read your labels and medication pamphlets to learn what you are taking, how and when to take it, side effects, etc.</li>
          </ul>
        </div>

        <div className={styles.tipsList}>
          <h4>Take Your Medicine</h4>
          <ul>
            <li>Make sure you take your medicine in the correct dose.</li>
            <li>Take your medicines at the right time(s).</li>
            <li>Refill and renew your medications in advance so you do not run out.</li>
          </ul>
        </div>

        <div className={styles.tipsList}>
          <h4>Keep Your Medications Safe</h4>
          <ul>
            <li>Store your medications(s) in a cool, dry place.</li>
            <li>Lock your medications in a cabinet to keep them away from children and pets.</li>
            <li>Dispose of your medications safely by taking them to <a href="https://www.fda.gov/drugs/disposal-unused-medicines-what-you-should-know/drug-disposal-drug-take-back-locations" target="_blank" rel="noopener noreferrer">a drug take back site, location, or program</a>.</li>
            <li>
              If you cannot get to a drug take back location promptly
              <ul>
                <li><strong>and</strong> your medicine is on the FDA <a href="https://www.fda.gov/drugs/disposal-unused-medicines-what-you-should-know/drug-disposal-flush-potentially-dangerous-medicine#FlushList" target="_blank" rel="noopener noreferrer">flush list</a>, your next best option is to <a href="https://www.fda.gov/drugs/disposal-unused-medicines-what-you-should-know/drug-disposal-fdas-flush-list-certain-medicines" target="_blank" rel="noopener noreferrer">immediately flush these potentially dangerous medicine down the toilet</a>.</li>
                <li>and your medicine is <strong>not</strong> on the <a href="https://www.fda.gov/drugs/disposal-unused-medicines-what-you-should-know/drug-disposal-flush-potentially-dangerous-medicine#FlushList" target="_blank" rel="noopener noreferrer">flush list</a>, you should follow these <a href="https://www.fda.gov/drugs/disposal-unused-medicines-what-you-should-know/drug-disposal-dispose-non-flush-list-medicine-trash" target="_blank" rel="noopener noreferrer">instructions to discard the medicine in your trash at home</a>.</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className={styles.tipsList}>
          <h4>Other Tips</h4>
          <ul>
            <li>Tell your doctor or pharmacist if you have a problem taking the drug for any reason, including cost.</li>
            <li>Keep a list of all medications you take.</li>
            <li>Know your allergies to medications.</li>
            <li>Report unusual side effects to your doctor or pharmacist.</li>
          </ul>
        </div>
      </div>

      <a href="#top" className={styles.topLink}>TOP↑</a>
    </section>
  )
}