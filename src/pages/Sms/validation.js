import * as yup from "yup";


export const Sms_validation = yup.object().shape({
  // contacts: yup.mixed().required()
  //   .test("single", "Invalid phone number", (contacts) => {
  //     if (contacts) {
  //       if (Array.isArray(contacts) ) {
  //         console.log("is array", contacts)
  //         contacts.forEach(contact => {
  //           if (!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(contact)) return false
  //           else return true
  //         });
  //       }
  //       else return /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(contacts)
  //     }
  //   }),
  message: yup.string().required()
})