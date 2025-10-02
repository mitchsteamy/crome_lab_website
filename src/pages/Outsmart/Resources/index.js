// src/pages/outsmart/Resources/index.js
import styles from './Resources.module.css'

export default function Resources() {
  return (
    <section id="resources" className={styles.resources}>
      <h2 className={styles.sectionTitle}>Resources</h2>
      
      <div className={styles.resourcesList}>
        <p>
          <a href="https://www.cancer.org/" target="_blank" rel="noopener noreferrer">American Cancer Society</a>: Cancer has the ability to affect everyone, despite your age, gender or race, but it does affect everyone equally. This page is offers facts, research, information, and on-on-one support for these who are facing cancer or know someone with cancer.
        </p>
        
        <p>
          <a href="https://www.cancercare.org/" target="_blank" rel="noopener noreferrer">CancerCare</a>: CancerCare is a national, nonprofit organization that provides free, professional support services for anyone affected by cancer. They offer counseling, case management, support groups, education workshops, financial and co-pay assistance, community programs and up to date publications surrounding cancer.
        </p>
        
        <p>
          <a href="https://chdi.wisc.edu/cancer-clear-simple/" target="_blank" rel="noopener noreferrer">Cancer Clear & Simple</a>: Cancer, Clear & Simple (CC&S) comprises of a curriculum, Facilitator Guide, and educational handouts. All CC&S materials are designed to build knowledge and improve health-related outcomes. CC&S has been adapted for use with other populations and is currently available for Rural, African American, and Latino populations.
        </p>
        
        <p>
          <a href="https://medlineplus.gov/" target="_blank" rel="noopener noreferrer">Medline Plus</a>: United States National Library of Medicine and National Institutes of Health site with comprehensive health education, drug information, and medical news.
        </p>
        
        <p>
          <a href="https://www.cancer.gov/resources-for/patients" target="_blank" rel="noopener noreferrer">Resources for Patients</a>: The National Cancer Institute has put together a resources page for persons with cancer. This page contains a wide range of information including cancer basics, your diagnosis, treatment, and coping materials.
        </p>
        
        <p>
          <a href="https://www.cancer.gov/resources-for/caregivers" target="_blank" rel="noopener noreferrer">Resources for Caregivers</a>: The National Cancer Institute has put together a resources page for persons caring for someone with cancer. This page contains a wide range of information including cancer basics, treatment, coping and support materials.
        </p>
        
        <p>
          <a href="https://stupidcancer.org/" target="_blank" rel="noopener noreferrer">Stupid Cancer</a>: Stupid Cancer is the leading national advocacy organization serving the adolescent and young adult (AYA) cancer community. They help empower young adults affected by cancer by building a community where everyone is supported, understood and accepted.
        </p>
        
        <p>
          <a href="https://image.message.cancer.org/lib/fe9013727c62047976/m/1/05973f90-3600-46f6-8b05-b5443c6a5fd3.pdf?cm_ven=ExactTarget&utm_medium=email&utm_campaign=March_Engagement_03122022&utm_source=smc&utm_content=&utm_term=Full%20File%20-%2025%20Months%20or%20more%20and%20non%20donors%20-%20auto" target="_blank" rel="noopener noreferrer">Cancer Screening</a>: Screening tests can increase the chance of detecting certain cancers early, when they may be easier to treat. Learn more about early detection here.
        </p>
      </div>

      <a href="#top" className={styles.topLink}>TOP↑</a>
    </section>
  )
}