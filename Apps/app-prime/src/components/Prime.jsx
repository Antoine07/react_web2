import { useQuery } from "@tanstack/react-query";
import { usePrimeMachineStore } from "@/stores/usePrimeMachineStore";
import { fetchAPI } from "@/api/fetchApi";

export default function Prime({ running }) {
  const { push, displayed, head } = usePrimeMachineStore();

  const { isLoading, isFetching } = useQuery({
    queryKey: ["prime-stream"],
    enabled: running,
    queryFn: async ({ signal }) => {
      for await (const item of fetchAPI(500, signal, head)) {
        if (signal?.aborted) break;
        if (!running) break;
        const { number, halted } = item;

        push(item);
      }
      return true; // obligatoire mais non utilisé
    },
  });

  return (
    <>
      {displayed.map((number, i) => (
        <div key={i} className="relative">
          <div
            className={`w-12 h-12 rounded-md flex items-center justify-center border ${
              head - 1 === i ? "border-indigo-500" : "border-gray-800"
            } bg-gray-900 text-lg font-mono`}
          >
            {number}
          </div>
        </div>
      ))}
    </>
  );
}
