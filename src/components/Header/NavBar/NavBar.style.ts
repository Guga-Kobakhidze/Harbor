import styled, { keyframes } from "styled-components";
import { FlexBoxCenter } from "../../../theme/GlobalStyle";
import { pxToRem } from "../../../helper";

export const animation = {
  initial: { y: -40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export const StyledList = styled.ul`
  ${FlexBoxCenter};
  gap: ${pxToRem(40)};
`;

export const scale = keyframes`
  0%, 100% {
    transform:translate(-50%, -50%) scale(1);
  }

  50% {
   transform: translate(-50%, -50%) scale(1.3);
  }
`;

export const StyledNavLink = styled.div`
  position: relative;
  ${FlexBoxCenter};
  gap: ${pxToRem(8)};
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    width: ${pxToRem(15)};
    height: ${pxToRem(15)};
    border-radius: 50%;
    background-color: var(--primary-color);
    left: -15px;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: 0.2s ease-in-out;
    pointer-events: none;
  }

  &.active {
    color: var(--secondary-color);
  }

  &.active:hover::before {
    width: ${pxToRem(15)};
    height: ${pxToRem(15)};
  }

  &:hover::before {
    width: ${pxToRem(22)};
    height: ${pxToRem(22)};
  }

  &.active::before {
    background-color: var(--secondary-color);
    animation: ${scale} 1s infinite linear;
  }

  .icon {
    position: absolute;
    left: -35.8px;
    top: 20px;
    color: black;
    transform: rotate(45deg);
    opacity: 0;
    font-size: 18px;
    transition: all 0.3s ease-in-out, transform 0.3s ease-in-out;
  }

  &:hover .icon,
  &.active .icon {
    opacity: 1;
    top: 50%;
    left: -15px;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &.active .icon {
    opacity: 0;
  }
`;
