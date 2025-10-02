// src/components/Resources/index.js
import styles from './Resources.module.css'

export default function Resources() {
  return (
    <section id="resources" className={styles.resources}>
      <h2 className={styles.sectionTitle}>Resources</h2>
      
      <div className={styles.subsection}>
        <h3>Medication Safety Resources</h3>
        <p>
          <a href="https://www.generationrx.org/learn/understand-the-issue/" target="_blank" rel="noopener noreferrer">GenerationRx</a>: GenerationRx is a website dedicated to spreading knowledge about safe medication practice. This website contains a wide variety of resources to provide information for using, storing, and disposing of medications safely.
        </p>
        <p>
          <a href="https://doseofrealitywi.gov/get-the-facts/dangers/" target="_blank" rel="noopener noreferrer">Dose of Reality</a>: Dose of Reality is a website that details the issue of painkiller abuse in Wisconsin. It gives a detailed description of how painkiller abuse can occur and how to prevent this from happening.
        </p>
        <p>
          <a href="https://disposerx.com/" target="_blank" rel="noopener noreferrer">DisposeRx</a>: DisposeRx is a medication management website dedicated to solving drug disposal issues. This DisposeRx provides resources to best manage medication disposal and safe practices.
        </p>
        <p>
          <a href="https://everfi.com/networks/prescription-drug-safety-network/parents/" target="_blank" rel="noopener noreferrer">EVERFI</a>: EVERFI encourages school to provide prescription safety education to their students. Learn how you can bring the Prescription Drug Safety course to your child's school and encourage your local school to provide prescription safety education to their students.
        </p>
        <p>
          <a href="https://www.operationprevention.com/" target="_blank" rel="noopener noreferrer">Operation Prevention</a>: Operation Prevention is a program backed by Discovery Education and the DEA to provide free, online resources that promote drug abuse prevention. These resources are meant to help students, educators, and working adults learn about how they can prevent misuse of opioids and other drugs.
        </p>
        <p>
          <a href="https://www.projectlazarus.org/child-teen-prevention" target="_blank" rel="noopener noreferrer">Project Lazarus</a>: Project Lazarus aims to educate young adults about both the benefits and dangers of various medications, and how to safely use and dispose of them. Those who join Project Lazarus pledge sobriety and act as role models for their peers to follow and learn from.
        </p>
        <p>
          <a href="https://drugfree.org/" target="_blank" rel="noopener noreferrer">Partnership to End Addiction</a>: Partnership to End Addiction is a resource that connects persons to trained professionals, so they can discuss addiction and learn how to take action in the community. The <a href="https://drugfree.org/article/get-one-on-one-help/" target="_blank" rel="noopener noreferrer">Parental Helpline</a> provides specialist help to parents or guardians who need support in treating an addiction of a loved one and is completely confidential.
        </p>
        <p>
          <a href="https://www.scholastic.com/otc-med-safety/index.html" target="_blank" rel="noopener noreferrer">Scholastic</a>: Scholastic provides information about over the counter (OTC) medication safety for young adults as well as resources for young adults to learn about common medication safety in an interactive style. They also provide information for educators and parents.
        </p>
      </div>

      <div className={styles.subsection}>
        <h3>National Resources</h3>
        <div className={styles.contactInfo}>
          <p>
            <strong>NAMI HELPLINE</strong><br/>
            The NAMI HelpLine is a free service that provides information, resources, and support to people living with a mental health condition, as well as their family members and caregivers.<br/>
            800-950-NAMI<br/>
            <a href="mailto:info@nami.org">info@nami.org</a>
          </p>
          <p>
            <strong>Substance Abuse and Mental Health Services Administration (SAMHSA)</strong><br/>
            The SAMHSA hotline is a confidential, free, 24-hour-a-day, 365-day-a-year, information service, in English and Spanish, for individuals and family members facing mental and/or substance use disorders.<br/>
            Treatment Referral Helpline<br/>
            1-800-662-HELP (4357)<br/>
            <a href="https://www.samhsa.gov/find-help/national-helpline" target="_blank" rel="noopener noreferrer">https://www.samhsa.gov/find-help/national-helpline</a>
          </p>
        </div>
        <p>
          If you have questions or concerns about opioid use and safety, please contact your doctor, a school counselor, or refer to <a href="http://www.hhs.gov/opioids" target="_blank" rel="noopener noreferrer">www.hhs.gov/opioids</a>.
        </p>
        <p>
          The National Institute on Drug Abuse (NIDA) developed a guide to help parents talk with their children about opioids. We hope this booklet can help parents better understand opioids and start a conversation with their child.<br/>
          National Institute on Drug Abuse (NIDA): <a href="https://www.drugabuse.gov/sites/default/files/opioid_factsforparents.pdf" target="_blank" rel="noopener noreferrer">A Letter to Parents</a>
        </p>
        <p>
          The National Institute on Drug Abuse (NIDA) also developed a guide specifically for teens with the goal to give them facts about opioids and help them make smart and safe choices. We hope teens will use this booklet to become more educated on opioid safety and share information about opioids with their friends, parents, teachers, and others.<br/>
          National Institute on Drug Abuse (NIDA): <a href="https://www.drugabuse.gov/sites/default/files/nida_opioidfactsforteens_brochure_final_web.pdf" target="_blank" rel="noopener noreferrer">A Letter to Teens</a>
        </p>
      </div>

      <div className={styles.subsection}>
        <h3>Common Medication Safety Tips to Know</h3>
        
        <div className={styles.tipsList}>
          <h4>Your Medication(s)</h4>
          <ul>
            <li>Know the name and dose(s) of your medicine(s).</li>
            <li>Understand why the medicine is important and what it treats.</li>
            <li>Read your labels to learn what you are taking, how and when to take it, side effects, etc.</li>
          </ul>
        </div>

        <div className={styles.tipsList}>
          <h4>Take Your Medicine</h4>
          <ul>
            <li>Make sure you take your medicine in the correct dose.</li>
            <li>Take your medicines at the right time(s).</li>
            <li>Renew your medications in advance so you do not run out.</li>
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
            <li>Know your medicine allergies.</li>
            <li>Report unusual side effects to your doctor or pharmacist.</li>
          </ul>
        </div>
      </div>

      <a href="#top" className={styles.topLink}>TOP↑</a>
    </section>
  )
}