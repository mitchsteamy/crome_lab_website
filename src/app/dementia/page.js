// src/app/dementia.js
import styles from './page.module.css'
import Header from '@/pages/Dementia/Header'
import About from '@/pages/Dementia/About'
import Media from '@/pages/Dementia/Media'
import Resources from '@/pages/Dementia/Resources'
import Publications from '@/pages/Dementia/Publications'
import Contact from '@/pages/Dementia/Contact'
import Funding from '@/pages/Dementia/Funding'

export default function Dementia() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <About />
        <Media />
        {/* <Resources /> */}
        {/* <Publications /> */}
        <Contact />
        {/* <Funding /> */}
      </main>
    </div>
  )
}