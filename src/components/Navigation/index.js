/* src/components/Navigation/index.js */
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
  const [expandedNestedItems, setExpandedNestedItems] = useState({})

  const navItems = [
    {
      label: 'MedSMA℞T',
      isDropdownOnly: true,
      isNested: true,
      subItems: [
        {
          href: '/families',
          label: 'MedSMA℞T Families',
          sections: [
            { href: '/families#about', label: 'About' },
            { href: '/families#plan', label: 'Family Medication Safety Plan' },
            { href: '/families#resources', label: 'Resources' },
            { href: '/families#news', label: 'In the News' },
            { href: '/families#contact', label: 'Contact' },
            { href: '/families#funding', label: 'Funding Support' }
          ]
        },
        {
          href: '/medsmart',
          label: 'Adventures in PharmaCity',
          sections: [
            { href: '/medsmart#about', label: 'About' },
            { href: '/medsmart#media', label: 'Media' },
            { href: '/medsmart#resources', label: 'Resources' },
            { href: '/medsmart#news', label: 'In the News' },
            { href: '/medsmart#publications', label: 'Publications' },
            { href: '/medsmart#contact', label: 'Contact' },
            { href: '/medsmart#funding', label: 'Funding Support' }
          ]
        }
      ]
    },
    {
      label: 'OutSMA℞T',
      isDropdownOnly: true,
      isNested: true,
      subItems: [
        {
          href: '/outsmart',
          label: 'OutSMA℞T Cancer',
          sections: [
            { href: '/outsmart#about', label: 'About' },
            { href: '/outsmart#media', label: 'Media' },
            { href: '/outsmart#resources', label: 'Resources' },
            { href: '/outsmart#publications', label: 'Publications' },
            { href: '/outsmart#contact', label: 'Contact' },
            { href: '/outsmart#funding', label: 'Funding Support' }
          ]
        },
        {
          href: '/dementia',
          label: 'OutSMA℞T Dementia',
          sections: [
            { href: '/dementia#about', label: 'About' },
            { href: '/dementia#media', label: 'Media' },
            /*             { href: '/dementia#resources', label: 'Resources' },*/
            /*             { href: '/dementia#publications', label: 'Publications' },*/
            { href: '/dementia#contact', label: 'Contact' },
            { href: '/dementia#funding', label: 'Funding Support' }
          ]
        }
      ]
    },
    { href: 'https://pharmacy.uky.edu/wonders-pharmacy', label: 'The Wonders of Pharmacy', external: true },
    { href: 'https://pharmacy.uky.edu/crome/mim', label: 'Movement is Medicine', external: true },
    {
      label: 'Other Initiatives',
      isDropdownOnly: true,
      sections: [
        { href: 'https://pharmacy.uky.edu/crome/crome-research-action', label: 'Research in Action', external: true },
        { href: 'https://fmsp-crome-lab.web.app', label: 'Family Medication Safety Plan', external: true },
        { href: '/sleep', label: 'SleepSMA℞T' },
        { href: '/vape', label: 'VapeSMA℞T' },
      ]
    },
  ]

  const handleMouseEnter = (index) => {
    setActiveDropdown(index)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  const handleNestedArrowClick = (e, parentIndex, subIndex) => {
    e.preventDefault()
    e.stopPropagation()

    const key = `${parentIndex}-${subIndex}`
    setExpandedNestedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
    setExpandedNestedItems({})
  }

  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        {/*         <div className={styles.brand}>
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
        </div> */}
        <div className={styles.brand}>
          <Link href="/">
            <Image
              src="/images/logo_truncated_trans.png"
              alt="CRoME Lab"
              width={290}
              height={170}
              className={styles.brandLogo}
              priority
            />
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
              key={item.href || item.label}
              className={styles.navItem}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {item.isDropdownOnly ? (
                <span className={styles.dropdownOnlyLabel}>
                  {item.label}
                  <span className={styles.dropdownArrow}>▼</span>
                </span>
              ) : item.external ? (
                <a
                  href={item.href}
                  className={styles.navLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                  <span className={styles.externalIcon}> ↗</span>
                </a>
              ) : (
                <Link
                  href={item.href}
                  className={pathname === item.href ? styles.activeLink : ''}
                  onClick={handleLinkClick}
                >
                  {item.label}
                  {item.sections && <span className={styles.dropdownArrow}>▼</span>}
                </Link>
              )}

              {/* Nested dropdown for MedSMART and OutSMART */}
              {item.isNested && activeDropdown === index && (
                <div className={styles.dropdown}>
                  <ul className={styles.dropdownList}>
                    {item.subItems.map((subItem, subIndex) => {
                      const key = `${index}-${subIndex}`
                      const isExpanded = expandedNestedItems[key]

                      return (
                        <li key={subItem.href}>
                          <div className={styles.nestedItemContainer}>
                            <Link
                              href={subItem.href}
                              className={styles.dropdownLink}
                              onClick={handleLinkClick}
                            >
                              {subItem.label}
                            </Link>
                            <button
                              className={styles.nestedArrowButton}
                              onClick={(e) => handleNestedArrowClick(e, index, subIndex)}
                              aria-label={`Toggle ${subItem.label} sections`}
                            >
                              <span className={`${styles.nestedArrow} ${isExpanded ? styles.nestedArrowExpanded : ''}`}>
                                ▼
                              </span>
                            </button>
                          </div>

                          {/* Nested sections inline */}
                          {subItem.sections && isExpanded && (
                            <ul className={styles.nestedSectionsList}>
                              {subItem.sections.map((section) => (
                                <li key={section.href}>
                                  <Link
                                    href={section.href}
                                    className={styles.nestedSectionLink}
                                    onClick={handleLinkClick}
                                  >
                                    {section.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )}

              {/* Regular dropdown for non-nested items */}
              {!item.isNested && item.sections && activeDropdown === index && (
                <div className={styles.dropdown}>
                  <ul className={styles.dropdownList}>
                    {item.sections.map((section) => (
                      <li key={section.href}>
                        <Link
                          href={section.href}
                          className={styles.dropdownLink}
                          onClick={handleLinkClick}
                          {...(section.external && { target: '_blank', rel: 'noopener noreferrer' })}
                        >
                          {section.label}
                          {section.external && <span className={styles.externalIcon}> ↗</span>}
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
    </nav >
  )
}