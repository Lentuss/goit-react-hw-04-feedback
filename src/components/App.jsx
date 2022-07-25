import { useState } from 'react';
import Section from './Section';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = e => {
    const target = e.target.name;
    switch (target) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () =>
    Number.parseInt((good / countTotalFeedback()) * 100);

  return (
    <Section
      title={'Please, leave your feedback'}
      good={good}
      neutral={neutral}
      bad={bad}
      onFeedbackLeave={handleClick}
      total={countTotalFeedback()}
      positivePercent={countPositiveFeedbackPercentage()}
    />
  );
};

export default App;
