import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from 'src/theme';

export const useStyles = makeStyles<Theme>((theme) => ({
  SearchBar: {
    width: '100%',
    display: 'flex',
    gap: '4px',
    justifySelf: 'center',
    [theme.breakpoints.down('sm')]: {
      minWidth: '100% !important',
      paddingInline: '8px',
      gridColumn: '1 / 3',
    },
  },
  InputBar: {
    width: '100%',
    padding: '12px 16px',
    backgroundColor: 'hsl(0, 0%, 15%)',
    color: theme.palette.text.primary,
    borderRadius: '10px',
    transition: 'background-color 0.2s, color 0.2s',
    fontSize: '14px',
    fontFamily: 'GT Walsheim Pro',
    '&:focus': {
      backgroundColor: 'hsl(0, 0%, 40%)',
      color: '#fff',
    },
  },
}));
