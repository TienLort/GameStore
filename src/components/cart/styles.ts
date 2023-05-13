import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from '../../theme';

export const useStyles = makeStyles<Theme>(() => ({
  Background: {
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '2',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    filter: 'blur(5px)',
  },
  FullBox: {
    height: '100%',
    width: '100%',
  },
  CartModal: {
    height: '100vh',
    width: '450px',
    maxWidth: '87.5vw',
    padding: '25px 20px',
    paddingRight: '40px',
    position: 'fixed',
    top: '0',
    right: '-20px',
    zIndex: '2',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    backgroundColor: '#1c1c1c',
  },
  CartHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  CartText: {
    marginLeft: '6px',
    color: 'white',
    fontSize: '28px',
    fontWeight: '800',
  },
  CartButton: {
    paddingBlock: '4px',
  },
  Items: {
    marginInline: '-20px',
    paddingInline: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    flex: '1 1',
    overflowX: 'hidden',
    overflowY: 'auto',
  },
  Checkout: {
    paddingLeft: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '10px',
    fontWeight: '600',
    color: theme.palette.text.secondary,
  },
  CheckoutBox: {
    display: 'flex',
    alignItems: 'center',
  },
  CheckoutButton: {
    padding: '5px',
    fontSize: '20px',
    color: 'white',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));
