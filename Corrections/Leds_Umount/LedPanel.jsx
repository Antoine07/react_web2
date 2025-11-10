import React from 'react'

function LedPanel({ active, isTopLedMounted, dismountValue, onDismount, onMount }) {

  const leds = [
    { color: 'red', bgClass: 'bg-red-500' },
    { color: 'yellow', bgClass: 'bg-yellow-400' },
    { color: 'green', bgClass: 'bg-green-500' },
  ]

  return (
    <div className="flex flex-col gap-4 items-center">
      {/* Nouvelle led au-dessus */}
      <div className="flex flex-col items-center gap-2">
        {isTopLedMounted ? (
          <div className="flex flex-col items-center gap-2">
            <div
              className={`
                w-10 h-10 rounded-full transition-all duration-300
                bg-blue-500
                scale-110 opacity-100 shadow-lg
              `}
            />
            <button
              onClick={onDismount}
              className="px-4 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium text-sm"
            >
              Démontage
            </button>
          </div>
        ) : (
          dismountValue !== null && (
            <div className="flex flex-col items-center gap-2">
              <div className="px-4 py-2 bg-gray-800 rounded-lg">
                <span className="text-lg font-semibold text-blue-400">
                  {dismountValue}
                </span>
              </div>
              <button
                onClick={onMount}
                className="px-4 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium text-sm"
              >
                Remontage
              </button>
            </div>
          )
        )}
      </div>

      {/* Leds principales */}
      <div className="flex gap-4 justify-center items-center">
        {leds.map((led) => {
          const isActive = active === led.color
          return (
            <div
              key={led.color}
              className={`
                w-10 h-10 rounded-full transition-all duration-300
                ${led.bgClass}
                ${isActive ? 'scale-110 opacity-100 shadow-lg' : 'opacity-40'}
              `}
            />
          )
        })}
      </div>
    </div>
  )
}

export default LedPanel

