import * as yup from "yup";




export const LocalityValidation = yup.object().shape({
  name: yup.string().required(),
  initials: yup.string().required()
});


export const SectorValidation = yup.object().shape({
  name: yup.string().required(),
  initials: yup.string().required(),
  blocks: yup.array().required()
});
