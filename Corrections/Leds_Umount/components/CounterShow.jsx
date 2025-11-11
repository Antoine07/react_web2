
function CounterShow({ onMount, countValue }) {

  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-col items-center gap-2">
          <p>{countValue}</p>
          <button
            onClick={onMount}
            className="px-4 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium text-sm"
          >
            Montage
          </button>
        </div>
      </div>
    </>
  );
}

export default CounterShow;
