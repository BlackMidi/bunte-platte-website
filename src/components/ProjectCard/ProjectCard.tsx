import React from 'react';
import styles from './ProjectCard.module.css';
import { Icon } from '../Icon';

// ProjectCard Props
type ProjectCardProps = {
  title: string;
  imageUrl: string;
  projectUrl: string;
  iconSrc?: string;
};

export const ProjectCard = ({ title, imageUrl, projectUrl, iconSrc }: ProjectCardProps) => {
  return (
    <a 
      href={projectUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.projectCard}
    >
      <div 
        className={styles.cardImage}
        style={{ backgroundImage: `url(${imageUrl || '/image_placeholder.png'})` }}
        role="img"
        aria-label={title}
      />
      <div className={styles.cardTitle}>
        <span>{title}</span>
        {iconSrc && <Icon src={iconSrc} alt="" className={styles.cardIcon} />}
      </div>
    </a>
  );
};


// ProjectCardGroup
type ProjectCardGroupProps = {
  children: React.ReactNode;
};

export const ProjectCardGroup = ({ children }: ProjectCardGroupProps) => {
  return (
    <div className={styles.cardGroup}>
      {children}
    </div>
  );
};

