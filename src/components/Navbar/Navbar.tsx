import { NavbarLink } from '../NavbarLink/NavbarLink';
import styles from './Navbar.module.css';


export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.contentLeft}>
        <div className={styles.navigation}>
          <NavbarLink to="/" label="Bunte Platte e.V."/>
        </div>
      </div>
      <div className={styles.contentRight}>
        <div className={styles.navigation}>
         <NavbarLink to="/festival" label="About"/>
         <NavbarLink to="/volunteers" label="Projects"/>
         <NavbarLink to="/about" label="Join us"/>
         <NavbarLink to="/shop" label="Archive"/>
        </div>
      </div>
    </nav>
  );
};