import PropTypes from 'prop-types';

import { FeedbackButton, FeedbackForm } from './FeedbackForm.styled';

const FeedBackForm = ({ onFeedbackLeave, buttons }) => {
  return (
    <FeedbackForm>
      {buttons.map(key => (
        <FeedbackButton name={key} key={key} onClick={onFeedbackLeave}>
          {key}
        </FeedbackButton>
      ))}
    </FeedbackForm>
  );
};

export default FeedBackForm;

FeedBackForm.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.string).isRequired,

  onFeedbackLeave: PropTypes.func.isRequired,
};
