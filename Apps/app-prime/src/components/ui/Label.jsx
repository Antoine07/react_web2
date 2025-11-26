export default function Label({ children, className = "", ...props }) {
    return (
      <label
        className={[
          "block font-mono text-sm text-gray-300 select-none",
          className,
        ].join(" ")}
        {...props}
      >
        {children}
      </label>
    );
  }
  