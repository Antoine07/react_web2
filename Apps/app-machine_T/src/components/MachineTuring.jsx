import { useMachineStore } from "@/stores/useMachineStore";
import Cell from "@/components/Cell";
import Button from "@/components/ui/Button";

export default function MachineTuring() {
  const { tape, head, mode, step, reset } = useMachineStore((s) => s);

  const halted = mode === "HALT";

  return (
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
          <span className="font-semibold text-gray-200">{head}</span>
        </div>
      </div>

      <div className="flex gap-3 flex-wrap">
        {tape.map((v, idx) => (
          <Cell key={idx} value={v} isHead={idx === head} />
        ))}
      </div>

      <div className="flex items-center gap-3">
        <Button variant="primary" onClick={step} disabled={halted}>
          Step
        </Button>
        <Button variant="secondary" onClick={reset}>Reset</Button>
      </div>

      <div className="text-xs text-gray-500">
        Règles:
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>A, lit _ → écrit 1, se déplace à droite, reste en A</li>
          <li>
            A, lit 1 → écrit 1, HALT (pas de déplacement, se met dans l'état B)
          </li>
        </ul>
      </div>
    </div>
  );
}
