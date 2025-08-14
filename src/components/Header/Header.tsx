import { OpenRentIcon } from '../../icons/OpenRent/OpenRentIcon';
import { UserIcon } from '../../icons/User/UserIcon';
import { MenuIcon } from '../../icons/Menu/MenuIcon';

import { Button } from '../Button/Button';

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
            <li className={styles.desktopLink}><a href="#about">About</a></li>
            <li className={styles.desktopLink}><a href="#pricing">Landlord Pricing & Services</a></li>
            <li className={styles.desktopLink}><Button label="Add Listing" /></li>
            <li><a className={styles.login} href="#login"><UserIcon /></a></li>
            <li className={styles.mobileLink}><a className={styles.menu} href="#menu"><MenuIcon /></a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}