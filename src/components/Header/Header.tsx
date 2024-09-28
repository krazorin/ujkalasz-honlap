import { FunctionComponent, useEffect, useRef, useState } from "react"
import kalaszLogo from "src/assets/kalasz-logo.svg"
import styles from "./Header.module.scss"
import { NavLink } from "react-router-dom"

interface NavItem {
  id: number
  label: string
  link: string
  subItems?: NavItem[] // Optional sub-items for dropdowns
}

const desktopOtherLinkDropdownLabelkWidth = 150

const navItemWidth = (label: string, withoutColumnGap?: boolean) => {
  const charRenderWidth = 10.5 // Font size 20
  const paddingWidth = 30 // Nav item padding width * 2
  const desktopNavColumnGap = 20

  return withoutColumnGap
    ? label.length * charRenderWidth + paddingWidth / 2
    : label.length * charRenderWidth + paddingWidth + desktopNavColumnGap
}

const isLastItem = (array: unknown[], index: number) => {
  return array.length - 1 === index
}

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
      { id: 502, label: "Egyéb kiadványok", link: "/kiadvanyok/egyeb" },
    ],
  },
  { id: 6, label: "Közösségi\u00A0ház", link: "/kozossegi-haz" },
  { id: 7, label: "Rólunk", link: "/rolunk" },
  { id: 8, label: "Galéria", link: "/galeria" },
  { id: 9, label: "Elérhetőségeink", link: "/elerhetosegeink" },
]

const createDesktopNavLink = (
  itemId: number,
  label: string,
  path: string,
  isSubItem?: boolean,
) => {
  const classNames: string[] = []

  if (isSubItem) {
    classNames.push(styles.desktopNavSubLink)
  } else {
    classNames.push(styles.desktopNavLink)
  }

  return (
    <NavLink
      key={`nav-item-${itemId}`}
      id={`nav-item-${itemId}`}
      to={path}
      className={classNames.join(" ")}
    >
      {label}
    </NavLink>
  )
}

const Header: FunctionComponent = () => {
  const [visibleItems, setVisibleItems] = useState<NavItem[]>(navItems)
  const [overflowItems, setOverflowItems] = useState<NavItem[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        let totalWidth = 0
        const visible: NavItem[] = []
        const overflow: NavItem[] = []

        for (let i = 0; i < navItems.length; i++) {
          let itemWidth = navItemWidth(navItems[i].label)

          if (isLastItem(navItems, i)) {
            itemWidth = navItemWidth(navItems[i].label, true)
          }

          totalWidth += itemWidth

          if (isLastItem(navItems, i)) {
            if (totalWidth < containerWidth) {
              visible.push(navItems[i])
            } else {
              overflow.push(navItems[i])
            }
          } else {
            if (
              totalWidth + desktopOtherLinkDropdownLabelkWidth <
              containerWidth
            ) {
              visible.push(navItems[i])
            } else {
              overflow.push(navItems[i])
            }
          }
        }

        setVisibleItems(visible)
        setOverflowItems(overflow)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const renderNavItemWithDropdown = (item: NavItem) => {
    return (
      <div className={styles.navDropdown} key={item.id}>
        {createDesktopNavLink(item.id, item.label, item.link)}
        {item.subItems && (
          <div className={styles.navDropdownContent}>
            {item.subItems.map((subItem) =>
              createDesktopNavLink(
                subItem.id,
                subItem.label,
                subItem.link,
                true,
              ),
            )}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <nav className={styles.navigation}>
        <div className={styles.navigationLogoContainer}>
          <img src={`${kalaszLogo}`} alt="Kalász logo" />
          <span>KALÁSZ</span>
        </div>
        <div className={styles.desktopNavigation} ref={containerRef}>
          {visibleItems.map((item) =>
            item.subItems
              ? renderNavItemWithDropdown(item)
              : createDesktopNavLink(item.id, item.label, item.link),
          )}
          {overflowItems.length > 0 && (
            <div className={styles.navDropdown}>
              {createDesktopNavLink(100, "továbbiak", "")}
              <div className={styles.navDropdownContent}>
                {overflowItems.map((item) =>
                  createDesktopNavLink(item.id, item.label, item.link, true),
                )}
              </div>
            </div>
          )}
        </div>
        <ul className={styles.mobileNavigation}>
          <li>Mobile Hírek</li>
          <li>Programok</li>
          <li>Bemutatkozás</li>
          <li>Csoportjaink</li>
          <li>Kiadványok</li>
          <li>Közösségi ház</li>
          <li>Rólunk</li>
          <li>Galéria</li>
          <li>Elérhetőségeink</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
