import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user";
import modalReducer from "./modal";
import noticeReducer from "./notice";
import miscReducer from "./misc";



export const reducers = combineReducers({
  user: userReducer,
  modal: modalReducer,
  notice: noticeReducer,
  misc: miscReducer
})