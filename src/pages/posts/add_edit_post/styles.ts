import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles<Theme>(() => ({
  container: {
    width: '100%',
    height: '100%',
    padding: '8px',
    // display: 'grid',
    // rowGap: '8px',
  },
  boxEditor: {
    marginTop: '8px',
    width: '100%',
    height: '93%',
    display: 'flex',
    backgroundColor: '#fff',
    padding: '10px 16px',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  formEditor: {
    width: '65%',
    height: '100%',
    overflow: 'hidden',
  },
  detailEditor: {
    width: '32%',
    height: '100%',
  },
  input: {
    display: 'none',
  },
  boxImage: {
    display: 'flex',
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10px',
    paddingBottom: '8px',
    flexWrap: 'wrap',
  },
}));
