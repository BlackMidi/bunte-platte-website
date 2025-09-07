import React, { ReactNode } from 'react';
import { useTheme } from '../../theme/ThemeContext';
import { getColor } from '../../theme/colors';
import styles from './ApplicationLayout.module.css';

// Variants
type ApplicationLayoutVariant = 'oneColumn' | 'twoColumn';

// Position of optional side content
type SideContentPosition = 'left' | 'right';

type ApplicationLayoutProps = {
  /** Selects the layout variant to choose */
  variant: ApplicationLayoutVariant;
  children: ReactNode;
  /** Optional side content, only for the twoColumn variant */
  sideContent?: ReactNode;
  /** Tells the side content to be left or right */
  sideContentPosition?: SideContentPosition;
};

export const ApplicationLayout = ({
  variant,
  children,
  sideContent,
  sideContentPosition = 'right'
}: ApplicationLayoutProps) => {

  console.log('ApplicationLayout-Variante:', variant);
  
  const { theme } = useTheme();

  const layoutStyle: React.CSSProperties = {
    backgroundColor: getColor(['background', 'secondary'], theme),
  };

  // --- oneColumn Variant ---
  if (variant === 'oneColumn') {
    return (
      <div className={styles.applicationLayout} style={layoutStyle}>
        <main className={styles.singleColumnWrapper}>
          {children}
        </main>
      </div>
    );
  }

  // --- twoColumn Variant ---
  // For the "twoColumn" variant the modificator class is added. This controls if side content is left or right.
  const containerClasses = [
    styles.applicationLayout,
    styles.twoColumn, // Modifikator für zwei Spalten
    styles[`position-${sideContentPosition}`]
  ].join(' ');

  return (
    <div className={containerClasses} style={layoutStyle}>
      <main className={styles.mainContent}>
        {children}
      </main>
      <aside className={styles.sideContent}>
        {sideContent}
      </aside>
    </div>
  );
};

// Additional component for images, to make usage easier
type ImageContentProps = {
  src: string;
  alt: string;
};

export const ImageContent = ({ src, alt }: ImageContentProps) => {
  return (
    <div
      className={styles.image}
      style={{ backgroundImage: `url(${src})` }}
      role="img"
      aria-label={alt}
    />
  );
};