import { HEADER_TITLES, Header } from './types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: Header = {
  title: HEADER_TITLES.SELECT_QUIZ,
};

const HeaderSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setHeaderTitle(state, action: PayloadAction<Header>) {
      state.title = action.payload.title;
    },
  },
});

export const { setHeaderTitle } = HeaderSlice.actions;

export default HeaderSlice.reducer;
