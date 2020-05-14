import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const { decrement, increment, incrementByAmount } = counterSlice.actions;

export const incrementAsync = (amount: Number) =>
  (dispatch: (arg0: { payload: any; type: string; }) => void) => {
    setTimeout(() => {
      dispatch(incrementByAmount(amount));
    }, 3000);
  };

export const selectCount = (state: { counter: { value: any; }; }) => state.counter.value;

export default counterSlice.reducer;