const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <div>
      <p>
        {props.part[0]} {props.exercise[0]}
      </p>
      <p>
        {props.part[1]} {props.exercise[1]}
      </p>
      <p>
        {props.part[2]} {props.exercise[2]}
      </p>
    </div>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.total}</p>;
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        part={[part1, part2, part3]}
        exercise={[exercises1, exercises2, exercises3]}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
