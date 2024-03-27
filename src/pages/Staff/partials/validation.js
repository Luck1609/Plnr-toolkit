import * as yup from "yup";

export const UserFormValidation = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),

  email: yup.string().email().required(),

  contact: yup
    .string()
    .required()
    .min(10)
    .max(13)
    .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/, {
      message: "Format must be +233249149420 or 0249149420",
    })
    .typeError("Invalid format - must be +233249149420 or 0249149420"),

  title: yup
    .string()
    .required()
    .test("selection", "Invalid selection", (title) => {
      console.log("title ifno", ["Mr.", "Mrs.", "Miss", "Pln", "Eng.", "Dr."].includes(title), title)
      if (title) return ["Mr.", "Mrs.", "Miss", "Pln", "Eng.", "Dr."].includes(title)
    }),

  role: yup
    .string()
    .required()
    .test("selection", "Invalid selection", (role) => {
      console.log("role ifno", ["Assistant Planning Officer", "Technical Officer", "Secretary"].includes(role), role)
      if (role) return ["Assistant Planning Officer", "Technical Officer", "Secretary"].includes(role)
    }),
});
