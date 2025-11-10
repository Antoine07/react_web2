import { useCounter } from "./stores/useCounter"

function App() {
  const {count, increment} = useCounter(state => state)
  return (
    <>
      <p>Counter: {count}</p>
    </>
  )
}

export default App
