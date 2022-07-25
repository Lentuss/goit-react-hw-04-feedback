import PropTypes from 'prop-types';
import Notification from '../Notification';
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
      {total !== 0 ? (
        <>
          <StatisicItem type="good">Good: {good}</StatisicItem>
          <StatisicItem type="neutral">Neutral: {neutral}</StatisicItem>
          <StatisicItem type="bad">Bad: {bad}</StatisicItem>
          <TotalFeedbacks>Total feedback: {total}</TotalFeedbacks>
          <PositivePercent>
            Positive feedback: {positivePercent}%
          </PositivePercent>
        </>
      ) : (
        <Notification message="No feedback yet" />
      )}
    </StatisticSection>
  );
};

export default Statistic;

Statistic.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercent: PropTypes.number,
};
