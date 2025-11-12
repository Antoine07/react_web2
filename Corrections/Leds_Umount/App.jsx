import { useReducer, useState } from "react";
import LedPanel from "@/components/LedPanel";
import Counter from "@/components/Counter";
import CounterShow from "@/components/CounterShow";

const initialState = { active: "red", count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "NEXT":
      return {
        ...state,
        active:
          state.active == "red"
            ? "yellow"
            : state.active == "yellow"
            ? "green"
            : "red",
      };
    case "PREV":
      return {
        ...state,
        active:
          state.active == "red"
            ? "green"
            : state.active == "yellow"
            ? "red"
            : "yellow",
      };
    case "RESET":
      return {
        ...state,
        active: "red",
      };
    case "SET_COUNT":
      return {
        ...state,
        count: action.count,
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [status, setStatus] = useState(true);

  const onMount = () => {
    setStatus(!status);
  };

  const upCountValue = (c) => {
    dispatch({ type: "SET_COUNT", count: c });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100">
      <div className="space-y-8">
        {status ? (
          <Counter
            memoryCounter={state.count}
            onMount={onMount}
            active={state.active}
            upCountValue={upCountValue}
          />
        ) : (
          <CounterShow countValue={state.count} onMount={onMount} />
        )}
        <LedPanel active={state.active} dismountValue={state.count} />
        <div className="flex gap-4 justify-center">
          <button
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium"
            onClick={() => dispatch({ type: "PREV" })}
          >
            PREV
          </button>
          <button
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium"
            onClick={() => dispatch({ type: "RESET" })}
          >
            RESET
          </button>
          <button
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium"
            onClick={() => dispatch({ type: "NEXT" })}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
