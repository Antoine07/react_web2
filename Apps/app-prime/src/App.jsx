import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import { z } from "zod";

const queryClient = new QueryClient();

const numberSchema = z.object({
  number: z
    .number()
    .min(0, { message: "Le nombre doit être supérieur ou égal à 0." })
    .max(1000, { message: "Le nombre doit être inférieur ou égal à 1000." }),
});

// Fonction asynchrone qui attend 500 ms et renvoie un nombre
async function fetchNumberAlea() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const raw = { number: Math.floor(Math.random() * 1000) };

  return numberSchema.parse(raw);
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NumberAlea />
      <B />
    </QueryClientProvider>
  );
}

function NumberAlea() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["random"],
    queryFn: fetchNumberAlea,
  });

  if (isLoading) return <div>Loading...</div>;

  if (error instanceof Error) return <div>Erreur : {error.message}</div>;

  return (
    <div>
      <h1>Nombre généré : {data?.number}</h1>
    </div>
  );
}



function B() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  )
}

function Example() {
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.github.com/repos/TanStack/query').then((res) =>
        res.json(),
      ),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  )
}