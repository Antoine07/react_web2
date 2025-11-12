import { create } from "zustand"

import { persist } from "zustand/middleware"

const useCartStore = create(persist((set, get) => ({
	products: [
		{ id: 1, name: "Café", price: 3 },
		{ id: 2, name: "Thé", price: 2 },
		{ id: 3, name: "Chocolat", price: 4 },
		{ id: 4, name: "Cookie", price: 2.5 },
		{ id: 5, name: "Croissant", price: 1.8 },
	],

	cart: [],

	buy: (productId) => {
		set((state) => {
			const existing = state.cart.find((item) => item.id === productId);
			if (existing) {
				// Incrémente la quantité
				return {
					cart: state.cart.map((item) =>
						item.id === productId
							? { ...item, quantity: item.quantity + 1 }
							: item
					),
				};
			} else {
				// Ajoute un nouveau produit
				return {
					cart: [...state.cart, { id: productId, quantity: 1 }],
				};
			}
		});
	},

	restore: (productId) => {
		set((state) => {
			const existing = state.cart.find((item) => item.id === productId);
			if (!existing) return state;

			if (existing.quantity > 1) {
				// Diminue la quantité
				return {
					cart: state.cart.map((item) =>
						item.id === productId
							? { ...item, quantity: item.quantity - 1 }
							: item
					),
				};
			} else {
				// Supprime complètement le produit
				return {
					cart: state.cart.filter((item) => item.id !== productId),
				};
			}
		});
	},

	reset: () => set({ cart: [] }),

	total: () => {
		const { cart, products } = get();
		return cart.reduce((acc, item) => {
			const product = products.find((p) => p.id === item.id);
			if (!product) return acc;
			return acc + product.price * item.quantity;
		}, 0);
	},
})),
	{
		name: "storage-cart"
	}
);

export default useCartStore
