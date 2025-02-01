import { TFunction } from "i18next";
import * as yup from "yup";

export const schema = (t: TFunction) => {
  return yup.object({
    fullName: yup.string().required(t("form.fullName.required")),
    email: yup
      .string()
      .email(t("form.email.notValid"))
      .required(t("form.email.required")),
    industry: yup.string(),
    number: yup.string(),
    message: yup.string(),
  });
};
