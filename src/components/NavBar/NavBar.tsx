import { NavLink } from "react-router-dom";
import LangToggle from "../LangToggle/LangToggle";
import { pxToRem } from "../../helper";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  gap: ${pxToRem(20)};
`;

const NavBar = () => {
  return (
    <StyledList>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <LangToggle />
    </StyledList>
  );
};

export default NavBar;
