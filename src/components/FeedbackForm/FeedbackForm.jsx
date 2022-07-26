import PropTypes from 'prop-types';

import { FeedbackButton, FeedbackForm } from './FeedbackForm.styled';

const FeedBackForm = ({ onFeedbackLeave, good, neutral, bad }) => {
  const buttons = { good, neutral, bad };
  return (
    <FeedbackForm>
      {Object.keys(buttons).map(key => (
        <FeedbackButton name={key} key={key} onClick={onFeedbackLeave}>
          {key}
        </FeedbackButton>
      ))}
    </FeedbackForm>
  );
};

export default FeedBackForm;

FeedBackForm.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  onFeedbackLeave: PropTypes.func,
};
