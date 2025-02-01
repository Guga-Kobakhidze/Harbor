import styled from "styled-components";
import { pxToRem } from "../../helper";
import { FlexBoxCenter } from "../../theme/GlobalStyle";

export const Wrapper = styled.div`
  padding: 0 var(--global-padding);
`;

export const StyledHeroSection = styled.div`
  position: relative;
  ${FlexBoxCenter};
  width: 100%;
  margin: ${pxToRem(150)} auto;

  @media (max-width: 1200px) {
    margin: ${pxToRem(200)} auto;
  }

  @media (max-width: 900px) {
    margin: ${pxToRem(100)} auto;
  }

  @media (max-width: 450px) {
    margin: ${pxToRem(60)} auto;
  }
`;

export const StyledImageBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 730px) {
    width: 60%;
  }
`;

export const StyledImage = styled.img`
  pointer-events: none;
  user-select: none;
  width: 100%;
  height: 100%;
  scale: 1.3;

  @media (max-width: 380px) {
    scale: 1.4;
  }
`;

export const StyledContent = styled.div<{ $isgeo: string | null }>`
  width: 1200px;
  ${FlexBoxCenter};
  flex-direction: column;
  position: relative;
  z-index: var(--maximum-z);
  letter-spacing: 2px;

  h1:first-child {
    font-size: var(--xx-medium-size);
    font-weight: var(--extra-bold-w);
    align-self: start;
    line-height: var(--xxx-large-line);
    padding-left: ${({ $isgeo }) => ($isgeo ? "60px" : "")};

    @media (max-width: 1200px) {
      padding-left: 0;
    }
  }

  h1:nth-of-type(2) {
    font-size: var(--xx-medium-size);
    font-weight: var(--extra-bold-w);
    -webkit-text-stroke: 1px var(--primary-color);
    color: transparent;
    line-height: var(--xxx-large-line);
  }

  h1:nth-of-type(3) {
    font-size: var(--xx-medium-size);
    font-weight: var(--extra-bold-w);
    align-self: end;
    line-height: var(--xxx-large-line);
  }
`;

export const StyledAboutSection = styled.div`
  margin: ${pxToRem(280)} auto ${pxToRem(180)};
  ${FlexBoxCenter};
  flex-direction: column;
  gap: ${pxToRem(60)};
  max-width: ${pxToRem(900)};

  @media (max-width: 900px) {
    gap: ${pxToRem(50)};
    margin: ${pxToRem(160)} auto ${pxToRem(60)};
  }

  @media (max-width: 500px) {
    gap: ${pxToRem(40)};
    margin-top: ${pxToRem(120)};
  }

  @media (max-width: 400px) {
    gap: ${pxToRem(20)};
    margin-top: ${pxToRem(100)};
  }
`;

export const StyledCrunchedSection = styled.div`
  ${FlexBoxCenter};
  flex-direction: column;
  gap: ${pxToRem(84)};
  max-width: ${pxToRem(900)};
  margin: var(--global-margin);
  margin-bottom: ${pxToRem(180)};

  @media (max-width: 900px) {
    gap: ${pxToRem(40)};
    margin-bottom: ${pxToRem(60)};
  }
`;

export const StyledStatValue = styled.h1`
  font-family: "Tulpen One";
  font-size: var(--huge-size);
  font-weight: var(--medium-bold-w);
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke: 1px var(--primary-color);
  line-height: 150px;
  color: transparent;
  pointer-events: none;
  user-select: none;
`;

export const StyledStatText = styled.div`
  font-family: "Snippet";
  font-size: var(--medium-size);
  font-weight: var(--regular-w);
  letter-spacing: 1px;
  white-space: nowrap;
  margin-top: ${pxToRem(16)};
`;

export const StyledLetsTalk = styled.div`
  ${FlexBoxCenter};
  flex-direction: column;
  gap: ${pxToRem(150)};
  margin: var(--global-margin);
  background-color: var(--dark-bg-color);
  padding: ${pxToRem(120)} 0 ${pxToRem(86)};
`;
