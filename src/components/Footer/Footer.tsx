import Logo from "../Logo/Logo";
import {
  Paragraph,
  StyledBox,
  StyledContent,
  StyledFooter,
} from "./Footer.style";
import FooterSocial from "./FooterSocial";
import locationIcon from "../../assets/location.svg";
import mailIcon from "../../assets/mail.svg";
import phoneIcon from "../../assets/phone.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import { generateGoogleLink } from "../../helper";
import useMediaQuery from "../../hooks/useMediaQuery";

const Footer = () => {
  const { isSmall } = useMediaQuery(900);
  const googleLink = generateGoogleLink(
    "45 Vazha Pshavela Ave. Tbilisi, Geeorgia 0177"
  );

  return (
    <StyledFooter>
      <StyledContent>
        <StyledBox $gap={isSmall ? 20 : 45}>
          <Logo />
          <Paragraph $opacity="0.1">
            Harbor is where businesses dock to exchange ideas, forge alliances,
            and set sail toward mutual success.
          </Paragraph>
        </StyledBox>
        <StyledBox $gap={isSmall ? 10 : 30}>
          <FooterSocial
            isblank={true}
            link={googleLink}
            image={locationIcon}
            values={["45 Vazha Pshavela Ave.", "Tbilisi, Geeorgia 0177"]}
          />
          <FooterSocial
            isnumber={true}
            image={phoneIcon}
            values={["+995 599 213 218", "+995 597 240 433"]}
          />
        </StyledBox>
        <StyledBox $gap={isSmall ? 10 : 30}>
          <FooterSocial
            isblank={true}
            image={linkedinIcon}
            values={["Follow us !"]}
            link="https://www.linkedin.com/company/harbor-georgia"
          />
          <FooterSocial
            isblank={false}
            image={mailIcon}
            values={["info@harbor.ge"]}
            link="mailto:info@harbor.ge"
          />
        </StyledBox>
      </StyledContent>
    </StyledFooter>
  );
};

export default Footer;
