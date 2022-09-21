import GlobalState from "../../modules/global/index"
import { combineReducers } from "@reduxjs/toolkit";

export default combineReducers({
  global: GlobalState
});
