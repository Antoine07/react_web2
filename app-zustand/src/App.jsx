import { useCounter } from "@/stores/useCounter"
import  A from "@/components/A"

function App() {
  const {count, increment} = useCounter(state => state)
  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={increment}>+1</button>
      <A />
    </>
  )
}

export default App
