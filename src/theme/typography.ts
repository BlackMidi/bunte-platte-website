type FontStyle = {
  fontFamily: string;
  fontSize: string;
  fontStyle: string;
  fontWeight: number;
  lineHeight: string;
  textTransform?: string;
};

export const typography = {
  pageTitle: {
    fontFamily: 'Inter',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '36px',
    textAlign: 'left',
  },
  sectionTitle: {
    fontFamily: 'Inter',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '28px',
    textAlign: 'left',
  },
  baseMedium: {
    fontFamily: 'Inter',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '28px',
    textAlign: 'left',
  },
  baseRegular: {
    fontFamily: 'Inter',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '28px',
    textAlign: 'left',
  },
  labelUppercaseSemibold: {
    fontFamily: 'Inter',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '18px',
    textTransform: 'uppercase',
  },
  labelUppercaseMedium: {
    fontFamily: 'Inter',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '18px',
    textTransform: 'uppercase',
  },
  labelMedium: {
    fontFamily: 'Inter',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '18px',
  },
  labelRegular: {
    fontFamily: 'Inter',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '18px',
  },
} as const;

// Helper function to get typography styles
export const getTypography = (style: keyof typeof typography): FontStyle => {
  return typography[style];
};

// Helper function to get typography CSS string
export const getTypographyCSS = (style: keyof typeof typography): string => {
  const styles = typography[style];
  return Object.entries(styles)
    .map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};`)
    .join('\n');
}; 