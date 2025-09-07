import { ReactNode } from 'react';
import { useTheme } from '../../theme/ThemeContext';
import { getColor } from '../../theme/colors';
import { getTypography } from '../../theme/typography';
import { Icon } from '../Icon';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'quaternary';

type ButtonProps = {
  variant?: ButtonVariant;
  leftIcon?: string;
  rightIcon?: string;
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export const Button = ({
  variant = 'primary',
  leftIcon,
  rightIcon,
  // Children refers to the Buttons label, if empty: no text is displayed
  children = "",
  onClick,
  disabled
}: ButtonProps) => {
  const { theme } = useTheme();

  // Check if only one icon is present
  const hasOnlyOneIcon = (leftIcon && !rightIcon) || (!leftIcon && rightIcon);
  
  // Define styles based on variant
  const getButtonStyle = () => {
    // Primary variant with black/white background
    if (variant === 'primary') {
      return {
        backgroundColor: getColor(['fill', 'primary'], theme),
        color: getColor(['fill', 'item'], theme),
        '--hover-color': getColor(['fill', 'primaryActive'], theme),
        ...getTypography('baseMedium'),
        paddingLeft: hasOnlyOneIcon ? '10px' : '16px',
        paddingRight: hasOnlyOneIcon ? '10px' : '16px',
      } as React.CSSProperties;
    } 
    // Secondary variant with grey background and border
    else if (variant === 'secondary') {
      return {
        backgroundColor: getColor(['fill', 'item'], theme),
        color: getColor(['fill', 'primary'], theme),
        border: `1px solid ${getColor(['content', 'secondary'], theme)}`,
        '--hover-color': getColor(['fill', 'greyActive'], theme),
        ...getTypography('baseMedium'),
        paddingLeft: hasOnlyOneIcon ? '10px' : '16px',
        paddingRight: hasOnlyOneIcon ? '10px' : '16px',
      } as React.CSSProperties;
    }
    // Tertiary variant with grey background
    else if (variant === 'tertiary') {
      return {
        backgroundColor: getColor(['fill', 'grey'], theme),
        color: getColor(['fill', 'primary'], theme),
        '--hover-color': getColor(['fill', 'greyActive'], theme),
        ...getTypography('baseMedium'),
        paddingLeft: hasOnlyOneIcon ? '10px' : '16px',
        paddingRight: hasOnlyOneIcon ? '10px' : '16px',
      } as React.CSSProperties;
    }
    // Quaternary variant without background
    else {
        return {
            backgroundColor: 'transparent',
            color: getColor(['fill', 'primary'], theme),
            '--hover-color': getColor(['fill', 'greyActive'], theme),
            ...getTypography('baseMedium'),
            paddingLeft: hasOnlyOneIcon ? '10px' : '16px',
            paddingRight: hasOnlyOneIcon ? '10px' : '16px',
        } as React.CSSProperties;
    }
  };

  const buttonStyle = getButtonStyle();

  // Apply the same color as the text to the icons
  const iconStyle = {
    filter: variant === 'primary' 
      ? 'brightness(0) invert(1)' // White icons for primary
      : 'brightness(0)', // Black icons for secondary
  };

  return (
    <button 
      className={styles.button}
      onClick={onClick} 
      disabled={disabled}
      style={buttonStyle}
    >
      {leftIcon && <Icon src={leftIcon} alt="" style={iconStyle} />}
      {children}
      {rightIcon && <Icon src={rightIcon} alt="" style={iconStyle} />}
    </button>
  );
}; 