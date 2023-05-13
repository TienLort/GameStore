import { PaletteOptions } from '@mui/material';

const palette: PaletteOptions = {
  primary: {
    light: '#757ce8',
    main: '#ff9800',
    dark: '#002884',
    contrastText: '#fff',
  },
  error: {
    main: '#d63031',
    light: '#ff6a6e',
  },
  secondary: {
    main: '#656565',
    dark: '#6c6b6b',
    light: '#f3f2f1',
    A100: '#0f1011',
    A200: 'hsl(0, 0%, 10%)',
    A400: 'hsl(0, 0%, 15%)',
    A700: 'hsl(0, 0%, 18%)',
  },

  success: {
    main: '#2E7D32',
    light: '#21d169',
  },
  text: {
    primary: 'hsl(0, 0%, 80%)',
    secondary: 'hsl(0, 0%, 60%)',
  },
};

export default palette;
