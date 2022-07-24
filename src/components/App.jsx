import React, { Component } from 'react';
import Section from './Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    this.setState(prev => {
      const stateTarget = e.target.name;
      return { [stateTarget]: prev[stateTarget] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
    // const { good, neutral, bad } = this.state;
    // return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () =>
    Number.parseInt((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    return (
      <Section
        title={'Please, leave your feedback'}
        state={this.state}
        onFeedbackLeave={this.handleClick}
        total={this.countTotalFeedback()}
        positivePercent={this.countPositiveFeedbackPercentage()}
      />
    );
  }
}

export default App;
