import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticatingUser: (
      state,
      _action
    ) => {
      state['loading'] = true;
    },
    setAuthenticatedUser: (state, action) => {
      const { user } = action.payload;
      if (user?.id) {
        state['isAuthenticated'] = true;
        state['user'] = user;
      }
      state['loading'] = false;
    },
    logOutUser: (state) => {
      state['isAuthenticated'] = false;
      state['user'] = null;
      state['loading'] = false;
    },
  },
});

export const {
  setAuthenticatingUser,
  setAuthenticatedUser,
  logOutUser
} = authSlice.actions;

export default authSlice.reducer;
