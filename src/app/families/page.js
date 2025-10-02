// src/app/families.js
import styles from './page.module.css'
import Header from '@/pages/Families/Header'
import About from '@/pages/Families/About'
import Plan from '@/pages/Families/Plan'
import Resources from '@/pages/Families/Resources'
import News from '@/pages/Families/News'
import Contact from '@/pages/Families/About'
import Funding from '@/pages/Families/About'

export default function Home() { 
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <About />
        <Plan />
        <Resources /> 
        <News />
        <Contact />
        <Funding />
      </main>
    </div>
  )
}