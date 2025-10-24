// src/components/Funding/index.js
import styles from './Funding.module.css'

export default function Funding() {
  return (
    <section id="funding" className={styles.funding}>
      <h2 className={styles.sectionTitle}>Funding Support</h2>

      <div className={styles.fundingInfo}>
        <p>
          This project was supported in part by American Cancer Society (ACS) grant IRG-15-213-51 and the UWCCC (University of Wisconsin-Madison Carbone Cancer Center).
        </p>
        <p>
          This study was supported by KL2 grant KL2 TR002374-03 and grant UL1TR002373 to UW ICTR by the Clinical and Translational Science Award (CTSA) program, through the NIH National Center for Advancing Translational Sciences (NCATS). The content is solely the responsibility of the authors and does not necessarily represent the official views of the NIH.        </p>
      </div>

      <a href="#top" className={styles.topLink}>TOP↑</a>
    </section>
  )
}