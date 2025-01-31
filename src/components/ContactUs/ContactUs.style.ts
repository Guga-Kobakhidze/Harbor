import styled from "styled-components";
import { pxToRem } from "../../helper";

const styles = `outline: none;
  background-color: transparent;
  border: 1px solid var(--input-color);
  color: var(--text-color);
  padding-left: ${pxToRem(21)};

  font-size: var(--x-small-size);
  font-weight: var(--regular-w);
  color: var(--input-color);
  margin-top: ${pxToRem(13)};

 -moz-appearance: textfield; /* Firefox */
  appearance: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: var(--input-color);
    opacity: 0.8
  }`;

export const StyledGridForm = styled.div`
  max-width: 800px;
  display: grid;
  margin: var(--global-margin);
  grid-template-columns: repeat(2, 1fr);
  gap: ${pxToRem(40)} ${pxToRem(32)};

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: ${pxToRem(20)};
  }
`;

export const StyledFormBox = styled.div`
  padding: ${pxToRem(100)} var(--global-padding) ${pxToRem(200)};

  @media (max-width: 767px) {
    padding: ${pxToRem(50)} var(--global-padding) ${pxToRem(80)};
  }
`;

export const StyledFullWidth = styled.div`
  grid-column: 1 / -1;
`;

export const StyledButtonBox = styled.div`
  grid-column: 1 / -1;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const StyledInput = styled.input`
  height: ${pxToRem(55)};
  ${styles}
`;

export const StyledTextarea = styled.textarea`
  padding-top: ${pxToRem(15)};
  resize: none !important;
  ${styles}
`;

export const StyledLabel = styled.label`
  font-size: var(--x-small-size);
  font-weight: var(--regular-w);
  color: var(--input-color);
  line-height: 17px;
  text-transform: uppercase;
  position: relative;
`;

export const StyledHelperText = styled.p`
  position: absolute;
  bottom: -25px;
  left: 10px;
  color: var(--input-error-color);
  text-transform: capitalize;
`;
