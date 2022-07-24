import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification';
import {
  StatisticSection,
  StatisticTitle,
  StatisicItem,
  TotalFeedbacks,
  PositivePercent,
} from './Statistic.styled';

class Statistic extends Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercent: PropTypes.number,
  };

  render() {
    const { good, neutral, bad } = this.props.state;
    const totalFeedback = this.props.total;
    const positivePercent = this.props.positivePercent;

    return (
      <StatisticSection>
        <StatisticTitle>Statistics</StatisticTitle>
        {totalFeedback !== 0 ? (
          <>
            <StatisicItem type="good">Good: {good}</StatisicItem>
            <StatisicItem type="neutral">Neutral: {neutral}</StatisicItem>
            <StatisicItem type="bad">Bad: {bad}</StatisicItem>
            <TotalFeedbacks>Total feedback: {totalFeedback}</TotalFeedbacks>
            <PositivePercent>
              Positive feedback: {positivePercent}%
            </PositivePercent>
          </>
        ) : (
          <Notification message="No feedback yet" />
        )}
      </StatisticSection>
    );
  }
}

export default Statistic;
