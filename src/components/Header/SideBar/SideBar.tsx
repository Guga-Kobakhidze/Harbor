import React, { useState } from "react";
import { StyledBtn } from "../Header.style";
import Navigation from "./Navigation";

const SideBar = () => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <React.Fragment>
      <StyledBtn $absolute={false} onClick={onOpen}>
        <i className="bx bx-menu"></i>
      </StyledBtn>
      {open && <Navigation onClose={onClose} />}
    </React.Fragment>
  );
};

export default SideBar;
