import { useState } from "react";

const Header = ({ text }) => <h2>{text}</h2>;

const Button = ({ clickHandle, text }) => {
  return <button onClick={clickHandle}>{text}</button>;
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = all ? (good - bad) / all : 0;
  const positive = all ? `${(good / all) * 100} %` : 0;

  return (
    <>
      <Header text="statistics" />
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}</p>
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
