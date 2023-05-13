import apiSlice from './api/api_slice';
import modalSlice from './common/modal/modal_slice';
import gameSlice from './games/games_slice';

export const reducer = {
  modalSlice,
  gameSlice,
  // last reducer require
  apiSlice,
};
