import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from './types';

const initialState = {
  id: '',
  name: '',
  email: '',
  photo: '',
  level: 0,
  experience: 0,
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state = action.payload;
    },
    removeUser(state) {
      state = initialState;
    },
  },
});

export const { setUser, removeUser } = UserSlice.actions;

export default UserSlice.reducer;
