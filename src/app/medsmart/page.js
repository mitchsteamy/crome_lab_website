// src/app/medsmart.js
import styles from './page.module.css'
import Header from '@/pages/Medsmart/Header'
import About from '@/pages/Medsmart/About'
import Media from '@/pages/Medsmart/Media'
import Resources from '@/pages/Medsmart/Resources'
import News from '@/pages/Medsmart/News'
import Publications from '@/pages/Medsmart/Publications'
import Contact from '@/pages/Medsmart/Contact'
 import Funding from '@/pages/Medsmart/Funding'

export default function MedSMART() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <About />
        <Media />
        <Resources />
        <News />
        <Publications />
        <Contact />
        <Funding />
      </main>
    </div>
  )
}