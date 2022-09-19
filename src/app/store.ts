import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/faker-api/fakerApiSlice";
import { counterSlice } from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
