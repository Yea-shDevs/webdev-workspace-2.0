function CounterApp() {
  const [count, setCount] = React.useState(0);

  function incrementCounter() {
    setCount(count + 1);
  }

  function decrementCounter() {
    setCount(count - 1);
  }

  function resetCounter() {
    setCount(0);
  }

  return (
    <div className="page">
      <div className="counter-card">
        <h1>React Counter<br />Application</h1>

        <p className="counter-value">{count}</p>

        <div className="button-row">
          <button onClick={incrementCounter}>Increment (+)</button>
          <button onClick={decrementCounter}>Decrement (-)</button>
        </div>

        <button className="reset-button" onClick={resetCounter}>Reset</button>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<CounterApp />);
