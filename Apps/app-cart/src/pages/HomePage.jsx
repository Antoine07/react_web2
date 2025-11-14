import React from "react";
import { Link } from "@tanstack/react-router";
import useCartStore from "../store/useCartStore.js";

export default function HomePage() {
	const { buy, getFeaturedProducts } = useCartStore();
	
	// Récupérer les 2 meilleurs produits phares
	const featuredProducts = getFeaturedProducts(2);

	return (
		<div className="space-y-8">
			<div className="text-center space-y-2">
				<h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
					Produits phares
				</h2>
				<p className="text-sm text-neutral-600 dark:text-neutral-400">
					Découvrez nos deux derniers produits à ne pas manquer
				</p>
			</div>

			<div className="grid gap-6 sm:grid-cols-2">
				{featuredProducts.map((product) => (
					<div
						key={product.id}
						className="group rounded-xl border border-neutral-200 bg-white shadow-sm transition hover:border-neutral-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/40 dark:hover:border-neutral-700"
					>
						<div className="p-6">
							<div className="mb-4">
								<div className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
									{product.name}
								</div>
								<div className="text-base font-medium text-neutral-600 dark:text-neutral-400 mt-1">
									{product.price.toFixed(2)} €
								</div>
							</div>
							<div className="flex gap-3">
								<button
									onClick={() => buy(product.id)}
									className="inline-flex h-9 items-center justify-center rounded-md border border-neutral-700 bg-neutral-800 px-4 text-sm font-medium text-neutral-200 shadow-sm transition hover:bg-neutral-700 hover:text-white active:translate-y-px"
								>
									Ajouter au panier
								</button>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="text-center pt-4">
				<Link
					to="/catalogue"
					className="inline-flex h-10 items-center justify-center rounded-md border border-neutral-700 bg-neutral-800 px-4 text-sm font-medium text-neutral-200 shadow-sm transition hover:bg-neutral-700 hover:text-white active:translate-y-px"
				>
					Voir tout le catalogue →
				</Link>
			</div>
		</div>
	);
}

