function Cell({ value, isHead }) {
	return (
		<div className="relative">
			<div
				className={`w-12 h-12 rounded-md flex items-center justify-center border ${
					isHead ? 'border-indigo-500' : 'border-gray-800'
				} bg-gray-900 text-lg font-mono`}
			>
				{value}
			</div>
			{isHead && (
				<div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-indigo-400 text-xs">
					↑
				</div>
			)}
		</div>
	);
}

export default Cell