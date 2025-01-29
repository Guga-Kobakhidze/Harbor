import styled from "styled-components";
import { pxToRem } from "../../../helper";
import { StyledStatText, StyledStatValue } from "../Landing.style";

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
  const stats = [
    { value: "100+", text: "Active companies in network", id: 1 },
    { value: "55", text: "Closed deals", id: 2 },
    { value: "185K", text: "Companies saved", id: 3 },
  ];

  return (
    <StyledStatistics>
      {stats.map((stat) => (
        <StyledStatisticCard key={stat.id}>
          <StyledStatValue>{stat.value}</StyledStatValue>
          <StyledStatText>{stat.text}</StyledStatText>
        </StyledStatisticCard>
      ))}
    </StyledStatistics>
  );
};

export default Statistics;
