import { combineReducers } from '@reduxjs/toolkit';
import HeaderSlice from '@/widgets/header/slice';

export const rootReducer = combineReducers({
  Header: HeaderSlice,
});
