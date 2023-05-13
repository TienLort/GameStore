import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from '../../theme';

export const useStyles = makeStyles<Theme>(() => ({
  CusButton: {
    width: 'fit-content',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    backgroundColor: 'transparent',
    color: theme.palette.text.primary,
    userSelect: 'none',
    cursor: 'pointer',
    transition: 'transform 0.15s, color 0.2s',

    fontSize: '16px',
    fontWeight: '500',
    fontFamily: 'GT Walsheim Pro',
    '& svg': {
      transition: 'transform 0.2s',
    },
    '&:hover': {
      color: '#fff',
    },
    '&:active': {
      transform: 'scale(0.925) !important',
    },
  },
}));
