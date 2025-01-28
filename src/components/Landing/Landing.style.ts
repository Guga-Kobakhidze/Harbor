import styled from "styled-components";
import { pxToRem } from "../../helper";

export const StyledHeroSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60dvh;
  margin-bottom: 200px;
`;

export const StyledImageBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledImage = styled.img`
  pointer-events: none;
  user-select: none;
  width: 100%;
  height: 100%;
`;

export const StyledContent = styled.div`
  width: 860px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: var(--maximum-z);
  letter-spacing: 2px;

  h1:first-child {
    font-size: var(--xx-large-size);
    font-weight: var(--extra-bold-w);
    align-self: start;
  }

  h1:nth-of-type(2) {
    font-size: var(--xx-large-size);
    font-weight: var(--extra-bold-w);
    -webkit-text-stroke: 1px var(--primary-color);
    color: transparent;
  }

  h1:nth-of-type(3) {
    font-size: var(--xx-large-size);
    font-weight: var(--extra-bold-w);
    align-self: end;
  }
`;

export const StyledAboutSection = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${pxToRem(150)};
  max-width: ${pxToRem(800)};
  margin-bottom: ${pxToRem(260)};
`;

export const StyledCrunchedSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: ${pxToRem(84)};
  max-width: ${pxToRem(800)};
  margin: 0 auto;
  margin-bottom: ${pxToRem(260)};
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

export const StyledStatText = styled.p`
  font-family: "Snippet";
  font-size: var(--medium-size);
  font-weight: var(--regular-w);
  letter-spacing: 1px;
  white-space: nowrap;
  margin-top: ${pxToRem(16)};
`;

