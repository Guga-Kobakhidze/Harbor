import Logo from "../Logo/Logo";
import styled from "styled-components";
import NavBar from "../NavBar/NavBar";
import { pxToRem } from "../../helper";
import useMediaQuery from "../../hooks/useMediaQuery";
import { FlexBoxBetween } from "../../theme/GlobalStyle";

export const StyledHeader = styled.header`
  ${FlexBoxBetween};
  padding: ${pxToRem(30)} var(--global-padding);
  gap: ${pxToRem(16)};

  i {
    font-size: var(--xs-large-size);
  }

  @media (max-width: 460px) {
    padding: ${pxToRem(10)} var(--global-padding);
  }
`;

const Header = () => {
  const { isSmall } = useMediaQuery(1200);

  return (
    <StyledHeader as="header">
      <Logo />
      {isSmall ? <i className="bx bx-menu"></i> : <NavBar />}
    </StyledHeader>
  );
};

export default Header;
