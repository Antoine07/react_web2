import { Link, useRouterState } from '@tanstack/react-router';
import useCartStore from '../store/useCartStore.js';

export default function Menu() {
	const router = useRouterState();
	const { totalCart } = useCartStore();
	const currentPath = router.location.pathname;

	const menuItems = [
		{ path: '/home', label: 'Accueil', exact: true },
		{ path: '/catalogue', label: 'Catalogue' },
		{ path: '/cart', label: 'Cart', badge: totalCart },
	];

	return (
		<header className="sticky top-0 z-10 border-b border-neutral-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-neutral-800 dark:bg-neutral-950/80 dark:supports-[backdrop-filter]:bg-neutral-950/60">
			<div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
				<Link
					to="/home"
					className="text-xl font-semibold tracking-tight hover:opacity-80 transition"
				>
					<span className="text-neutral-500 dark:text-neutral-400">TP</span>{" "}
					<span className="bg-gradient-to-r from-neutral-900 to-neutral-500 bg-clip-text text-transparent dark:from-neutral-100 dark:to-neutral-400">
						Panier d'achat
					</span>
				</Link>
				<nav className="flex items-center gap-4">
					{menuItems.map((item) => {
						const isActive = item.exact
							? currentPath === item.path || currentPath === '/'
							: currentPath === item.path;

						return (
							<Link
								key={item.path}
								to={item.path}
								className={`relative text-sm font-medium transition ${
									isActive
										? "text-neutral-900 dark:text-neutral-100"
										: "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
								}`}
							>
								{item.label}
								{item.badge && item.badge > 0 && (
									<span className="absolute -top-2 -right-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-semibold text-white">
										{item.badge}
									</span>
								)}
							</Link>
						);
					})}
				</nav>
			</div>
		</header>
	);
}

