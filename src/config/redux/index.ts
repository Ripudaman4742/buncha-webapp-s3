import RootReducer from "./rootReducer";

import { AnyAction, configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: RootReducer,
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export function dispatch(action: AnyAction) {
  return store.dispatch(action);
}
