import { useState } from "react";

const Header = ({ text }) => <h2>{text}</h2>;

const StatisticLine = ({ text, value }) => (
  <p>
    {text} {value}
  </p>
);

const Button = ({ clickHandle, text }) => (
  <button onClick={clickHandle}>{text}</button>
);

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = all ? (good - bad) / all : 0;
  const positive = all ? `${(good / all) * 100} %` : 0;

  if (!all) return <p>No feedback given</p>;

  return (
    <>
      <Header text="statistics" />
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} />
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodBtn = () => setGood(good + 1);
  const neutralBtn = () => setNeutral(neutral + 1);
  const badBtn = () => setBad(bad + 1);

  return (
    <div>
      <Header text="give feedback" />
      <Button clickHandle={goodBtn} text="good" />
      <Button clickHandle={neutralBtn} text="neutral" />
      <Button clickHandle={badBtn} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
