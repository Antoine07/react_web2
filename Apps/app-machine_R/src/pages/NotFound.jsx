// router.tsx


export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center space-y-4">
      <h1 className="text-4xl font-bold text-red-500">404 - Page introuvable</h1>
      <p className="text-gray-400">La page demandée n'existe pas ou les paramètres sont invalides.</p>
      <a
        href="/"
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Retour à l'accueil
      </a>
    </div>
  )
}

