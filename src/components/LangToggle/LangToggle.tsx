import React from "react";
import useLanguage from "../../hooks/useLanguage";
import useMediaQuery from "../../hooks/useMediaQuery";
import { MotionLi } from "../../theme/Components";
import { animation, StyledNavLink } from "../Header/NavBar/NavBar.style";

const LangToggle = () => {
  const { lang, langToggle } = useLanguage();
  const { isSmall } = useMediaQuery(1200);

  const Language = lang === "en" ? "KA" : "EN";

  return (
    <React.Fragment>
      {isSmall ? (
        <li>
          <StyledNavLink as="a" onClick={langToggle}>
            {Language}
          </StyledNavLink>
        </li>
      ) : (
        <MotionLi {...animation} transition={{ duration: 0.5, delay: 1.1 }}>
          <StyledNavLink as="button" onClick={langToggle}>
            {Language}
          </StyledNavLink>
        </MotionLi>
      )}
    </React.Fragment>
  );
};

export default LangToggle;
