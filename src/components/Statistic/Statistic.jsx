import PropTypes from 'prop-types';

import {
  StatisticSection,
  StatisticTitle,
  StatisicItem,
  TotalFeedbacks,
  PositivePercent,
} from './Statistic.styled';

const Statistic = ({ good, neutral, bad, total, positivePercent }) => {
  return (
    <StatisticSection>
      <StatisticTitle>Statistics</StatisticTitle>
      <StatisicItem type="good">Good: {good}</StatisicItem>
      <StatisicItem type="neutral">Neutral: {neutral}</StatisicItem>
      <StatisicItem type="bad">Bad: {bad}</StatisicItem>
      <TotalFeedbacks>Total feedback: {total}</TotalFeedbacks>
      <PositivePercent>Positive feedback: {positivePercent}%</PositivePercent>
    </StatisticSection>
  );
};

export default Statistic;

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercent: PropTypes.number.isRequired,
};
