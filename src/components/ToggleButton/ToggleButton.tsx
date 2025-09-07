import React, { useState } from 'react';
import { useTheme } from '../../theme/ThemeContext';
import { getColor } from '../../theme/colors';
import { getTypography } from '../../theme/typography';
import { getBorderRadius } from '../../theme/borderRadius';
import styles from './ToggleButton.module.css';

type ToggleButtonOption = {
  id: string;
  label: string;
};

type ToggleButtonProps = {
  label: string;
  options: ToggleButtonOption[];
  defaultSelectedId?: string;
  onChange?: (selectedId: string) => void;
  className?: string;
};

export const ToggleButton = ({
  label,
  options,
  defaultSelectedId,
  onChange,
  className = ''
}: ToggleButtonProps) => {
  const { theme } = useTheme();
  const [selectedId, setSelectedId] = useState<string>(defaultSelectedId || options[0]?.id || '');
  const [selectedLabel, setSelectedLabel] = useState<string>(
    options.find(option => option.id === defaultSelectedId)?.label || options[0]?.label || ''
  );

  const handleToggle = (id: string, label: string) => {
    setSelectedId(id);
    setSelectedLabel(label);
    if (onChange) {
      onChange(id);
    }
  };

  const typography = getTypography('baseMedium');
  const borderRadius = getBorderRadius('roundedLarge');

  const labelStyle: React.CSSProperties = {
    color: getColor(['content', 'primary'], theme),
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize,
    fontStyle: typography.fontStyle,
    fontWeight: typography.fontWeight,
    lineHeight: typography.lineHeight,
  };

  const selectedLabelStyle: React.CSSProperties = {
    color: getColor(['content', 'secondary'], theme),
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize,
    fontStyle: typography.fontStyle,
    fontWeight: typography.fontWeight,
    lineHeight: typography.lineHeight,
  };

  const buttonTextStyle: React.CSSProperties = {
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize,
    fontStyle: typography.fontStyle,
    fontWeight: typography.fontWeight,
    lineHeight: typography.lineHeight,
    textAlign: 'center',
  };

  return (
    <div className={`${styles.toggleButton} ${className}`}>
      <div className={styles.toggleButtonLabels}>
        <span className={styles.toggleButtonLabel} style={labelStyle}>
          {label}
        </span>
        <span className={styles.toggleButtonLabelSelected} style={selectedLabelStyle}>
          {selectedLabel}
        </span>
      </div>
      <div className={styles.toggleButtonsGroup}>
        {options.map((option) => {
          const isSelected = option.id === selectedId;
          const buttonStyle: React.CSSProperties = {
            backgroundColor: isSelected 
              ? getColor(['fill', 'primary'], theme) 
              : getColor(['fill', 'grey'], theme),
            borderRadius: borderRadius,
          };
          const textStyle: React.CSSProperties = {
            ...buttonTextStyle,
            color: isSelected 
              ? getColor(['fill', 'item'], theme) 
              : getColor(['content', 'primary'], theme),
          };

          return (
            <button
              key={option.id}
              className={styles.toggleButtonItem}
              style={buttonStyle}
              onClick={() => handleToggle(option.id, option.label)}
            >
              <span className={styles.buttonText} style={textStyle}>
                {option.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}; 