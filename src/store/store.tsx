import { configureStore } from '@reduxjs/toolkit';
import trainerReducer from './slice/trainer';

export const trainerStore = () => {
  return configureStore({
    devTools: import.meta.env.DEV,
    reducer: {
      trainer: trainerReducer,
    },
  });
};

export type AppStoreTrainerType = ReturnType<typeof trainerStore>;
export type AppStateTrainerType = ReturnType<AppStoreTrainerType['getState']>;
export type AppDispatchTrainerType = AppStoreTrainerType['dispatch'];
