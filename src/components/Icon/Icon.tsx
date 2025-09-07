import React, { CSSProperties } from 'react';
import styles from './Icon.module.css';

type IconProps = {
  src: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
};

export const Icon = ({ src, alt = '', className = '', style }: IconProps) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={`${styles.icon} ${className}`}
      style={style}
    />
  );
}; 