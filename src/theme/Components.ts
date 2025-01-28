import styled from "styled-components";
import { pxToRem } from "../helper";

const LargeH1 = styled.h1`
  font-size: var(--xx-large-size);
  font-weight: var(--extra-bold-w);
`;

const H1 = styled.h1`
  font-size: var(--x-large-size);
  font-weight: var(--medium-w);
  color: var(--primary-color);
`;

const Span = styled.span`
  font-size: var(--x-large-size);
  font-weight: var(--medium-w);
  color: var(--secondary-color);
`;

const StyledBtn = styled.button`
  padding: ${pxToRem(30)} ${pxToRem(41)};
  text-transform: uppercase;
  background-color: var(--button-bg-color);
  color: var(--primary-color);
  font-weight: var(--semibold-w);
  font-size: var(--large-size);
  transition: 0.3s;

  &:hover {
    background-color: var(--button-bg-hover-color);
  }

  @media (max-width: 1680px) {
    padding: ${pxToRem(20)} ${pxToRem(30)};
  }
`;

const MarginAuto = styled.div`
  text-align: center;
  margin: 0 auto;
`;

export { LargeH1, H1, Span, StyledBtn, MarginAuto };
