import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const UserReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    authUser: (state, { payload }) => {
      return {
        ...state,
        user: !payload ? initialState.user : payload,
      };
    },
  },
});

export const { actions, reducer: userReducer } = UserReducer;

export const { authUser } = actions;

export default userReducer;
