import { GlobalState, User } from "./type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: GlobalState = {
  currentUser: undefined
};

function initSlice() {
  const slice = createSlice({
    name: "global",
    initialState,
    reducers: reducer
  });

  return slice;
}

const reducer = {
  setCurrentUser: function (
    state: GlobalState,
    action: PayloadAction<User | undefined>
  ) {
    state.currentUser = action.payload;
  }
};

export default initSlice();
