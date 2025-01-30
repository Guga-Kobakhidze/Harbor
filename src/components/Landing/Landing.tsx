import React from "react";
import Statistics from "./components/Statistics";
import PlainSection from "../PlainSection/PlainSection";
import RotatingImage from "./components/RotatingImage";
import { motion } from "framer-motion";
import { useScrollTo } from "../../hooks/useScrollTo";
import { useNavigate } from "react-router-dom";
import { H1, LargeH1, Span, StyledBtn } from "../../theme/Components";
import {
  StyledContent,
  StyledImageBox,
  StyledHeroSection,
  StyledAboutSection,
  StyledCrunchedSection,
  Wrapper,
} from "./Landing.style";

const HeroSection = () => {
  const navigate = useNavigate();
  const { scrollTo } = useScrollTo();

  const MotionH1 = motion.create(LargeH1);

  return (
    <React.Fragment>
      <Wrapper>
        <StyledHeroSection>
          <StyledImageBox>
            <RotatingImage />
          </StyledImageBox>
          <StyledContent>
            <MotionH1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              NAVIGATE
            </MotionH1>
            <MotionH1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              SUCCESS
            </MotionH1>
            <MotionH1
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            >
              TOGETHER
            </MotionH1>
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
      </Wrapper>
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
