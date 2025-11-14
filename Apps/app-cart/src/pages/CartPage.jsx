import React from "react";
import Cart from "../components/Cart.jsx";

export default function CartPage() {
	return (
		<div className="space-y-6">
			<div className="border-b border-neutral-200 pb-4 dark:border-neutral-800">
				<h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
					Panier
				</h2>
				<p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
					Visualisez et gérez vos produits
				</p>
			</div>
			<Cart />
		</div>
	);
}

