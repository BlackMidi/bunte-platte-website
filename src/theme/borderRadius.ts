type BorderRadiusValue = string;

export const borderRadius = {
  rounded0: '0px',
  roundedMedium: '4px',
  roundedLarge: '8px',
  roundedXLarge: '12px',
  roundedFull: '9999px',
} as const;

// Helper function to get border radius value
export const getBorderRadius = (radius: keyof typeof borderRadius): BorderRadiusValue => {
  return borderRadius[radius];
};

// Helper function to get border radius CSS string
export const getBorderRadiusCSS = (radius: keyof typeof borderRadius): string => {
  return `border-radius: ${borderRadius[radius]};`;
};