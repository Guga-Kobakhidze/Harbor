import { NavLink } from "react-router-dom";
import logoImage from "../../assets/logo-image.svg";
import logoTitle from "../../assets/logo-title.svg";
import styled from "styled-components";
import { pxToRem } from "../../helper";

const StyledBox = styled.div`
  display: flex;
  gap: ${pxToRem(16)};
`;

const Logo = () => {
  return (
    <NavLink to="/">
      <StyledBox>
        <picture>
          <source srcSet={`${logoImage}.svg`} type="image/*" />
          <img src={logoImage} alt="Logo-image" width={60} height={60} />
        </picture>
        <picture>
          <source srcSet={`${logoTitle}.svg`} type="image/*" />
          <img src={logoTitle} alt="Logo-image" width={143} height={30} />
        </picture>
      </StyledBox>
    </NavLink>
  );
};

export default Logo;
