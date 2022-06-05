const { createSlice } = require('@reduxjs/toolkit');

const routeSlice = createSlice({
  name: 'route',
  initialState: {
    routeLoad: 'not loading',
  },
  reducers: {
    setLoading: (state, action) => {
      state.routeLoad = action.payload;
    },
  },
});

export const { setLoading } = routeSlice.actions;

export const routeLoad = (state) => state.route.routeLoad;

export default routeSlice.reducer;
