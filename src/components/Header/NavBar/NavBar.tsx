import { NavLink } from "react-router-dom";
import { MotionLi } from "../../../theme/Components";
import { useTranslation } from "react-i18next";
import { animation, StyledList, StyledNavLink } from "./NavBar.style";
import LangToggle from "../../LangToggle/LangToggle";
import "boxicons";
import useMediaQuery from "../../../hooks/useMediaQuery";
import React from "react";

interface NavLinsType {
  to: string;
  title: string;
}

const NavLinks = ({ to, title }: NavLinsType) => {
  return (
    <StyledNavLink
      to={to}
      as={NavLink}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      <i className="bx bx-up-arrow-alt icon"></i>
      {title}
    </StyledNavLink>
  );
};

const NavBar = ({ onClose }: { onClose?: () => void }) => {
  const { t } = useTranslation();
  const { isSmall } = useMediaQuery(900);

  const links = [
    { to: "/", title: t("home"), delay: 0.5 },
    { to: "/about", title: t("about"), delay: 0.7 },
    { to: "/contact", title: t("contact"), delay: 0.9 },
  ];

  return (
    <StyledList className="navbar">
      {links.map((link, index) => (
        <React.Fragment key={index}>
          {isSmall ? (
            <li onClick={onClose}>
              <NavLinks title={link.title} to={link.to} />
            </li>
          ) : (
            <MotionLi
              {...animation}
              transition={{ duration: 0.5, delay: link.delay }}
            >
              <NavLinks title={link.title} to={link.to} />
            </MotionLi>
          )}
        </React.Fragment>
      ))}
      <LangToggle />
    </StyledList>
  );
};

export default NavBar;
