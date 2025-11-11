import { useEffect, useState } from "react";

function Counter({ onMount, countValue, active, memoryCounter }) {
  const [count, setCount] = useState(memoryCounter);

  useEffect(() => {
    setCount(count + 1);
    return () => {
      countValue(count);
    };
  }, [active]);

  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-col items-center gap-2">
          <div
            className={`
              w-10 h-10 rounded-full transition-all duration-300
              bg-blue-500
              scale-110 opacity-100 shadow-lg
            `}
          />
          <button
            onClick={onMount}
            className="px-4 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium text-sm"
          >
            Démontage
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
