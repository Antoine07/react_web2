import { createFileRoute } from '@tanstack/react-router';
import CartPage from '../pages/CartPage.jsx';

export const Route = createFileRoute('/cart')({
	component: CartPage,
});

