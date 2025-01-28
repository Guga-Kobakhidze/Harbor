import {
  StyledContent,
  StyledHeroSection,
  StyledImageBox,
} from "./HeroSection.style";
import circleImage from "../../assets/main-circle.png";
import RotatingImage from "./RotatingImage";

const HeroSection = () => {
  return (
    <StyledHeroSection>
      <StyledImageBox>
        <RotatingImage src={circleImage} alt="main-circle"  />
      </StyledImageBox>
      <StyledContent>
        <h1>NAVIGATE</h1>
        <h1>SUCCESS</h1>
        <h1>TOGETHER</h1>
      </StyledContent>
    </StyledHeroSection>
  );
};

export default HeroSection;
