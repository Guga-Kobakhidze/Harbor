import NavBar from "../NavBar/NavBar";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { Overlay, StyledBtn, StyledSideBar } from "../Header.style";

interface NavigationProps {
  onClose: () => void;
}

const Navigation = ({ onClose }: NavigationProps) => {
  const ref = useOutsideClick({ handler: onClose });

  return (
    <Overlay>
      <StyledSideBar
        ref={ref}
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
