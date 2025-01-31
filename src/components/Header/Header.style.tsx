import styled from "styled-components";
import { motion } from "framer-motion";
import { pxToRem } from "../../helper";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: var(--overlay-color);
`;

export const StyledBtn = styled.button<{ $absolute: boolean }>`
  position: ${({ $absolute }) => ($absolute ? "absolute" : "relative")};
  right: ${({ $absolute }) => ($absolute ? pxToRem(16) : 0)};
  top: ${({ $absolute }) => ($absolute ? pxToRem(25) : 0)};

  i {
    font-size: ${({ $absolute }) => ($absolute ? pxToRem(35) : pxToRem(28))};
    color: var(--primary-color);
  }
`;

export const StyledSideBar = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  z-index: 999;
  width: ${pxToRem(350)};
  background-color: var(--sideBar-bg-color);

  @media (max-width: 450px) {
    width: 100%;
  }

  .navbar {
    flex-direction: column;
    align-items: start;
    margin-top: 100px;
    padding: 0 10px;

    li {
      width: 100%;
      padding: 10px;
      border: 1px solid var(--primary-color);

      a {
        text-align: start;
      }

      a::before,
      button::before,
      i::before {
        display: none;
      }
    }
  }
`;
