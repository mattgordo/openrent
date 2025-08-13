// import OpenRentLogo from '../../assets/openrent-logo.svg';

import { UserIcon } from '../../icons/UserIcon.tsx/UserIcon';
import { MenuIcon } from '../../icons/Menu/MenuIcon';

import { OpenRentIcon } from '../../icons/OpenRent/OpenRentIcon';

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <a href="/" className={styles.logoLink}>
          <OpenRentIcon />
        </a>
        <nav className={styles.headerNav}>
          <ul>
            <li className={styles.desktopLink}><button role="button">Add Listing</button></li>
            <li><a className={styles.login} href="#login"><UserIcon /></a></li>
            <li className={styles.mobileLink}><a className={styles.menu} href="#menu"><MenuIcon /></a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}