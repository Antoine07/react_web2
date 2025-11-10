import React, { useReducer } from 'react'
import LedPanel from './components/LedPanel'

const initialState = {  }

function reducer(state, action) {
  switch (action.type) {
    // todo 
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100">
      <div className="space-y-8">
        <LedPanel  />

        <div className="flex gap-4 justify-center">
          <button
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium"
          >
            PREV
          </button>
          <button
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium"
          >
            RESET
          </button>
          <button
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

