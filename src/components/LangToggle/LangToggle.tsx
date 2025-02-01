import React from "react";
import useLanguage from "../../hooks/useLanguage";
import useMediaQuery from "../../hooks/useMediaQuery";
import { MotionLi } from "../../theme/Components";
import {
  animation,
  StyledLi,
  StyledNavLink,
} from "../Header/NavBar/NavBar.style";

const LangToggle = ({ onClose }: { onClose?: () => void }) => {
  const { lang, langToggle } = useLanguage();
  const { isSmall } = useMediaQuery(1200);

  const Language = lang === "en" ? "KA" : "EN";

  const onClick = () => {
    onClose?.();
    langToggle();
  };

  return (
    <React.Fragment>
      {isSmall ? (
        <StyledLi>
          <StyledNavLink as="button" onClick={onClick}>
            {Language}
          </StyledNavLink>
        </StyledLi>
      ) : (
        <MotionLi {...animation} transition={{ duration: 0.5, delay: 1.1 }}>
          <StyledNavLink as="button" onClick={onClick}>
            {Language}
          </StyledNavLink>
        </MotionLi>
      )}
    </React.Fragment>
  );
};

export default LangToggle;
