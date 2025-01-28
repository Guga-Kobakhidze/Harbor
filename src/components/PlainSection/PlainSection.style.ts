import styled from "styled-components";
import { pxToRem } from "../../helper";

export const StyledPlainBox = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
  gap: ${pxToRem(150)};
  background-color: var(--dark-bg-color);
  padding: ${pxToRem(120)} 0 ${pxToRem(86)};
`;

export const StyledPlainTitle = styled.h1`
  font-family: "DM Sans";
  font-size: var(--xxx-large-size);
  font-weight: var(--black-w);
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
`;
