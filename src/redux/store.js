import { configureStore } from '@reduxjs/toolkit';
import toastSlice from './toast.slice';
import authSlice from './auth.slice';
const store = configureStore({
  reducer: {
    toasts: toastSlice,
    auth: authSlice
  },
});

export default store;
