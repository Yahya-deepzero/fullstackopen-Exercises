import { useState } from "react";

const Button = ({ text, clickHandle }) => {
  return <button onClick={clickHandle}>{text}</button>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  });

  const nextBtn = () => {
    let rnd = Math.floor(Math.random() * 7);
    setSelected(rnd);
  };

  const voteBtn = () => {
    setPoints({ ...points, [selected]: points[selected] + 1 });
  };

  const mostVoted = () => {
    const totalVotes = { votes: 0, id: 0 };

    for (const key in points) {
      if (points[key] > totalVotes.votes) {
        totalVotes.votes = points[key];
        totalVotes.id = key;
      }
    }

    return totalVotes;
  };

  const mostVote = mostVoted();
  console.log(mostVote.votes, mostVote.id);

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p> has {points[selected]} votes</p>
      <Button text="vote" clickHandle={voteBtn} />
      <Button text="next anecdote" clickHandle={nextBtn} />
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[mostVote.id]}</p>
      <p> has {mostVote.votes} votes</p>
    </div>
  );
};

export default App;
