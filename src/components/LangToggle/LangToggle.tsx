import { animation, MotionLi, StyledNavLink } from "../NavBar/NavBar.style";

const LangToggle = () => {
  return (
    <MotionLi {...animation} transition={{ duration: 0.5, delay: 1.1 }}>
      <StyledNavLink as="h1">EN</StyledNavLink>
    </MotionLi>
  );
};

export default LangToggle;
