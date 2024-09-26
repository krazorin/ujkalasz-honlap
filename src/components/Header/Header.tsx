import { FunctionComponent } from "react";

import kalaszLogo from "src/assets/kalasz-logo.svg";

import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const createDesktopNavLink = (label: string, path: string) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => {
        const classNames = [styles.desktopNavLink];

        if (isActive) {
          classNames.push(styles.activeDesktopNavLink);
        }

        return classNames.join(" ");
      }}
    >
      {label}
    </NavLink>
  );
};

const Header: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navigation}>
        <div className={styles.navigationLogoContainer}>
          <img src={`${kalaszLogo}`} alt="Kalász logo" />
          <span>KALÁSZ</span>
        </div>
        <ul className={styles.desktopNavigation}>
          <li>{createDesktopNavLink("Hírek", "")}</li>
          <li>{createDesktopNavLink("Programok", "/programok")}</li>
          <li>{createDesktopNavLink("Bemutatkozás", "/bemutatkozas")}</li>
          <li>{createDesktopNavLink("Csoportjaink", "/csoportjaink")}</li>
          <li>{createDesktopNavLink("Kiadványok", "/kiadvanyok")}</li>
          <li>
            {createDesktopNavLink("Közösségi\u00A0ház", "/kozossegi-haz")}
          </li>
          <li>{createDesktopNavLink("Rólunk", "/rolunk")}</li>
          <li>{createDesktopNavLink("Galéria", "/galeria")}</li>
          <li>{createDesktopNavLink("Elérhetőségeink", "/elerhetosegeink")}</li>
        </ul>
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
  );
};

export default Header;
