import useButton from "@/hoc/useButton"

export default function Button() {
  const { active, bind } = useButton({ initialValue: false })

  return (
    <button
      {...bind}
      className={`
        px-6 py-2 rounded-lg font-medium transition-colors duration-200
        ${active ? "bg-gray-700" : "bg-gray-800 hover:bg-gray-700"}
        text-white cursor-pointer
      `}
    >
      {active ? "Actif" : "Inactif"}
    </button>
  )
}
