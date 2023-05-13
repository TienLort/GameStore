import { createSlice } from '@reduxjs/toolkit';
import { IGameHome } from 'src/types/game';
import { getGames } from './games_action';

interface IState {
  data: IGameHome[];
}

const initialState: IState = {
  data: [],
};

const gameSlice = createSlice({
  name: 'gameHome',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGames.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default gameSlice.reducer;
