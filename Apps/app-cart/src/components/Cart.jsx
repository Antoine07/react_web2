import useCartStore from "@/store/useCartStore.js";

export default function Cart() {
  const { products, reset, total, restore, buy, cart } = useCartStore();

  const detailedCart = cart
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
	
  return (
    <div className="space-y-4">
      {detailedCart.length === 0 ? (
        <div className="rounded-lg border border-dashed border-neutral-800 p-6 text-center text-sm text-neutral-400">
          Votre panier est vide.
        </div>
      ) : (
        <ul className="space-y-3">
          {detailedCart.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between gap-3 rounded-lg border border-neutral-800 bg-neutral-900/40 p-3"
            >
              <div className="min-w-0">
                <div className="truncate text-sm font-medium text-neutral-100">
                  {item.name}
                </div>
                <div className="truncate text-sm font-medium text-neutral-100">
                  {item?.category}
                </div>
                <div className="text-xs text-neutral-400">
                  {item.price.toFixed(2)} € / unité
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  aria-label="Diminuer la quantité"
                  onClick={() => restore(item.id)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-700 bg-neutral-800 text-neutral-200 transition hover:bg-neutral-700"
                >
                  –
                </button>
                <div className="w-8 text-center text-sm tabular-nums">
                  {item.quantity}
                </div>
                <button
                  aria-label="Augmenter la quantité"
                  onClick={() => buy(item.id)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-700 bg-neutral-800 text-neutral-200 transition hover:bg-neutral-700"
                >
                  +
                </button>
              </div>
              <div className="w-20 text-right text-sm tabular-nums text-neutral-200">
                {item.subtotal.toFixed(2)} €
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="flex items-center justify-between rounded-lg border border-neutral-800 bg-neutral-900/40 p-3">
        <div className="text-sm text-neutral-300">Total</div>
        <div className="text-base font-semibold tabular-nums">
          {total().toFixed(2)} €
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={reset}
          className="inline-flex h-9 items-center justify-center rounded-md border border-red-900 bg-red-900/20 px-3 text-xs font-medium text-red-200 shadow-sm transition hover:bg-red-900/30 active:translate-y-px disabled:opacity-60"
          disabled={detailedCart.length === 0}
        >
          Vider le panier
        </button>
      </div>
    </div>
  );
}
