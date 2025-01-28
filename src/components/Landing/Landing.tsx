import React from "react";
import Statistics from "./components/Statistics";
import circleImage from "../../assets/main-circle.png";
import RotatingImage from "./components/RotatingImage";
import { useNavigate } from "react-router-dom";
import { H1, LargeH1, Span, StyledBtn } from "../../theme/Components";
import {
  StyledContent,
  StyledImageBox,
  StyledHeroSection,
  StyledAboutSection,
  StyledCrunchedSection,
} from "./Landing.style";
import PlainSection from "../PlainSection/PlainSection";
import { useScrollTo } from "../../hooks/useScrollTo";

const HeroSection = () => {
  const navigate = useNavigate();
  const { scrollTo } = useScrollTo();

  return (
    <React.Fragment>
      <StyledHeroSection>
        <StyledImageBox>
          <RotatingImage src={circleImage} alt="main-circle" />
        </StyledImageBox>
        <StyledContent>
          <LargeH1>NAVIGATE</LargeH1>
          <LargeH1>SUCCESS</LargeH1>
          <LargeH1>TOGETHER</LargeH1>
        </StyledContent>
      </StyledHeroSection>
      <StyledAboutSection>
        <H1>
          Harbor is where businesses dock to exchange ideas, forge alliances,
          and set sail toward mutual success.
        </H1>
        <StyledBtn onClick={() => navigate("#")}>ABOUT US</StyledBtn>
      </StyledAboutSection>
      <StyledCrunchedSection>
        <H1>
          We've crunched the numbers and have some{" "}
          <Span>impressive figures you'll want to consider</Span>
        </H1>
        <Statistics />
      </StyledCrunchedSection>
      <PlainSection
        hasbtn
        content="Let's Talk"
        onClick={() => {
          navigate("/contact");
          scrollTo();
        }}
      />
    </React.Fragment>
  );
};

export default HeroSection;
