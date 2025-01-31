import { useEffect, useRef } from "react";
import { Overlay, StyledBtn, StyledSideBar } from "../Header.style";
import NavBar from "../NavBar/NavBar";

interface NavigationProps {
  onClose: () => void;
}

const Navigation = ({ onClose }: NavigationProps) => {
  const currentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (currentRef.current && !currentRef.current.contains(e.target as Node))
        onClose();
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <Overlay>
      <StyledSideBar
        ref={currentRef}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <StyledBtn $absolute={true} onClick={onClose}>
          <i className="bx bx-x"></i>
        </StyledBtn>

        <NavBar onClose={onClose} />
      </StyledSideBar>
    </Overlay>
  );
};

export default Navigation;
