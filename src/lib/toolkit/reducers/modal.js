import { createSlice } from "@reduxjs/toolkit";
// import PropTypes from "prop-types";

export const initialState = {
  modal: {
    show: false,
    title: null,
    component: null,
    mutation: null,
    url: null,
    values: {},
    // action: () => {},
  },
  previewModal: {
    show: false,
    title: null,
    component: null,
    data: null
  },
  stepModal: {
    show: false,
    title: null,
    component: null,
    mutation: null,
    url: null,
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
    },

    togglePreviewModal: (state, { payload }) => {
      return {
        ...state,
        previewModal: !payload ? initialState.previewModal : payload,
      };
    }
  },
});

const { actions, reducer: modalReducer } = ModalReducer;

export const { toggleModal, toggleStepModal, togglePreviewModal } = actions;

export default modalReducer;
