import { useNavigate } from "react-router-dom";
import { H1, StyledBtn } from "../../theme/Components";
import styled from "styled-components";
import { FlexBoxCenter } from "../../theme/GlobalStyle";
import { pxToRem } from "../../helper";

const Styled404 = styled.div`
  height: 100dvh;
  width: 100%;
  ${FlexBoxCenter};
  gap: ${pxToRem(40)};
  flex-direction: column;
`;

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <Styled404>
      <H1>PAGE NOT FOUND</H1>
      <StyledBtn onClick={() => navigate("/")}>Go Back</StyledBtn>
    </Styled404>
  );
};

export default PageNotFound;
