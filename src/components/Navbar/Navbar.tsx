import { NavbarLink } from '../NavbarLink/NavbarLink';
import styles from './Navbar.module.css';

const navItems = [
  { label: 'Über', href: '#about' },
  { label: 'Projekte', href: '#projects' },
  { label: 'Beitritt', href: '#join' },
  { label: 'Archiv', href: '#archive' },
];

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.contentLeft}>
        <div className={styles.navigation}>
          <div className={styles.logo} style={{ paddingTop: "0px" }}>
            <img src="/bunte_platte_logo.svg" alt="Bunte Platte e.V. Logo" width="32" height="38"/>
          </div>
          <NavbarLink to="/" label="Bunte Platte e.V."/>
        </div>
      </div>
      <div className={styles.contentRight}>
        <div className={styles.navigation}>
         {/* Maps over the above array to create all links */}
         {navItems.map(item => (
           <NavbarLink key={item.label} to={item.href} label={item.label} />
         ))}
        </div>
      </div>
    </nav>
  );
};