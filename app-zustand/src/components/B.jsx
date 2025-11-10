import { useCounter } from "@/stores/useCounter";

function B() {
  const { count, increment } = useCounter();

  return (
    <>
      <p>Counter B dans A dans App: {count}</p>
      <button onClick={increment}>+1</button>
    </>
  );
}

export default B;
