// src/components/ui/Button.jsx
export default function Button({
  children,
  onClick,
  disabled = false,
  variant = "primary",
  size = "md",
}) {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition focus:outline-none disabled:opacity-60 disabled:pointer-events-none";

  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-500 text-white",
    secondary: "bg-neutral-800 hover:bg-neutral-700 text-neutral-100",
    outline: "border border-neutral-700 text-neutral-100 hover:bg-neutral-800",
    ghost: "text-neutral-300 hover:bg-neutral-800",
  };

  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-sm",
    lg: "px-4 py-3 text-base",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${sizes[size]}`}
    >
      {children}
    </button>
  );
}
