import { createSlice } from "@reduxjs/toolkit";
// import PropTypes from "prop-types";

export const initialState = {
  modal: {
    show: false,
    title: "",
    component: "",
    mutation: "",
    url: "",
    values: {},
    // action: () => {},
  },
  stepModal: {
    show: false,
    title: "",
    component: "",
    mutation: "",
    url: "",
    values: {},
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
    },

    toggleStepModal: (state, { payload }) => {
      return {
        ...state,
        stepModal: !payload ? initialState.stepModal : payload,
      };
    }
  },
});

const { actions, reducer: modalReducer } = ModalReducer;

export const { toggleModal, toggleStepModal } = actions;

export default modalReducer;
