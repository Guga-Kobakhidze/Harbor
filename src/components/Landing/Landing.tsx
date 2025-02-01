import React from "react";
import Statistics from "./components/Statistics";
import useLanguage from "../../hooks/useLanguage";
import PlainSection from "../PlainSection/PlainSection";
import RotatingImage from "./components/RotatingImage";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Span,
  MotionH1,
  StyledBtn,
  MotionDescription,
} from "../../theme/Components";
import {
  Wrapper,
  StyledContent,
  StyledImageBox,
  StyledHeroSection,
  StyledAboutSection,
  StyledCrunchedSection,
} from "./Landing.style";

const HeroSection = () => {
  const { t } = useTranslation();
  const { lang } = useLanguage();
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Wrapper>
        <StyledHeroSection>
          <StyledImageBox>
            <RotatingImage />
          </StyledImageBox>
          <StyledContent $isgeo={lang === "ka" ? "true" : null}>
            <MotionH1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              {t("navigate")}
            </MotionH1>
            <MotionH1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              {t("success")}
            </MotionH1>
            <MotionH1
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            >
              {t("together")}
            </MotionH1>
          </StyledContent>
        </StyledHeroSection>
        <StyledAboutSection>
          <MotionDescription
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t("about.description")}
          </MotionDescription>
          <StyledBtn onClick={() => navigate("#")}>{t("about.us")}</StyledBtn>
        </StyledAboutSection>
        <StyledCrunchedSection>
          <MotionDescription
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t("crunched.description")} <Span>{t("crunched.span")}</Span>
          </MotionDescription>
          <Statistics />
        </StyledCrunchedSection>
      </Wrapper>
      <PlainSection
        hasbtn
        content={t("letsTalk")}
        onClick={() => navigate("/contact")}
      />
    </React.Fragment>
  );
};

export default HeroSection;
