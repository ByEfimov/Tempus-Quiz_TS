import { combineReducers } from '@reduxjs/toolkit';
import HeaderSlice from '@/widgets/header/slice';
import UserSlice from '@/pages/login/slice';

export const rootReducer = combineReducers({
  Header: HeaderSlice,
  User: UserSlice,
});
