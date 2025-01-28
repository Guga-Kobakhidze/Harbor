import styled from "styled-components";
import { pxToRem } from "../../../helper";
import { StyledStatText, StyledStatValue } from "../Landing.style";

const StyledStatistics = styled.div`
  display: flex;
  justify-content: center;
  gap: ${pxToRem(180)};
`;

const StyledStatisticCard = styled.div`
  max-width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
