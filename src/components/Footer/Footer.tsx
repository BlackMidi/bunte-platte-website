import React from 'react';
import { useTheme } from '../../theme/ThemeContext';
import { getColor } from '../../theme/colors';
import { getTypography } from '../../theme/typography';
import { LinkButton } from '../LinkButton/LinkButton';
import styles from './Footer.module.css';

export const Footer = () => {
  const { theme } = useTheme();

  const footerStyle: React.CSSProperties = {
    backgroundColor: getColor(['background', 'secondary'], theme),
    ...(getTypography('baseRegular') as React.CSSProperties),
  };

  const copyrightTextStyle: React.CSSProperties = {
    ...(getTypography('baseRegular') as React.CSSProperties),
    color: getColor(['content', 'secondary'], theme),
  };

  return (
    <footer className={styles.footer} style={footerStyle}>
      <div className={styles.leftContent}>
        <div className={styles.copyrightText} style={copyrightTextStyle}>
          © {new Date().getFullYear()}
        </div>
      </div>
      <div className={styles.rightContent}>
        <LinkButton to="/imprint" label="Imprint"/>
        <LinkButton to="/privacy" label="Privacy" />
        <LinkButton to="/terms" label="Terms" />
      </div>
    </footer>
  );
}; 