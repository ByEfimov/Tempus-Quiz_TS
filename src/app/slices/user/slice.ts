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
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.experience = action.payload.experience;
      state.level = action.payload.level;
      state.photo = action.payload.photo;
    },
    removeUser(state) {
      state.email = '';
      state.id = '';
      state.name = '';
      state.experience = 0;
      state.level = 0;
      state.photo = '';
    },
  },
});

export const { setUser, removeUser } = UserSlice.actions;

export default UserSlice.reducer;
