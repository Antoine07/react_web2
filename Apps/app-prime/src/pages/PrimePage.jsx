import { useState } from "react"

import { isPrime } from "@/services/isPrime"

import { usePrimeMachineStore } from "@/stores/usePrimeMachineStore"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import Label from "@/components/ui/Label"
import { numberSchema } from "@/schemas/numberSchema"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { fakeApiAddPrime } from "@/api/fetchAPI"

export default function NumberFormPage() {
  const { head, mode, halted, displayed } = usePrimeMachineStore()
  const [message, setMessage] = useState("")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(numberSchema),
    defaultValues: {
      number: "",
    },
  });

  const queryClient = useQueryClient();

  const addPrimeMutation = useMutation({
    mutationFn: (num) => fakeApiAddPrime(num),
  
    onSuccess: (res) => {
      if (!res.ok) {
        setMessage(res.message);
        return;
      }
  
      setMessage(res.message);
      queryClient.invalidateQueries({ queryKey: ["prime-stream"] });
    },
  
    onError: () => {
      setMessage("Erreur inconnue côté client.");
    }
  });

  function onSubmit(data) {
    const parsed = Number(data.number)
   
    addPrimeMutation.mutate(parsed)
    reset()
  }

  return (
    <main className="min-h-screen w-full bg-neutral-900 text-neutral-200 flex items-start justify-center p-10">
      <section className="space-y-6 max-w-3xl w-full">
        {/* HEADER */}
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
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="text-sm text-gray-400 mb-2">Saisir un nombre premier entre 97 et 1000</div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 bg-neutral-800 p-4 rounded-md border border-neutral-700"
            >
              <div className="space-y-1">
                <Label htmlFor="number">Nombre</Label>
                <Input
                  id="number"
                  type="number"
                  placeholder="Saisir un nombre…"
                  {...register("number", {
                    valueAsNumber: true,
                  })}
                />
                {errors.number && (
                  <p className="text-red-400 text-xs mt-1 font-mono">
                    {errors.number.message}
                  </p>
                )}
              </div>

              <Button variant="primary" size="md" type="submit">
                Envoyer
              </Button>
            </form>

            {message && (
              <p className="text-emerald-400 text-xs font-mono mt-2">
                {message}
              </p>
            )}  
          </div>

          <div>
            <div className="text-sm text-gray-400 mb-2">State</div>
            <div className="flex flex-wrap gap-2">
              {displayed.map((number, i) => (
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
