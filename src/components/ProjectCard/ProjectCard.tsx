import React from 'react';
import styles from './ProjectCard.module.css';
import { Icon } from '../Icon';

// PROPS
type ProjectCardProps = {
  title: string;
  imageUrl: string;
  projectUrl?: string; //Link is optional
  iconSrc?: string;
};

// PROJECT CARD
export const ProjectCard = ({ title, imageUrl, projectUrl, iconSrc }: ProjectCardProps) => {
  
  // We check which HTML tag to use based on whether projectUrl exists.
  const Tag = projectUrl ? 'a' : 'div';

  // className string that includes 'isLink' only if projectUrl exists.
  const cardClassName = `${styles.projectCard} ${projectUrl ? styles.isLink : ''}`;

  // Prepare props that are applied to tag.
  const tagProps = {
    className: cardClassName,
    ...(projectUrl && {
      href: projectUrl,
      target: '_blank',
      rel: 'noopener noreferrer',
    }),
  };

  return (
    <Tag {...tagProps}>
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
    </Tag>
  );
};


// PROJECT CARD GROUP
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

// export const ProjectCard = ({ title, imageUrl, projectUrl, iconSrc }: ProjectCardProps) => {
//   return (

//     <a 
//       href={projectUrl}
//       target="_blank"
//       rel="noopener noreferrer"
//       className={styles.projectCard}
//     >
//       <div 
//         className={styles.cardImage}
//         style={{ backgroundImage: `url(${imageUrl || '/image_placeholder.png'})` }}
//         role="img"
//         aria-label={title}
//       />
//       <div className={styles.cardTitle}>
//         <span>{title}</span>
//         {iconSrc && <Icon src={iconSrc} alt="" className={styles.cardIcon} />}
//       </div>
//     </a>
//   );
// };


// // ProjectCardGroup
// type ProjectCardGroupProps = {
//   children: React.ReactNode;
// };

// export const ProjectCardGroup = ({ children }: ProjectCardGroupProps) => {
//   return (
//     <div className={styles.cardGroup}>
//       {children}
//     </div>
//   );
// };

