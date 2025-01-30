import styled from "styled-components";
import { pxToRem } from "../../helper";
import { Link } from "react-router-dom";
import { FlexBoxBetween } from "../../theme/GlobalStyle";

export const StyledFooter = styled.footer`
  padding: ${pxToRem(250)} var(--global-padding) ${pxToRem(50)};

  @media (max-width: 600px) {
    padding-top: ${pxToRem(100)};
  }
`;

export const StyledContent = styled.div`
  ${FlexBoxBetween};
  flex-wrap: wrap;
  align-items: start;
  gap: ${pxToRem(40)};

  @media (max-width: 900px) {
    justify-content: start;
  }
`;

export const Paragraph = styled.p<{ $opacity: string }>`
  font-size: var(--medium-size);
  color: var(--primary-color);
  opacity: ${({ $opacity }) => $opacity};
  max-width: ${pxToRem(300)};
`;

export const StyledLink = styled(Link)`
  font-size: var(--medium-size);
  color: var(--primary-color);
  max-width: ${pxToRem(300)};
`;

export const StyledBox = styled.div<{ $gap: number }>`
  display: flex;
  flex-direction: column;
  text-align: start;
  align-items: start;
  gap: ${({ $gap }) => pxToRem($gap)};
`;
