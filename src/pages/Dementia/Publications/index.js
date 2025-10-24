// src/pages/outsmart/Publications/index.js
import styles from './Publications.module.css'

export default function Publications() {
  return (
    <section id="publications" className={styles.publications}>
      <h2 className={styles.sectionTitle}>Publications</h2>
      
      <div className={styles.publicationsList}>
        <ul>
          <li>
            <strong>Abraham, O</strong>, Rosenberger, C, LeMay, S, Bittner, S. <a href="https://doi.org/10.1177/10732748211036057" target="_blank" rel="noopener noreferrer">Adolescents' perceptions about cancer and preferences for cancer education</a>. <em>Cancer Control.</em> 2021;28:1-12. <a href="https://doi.org/10.1177/10732748211036057" target="_blank" rel="noopener noreferrer">https://doi.org/10.1177/10732748211036057</a>
          </li>
          
          <li>
            <strong>Abraham, O</strong>, Szela, L, Feng, E, Egbujor, M, Gay, S. <a href="https://doi.org/10.1007/s13187-021-02077-0" target="_blank" rel="noopener noreferrer">Exploring youth perceptions about cancer prevention and preferences for education: a qualitative study</a>. <em>J Cancer Educ.</em> 2021. Available online August 13, 2021. <a href="https://doi.org/10.1007/s13187-021-02077-0" target="_blank" rel="noopener noreferrer">https://doi.org/10.1007/s13187-021-02077-0</a>
          </li>
          
          <li>
            <strong>Abraham, O</strong>, Szela L, Khan M, Geddam A. <a href="https://pubmed.ncbi.nlm.nih.gov/34643533/" target="_blank" rel="noopener noreferrer">Exploring Middle School Students' Perspectives on Utilizing Serious Games for Cancer Prevention Education: A Focus Group Study</a>. JMIR Serious Games. 2021 Oct 12. doi: 10.2196/31172. Epub ahead of print. <a href="https://pubmed.ncbi.nlm.nih.gov/34643533/" target="_blank" rel="noopener noreferrer">PMID: 34643533</a>.
          </li>
        </ul>
      </div>

      <a href="#top" className={styles.topLink}>TOP↑</a>
    </section>
  )
}