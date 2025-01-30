import useLanguage from "../../hooks/useLanguage";
import { animation, MotionLi, StyledNavLink } from "../NavBar/NavBar.style";

const LangToggle = () => {
  const { lang, langToggle } = useLanguage();

  return (
    <MotionLi {...animation} transition={{ duration: 0.5, delay: 1.1 }}>
      <StyledNavLink as="button" onClick={langToggle}>
        {lang === "en" ? "KA" : "EN"}
      </StyledNavLink>
    </MotionLi>
  );
};

export default LangToggle;
