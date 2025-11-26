export default function Input({
    variant = "default",
    size = "md",
    className = "",
    disabled = false,
    ...props
  }) {
    const base =
      "rounded-md font-mono transition-colors w-full " +
      "bg-neutral-900 border border-neutral-700 text-gray-100 " +
      "focus:outline-none focus:ring-2 focus:ring-indigo-500 " +
      "disabled:opacity-50 disabled:cursor-not-allowed";
  
    const variants = {
      default: "",
      outline:
        "bg-neutral-900 border-gray-700 text-gray-100 focus:border-indigo-500",
      ghost: "bg-transparent border-transparent text-gray-300",
    };
  
    const sizes = {
      sm: "px-2 py-1 text-sm",
      md: "px-3 py-2 text-sm",
      lg: "px-4 py-3 text-base",
    };
  
    return (
      <input
        disabled={disabled}
        className={[base, variants[variant], sizes[size], className].join(" ")}
        {...props}
      />
    );
  }  