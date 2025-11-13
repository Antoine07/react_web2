import Cell from "@/components/Cell";
import { useMachineStore } from "./stores/useMachineStore";

import B from "@/components/B"
import A from "@/components/A"

function App() {
  const { tape, mode, halted, head, reset, step } = useMachineStore((s) => s);

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
    <>
      <main className="min-h-screen w-full bg-neutral-900 text-neutral-200 flex items-start justify-center p-10">
        <section className="space-y-6 max-w-xl w-full">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-400">
                État:{" "}
                <span
                  className={`font-semibold ${
                    halted ? "text-emerald-400" : "text-indigo-400"
                  }`}
                >
                  {mode}
                </span>
              </div>
              <div className="text-sm text-gray-400">
                Position de la tête:{" "}
                <span className="font-semibold text-gray-200">{head + 1}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-400">
                <div className="flex gap-3 flex-wrap">
                  {tape.map((n, idx) => (
                    <Cell key={idx} value={n} isHead={idx == head} />
                  ))}
                </div>
                <div className="flex gap-3 flex-wrap p-10">
                  <button
                    className={`${base} ${sizes.md} ${variants.primary}`}
                    onClick={step}
                  >
                    Step
                  </button>
                  <button
                    className={`${base} ${sizes.md} ${variants.primary}`}
                    onClick={reset}
                    disabled={!(head > 0)}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
            <B />
            <A />
        </section>
      </main>
    </>
  );
}

export default App;
