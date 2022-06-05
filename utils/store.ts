import { configureStore } from '@reduxjs/toolkit';
import routeReducer from '@lib/Slices/routeSlice';

export const store = configureStore({
  reducer: {
    route: routeReducer,
  },
});
