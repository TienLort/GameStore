import { createAsyncThunk } from '@reduxjs/toolkit';
import { gameApi } from 'src/clients/http/game_api';
import { IGameHome } from 'src/types/game';
import { toastMessage } from 'src/utils/toast';

export const getGames = createAsyncThunk<IGameHome[], void>(
  'game/getGames',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await gameApi.gameHome();
      return data;
    } catch (error: any) {
      toastMessage.error(error?.message || 'Lỗi hệ thống ');
      return rejectWithValue(error);
    }
  },
);

// export const getIndicatorData = createAsyncThunk<
//   { monitoringData: any },
//   { type: string; id: string }
// >('station/getIndicatorData', async (payload, { rejectWithValue }) => {
//   try {
//     const { data } = await StationApi.getIndicatorData(payload.type, payload.id);
//     return data;
//   } catch (error: any) {
//     toastMessage.error(error?.message || 'Lỗi hệ thống ');
//     return rejectWithValue(error);
//   }
// });
