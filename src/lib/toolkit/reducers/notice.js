import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  notice: {
    show: false,
    title: "",
    message: "",
    action: "",
    mutations: "",
    payload: "",
    method: "delete",
  },
  logout: false
};

const NoticeReducer = createSlice({
  name: "noticeReducer",
  initialState,
  reducers: {
    toggleNotice: (state, { payload }) => {
      console.log("Notice payload", payload);
      return {
        ...state,
        notice:
          payload === "close"
            ? initialState.notice
            : { ...initialState.notice, ...payload },
      };
    },

    toggleLogoutNotice: (state, {payload}) => {
      state.logout = payload !== "close"
    }
  },
});

const { actions, reducer: noticeReducer } = NoticeReducer;

export const { toggleNotice, toggleLogoutNotice } = actions;

export default noticeReducer;
