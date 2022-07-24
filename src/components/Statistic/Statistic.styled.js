import styled from 'styled-components';

export const StatisticSection = styled.div`
  display: block;
  padding: 20px;
  background-color: azure;
`;

export const StatisticTitle = styled.h2`
  margin: 0 0 20px;
  font-size: 22px;
`;

export const StatisicItem = styled.p`
  color: ${props => {
    switch (props.type) {
      case 'good':
        return 'green';

      case 'neutral':
        return 'orange';

      case 'bad':
        return 'red';

      default:
        return 'black';
    }
  }};

  font-size: 16px;
  font-weight: bold;
`;

export const TotalFeedbacks = styled.p`
  color: darkgreen;
`;

export const PositivePercent = styled.p`
  color: green;
`;
