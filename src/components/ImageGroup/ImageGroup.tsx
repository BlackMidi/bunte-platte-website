import React, { ReactNode } from 'react';
import styles from './ImageGroup.module.css';

// Image Group
type ImageGroupProps = {
    children: ReactNode;
  };
  
  export const ImageGroup = ({ children }: ImageGroupProps) => {
    return (
      <div className={styles.imageGroup}>
        {children}
      </div>
    );
  };
  

// Image Row
type ImageRowProps = {
  /** The layout variant for this row. */
  variant: 'single' | 'double';
  /** An array of image source URLs for this row. Expects 1 for 'single', 2 for 'double'. */
  images: string[];
};

export const ImageRow = ({ variant, images }: ImageRowProps) => {
  const imageUrl1 = images[0] || '/image_placeholder.png';
  const imageUrl2 = images[1] || '/image_placeholder.png';

  return (
    <div className={`${styles.imageRow} ${styles[variant]}`}>
      <div 
        className={styles.image}
        style={{ backgroundImage: `url(${imageUrl1})` }}
        role="img"
        aria-label="Gallery image 1" // Consider adding more descriptive alt text if possible
      />
      {variant === 'double' && (
        <div 
          className={styles.image}
          style={{ backgroundImage: `url(${imageUrl2})` }}
          role="img"
          aria-label="Gallery image 2"
        />
      )}
    </div>
  );
};