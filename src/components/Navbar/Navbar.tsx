import { NavbarLink } from '../NavbarLink/NavbarLink';
import styles from './Navbar.module.css';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Join us', href: '#join' },
  { label: 'Archive', href: '#archive' },
];

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.contentLeft}>
        <div className={styles.navigation}>
          {/* This link scrolls to the top of the page */}
          <NavbarLink to="#" label="Bunte Platte e.V."/>
        </div>
      </div>
      <div className={styles.contentRight}>
        <div className={styles.navigation}>
         {/* 2. Map over the array to create the links */}
         {navItems.map(item => (
           <NavbarLink key={item.label} to={item.href} label={item.label} />
         ))}
        </div>
      </div>
    </nav>
  );
};