import MachineTuring from "./components/MachineTuring";

export default function App() {
  return (
    <main className="min-h-screen w-full bg-neutral-900 text-neutral-200 flex items-start justify-center p-10">
      <section className="space-y-6 max-w-xl w-full">
        <h1 className="text-2xl font-semibold text-neutral-100">
          Mini « machine à additionner »
        </h1>

        <p className="text-neutral-300 leading-relaxed">
          Cette application simule une machine très simple inspirée de la machine
          de Turing. Elle transforme des caractères en nombre unaire en avançant sur la
          bande jusqu&apos;au premier souligné{" "}
          <code className="px-1 rounded bg-neutral-800 text-neutral-100">_</code>,
          qu&apos;elle remplace par{" "}
          <code className="px-1 rounded bg-neutral-800 text-neutral-100">1</code>,
          puis s&apos;arrête et se met dans un état HALT.
        </p>

        <div className="text-sm text-neutral-400">
          Utilisez le bouton <strong>Step</strong> pour exécuter un pas, et{" "}
          <strong>Reset</strong> pour réinitialiser.
        </div>
        <MachineTuring />
      </section>
    </main>
  );
}
