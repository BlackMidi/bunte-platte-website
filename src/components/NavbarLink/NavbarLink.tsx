import styles from './NavbarLink.module.css';

const NAVBAR_HEIGHT = 60; 

type NavbarLinkProps = {
  label: string;
  to: string;
  className?: string;
  children?: React.ReactNode;
};

export const NavbarLink = ({ label, to, className, children }: NavbarLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {

    e.preventDefault();

    if (to === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetElement = document.querySelector(to);

    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - NAVBAR_HEIGHT;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <a href={to} onClick={handleClick} className={`${styles.navbarLink} ${className || ''}`}>
      {children || (
        <>
          <span className={styles.darkText}>{label}</span>
          <span className={styles.invertedText}>{label}</span>
        </>
      )}
    </a>
  );
};
