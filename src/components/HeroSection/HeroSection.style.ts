import styled from "styled-components";

export const StyledHeroSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60dvh;
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
    -webkit-text-stroke: 1px var(--primary-color); /* Stroke width and color */
    color: transparent;
  }

  h1:nth-of-type(3) {
    font-size: var(--xx-large-size);
    font-weight: var(--extra-bold-w);
    align-self: end;
  }
`;
