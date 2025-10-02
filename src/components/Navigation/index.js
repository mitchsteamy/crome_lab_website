'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import styles from './Navigation.module.css'

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const navItems = [
    { href: 'https://pharmacy.uky.edu/crome/crome-team', label: 'The Team' },
    {
      href: '/medsmart',
      label: 'MedSMA℞T Game',
      sections: [
        { href: '/medsmart#about', label: 'About' },
        { href: '/medsmart#media', label: 'Media' },
        { href: '/medsmart#resources', label: 'Resources' },
        { href: '/medsmart#news', label: 'In the News' },
        { href: '/medsmart#publications', label: 'Publications' },
        { href: '/medsmart#contact', label: 'Contact' },
        { href: '/medsmart#funding', label: 'Funding Support' }
      ]
    },
    {
      href: '/families',
      label: 'MedSMA℞T Families',
      sections: [
        { href: '/families#about', label: 'About' },
        { href: '/families#plan', label: 'Family Safety Plan' },
        { href: '/families#resources', label: 'Resources' },
        { href: '/families#news', label: 'In the News' },
        { href: '/families#contact', label: 'Contact' },
        { href: '/families#funding', label: 'Funding Support' }
      ]
    },
    {
      href: '/outsmart',
      label: 'OutSMA℞T Game',
      sections: [
        { href: '/outsmart#about', label: 'About' },
        { href: '/outsmart#media', label: 'Media' },
        { href: '/outsmart#resources', label: 'Resources' },
        { href: '/outsmart#publications', label: 'Publications' },
        { href: '/outsmart#contact', label: 'Contact' },
        { href: '/outsmart#funding', label: 'Funding Support' }
      ]
    },
  ]

  const handleMouseEnter = (index) => {
    setActiveDropdown(index)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }

  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link href="/">
            <Image
              src="/images/CRoME-favicon.png"
              alt="CRoME Lab"
              width={25}
              height={25}
              className={styles.brandLogo}
            />
            <span className={styles.brandText}>CRoME Lab</span>
          </Link>
        </div>

        <button
          className={styles.mobileToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ''}`}>
          {navItems.map((item, index) => (
            <li
              key={item.href}
              className={styles.navItem}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={item.href}
                className={pathname === item.href ? styles.activeLink : ''}
                onClick={handleLinkClick}
              >
                {item.label}
                {item.sections && <span className={styles.dropdownArrow}>▼</span>}
              </Link>

              {item.sections && activeDropdown === index && (
                <div className={styles.dropdown}>
                  <ul className={styles.dropdownList}>
                    {item.sections.map((section) => (
                      <li key={section.href}>
                        <Link
                          href={section.href}
                          className={styles.dropdownLink}
                          onClick={handleLinkClick}
                        >
                          {section.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}