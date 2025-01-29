import { NavLink } from "react-router-dom";
import logoImage from "../../assets/logo-image.svg";
import logoTitle from "../../assets/logo-title.svg";
import styled from "styled-components";
import { pxToRem } from "../../helper";
import { motion } from "framer-motion";

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${pxToRem(16)};
  position: relative;
  z-index: 10;
`;

const MotionPicture = motion.create("picture");

const Logo = () => {
  return (
    <NavLink to="/">
      <StyledBox>
        <MotionPicture>
          <source srcSet={`${logoImage}.svg`} type="image/*" />
          <img src={logoImage} alt="Logo-image" width={60} height={60} />
        </MotionPicture>
        <MotionPicture
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        >
          <source srcSet={`${logoTitle}.svg`} type="image/*" />
          <img src={logoTitle} alt="Logo-image" width={143} height={30} />
        </MotionPicture>
      </StyledBox>
    </NavLink>
  );
};

export default Logo;
