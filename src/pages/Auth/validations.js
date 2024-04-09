import * as yup from "yup";

const officeValidation = yup.object().shape({
  name: yup.string().required(),
  region: yup.string().required(),
  district: yup.string().required(),
  initials: yup.string().max(10).required(),
  shelves: yup.number().required()
});

const officerValidation = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  title: yup.string().required(),
  email: yup.string().email().required(),
  contact: yup.string().required(),
  password: yup.string().required(),
  password_confirmation: yup.string().required()
    .test("match", "Must match password field", (confirmation, {parent}) => {
      if (confirmation) return confirmation === parent.password
    }),
});

const loginValidation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});



export { officeValidation, officerValidation, loginValidation };