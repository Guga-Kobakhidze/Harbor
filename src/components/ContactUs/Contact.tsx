import { useRef } from "react";
import PlainSection from "../PlainSection/PlainSection";
import ContactUsForm from "./ContactUsForm";
import { StyledFormBox } from "./COntactUs.style";
import { useScrollTo } from "../../hooks/useScrollTo";

const ContactUsPage = () => {
  const scrollToRef = useRef<HTMLDivElement>(null);
  const { scrollTo } = useScrollTo(scrollToRef);

  return (
    <div>
      <PlainSection hasbackground content="CONTACT" />
      <StyledFormBox ref={scrollToRef}>
        <ContactUsForm />
      </StyledFormBox>
      <PlainSection
        hasbtn
        hasbackground
        content="Let's Talk"
        onClick={scrollTo}
      />
    </div>
  );
};

export default ContactUsPage;
