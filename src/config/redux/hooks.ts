import { PayloadAction } from "@reduxjs/toolkit";
import { dispatch } from ".";

import type { AppDispatch, RootState } from ".";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppMultiDispatch = () => {
  return function (actions: PayloadAction<any>[]) {
    for (const action of actions) dispatch(action);
  };
};
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
