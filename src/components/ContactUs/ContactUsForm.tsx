import React, { useState } from "react";
import emailjs from "@emailjs/browser";
// import SuccessModal from "../SuccessModal/SuccessModal";
import FormComponent from "../../provider/FormProvider";
import TextAreaElement from "./element/TextAreaFieldElement";
import TextFieldElement from "./element/TextFieldElement";
import { schema } from "./schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { StyledLargeBtn } from "../../theme/Components";
import { defaultValues, IContactUs } from "./ContactUs.config";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../../config";
import {
  StyledButtonBox,
  StyledFullWidth,
  StyledGridForm,
} from "./ContactUs.style";

const ContactUsForm = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(false);
  // const [openModal, setOpenModal] = useState<boolean>(false);
  // const [confirmed, setConfirmed] = useState<boolean>(false);

  // const ConfirmMsg = confirmed
  //   ? t("form.submit.success")
  //   : t("form.submit.failed");

  // const ConfirmDesc = confirmed
  //   ? t("form.success.message")
  //   : t("form.failed.message");

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
      // .then((res) => {
      //   if (res && res.status === 200) setConfirmed(true);
      //   else setConfirmed(false);
      // })
      .finally(() => {
        reset();
        setLoading(false);
        // setOpenModal(true);
      });
  };

  return (
    <React.Fragment>
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

      {/* {openModal && (
        <SuccessModal
          title={ConfirmMsg}
          openModal={openModal}
          confirmed={confirmed}
          description={ConfirmDesc}
          close={() => setOpenModal(false)}
        />
      )} */}
    </React.Fragment>
  );
};

export default ContactUsForm;
