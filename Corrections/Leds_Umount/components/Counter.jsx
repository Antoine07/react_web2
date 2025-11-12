import { useEffect, useState, useRef } from "react";

function Counter({ onMount, memoryCounter, active, upCountValue }) {
  const [count, setCount] = useState(memoryCounter);
  const countRef = useRef(memoryCounter);
  const firstRender = useRef(true);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return; // ignore le premier render → pas d'incrément au montage
    }

    setCount(count + 1);
  }, [active]);

  useEffect(() => {
    return () => {
      upCountValue(countRef.current); // pour corrigé le décalge
      firstRender.current = true;
    };
  }, []);

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
