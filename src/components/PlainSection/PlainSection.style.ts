import styled, { css } from "styled-components";
import { pxToRem } from "../../helper";
import backgroundImg from "../../assets/background.svg";
import { FlexBoxCenter, frameByFrame } from "../../theme/GlobalStyle";

export const StyledPlainBox = styled.div<{
  $hasbackground?: string | null;
  $gap?: string;
}>`
  ${FlexBoxCenter};
  flex-direction: column;
  margin: var(--global-margin);
  gap: ${({ $gap }) => $gap || pxToRem(80)};
  background: ${({ $hasbackground }) =>
    $hasbackground
      ? `url(${backgroundImg}) repeat var(--dark-bg-color)`
      : "var(--dark-bg-color)"};
  padding: ${pxToRem(100)} var(--global-padding) ${pxToRem(86)};

  ${({ $hasbackground }) =>
    $hasbackground &&
    css`
      animation: ${frameByFrame} 1s steps(12) infinite;
    `}

  @media (max-width: 600px) {
    gap: ${pxToRem(40)};
  }
`;

export const StyledPlainTitle = styled.h1`
  font-family: "DM Sans";
  font-size: var(--xxx-large-size);
  font-weight: var(--black-w);
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
`;
