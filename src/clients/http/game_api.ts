import { get, ResponseSchema } from './api';
import { createClient } from './axios_client';
import { IGame, ISearchParams, TScreenshot, IGameHome } from 'src/types/game';

const client = createClient('https://63c1064e376b9b2e6471b375.mockapi.io');

export const gameApi = {
  gameDetails: (params: { id: number }): Promise<IGame> => {
    return get<IGame>(`games/${params.id}`);
  },
  gameList: (params?: ISearchParams): Promise<ResponseSchema<IGame>> => {
    return get<ResponseSchema<IGame>>('games', params as Record<string, string>);
  },
  gameScreenshots: (params: { id: number }): Promise<ResponseSchema<TScreenshot>> => {
    return get<ResponseSchema<TScreenshot>>(`games/${params.id}/screenshots`);
  },
  gameHome: () => {
    return client.get<IGameHome[]>('/games');
  },
};
