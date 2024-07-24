import { createSlice } from '@reduxjs/toolkit';
import { MAX_TTL } from '../constants';
const initialState = {
  toasts: [],
};

const toastsSlice = createSlice({
  name: 'toasts',
  initialState,
  reducers: {
    addToast: (
      state,
      action
    ) => {
      const toast = {
        id: action.payload.id || new Date().getTime(),
        ttl: action.payload.ttl !== undefined ? action.payload.ttl : MAX_TTL,
        ...action.payload,
      };
      state.toasts.push(toast);
    },
    deleteToast: (state, action) => {
      state.toasts = state.toasts.filter(
        (toast) => toast.id !== action.payload
      );
    },
  },
});

export const { addToast, deleteToast } = toastsSlice.actions;
export default toastsSlice.reducer;
