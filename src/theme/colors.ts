type ColorToken = {
  light: string;
  dark: string;
};

export const colors = {
  background: {
    primary: {
      light: '#F8F9FA',
      dark: '#1F2A37'
    },
    secondary: {
      light: '#FFFFFF',
      dark: '#111928'
    }
  },
  fill: {
    item: {
      light: '#F8F9FA',
      dark: '#1F2A37'
    },
    primary: {
      light: '#1F2A37',
      dark: '#FFFFFF'
    },
    primaryActive: {
      light: '#111928',
      dark: '#F3F4F6'
    },
    white: {
      light: 'rgb(255, 255, 255)',
      dark: 'rgb(255, 255, 255)'
    },
    whiteTransparent: {
      light: 'rgb(255, 255, 255, 0.8)',
      dark: 'rgb(255, 255, 255, 0.8)'
    },
    grey: {
      light: '#F3F4F6',
      dark: '#374151'
    },
    greyTransparent: {
      light: 'rgb(243, 244, 246, 0.8)',
      dark: 'rgb(243, 244, 246, 0.8)'
    },
    greyActive: {
      light: '#E5E7EB',
      dark: '#4B5563'
    },
    disabled: {
      light: '#D1D5DB',
      dark: '#374151'
    }
  },
  content: {
    primary: {
      light: '#1F2A37',
      dark: '#FFFFFF'
    },
    secondary: {
      light: '#6B7280',
      dark: '#9CA3AF'
    },
    disabled: {
      light: '#D1D5DB',
      dark: '#6B7280'
    },
    white: {
      light: '#FFFFFF',
      dark: '#FFFFFF'
    },
    black: {
      light: '#1F2A37',
      dark: '#1F2A37'
    }
  },
  stroke: {
    primary: {
      light: '#E5E7EB',
      dark: '#4B5563'
    },
    disabled: {
      light: '#F3F4F6',
      dark: '#4B5563'
    }
  },
  brand: {
    mint: {
      light: '#D3F3D4',
      dark: '#D3F3D4'
    },
    green: {
      light: '#3CD7A9',
      dark: '#3CD7A9'
    },
    yellow: {
      light: '#FDFF5A',
      dark: '#FDFF5A'
    },
    purple: {
      light: '#B3BFFD',
      dark: '#B3BFFD'
    }
  }
} as const;

// Type for theme mode
export type ThemeMode = 'light' | 'dark';

// Helper function to get color value based on current theme
export const getColor = (
  path: string[],
  mode: ThemeMode = 'light'
): string => {
  let current: any = colors;
  for (const key of path) {
    current = current[key];
  }
  return current[mode];
};

// Usage example:
// const backgroundColor = getColor(['background', 'primary'], 'light');
// Result: '#FFFFFF' 