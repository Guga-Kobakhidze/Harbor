import styled, { css } from "styled-components";
import { pxToRem } from "../../helper";
import backgroundImg from "../../assets/background.svg";
import { frameByFrame } from "../../theme/GlobalStyle";

export const StyledPlainBox = styled.div<{ hasbackground?: string | null }>`
  display: flex;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
  gap: ${pxToRem(150)};
  background: ${({ hasbackground }) =>
    hasbackground
      ? `url(${backgroundImg}) repeat var(--dark-bg-color)`
      : "var(--dark-bg-color)"};
  padding: ${pxToRem(120)} 0 ${pxToRem(86)};

  ${({ hasbackground }) =>
    hasbackground &&
    css`
      animation: ${frameByFrame} 1s steps(12) infinite;
    `}
`;

export const StyledPlainTitle = styled.h1`
  font-family: "DM Sans";
  font-size: var(--xxx-large-size);
  font-weight: var(--black-w);
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
`;
