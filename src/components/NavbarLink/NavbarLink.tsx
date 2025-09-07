import { Link, LinkProps } from 'react-router-dom';
import styles from './NavbarLink.module.css';

type NavbarLinkProps = LinkProps & {
  label: string;
};

export const NavbarLink = ({ label, ...rest }: NavbarLinkProps) => {
  return (
    <Link {...rest} className={styles.navbarLink}>
      {/* This is the dark version of the text */}
      <span className={styles.darkText}>{label}</span>
      {/* This is the white version that blends with the background */}
      <span className={styles.invertedText}>{label}</span>
    </Link>
  );
};
