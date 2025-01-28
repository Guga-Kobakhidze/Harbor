import * as yup from "yup";

export const schema = yup.object({
  fullName: yup.string().required("Full Name is required"),
  email: yup
    .string()
    .email("Email is not correctly filled")
    .required("Email is Required"),
  industry: yup.string(),
  number: yup.string(),
  message: yup.string(),
});
