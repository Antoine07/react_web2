export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  disabled = false,
  inline = false,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-md font-mono font-medium transition-colors " +
    "focus:outline-none select-none " +
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";

  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-500 text-white",
    secondary: "bg-gray-800 hover:bg-gray-700 text-gray-100",
    outline: "border border-gray-700 text-gray-100 hover:bg-gray-900",
    ghost: "text-gray-300 hover:bg-gray-800",
  };

  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-sm",
    lg: "px-4 py-3 text-base",
  };

  const inlineClass = inline ? "inline-flex gap-2 items-center" : "";

  return (
    <button
      disabled={disabled}
      className={[
        base,
        inlineClass,
        variants[variant],
        sizes[size],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
