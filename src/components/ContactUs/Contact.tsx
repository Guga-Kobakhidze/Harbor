import { useCallback, useEffect, useRef } from "react";
import PlainSection from "../PlainSection/PlainSection";
import ContactUsForm from "./ContactUsForm";
import { StyledFormBox } from "./ContactUs.style";

const behavior: ScrollBehavior = "smooth";

const ContactUsPage = () => {
  const scrollToRef = useRef<HTMLDivElement>(null);

  const scrollTo = useCallback(() => {
    if (scrollToRef?.current) scrollToRef.current.scrollIntoView({ behavior });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div>
      <PlainSection once={false} hasbackground content="CONTACT" />
      <StyledFormBox ref={scrollToRef}>
        <ContactUsForm />
      </StyledFormBox>
      <PlainSection
        hasbtn
        once={false}
        hasbackground
        onClick={scrollTo}
        content="Let's Talk"
      />
    </div>
  );
};

export default ContactUsPage;
