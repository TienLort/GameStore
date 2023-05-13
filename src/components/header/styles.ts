import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from 'src/theme';

export const useStyles = makeStyles<Theme>((theme) => ({
  headroom: {
    position: 'fixed',
    zIndex: '2 !important',
    transition: '0.35s !important',
  },
  Header: {
    width: '100%',
    height: '78px',
    padding: '14px clamp(10px, 3vw, 50px)',
    display: 'grid',
    gridTemplateColumns: '1fr 100fr 1fr',
    gap: '10px',
    backgroundColor: '#1c1c1c',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '100fr 1fr',
      gridTemplateRows: '1fr 1fr',
    },
  },
  Logo: {
    padding: '6px',
    fontSize: '22px',
    fontWeight: '600',
    [theme.breakpoints.down('sm')]: {
      order: '-2',
    },
  },
  Cart: {
    justifySelf: 'flex-end',
    minWidth: '180px',
    fontSize: '18px',
    fontWeight: '500',
    gap: '0',
    '&:hover div': {
      backgroundColor: '#fff',
    },
    [theme.breakpoints.down('sm')]: {
      order: '-1',
    },
  },
  ButtonBox: {
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.text.primary,
    color: '#1c1c1c',
    borderRadius: '10px',
    transition: 'background-color 0.2s',

    fontSize: '14px',
    fontWeight: '600',
  },
  // SecondNavbar: {
  //   backgroundColor: '#1c1c1c',
  //   width: '100%',
  //   display: 'flex',
  //   height: '47px',
  //   position: 'fixed',
  //   padding: '0 clamp(10px, 3vw, 50px)',
  // },
  // NavbarContainer: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   flexWrap: 'wrap',
  //   justifyContent: 'space-between',
  //   width: '100%',
  // },
  // LeftNav: {
  //   alignItems: 'center',
  //   display: 'flex',
  //   overflowX: 'clip',
  //   overflowY: 'visible',
  // },
  // LinkButton: {
  //   display: 'flex',
  //   height: '47px',
  // },
  // NavLink: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   padding: '0.5rem 1.25rem',
  //   color: '#eee',
  //   fontWeight: '400',
  //   letterSpacing: '.4px',
  //   textTransform: 'uppercase',
  //   whiteSpace: 'nowrap',
  // },
  // Arrow: {
  //   width: '0',
  //   height: '0',
  //   borderLeft: '6px solid transparent',
  //   borderRight: '6px solid transparent',
  //   borderTop: '6px solid #eee',
  //   marginLeft: '3px',
  //   color: '#eee',
  //   fontWeight: '400',
  //   letterSpacing: '.4px',
  //   textTransform: 'uppercase',
  //   whiteSpace: 'nowrap',
  // },
}));
