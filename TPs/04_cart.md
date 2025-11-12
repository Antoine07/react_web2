# TP n°2 — Panier d'achat avec Zustand

## Présentation

Dans un nouveau projet React.

Créez un menu avec Tanstack router avec les items de menus suivants : Home, Catalogues. La page Home présente les derniers produits et la page `Catalogues` permet de commander les produits dans le paniers.

Créer une mini-application React permettant de gérer un panier d'achat (add / remove / total).
Le panier sera stocké **dans Zustand** pour être accessible depuis n'importe quel composant.

Créez un thème sombre et clair qui persistera si vous avez le temps.

Vous êtes libre pour la partie UX.


---

## Contraintes

Vous devez créer un store Zustand contenant :

| Propriété                   | Type             | Description                                              |
| --------------------------- | ---------------- | -------------------------------------------------------- |
| `products`                  | tableau d'objets | Catalogue disponible (id, nom, prix)                     |
| `cart`                      | tableau d'objets | Articles ajoutés au panier (id, quantité)                |
| `addToCart(productId)`      | fonction         | Ajoute un article (ou augmente quantité si déjà présent) |
| `removeFromCart(productId)` | fonction         | Diminue la quantité, ou supprime si quantité = 0         |
| `clearCart()`               | fonction         | Vide complètement le panier                              |
| `total()`                   | fonction         | Renvoie le prix total calculé                            |

---

## Exemple de store (à compléter)

`useCartStore.js`

```js
import create from "zustand";
import { produce } from "immer";

const useCartStore = create((set, get) => ({
  products: [
    { id: 1, name: "Café", price: 3 },
    { id: 2, name: "Thé", price: 2 },
    { id: 3, name: "Chocolat", price: 4 }
  ],

  cart: [],

    // TODO
}));

export default useCartStore
```

---

## Interface à réaliser

Vous devez créer **deux composants** :

### 1) Catalogue (`ProductList.js`)

* Afficher la liste des produits
* Bouton **"Ajouter au panier"** pour chacun


### 2) Panier (`Cart.js`)

* Liste des articles du panier
* Boutons **+** et **–**
* Affichage du **total**
* Bouton **Vider le panier**


