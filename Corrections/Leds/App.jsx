import React, { useReducer } from "react";
import LedPanel from "./components/LedPanel";

import Button from "@/components/ui/Button";

const initialState = { active: "red" };

function reducer(state, action) {
  switch (action.type) {
    case "NEXT":
      return {
        ...state,
        active: state.active == "red" ? "yellow" : state.active == "yellow" ? "green" : "red"
      }
    case "PREV":
        return {
          ...state,
          active: state.active == "red" ? "green" : state.active == "yellow" ? "red" : "yellow"
        }
    case "RESET":
      return {
        ...state, active : "red"
      }
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100">
      <div className="space-y-8">

        <LedPanel active={state.active} />
        <div className="flex gap-4 justify-center">
          <button 
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium"
            onClick={() => dispatch({type : "PREV"})}
          >
            PREV
          </button>
          <button 
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium"
            onClick={() => dispatch({type : "RESET"})}
          >
            RESET
          </button>
          <button 
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium"
            onClick={() => dispatch({type : "NEXT"})}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
