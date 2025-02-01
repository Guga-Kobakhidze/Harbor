import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { pxToRem } from "../../helper";
import useOutsideClick from "../../hooks/useOutsideClick";
import { useTranslation } from "react-i18next";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--overlay-color);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const StyledModal = styled.div`
  background-color: var(--primary-color);
  border-radius: 8px;
  width: ${pxToRem(400)};
  padding: ${pxToRem(20)};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;

  .icon {
    font-size: var(--xs-large-size);
    cursor: pointer;
    color: var(--dark-color);
  }
`;

const StyledCloseBtn = styled.button`
  width: 100%;
  height: ${pxToRem(55)};
  background-color: var(--dark-bg-color);
  color: var(--primary-color);
  transition: 0.2s;

  &:active {
    transform: scale(0.97);
  }

  &:hover {
    background: var(--button-bg-hover-color);
  }
`;

const StyledSuccessText = styled.h1<{ $confirmed: string | null }>`
  font-size: var(--xs-large-size);
  margin-bottom: ${pxToRem(15)};
  font-weight: var(--bold-w);
  color: ${({ $confirmed }) =>
    $confirmed ? "#5cb85c" : "var(--input-error-color)"};
`;

const StyledDescription = styled.p`
  font-size: var(--small-size);
  font-size: var(--medium-w);
  color: var(--dark-color);
  margin-bottom: ${pxToRem(15)};
  text-align: center;
`;

interface SuccessModalProps {
  close: () => void;
  openModal: boolean;
  title: string;
  description: string;
  confirmed: boolean;
}

const SuccessModal = ({
  close,
  title,
  openModal,
  confirmed,
  description,
}: SuccessModalProps) => {
  const { t } = useTranslation();
  const ref = useOutsideClick({ handler: close });

  return (
    <React.Fragment>
      {openModal &&
        ReactDOM.createPortal(
          <Overlay>
            <StyledModal ref={ref} onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={close}>
                <i className="bx bx-x icon"></i>
              </CloseButton>
              <StyledSuccessText $confirmed={confirmed ? "true" : null}>
                {title}
              </StyledSuccessText>
              <StyledDescription>{description}</StyledDescription>
              <StyledCloseBtn onClick={close}>
                {t("form.modal.close")}
              </StyledCloseBtn>
            </StyledModal>
          </Overlay>,
          document.body
        )}
    </React.Fragment>
  );
};

export default SuccessModal;
