import ProductList from "@/components/ProductList.jsx"
import Cart from "@/components/Cart.jsx"

export default function App() {
	return (
		<div className="min-h-screen">
			<header className="sticky top-0 z-10 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
				<div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
					<h1 className="text-xl font-semibold tracking-tight">
						<span className="text-neutral-400">TP</span>{" "}
						<span className="bg-gradient-to-r from-neutral-100 to-neutral-400 bg-clip-text text-transparent">
							Panier d'achat
						</span>
					</h1>
				</div>
			</header>

			<main className="mx-auto max-w-5xl px-4 py-8 grid gap-6 md:grid-cols-[1fr_420px]">
				<section className="rounded-xl border border-neutral-800 bg-neutral-900/40 shadow-sm">
					<div className="border-b border-neutral-800 px-4 py-3">
						<h2 className="text-sm font-medium text-neutral-300">Catalogue</h2>
					</div>
					<div className="p-4">
						<ProductList />
					</div>
				</section>
				<aside className="rounded-xl border border-neutral-800 bg-neutral-900/40 shadow-sm">
					<div className="border-b border-neutral-800 px-4 py-3">
						<h2 className="text-sm font-medium text-neutral-300">Panier</h2>
					</div>
					<div className="p-4">
						<Cart />
					</div>
				</aside>
			</main>
		</div>
	)
}


