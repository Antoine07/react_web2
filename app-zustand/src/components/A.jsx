import { useCounter } from "@/stores/useCounter"
import B from "@/components/B"

function A() {
  const { count } = useCounter();

  return (
    <>
      <p>Counter A dans App : {count}</p>
      <B />
    </>
  );
}

export default A;
