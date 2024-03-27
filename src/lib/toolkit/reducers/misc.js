import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  formLoading: false,
};

const MiscReducer = createSlice({
  name: "miscReducer",
  initialState,
  reducers: {
    formLoading: (state, { payload }) => {
      return {
        ...state,
        formLoading: payload === "close" ? false : true,
      };
    }
  },
});

const { actions, reducer: miscReducer } = MiscReducer;

export const {
  formLoading
} = actions;

export default miscReducer;
