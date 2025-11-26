import { usePrimeMachineStore } from "@/stores/usePrimeMachineStore";
import { useQueryClient } from "@tanstack/react-query";

import Prime from "@/components/Prime";
import Button from "@/components/ui/Button";

function App() {
  const { head, halted, stop, start, running, reset } =
    usePrimeMachineStore((s) => s);

  const queryClient = useQueryClient();

  function handleToggle() {
    if (running) {
      // ---------- STOP ----------
      stop();
      queryClient.cancelQueries({ queryKey: ["prime-stream"] });
      return;
    }

    // ---------- START ----------
    start(); // running = true
    queryClient.invalidateQueries({ queryKey: ["prime-stream"] });
  }

  function handleRestart() {
    stop(); // running = false
    queryClient.cancelQueries({ queryKey: ["prime-stream"] });
    reset(); // displayed=[], head=0
  }

  return (
    <main className="min-h-screen w-full bg-neutral-900 text-neutral-200 flex items-start justify-center p-10">
      <section className="space-y-6 max-w-3xl w-full">
        {/* INFO */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-400">
            État:{" "}
            <span
              className={`font-semibold ${
                halted ? "text-emerald-400" : "text-indigo-400"
              }`}
            >
              {halted ? "stop" : "read"}
            </span>
          </div>

          <div className="text-sm text-gray-400">
            Position de la tête:{" "}
            <span className="font-semibold text-gray-200">{head}</span>
          </div>
        </div>

        {/* LAYOUT */}
        <div className="grid grid-cols-2 gap-8">
          {/* LECTURE */}
          <div>
            <div className="text-sm text-gray-400 mb-2">Lecture</div>
            <div className="flex gap-3 flex-wrap">
              <Prime running={running} />
            </div>
          </div>

          {/* ACTIONS */}
          <div>
            <div className="text-sm text-gray-400 mb-2">Actions</div>

            <div className="flex flex-col gap-3">
              {/* Bouton Start / Stop */}
              {!halted && (
                <Button
                  onClick={handleToggle}
                  variant={running ? "primary" : "outline"}
                >
                  {running ? "Stop" : "Start"}
                </Button>
              )}

              {/* Bouton Reset (visible soit si manuel, soit si halted) */}
              { (head > 1 )&& (
                <Button onClick={handleRestart} variant="secondary">
                  Reset
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
