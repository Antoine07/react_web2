import { useFiboStore } from "@/stores/useFiboStore";
import Button from "@/components/ui/Button";

export default function FibonacciPage() {
  const { fibos, next, reset, head } = useFiboStore();
  return (
    <main className="min-h-screen w-full bg-neutral-900 text-neutral-200 flex items-start justify-center p-10">
      <section className="space-y-6 max-w-3xl w-full">
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-400">
            État: <span className={`font-semibold text-indigo-400"`}></span>
          </div>

          <div className="text-sm text-gray-400">
            Position de la tête:{" "}
            <span className="font-semibold text-gray-200">{head}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="text-sm text-gray-400 mb-2">Fibonacci</div>
            <div className="space-y-4 bg-neutral-800 p-4 rounded-md border border-neutral-700">
              <Button onClick={next} variant="outline" size="sm">
                Next Fibonacci
              </Button>
            </div>
            <div className="space-y-4  mb-2  p-4">
              <Button onClick={reset} variant="primary" size="md" type="submit">
                Reset
              </Button>
            </div>
          </div>

          <div>
            <div className="text-sm text-gray-400 mb-2">State</div>
            <div className="flex flex-wrap gap-2">
              {fibos.map((number, i) => (
                <Button key={i} variant="outline" size="sm">
                  {number}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
