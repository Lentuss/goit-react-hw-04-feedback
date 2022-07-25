import React from 'react';
import PropTypes from 'prop-types';
import Statistic from '../Statistic';
import FeedBackForm from '../FeedbackForm';
import { FeedbackContainer, FormTitle } from './Section.styled';

const Section = ({
  title,
  good,
  neutral,
  bad,
  onFeedbackLeave,
  total,
  positivePercent,
}) => {
  return (
    <FeedbackContainer>
      <FormTitle>{title}</FormTitle>
      <FeedBackForm
        good={good}
        neutral={neutral}
        bad={bad}
        onFeedbackLeave={onFeedbackLeave}
      />
      <Statistic
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercent={positivePercent}
      />
    </FeedbackContainer>
  );
};

Section.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  onFeedbackLeave: PropTypes.func,
  countTotalFeedback: PropTypes.func,
  countPositiveFeedbackPercentage: PropTypes.func,
};
export default Section;
