import { schema } from "./schema";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledLargeBtn } from "../../theme/Components";
import { defaultValues, IContactUs } from "./ContactUs.config";
import {
  StyledButtonBox,
  StyledFullWidth,
  StyledGridForm,
} from "./ContactUs.style";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../../config";
import emailjs from "@emailjs/browser";
import FormComponent from "../../provider/FormProvider";
import TextAreaElement from "./element/TextAreaFieldElement";
import TextFieldElement from "./element/TextFieldElement";
import { useTranslation } from "react-i18next";

const ContactUsForm = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(false);

  const methods = useForm<IContactUs>({
    resolver: yupResolver(schema(t)),
    defaultValues,
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = (data: IContactUs) => {
    setLoading(true);
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY)
      .catch((error) => console.error(error))
      .finally(() => {
        reset();
        setLoading(false);
      });
  };

  return (
    <FormComponent methods={methods} submit={handleSubmit(onSubmit)}>
      <StyledGridForm>
        <TextFieldElement
          name="fullName"
          label={t("form.fullName")}
          placeholder={t("form.fullName.placeholder")}
        />
        <TextFieldElement
          name="email"
          label={t("form.email")}
          placeholder={t("form.email.placeholder")}
        />
        <TextFieldElement
          name="industry"
          label={t("form.industry")}
          placeholder={t("form.industry.placeholder")}
        />
        <TextFieldElement
          name="number"
          type="number"
          label={t("form.number")}
          placeholder={t("form.number.placeholder")}
        />
        <StyledFullWidth>
          <TextAreaElement
            rows={10.5}
            name="message"
            label={t("form.more.info")}
            placeholder={t("form.more.info.placeholder")}
          />
        </StyledFullWidth>
        <StyledButtonBox>
          <StyledLargeBtn disabled={loading} type="submit">
            {t("form.submit")}
          </StyledLargeBtn>
        </StyledButtonBox>
      </StyledGridForm>
    </FormComponent>
  );
};

export default ContactUsForm;
