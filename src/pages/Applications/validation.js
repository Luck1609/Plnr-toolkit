import * as yup from "yup";

export const DeclineReasonValidation = yup.object().shape({
  reason: yup.string().test("comment", "This field is required", function (reason, {parent}) {
    return parent.action === "defer";
  }),

  action: yup.string().required().oneOf(["recommend", "defer"]),
});

export const PermitNumberValidation = yup.object().shape({
  permit_num: yup.string().required(),
  dev_permit_num: yup.string().required(),
});

export const ApplicantInfo = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  contact: yup
    .string()
    .required()
    .min(10)
    .max(13)
    .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/, {
      message: "Format must be +233249149420 or 0249149420",
    })
    .typeError("Invalid format - must be +233249149420 or 0249149420"),

  title: yup.string().required().oneOf(["Mr.", "Mrs.", "Miss", "Dr.", "Eng."]),
});

export const PlotDetails = yup.object().shape({
  locality_id: yup.number().required(),

  sector_id: yup.number().required(),

  block: yup.string().required(),

  plot: yup.string().required().typeError(),
});

export const StructureDetails = yup.object().shape({
  type: yup.string().required(),

  height: yup
    .string()
    .test("storey-level", "Multi storey height cannot be 1", function (value, {parent}) {
      return parent.type === "Multi storey" &&
        (value <= 1 || value === undefined)
        ? false
        : true;
    }),

  use: yup.array().required().ensure().min(1),
  // .test('min', 'Details must be at least 2 uses', function (value) {
  //   return value.length >= 1
  // })
  // .test('max', 'Details must not exceed 7 uses', function (value) {
  //   return (parent.use === 'Mixed Use') && (value > 7) ? false : true
  // })
});

export const ApplicationManagement = yup.object().shape({
  shelf: yup.string().notRequired(),
  existing: yup.string().oneOf(["Yes", "No"]),
});


export const ScannedDocuments = yup.object().shape({
  scanned_app_documents: yup
    .mixed()
    .notRequired()
    .test("fileSize", "Image size must not be larger than 5MB", (value) => {
      let filtered;
      if (value && value.length > 0)
        filtered = Object.values(value).filter(
          (image) => image.size > 1024 * 1024 * 5
        );
      return filtered?.length > 0 ? false : true;
    })
    .test("fileSize", "Image format must be one of (JPG, PNG)", (value) => {
      let filtered;
      if (value && value.length > 0)
        filtered = Object.values(value).filter(
          (image) => !/jpg|jpeg|png/.test(image.type)
        );
      return filtered?.length > 0 ? false : true;
    }),
});

export const OtherDocuments = yup.object().shape({
  other_documents: yup
    .mixed()
    .notRequired()
    .test("fileSize", "Image size must not be larger than 5MB", (value) => {
      let filtered;
      if (value && value.length > 0)
        filtered = Object.values(value).filter(
          (image) => image.size > 1024 * 1024 * 5
        );
      return filtered?.length > 0 ? false : true;
    })
    .test("fileSize", "Image format must be one of (JPG, PNG)", (value) => {
      let filtered;
      if (value && value.length > 0)
        filtered = Object.values(value).filter(
          (image) => !/jpg|jpeg|png/.test(image.type)
        );
      return filtered?.length > 0 ? false : true;
    }),
});

export const PreviewData = yup.object().shape({});
