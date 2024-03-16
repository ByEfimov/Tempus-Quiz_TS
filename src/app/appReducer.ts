import { combineReducers } from '@reduxjs/toolkit';
import HeaderSlice from '@/app/slices/header/slice';
import UserSlice from '@/app/slices/user/slice';

export const rootReducer = combineReducers({
  Header: HeaderSlice,
  User: UserSlice,
});
