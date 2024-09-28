import React, { useState, useEffect, useRef } from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"

// import styles from "./NavBar.module.scss"; // Import SCSS Module
import "./NavBar.scss"

import kalaszLogo from "src/assets/kalasz-logo.svg"

interface NavLinkItem {
  name: string
  url: string
}

interface NavDropdownItem {
  name: string
  items: NavLinkItem[]
}

type NavItem = NavLinkItem | NavDropdownItem

const NavBar: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<NavItem[]>([])
  const [hiddenItems, setHiddenItems] = useState<NavItem[]>([])
  const navbarCollapseRef = useRef<HTMLDivElement>(null)
  const [activeItem, setActiveItem] = useState<string>("") // Change active item name based on actual active link

  const navItems: NavItem[] = [
    { name: "Hírek", url: "/news" },
    { name: "Programok", url: "/programs" },
    {
      name: "Bemutatkozás",
      items: [
        { name: "Történetünk", url: "/about/story" },
        { name: "Csapatunk", url: "/about/team" },
      ],
    },
    { name: "Csoportjaink", url: "/groups" },
    { name: "Kiadványok", url: "/publications" },
    { name: "Közösségi ház", url: "/community-house" },
    {
      name: "Rólunk",
      items: [
        { name: "Céljaink", url: "/about-us/goals" },
        { name: "Történetünk", url: "/about-us/story" },
      ],
    },
    { name: "Galéria", url: "/gallery" },
    { name: "Elérhetőségek", url: "/contacts" },
  ]

  const calculateVisibleItems = () => {
    if (navbarCollapseRef.current) {
      const navbarWidth = navbarCollapseRef.current.offsetWidth - 300
      const itemWidth = 120 // Assume each nav item takes up roughly this width
      const maxVisibleItems = Math.floor(navbarWidth / itemWidth)

      console.log({
        m: "calculateVisibleItems",
        width: navbarCollapseRef.current.offsetWidth,
        visible: navItems.slice(0, maxVisibleItems),
        hidden: navItems.slice(maxVisibleItems),
      })

      setVisibleItems(navItems.slice(0, maxVisibleItems))
      setHiddenItems(navItems.slice(maxVisibleItems))
    }
  }

  const handleResize = () => {
    calculateVisibleItems()
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    calculateVisibleItems()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <Navbar
      bg="light"
      variant="light"
      expand="lg"
      sticky="top"
      className="navbar"
    >
      <div className="brandContainer">
        <Navbar.Brand href="/" className="brand">
          <img src={`${kalaszLogo}`} className="logo" alt="Kalász logo" />
          <span>KALÁSZ</span>
        </Navbar.Brand>
      </div>
      <Navbar.Collapse id="navbar-nav" ref={navbarCollapseRef}>
        <Nav className="navItems">
          {visibleItems.map((item, index) => {
            if ("items" in item) {
              // For dropdown items
              return (
                <NavDropdown
                  title={item.name}
                  id={`dropdown-${index}`}
                  key={index}
                  className={`$navItem ${activeItem === item.name ? "active" : ""}`}
                  onMouseEnter={() => setActiveItem(item.name)} // Optionally highlight on hover
                >
                  {item.items.map((subItem, subIndex) => (
                    <NavDropdown.Item
                      href={subItem.url}
                      key={subIndex}
                      className={"dropdownItem"}
                    >
                      {subItem.name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              )
            } else {
              // For regular links
              return (
                <Nav.Link
                  key={index}
                  href={item.url}
                  className={`navItem ${activeItem === item.name ? "active" : ""}`}
                  onMouseEnter={() => setActiveItem(item.name)} // Optionally highlight on hover
                  onClick={() => setActiveItem(item.name)}
                >
                  {item.name}
                </Nav.Link>
              )
            }
          })}

          {hiddenItems.length > 0 && (
            <NavDropdown
              title="Továbbiak"
              id="others-nav-dropdown"
              className={"dropdown"}
            >
              {hiddenItems.map((item, index) => {
                if ("items" in item) {
                  // If the hidden item is a dropdown
                  return (
                    <NavDropdown.ItemText key={index}>
                      <strong>{item.name}</strong>
                    </NavDropdown.ItemText>
                  )
                }
                // If the hidden item is a regular link
                return (
                  <NavDropdown.Item
                    key={index}
                    href={item.url}
                    className={"dropdownItem"}
                  >
                    {item.name}
                  </NavDropdown.Item>
                )
              })}
            </NavDropdown>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
