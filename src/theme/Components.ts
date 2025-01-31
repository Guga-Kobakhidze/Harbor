import styled from "styled-components";
import { pxToRem } from "../helper";
import { motion } from "framer-motion";

const buttonStyles = `
  text-transform: uppercase;
  background-color: var(--button-bg-color);
  color: var(--primary-color);
  font-weight: var(--semibold-w);
  font-size: var(--large-size);
  transition: 0.5s;
  &:active {
    transform: scale(0.9);
  }`;

const LargeH1 = styled.h1`
  font-size: var(--huge-size);
  font-weight: var(--extra-bold-w);
`;

const H1 = styled.div`
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
  padding: ${pxToRem(20)} ${pxToRem(30)};
  ${buttonStyles};

  &:disabled {
    background-color: var(--button-bg-hover-color);
    cursor: not-allowed;
  }

  &:hover {
    background-color: var(--button-bg-hover-color);
    padding: ${pxToRem(20)} ${pxToRem(80)};
  }
`;

export const StyledLargeBtn = styled.button`
  ${buttonStyles};
  padding: ${pxToRem(20)} ${pxToRem(30)};
  width: 100%;

  &:disabled {
    background-color: var(--button-bg-hover-color);
    cursor: not-allowed;
  }

  &:hover {
    background-color: var(--button-bg-hover-color);
    width: 80%;
  }
`;

const MarginAuto = styled.div`
  text-align: center;
  margin: var(--global-margin);
`;

export const MotionH1 = motion.create(LargeH1);
export const MotionLi = motion.create("li");

export { LargeH1, H1, Span, StyledBtn, MarginAuto };
