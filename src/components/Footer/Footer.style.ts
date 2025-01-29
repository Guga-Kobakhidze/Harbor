import styled from "styled-components";
import { pxToRem } from "../../helper";
import { Link } from "react-router-dom";

export const StyledFooter = styled.footer`
  padding: ${pxToRem(450)} ${pxToRem(117)} ${pxToRem(50)};
`;

export const StyledContent = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${pxToRem(40)};

  @media (max-width: 900px) {
    justify-content: center;
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
  align-items: start;
  gap: ${({ $gap }) => pxToRem($gap)};
`;
