import useCounter from "../hooks/useCounter";

function CounterCard() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <h2>Counter Card</h2>
      <p>{count}</p>
      <button onClick={increment}>Rezzed</button>
      <button onClick={decrement}>Derezzed</button>
      <button onClick={reset}>Memory Wipe</button>
    </div>
  );
}

export default CounterCard;
