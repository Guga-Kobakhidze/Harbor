import LangToggle from "../LangToggle/LangToggle";
import { NavLink } from "react-router-dom";
import { animation, MotionLi, StyledList, StyledNavLink } from "./NavBar.style";
import "boxicons";

const NavBar = () => {
  const links = [
    { to: "/", title: "Home", delay: 0.5 },
    { to: "/about", title: "About", delay: 0.7 },
    { to: "/contact", title: "Contact", delay: 0.9 },
  ];

  return (
    <StyledList>
      {links.map((link, index) => (
        <MotionLi
          key={index}
          {...animation}
          transition={{ duration: 0.5, delay: link.delay }}
        >
          <StyledNavLink
            to={link.to}
            as={NavLink}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <i className="bx bx-up-arrow-alt icon"></i>
            {link.title}
          </StyledNavLink>
        </MotionLi>
      ))}
      <LangToggle />
    </StyledList>
  );
};

export default NavBar;
