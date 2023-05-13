import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from 'src/theme';

export const useStyles = makeStyles<Theme>(() => ({
  NavBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '10px',
  },
  Title: {
    marginInline: '6px',
    textAlign: 'right',
    color: '#fff',
    fontSize: 'clamp(22px, 5vw, 58px)',
    fontWeight: '800',
  },
  Store: {
    padding: '0',
    fontSize: 'clamp(16px, 4.25vw, 24px)',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));
