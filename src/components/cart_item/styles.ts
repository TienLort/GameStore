import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from '../../theme';

export const useStyles = makeStyles<Theme>(() => ({
  Item: {
    padding: '14px 18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '15px',
    backgroundColor: 'hsl(0, 0%, 15%)',
    color: theme.palette.text.secondary,
    borderRadius: '10px',

    fontSize: '14px',
    fontWeight: '500',

    '*:first-child': {
      flex: '1 1',
    },
  },
  ItemButton: {
    padding: '0',
    fontSize: '16px',
    justifyContent: 'flex-start',
    textAlign: 'left',
  },
  ItemButtonRemove: {
    padding: '5px',
    fontSize: '18px',
    justifyContent: 'flex-start',
    backgroundColor: 'hsl(0, 0%, 18%)',
    textAlign: 'left',
    borderRadius: '15px',
  },
}));
