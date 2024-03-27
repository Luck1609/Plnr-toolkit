import { createSlice } from "@reduxjs/toolkit";
// import PropTypes from "prop-types";

export const initialState = {
  modal: {
    show: false,
    title: "",
    component: "",
    validation: "",
    mutation: "",
    url: "",
    values: {},
    action: () => {}
  },
};

// initialState.modal.Proptypes = {
//   title: Proptypes.string
// }


const ModalReducer = createSlice({
  name: "modalReducer",
  initialState,
  reducers: {
    toggleModal: (state, { payload }) => {
      return {
        ...state,
        modal: !payload ? initialState.modal : payload,
      };
    }
  },
});

const { actions, reducer: modalReducer } = ModalReducer;

export const {
  toggleModal,
} = actions;

export default modalReducer;
