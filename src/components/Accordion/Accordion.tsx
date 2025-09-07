import React, { useState, ReactNode } from 'react';
import { useTheme } from '../../theme/ThemeContext';
import { getColor } from '../../theme/colors';
import { getTypography } from '../../theme/typography';
import styles from './Accordion.module.css';
import { Icon } from '../Icon';


// Accordion: The main container that manages state
type AccordionProps = {
  children: React.ReactElement<AccordionItemProps> | React.ReactElement<AccordionItemProps>[];
};

export const Accordion = ({ children }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    // If clicked item is already open, close it. Otherwise, open it.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.accordionContainer}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            isOpen: openIndex === index,
            onClick: () => handleItemClick(index),
          });
        }
        return child;
      })}
    </div>
  );
};

// AccordionItem: The individual collapsable panels
type AccordionItemProps = {
  title: string;
  children: ReactNode;
  // Props are passed down from parent Accordion
  isOpen?: boolean;
  onClick?: () => void;
};

export const AccordionItem = ({ title, children, isOpen, onClick }: AccordionItemProps) => {
  const { theme } = useTheme();

  const titleStyle: React.CSSProperties = {
    ...(getTypography('baseRegular') as React.CSSProperties),
    color: getColor(['content', 'primary'], theme),
  };
  
  const contentStyle: React.CSSProperties = {
    ...(getTypography('baseRegular') as React.CSSProperties),
    color: getColor(['content', 'primary'], theme),
  };

  return (
    <div className={styles.accordionItem}>
      <div className={styles.itemHeader} onClick={onClick}>
        <h3 className={styles.itemTitle} style={titleStyle}>
          {title}
        </h3>
        <Icon 
          src={isOpen ? '/collapse_plus_circle.svg' : '/expand_plus_circle.svg'} 
          alt={isOpen ? 'Collapse section' : 'Expand section'} 
        />
      </div>
      <div className={`${styles.itemContent} ${isOpen ? styles.itemContentOpen : ''}`}>
        <div className={styles.contentInner} style={contentStyle}>
          {children}
        </div>
      </div>
    </div>
  );
};

