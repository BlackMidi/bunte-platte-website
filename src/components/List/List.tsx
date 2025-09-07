import React, { ReactNode } from 'react';
import { useTheme } from '../../theme/ThemeContext';
import { getColor } from '../../theme/colors';
import { getTypography } from '../../theme/typography';
import styles from './List.module.css';
import { Icon } from '../Icon';

// ListItem
type ListItemProps = {
  iconSrc: string;
  children: ReactNode;
};

export const ListItem = ({ iconSrc, children }: ListItemProps) => {
  const { theme } = useTheme();

  const descriptionStyle: React.CSSProperties = {
    ...(getTypography('baseRegular') as React.CSSProperties),
    color: getColor(['content', 'primary'], theme),
  };

  return (
    <li className={styles.listItem}>
      <Icon src={iconSrc} alt="" className={styles.itemIcon} />
      <div className={styles.itemDescription} style={descriptionStyle}>
        {children}
      </div>
    </li>
  );
};


// List
type ListProps = {
  children: ReactNode;
};

export const List = ({ children }: ListProps) => {
  return (
    <ul className={styles.listContainer}>
      {children}
    </ul>
  );
};
