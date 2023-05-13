import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from 'src/theme';

export const useStyles = makeStyles<Theme>(() => ({
  NotFound: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    flex: '1 1',
    textAlign: 'center',
  },
  Title: {
    color: theme.palette.primary.main,
    fontSize: '80px',
    fontWeight: '800',
  },
  Description: {
    color: '#fff',

    fontSize: '20px',
    fontWeight: '500',
  },
  Redirect: {
    width: '80%',
    maxWidth: '500px',
    marginTop: '40px',
    fontSize: '16px',
    color: theme.palette.text.primary,
  },
  ProgressBar: {
    height: '4px',
    marginTop: '20px',
    borderRadius: '2px',
    backgroundColor: theme.palette.primary.main,
  },
}));
