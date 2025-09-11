import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { useTheme } from '../../theme/ThemeContext';
import { getColor } from '../../theme/colors';
import { getTypography } from '../../theme/typography';
import { Icon } from '../Icon';
import styles from './LinkButton.module.css';

// We take the props from React Routers <Link> (like `to`, `className`, `onClick`) and add our own here
// Info: this LinkButton can use both external (href) and internal (to) links! 
type LinkButtonProps = Omit<LinkProps, 'to'> & {
  to?: string;
  href?: string;
  label: string;
  iconSrc?: string;
  iconAlt?: string;
};

export const LinkButton = ({
  label,
  iconSrc,
  to,
  href,
  iconAlt = '',
  ...rest // rest grabs the <Link> props from below and adds them here

}: LinkButtonProps) => {

  // Styling for LinkButton
  const { theme } = useTheme();
  const typography = getTypography('baseRegular');
  const linkButtonStyle: React.CSSProperties = {
    color: getColor(['content', 'primary'], theme),
  };
  const labelStyle: React.CSSProperties = {
    color: getColor(['content', 'primary'], theme),
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize,
    fontStyle: typography.fontStyle,
    fontWeight: typography.fontWeight,
    lineHeight: typography.lineHeight,
  };
  const iconStyle: React.CSSProperties = {
    filter: theme === 'light' 
      ? 'brightness(0)' // Black for light theme
      : 'brightness(0) invert(1)', // White for dark theme
  };

  const classNames = `${styles.linkButton} ${rest.className || ''}`;
  const content = (
    <>
      <span className={styles.linkButtonLabel} style={labelStyle}>
        {label}
      </span>
      {iconSrc && (
        <div className={styles.linkButtonIcon}>
          <Icon src={iconSrc} alt={iconAlt} style={iconStyle} />
        </div>
      )}
    </>
  );

  // If an 'href' is provided, render a standard <a> tag for external links
  if (href) {
    // we check if the link is a weblink (or a mail adress via mailto: for example)
    const isWebLink = href.startsWith('http');

    return (
      <a
        href={href}
        className={classNames}
        style={linkButtonStyle}
        // We only add target and rel if its a weblink -> always opens in new tab
        target={isWebLink ? '_blank' : undefined}
        rel={isWebLink ? 'noopener noreferrer' : undefined}
        {...rest}
      >
        {content}
      </a>
    );
  }

  // If a 'to' is provided, render a React Router <Link> for internal navigation
  if (to) {
    return (
      <Link
        to={to}
        className={classNames}
        style={linkButtonStyle}
        {...rest}
      >
        {content}
      </Link>
    );
  }

  // Fallback for when neither is provided (renders a non-clickable span)
  return (
    <span className={classNames} style={linkButtonStyle} {...rest}>
      {content}
    </span>
  );
};