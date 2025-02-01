import { useCallback, useEffect, useRef } from "react";
import PlainSection from "../PlainSection/PlainSection";
import ContactUsForm from "./ContactUsForm";
import { StyledFormBox } from "./ContactUs.style";
import { useTranslation } from "react-i18next";

const behavior: ScrollBehavior = "smooth";

const ContactUsPage = () => {
  const { t } = useTranslation();
  const scrollToRef = useRef<HTMLDivElement>(null);

  const scrollTo = useCallback(() => {
    if (scrollToRef?.current) scrollToRef.current.scrollIntoView({ behavior });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div>
      <PlainSection once={false} hasbackground content={t("form.contact")} />
      <StyledFormBox ref={scrollToRef}>
        <ContactUsForm />
      </StyledFormBox>
      <PlainSection
        hasbtn
        once={true}
        hasbackground
        onClick={scrollTo}
        content={t("letsTalk")}
      />
    </div>
  );
};

export default ContactUsPage;
