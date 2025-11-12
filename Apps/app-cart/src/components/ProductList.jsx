import React from "react";
import useCartStore from "../store/useCartStore.js";

export default function ProductList() {
	const { products, buy } = useCartStore((s) => s);

	return (
		<ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
			{products.map((p) => (
				<li
					key={p.id}
					className="group rounded-lg border border-neutral-800 bg-neutral-900/40 p-4 shadow-sm transition hover:border-neutral-700 hover:bg-neutral-900"
				>
					<div className="flex items-start justify-between gap-3">
						<div>
							<div className="text-sm font-medium text-neutral-100">{p.name}</div>
							<div className="text-xs text-neutral-400">{p.price.toFixed(2)} €</div>
						</div>
					</div>
					<div className="mt-4">
						<button
							onClick={() => buy(p.id)}
							className="inline-flex h-9 items-center justify-center rounded-md border border-neutral-700 bg-neutral-800 px-3 text-xs font-medium text-neutral-200 shadow-sm transition hover:bg-neutral-700 hover:text-white active:translate-y-px"
						>
							Ajouter au panier
						</button>
					</div>
				</li>
			))}
		</ul>
	);
}


