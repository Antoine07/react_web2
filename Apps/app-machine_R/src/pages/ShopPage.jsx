import { useSearch, useNavigate } from '@tanstack/react-router'

export default function ShopPage() {
    const { page, sortBy, desc, categories } = useSearch({ from: '/shop' })
    const navigate = useNavigate({ from: '/shop' })
  
    return (
      <div className="p-6 space-y-4">
        <h1 className="text-2xl font-semibold">Boutique</h1>
  
        <p>Page : {page}</p>
        <p>Tri : {sortBy} ({desc ? 'descendant' : 'ascendant'})</p>
        <p>Catégories : {categories.join(', ') || 'aucune'}</p>
  
        <button
          onClick={() =>
            navigate({
              search: (prev) => ({ ...prev, page: prev.page + 1 }),
            })
          }
          className="px-4 py-2 bg-blue-500 rounded-md"
        >
          Page suivante
        </button>
      </div>
    )
  }