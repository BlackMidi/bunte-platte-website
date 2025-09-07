import React from 'react';
import { useTheme } from '../../theme/ThemeContext';
import { getColor } from '../../theme/colors';
import { getTypography } from '../../theme/typography';
import styles from './Section.module.css';

type SectionProps = {
  /** The title to be displayed in the left column. */
  title: string;
  /** The content to be displayed in the right column. Can be any valid React node. */
  children: React.ReactNode;
  /** Optional ID for the section, used for on-page anchor links. */
  id?: string;
};

export const Section = ({ title, children, id }: SectionProps) => {
  const { theme } = useTheme();

  // Apply typography and color from the theme for the title
  const titleStyle: React.CSSProperties = {
    ...(getTypography('sectionTitle') as React.CSSProperties),
    color: getColor(['content', 'primary'], theme),
  };

  return (
    <section id={id} className={styles.sectionContainer}>
      <div className={styles.titleColumn}>
        <h2 style={titleStyle}>{title}</h2>
      </div>
      <div className={styles.contentColumn}>
        {children}
      </div>
    </section>
  );
};
