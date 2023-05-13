import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import Routes from './routes';
import ModalController from './components/modal';

const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Routes />
      <ModalController />
    </LocalizationProvider>
  );
};

export default App;
