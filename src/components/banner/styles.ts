import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles<Theme>(() => ({
  hero: {
    position: 'relative',
    width: '100%',
    background: 'url("https://i.imgur.com/dlwBoZt.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: '#fff',
    backgroundBlendMode: 'overlay',
  },
  heroContent: {
    margin: 'auto',
    textAlign: 'center',
  },
  heroDesc: {
    fontSize: '40px !important',
    fontWeight: '700 !important',
    marginBottom: '20px',
  },
}));
