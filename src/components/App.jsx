import { useState } from 'react';
import Section from './Section';
import Statistic from './Statistic';
import FeedBackForm from './FeedbackForm';
import Notification from './Notification';

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
  const buttons = Object.keys({ good, neutral, bad });

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () =>
    Number.parseInt((good / countTotalFeedback()) * 100);
  const total = countTotalFeedback();
  return (
    <Section title={'Please, leave your feedback'}>
      <FeedBackForm buttons={buttons} onFeedbackLeave={handleClick} />
      {total !== 0 ? (
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercent={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </Section>
  );
};

export default App;
