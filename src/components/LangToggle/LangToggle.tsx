import React from "react";
import useLanguage from "../../hooks/useLanguage";
import useMediaQuery from "../../hooks/useMediaQuery";
import { MotionLi } from "../../theme/Components";
import { animation, StyledNavLink } from "../Header/NavBar/NavBar.style";

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
        <React.Fragment>
          <StyledNavLink as="button" onClick={onClick}>
            {Language}
          </StyledNavLink>
        </React.Fragment>
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
