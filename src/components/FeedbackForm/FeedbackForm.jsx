import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FeedbackButton, FeedbackForm } from './FeedbackForm.styled';

class FeedBackForm extends Component {
  static propTypes = {
    onFeedbackLeave: PropTypes.func,
  };
  render() {
    const { onFeedbackLeave, state } = this.props;
    return (
      <FeedbackForm>
        {Object.keys(state).map(key => (
          <FeedbackButton name={key} key={key} onClick={onFeedbackLeave}>
            {key}
          </FeedbackButton>
        ))}
      </FeedbackForm>
    );
  }
}

export default FeedBackForm;
