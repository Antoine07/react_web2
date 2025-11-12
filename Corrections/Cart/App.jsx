import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default function App() {

	return (
		<div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
			<header className="sticky top-0 z-10 border-b border-neutral-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-neutral-800 dark:bg-neutral-950/80 dark:supports-[backdrop-filter]:bg-neutral-950/60">
				<div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
					<h1 className="text-xl font-semibold tracking-tight">
						<span className="text-neutral-500 dark:text-neutral-400">TP</span>{" "}
						<span className="bg-gradient-to-r from-neutral-900 to-neutral-500 bg-clip-text text-transparent dark:from-neutral-100 dark:to-neutral-400">
							Panier d'achat
						</span>
					</h1>
					<div className="flex items-center gap-3">
						<div className="text-sm text-neutral-600 dark:text-neutral-400">Zustand + Immer</div>
					</div>
				</div>
			</header>

			<main className="mx-auto max-w-5xl px-4 py-8 grid gap-6 md:grid-cols-[1fr_420px]">
				<section className="rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900/40">
					<div className="border-b border-neutral-200 px-4 py-3 dark:border-neutral-800">
						<h2 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Catalogue</h2>
					</div>
					<div className="p-4">
						<ProductList />
					</div>
				</section>
				<aside className="rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900/40">
					<div className="border-b border-neutral-200 px-4 py-3 dark:border-neutral-800">
						<h2 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Panier</h2>
					</div>
					<div className="p-4">
						<Cart />
					</div>
				</aside>
			</main>
		</div>
	);
}