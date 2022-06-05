import { createSlice } from '@reduxjs/toolkit';

const routeSlice = createSlice({
  name: 'route',
  initialState: {
    routeLoad: 'not loading',
  },
  reducers: {
    setLoading: (state: { routeLoad: string }, action: { payload: string }) => {
      state.routeLoad = action.payload;
    },
  },
});

export const { setLoading } = routeSlice.actions;

export const routeLoad = (state: {
  route: {
    routeLoad: string;
  };
}) => state.route.routeLoad;

export default routeSlice.reducer;
