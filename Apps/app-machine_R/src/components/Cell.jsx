
function Cell({ value, isHead }) {

  return (
    <div className="relative">
      <div
        className={`w-12 h-12 rounded-md flex items-center justify-center border bg-gray-900 text-lg font-mono
			 ${isHead ? "border-indigo-500" : "border-gray-800"} 
			`}
      >
        {value}
      </div>
    </div>
  );
}

export default Cell;
