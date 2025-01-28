import Logo from "../Logo/Logo";
import styled from "styled-components";
import NavBar from "../NavBar/NavBar";
import { pxToRem } from "../../helper";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${pxToRem(30)} ${pxToRem(117)};
  gap: ${pxToRem(16)};
`;

const Header = () => {
  return (
    <StyledHeader as="header">
      <Logo />
      <NavBar />
    </StyledHeader>
  );
};

export default Header;
