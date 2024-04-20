import * as yup from "yup";


export const Sms_validation = yup.object().shape({
  contacts: yup.array().required()
    .test("single", "Invalid phone number", (contacts, {parent}) => {
      if (!parent.contact) return contacts?.length >= 1
      if (Array.isArray(contacts) ) {
        contacts.forEach(contact => {
          if (!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(contact)) return false
          else return true
        });
      }
    }),
  contact: yup.string()
    .test("required", "Invalid phone number", (contact, {parent}) => {
      if (!parent.contacts) return (contact || contact !== null || contact !== "")
    })
    .test("required", "Invalid phone number", (contact) => {
      if (contact) return /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(contact)
    }),
  message: yup.string().required()
})