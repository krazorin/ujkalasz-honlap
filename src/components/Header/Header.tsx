import { FunctionComponent, useEffect, useRef, useState } from "react"
import { NavLink } from "react-router-dom"
import kalaszLogo from "src/assets/kalasz-logo.svg"

import styles from "./Header.module.scss"

interface NavItem {
  id: number
  label: string
  link: string
  subItems?: NavItem[]
}

const desktopOtherLinkDropdownLabelkWidth = 150

// Utility to calculate nav item width based on label length
const navItemWidth = (label: string, withoutColumnGap?: boolean) => {
  const charRenderWidth = 10.5
  const paddingWidth = 30
  const desktopNavColumnGap = 20

  return withoutColumnGap
    ? label.length * charRenderWidth + paddingWidth / 2
    : label.length * charRenderWidth + paddingWidth + desktopNavColumnGap
}

const isLastItem = (array: unknown[], index: number) =>
  array.length - 1 === index

const navItems: NavItem[] = [
  { id: 1, label: "Hírek", link: "/" },
  { id: 2, label: "Programok", link: "/programok" },
  {
    id: 3,
    label: "Bemutatkozás",
    link: "/bemutatkozas",
    subItems: [
      { id: 301, label: "Történetünk", link: "/bemutatkozas/tortenetunk" },
      { id: 302, label: "Vezérkönyv", link: "/bemutatkozas/vezerkonyv" },
      { id: 303, label: "Alapszabály", link: "/bemutatkozas/alapszabaly" },
      { id: 304, label: "Kapcsolataink", link: "/bemutatkozas/kapcsolataink" },
    ],
  },
  { id: 4, label: "Csoportjaink", link: "/csoportjaink" },
  {
    id: 5,
    label: "Kiadványok",
    link: "/kiadvanyok",
    subItems: [
      {
        id: 501,
        label: "ÚJ KALÁSZ újság",
        link: "/kiadvanyok/uj-kalasz-ujsag",
      },
      // { id: 502, label: "Egyéb kiadványok", link: "/kiadvanyok/egyeb" },
    ],
  },
  {
    id: 6,
    label: "Váci KALÁSZ-ház",
    link: "/vaci-kalasz-haz",
    subItems: [
      {
        id: 601,
        label: "Vendégek tudnivalói",
        link: "/vaci-kalasz-haz/tudnivalok",
      },
      {
        id: 602,
        label: "Képek",
        link: "/vaci-kalasz-haz/kepek",
      },
      {
        id: 603,
        label: "Áraink",
        link: "/vaci-kalasz-haz/arak",
      },
    ],
  },
  { id: 7, label: "Rólunk", link: "/rolunk" },
  { id: 8, label: "Galéria", link: "/galeria" },
  { id: 9, label: "Elérhetőségeink", link: "/elerhetosegeink" },
]

// Helper function for creating NavLinks with dynamic classNames
const createNavLink = (
  id: number,
  label: string,
  link: string,
  isSubItem = false,
  isDesktop = true,
) => {
  const getClassNames = (isActive: boolean) => {
    const classNames = []
    if (isSubItem) {
      classNames.push(
        isDesktop ? styles.desktopNavSubLink : styles.mobileSubLink,
      )
    } else {
      classNames.push(isDesktop ? styles.desktopNavLink : styles.mobileNavLink)
    }

    if (isActive) {
      classNames.push(
        isDesktop ? styles.activeDesktopNavLink : styles.activeMobileLink,
      )
    }

    return classNames.join(" ")
  }

  return (
    <NavLink
      key={`nav-item-${id}`}
      to={link}
      className={({ isActive }) => getClassNames(isActive)}
    >
      {label}
    </NavLink>
  )
}

const Header: FunctionComponent = () => {
  const [visibleItems, setVisibleItems] = useState<NavItem[]>(navItems)
  const [overflowItems, setOverflowItems] = useState<NavItem[]>([])
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Adjust visible and overflow items based on container width
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        let totalWidth = 0
        const visible: NavItem[] = []
        const overflow: NavItem[] = []

        navItems.forEach((item, index) => {
          const itemWidth = navItemWidth(
            item.label,
            isLastItem(navItems, index),
          )
          totalWidth += itemWidth

          if (
            totalWidth +
              (isLastItem(navItems, index)
                ? 0
                : desktopOtherLinkDropdownLabelkWidth) <
            containerWidth
          ) {
            visible.push(item)
          } else {
            overflow.push(item)
          }
        })

        setVisibleItems(visible)
        setOverflowItems(overflow)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <div className={styles.container}>
      <nav className={styles.navigation}>
        <div className={styles.navigationLogoContainer}>
          <img src={kalaszLogo} alt="Kalász logo" />
          <span>KALÁSZ</span>
        </div>

        {/* Desktop Navigation */}
        <div className={styles.desktopNavigation} ref={containerRef}>
          {visibleItems.map((item) =>
            item.subItems ? (
              <div className={styles.navDropdown} key={item.id}>
                {createNavLink(item.id, item.label, item.link)}
                <div className={styles.navDropdownContent}>
                  {item.subItems.map((subItem) =>
                    createNavLink(
                      subItem.id,
                      subItem.label,
                      subItem.link,
                      true,
                    ),
                  )}
                </div>
              </div>
            ) : (
              createNavLink(item.id, item.label, item.link)
            ),
          )}
          {overflowItems.length > 0 && (
            <div className={styles.navDropdown}>
              {createNavLink(100, "továbbiak", "/tovabbiak")}
              <div className={styles.navDropdownContent}>
                {overflowItems.map((item) =>
                  createNavLink(item.id, item.label, item.link, true),
                )}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className={styles.mobileNavigation}>
          <div className={styles.burgerIcon} onClick={toggleMobileMenu}>
            <span className={isMobileMenuOpen ? styles.open : ""}>☰</span>
          </div>

          {isMobileMenuOpen && (
            <ul className={styles.mobileMenu}>
              {navItems.map((item) => (
                <li key={item.id}>
                  {createNavLink(item.id, item.label, item.link, false, false)}
                  {item.subItems && (
                    <ul className={styles.mobileSubMenu}>
                      {item.subItems.map((subItem) =>
                        createNavLink(
                          subItem.id,
                          subItem.label,
                          subItem.link,
                          true,
                          false,
                        ),
                      )}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Header
