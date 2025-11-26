import { useQuery } from "@tanstack/react-query";
import Button from "@/components/ui/Button";
import { fakeAllPrimes } from "@/api/fetchApi"; // ou votre vrai fetch

export default function PrimeStatePage() {
  const {
    data,
    isLoading,
    isError,
    refetch
  } = useQuery({
    queryKey: ["primes"],
    queryFn: fakeAllPrimes,
    staleTime: 1000 * 60,
  });

  return (
    <main className="min-h-screen w-full bg-neutral-900 text-neutral-200 flex items-start justify-center p-10">
      <section className="space-y-6 max-w-3xl w-full">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-indigo-400">
            State global prime
          </h1>

          <Button variant="outline" size="sm" onClick={refetch}>
            Refresh
          </Button>
        </div>

        <div className="bg-neutral-800 p-6 rounded-md border border-neutral-700">
          <div className="text-sm text-gray-400 mb-4">
            Source :{" "}
            <span className="font-semibold text-gray-200">State storage</span>
          </div>

          {isLoading && <div>Chargement...</div>}
          {isError && <div>Erreur de chargement</div>}

          {data?.primes && (
            <div className="flex flex-wrap gap-2">
              {data?.primes.map((p, i) => (
                <Button key={i} variant="outline" size="sm">
                  {p}
                </Button>
              ))}
            </div>
          )}
          
        </div>
      </section>
    </main>
  );
}
