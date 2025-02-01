import styled from "styled-components";
import { pxToRem } from "../../../helper";
import { StyledStatText, StyledStatValue } from "../Landing.style";
import AnimatedText from "../../AnimatedText/AnimatedText";
import { useTranslation } from "react-i18next";

const StyledStatistics = styled.div`
  display: flex;
  justify-content: center;
  gap: ${pxToRem(180)};

  @media (max-width: 1200px) {
    flex-wrap: wrap;
    gap: ${pxToRem(100)};
  }

  @media (max-width: 600px) {
    gap: ${pxToRem(80)};
  }
`;

const StyledStatisticCard = styled.div`
  max-width: ${pxToRem(180)};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1200px) {
    max-width: ${pxToRem(250)};
  }
`;

const Statistics = () => {
  const { t } = useTranslation();
  const stats = [
    { value: "100+", text: t("active.company"), id: 1 },
    { value: "55", text: t("closed.deals"), id: 2 },
    { value: "75%", text: t("outreach.efforts"), id: 3 },
  ];

  return (
    <StyledStatistics>
      {stats.map((stat) => (
        <StyledStatisticCard key={stat.id}>
          <StyledStatValue>{stat.value}</StyledStatValue>
          <StyledStatText>
            <AnimatedText text={stat.text} once={true} duration={0.05} />
          </StyledStatText>
        </StyledStatisticCard>
      ))}
    </StyledStatistics>
  );
};

export default Statistics;
