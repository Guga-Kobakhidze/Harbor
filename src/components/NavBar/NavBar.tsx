import { NavLink } from "react-router-dom";
import LangToggle from "../LangToggle/LangToggle";
import { pxToRem } from "../../helper";
import styled, { keyframes } from "styled-components";
import "boxicons";

const StyledList = styled.ul`
  display: flex;
  gap: ${pxToRem(40)};
`;

const scale = keyframes`
  0%, 100% {
    width: ${pxToRem(15)};
    height: ${pxToRem(15)};
  }

  50% {
    width: ${pxToRem(18)};
    height: ${pxToRem(18)};
  }
`;

export const StyledNavLink = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${pxToRem(8)};
  text-decoration: none;
  color: inherit;

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

const NavBar = () => {
  return (
    <StyledList>
      <li>
        <StyledNavLink
          to="/"
          as={NavLink}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <i className="bx bx-up-arrow-alt icon"></i>
          Home
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink as={NavLink} to="/about">
          <i className="bx bx-up-arrow-alt icon"></i>
          About
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink as={NavLink} to="/contact">
          <i className="bx bx-up-arrow-alt icon"></i>
          Contact
        </StyledNavLink>
      </li>
      <LangToggle />
    </StyledList>
  );
};

export default NavBar;
