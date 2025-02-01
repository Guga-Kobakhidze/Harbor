import styled from "styled-components";
import { pxToRem } from "../../helper";
import { StyledBtn } from "../../theme/Components";
import { useNavigate } from "react-router-dom";
import { FlexBoxCenter } from "../../theme/GlobalStyle";
import { useTranslation } from "react-i18next";

const Styled404 = styled.div`
  height: 100dvh;
  width: 100%;
  ${FlexBoxCenter};
  gap: ${pxToRem(40)};
  flex-direction: column;
`;

const StyledH1 = styled.h1`
  font-size: var(--xx-medium-size);
  font-weight: var(--extra-bold-w);
  -webkit-text-stroke: 1px var(--primary-color);
  color: transparent;
  text-transform: uppercase;
  line-height: var(--xxx-large-line);
`;

const PageNotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Styled404>
      <StyledH1>{t("coming.soon")}</StyledH1>
      <StyledBtn onClick={() => navigate("/")}>{t("go.back")}</StyledBtn>
    </Styled404>
  );
};

export default PageNotFound;
