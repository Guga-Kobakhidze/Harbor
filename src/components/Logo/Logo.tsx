import { NavLink } from "react-router-dom";
import logoImage from "../../assets/logo-image.svg";
import logoTitle from "../../assets/logo-title.svg";
import styled from "styled-components";
import { pxToRem } from "../../helper";

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${pxToRem(16)};
  position: relative;
  z-index: 10;

  @media (max-width: 600px) {
    img[alt="Logo-image"] {
      width: 40px;
      height: 40px;
    }

    img[alt="Logo-title"] {
      width: 80px;
      height: 60px;
    }
  }
`;

const Logo = () => {
  return (
    <NavLink to="/">
      <StyledBox>
        <picture>
          <source srcSet={`${logoImage}.svg`} type="image/*" />
          <img src={logoImage} alt="Logo-image" />
        </picture>
        <picture>
          <source srcSet={`${logoTitle}.svg`} type="image/*" />
          <img src={logoTitle} alt="Logo-title" />
        </picture>
      </StyledBox>
    </NavLink>
  );
};

export default Logo;
