import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

const initialState = {
	products: [
		{
			id: 1,
			name: "Café Arabica",
			price: 3.5,
			category: "boissons",
			description: "Un café 100% Arabica torréfié lentement pour un goût doux et équilibré.",
			rating: 4.6,
			stock: 24,
			origin: "Colombie"
		},
		{
			id: 2,
			name: "Thé Vert Matcha",
			price: 2.8,
			category: "boissons",
			description: "Thé vert matcha premium avec une légère amertume et des notes végétales.",
			rating: 4.2,
			stock: 15,
			origin: "Japon"
		},
		{
			id: 3,
			name: "Chocolat Noir 80%",
			price: 4.2,
			category: "gâteaux",
			description: "Tablette de chocolat noir intense (80%) à la texture fondante.",
			rating: 4.7,
			stock: 40,
			origin: "Belgique"
		},
		{
			id: 4,
			name: "Croissant Beurre AOP",
			price: 1.9,
			category: "pâtisseries",
			description: "Croissant pur beurre AOP croustillant et doré, fait chaque matin.",
			rating: 4.5,
			stock: 32,
			origin: "France"
		},
		{
			id: 5,
			name: "Cookie Double Chocolat",
			price: 2.2,
			category: "pâtisseries",
			description: "Cookie moelleux au chocolat noir et lait, pépites généreuses.",
			rating: 4.8,
			stock: 18,
			origin: "États-Unis"
		},
		{
			id: 6,
			name: "Jus d'Orange Pressé",
			price: 3.0,
			category: "boissons",
			description: "Jus d'orange pressé à froid, riche en vitamines, sans sucre ajouté.",
			rating: 4.4,
			stock: 12,
			origin: "Espagne"
		}
	],
	cart: [],
	totalCart: 0,
	productsByCategory: []
}

const useCartStore = create(

	(set, get) => ({
		...initialState,
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
						totalCart: state.totalCart + 1
					};
				} else {
					// Ajoute un nouveau produit
					return {
						cart: [
							...state.cart,
							{ id: productId, quantity: 1 },

						],
						totalCart: state.totalCart + 1
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
								: item,

						),
						totalCart: state.totalCart - 1
					};
				} else {
					// Supprime complètement le produit
					return {
						cart: state.cart.filter((item) => item.id !== productId),
						totalCart: state.totalCart - 1
					};
				}
			});
		},

		reset: () => { set({ cart: [], totalCart: 0 }) },

		totalQuantity: () => {
			const { cart } = get();

			set({ quantity: cart.reduce((sum, item) => sum + item.quantity, 0) })
		},

		total: () => {
			const { cart, products } = get();
			return cart.reduce((acc, item) => {
				const product = products.find((p) => p.id === item.id);
				if (!product) return acc;
				return acc + product.price * item.quantity;
			}, 0);
		},

		getProductsByCategory: (categoryName) => {
			const { cart, products } = get();
			set({ 
				productsByCategory: products.filter(p => p?.category == categoryName) || []
			})
		},

		getInfoCart: () => {
			const { cart, products } = get();
			const cartInfo = cart
				.map((item) => {
					const product = products.find((p) => p.id === item.id);
					if (!product) return null;
					return {
						...item,
						name: product.name,
						price: product.price,
						subtotal: product.price * item.quantity,
					};
				})
				.filter(Boolean); // virer les null dans le tableau

		},

		getFeaturedProducts: (count = 2) => {
			const { products } = get();
			// Retourne les produits les plus chers (meilleurs produits)
			return [...products]
				.sort((a, b) => b.price - a.price)
				.slice(0, count);
		},
	}),
);

export default useCartStore
