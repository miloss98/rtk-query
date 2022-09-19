import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterInterface {
  value: number;
}

const initialState: CounterInterface = {
  value: 1,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    reset(state) {
      state.value = 0;
    },
  },
});

export const { increment, decrement, incrementByAmount, reset } =
  counterSlice.actions;
export const count = (state: any) => state.counter.value;

export default counterSlice.reducer;
