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
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const { isSmall } = useMediaQuery(900);
  const googleLink = generateGoogleLink(
    "45 Vazha Pshavela Ave. Tbilisi, Geeorgia 0177"
  );

  return (
    <StyledFooter>
      <StyledContent>
        <StyledBox $gap={isSmall ? 20 : 45}>
          <Logo />
          <Paragraph $opacity="0.1">{t("about.description")}</Paragraph>
        </StyledBox>
        <StyledBox $gap={isSmall ? 10 : 30}>
          <FooterSocial
            isblank={true}
            link={googleLink}
            image={locationIcon}
            values={[t("footer.location"), t("footer.country")]}
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
            values={[t("footer.follow")]}
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
