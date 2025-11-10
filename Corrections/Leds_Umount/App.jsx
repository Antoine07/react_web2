import React, { useReducer, useState, useEffect } from 'react'
import LedPanel from './LedPanel.jsx'

const initialState = { active: 'red' }

function reducer(state, action) {
  switch (action.type) {
    case 'NEXT':
      return {
        active:
          state.active === 'red'
            ? 'yellow'
            : state.active === 'yellow'
            ? 'green'
            : 'red',
      }
    case 'PREV':
      return {
        active:
          state.active === 'red'
            ? 'green'
            : state.active === 'yellow'
            ? 'red'
            : 'yellow',
      }
    case 'RESET':
      return { active: 'red' }
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [changeCount, setChangeCount] = useState(0)
  const [isTopLedMounted, setIsTopLedMounted] = useState(true)
  const [dismountValue, setDismountValue] = useState(null)

  useEffect(() => {
    setChangeCount((prev) => prev + 1)
  }, [state.active])

  const handleDismount = () => {
    if (isTopLedMounted) {
      setDismountValue(changeCount)
      setIsTopLedMounted(false)
    }
  }

  const handleMount = () => {
    if (!isTopLedMounted) {
      setIsTopLedMounted(true)
      setDismountValue(null)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100">
      <div className="space-y-8">
        <LedPanel 
          active={state.active} 
          isTopLedMounted={isTopLedMounted}
          dismountValue={dismountValue}
          onDismount={handleDismount}
          onMount={handleMount}
        />

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => dispatch({ type: 'PREV' })}
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium"
          >
            PREV
          </button>
          <button
            onClick={() => dispatch({ type: 'RESET' })}
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium"
          >
            RESET
          </button>
          <button
            onClick={() => dispatch({ type: 'NEXT' })}
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

