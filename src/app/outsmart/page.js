// src/app/outsmart.js
import styles from './page.module.css'
import Header from '@/pages/Outsmart/Header'
import About from '@/pages/Outsmart/About'
import Media from '@/pages/Outsmart/Media'
import Resources from '@/pages/Outsmart/Resources'
import Publications from '@/pages/Outsmart/Publications'
import Contact from '@/pages/Outsmart/Contact'
import Funding from '@/pages/Outsmart/Funding'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <About />
        <Media />
        <Resources />
        <Publications />
        <Contact />
         <Funding />
      </main>
    </div>
  )
}