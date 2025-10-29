---
marp: true
theme: default
paginate: true
class: lead
---

# **useReducer et gestion d'événements dans React**

---

## 1. Introduction

### Pourquoi `useReducer` ?

`useState` suffit pour des états simples (compteur, formulaire, etc.),
mais quand la logique devient **plus complexe** — avec plusieurs états liés ou des transitions précises —
`useReducer` rend le code **plus clair et prévisible**.

---

### Principe de base

`useReducer` sépare **la logique métier** (comment l'état change)
de la **logique d'affichage** (ce que React affiche).

```jsx
const [state, dispatch] = React.useReducer(reducer, initialState);
```

* `state` → état actuel
* `dispatch(action)` → envoie une **action**
* `reducer(state, action)` → fonction qui décrit **comment l'état évolue**

---

## 2. Exemple minimal Gestion d'un compteur

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = React.useReducer(reducer, { count: 0 });

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
```

---

### Déroulement :

1. L'utilisateur clique → **événement onClick**
2. Le bouton envoie une **action** via `dispatch({ type: "increment" })`
3. `useReducer` appelle la fonction `reducer(state, action)`
4. Le `reducer` retourne un **nouvel état**
5. React **re-render** avec la nouvelle valeur

---

## 3. Pourquoi c'est utile ?

* On centralise la logique dans une **fonction pure(*)** (`reducer`)
* On facilite la maintenance d'applications plus grandes.
* On garde une approche similaire à Redux, mais **sans dépendance externe**.

(*) Une fonction pure est une fonction qui, pour les mêmes entrées, retourne toujours le même résultat sans modifier de données externes (pas d’effets de bord).

---

## 4. Exercice — Gestion de panier

Créer un composant `Cart` qui gère un panier simple à l'aide de `useReducer`.

### Contraintes :

* L'état initial :

  ```js
  { items: [], total: 0 }
  ```
* Trois actions :

  * `{ type: "add", item: { name: "Product A", price: 10 } }`
  * `{ type: "remove", index: 0 }`
  * `{ type: "clear" }`

---

Suite des contraintes pour l'exercice.

* Définir un modèle pour vos données

```js
{ id: 1, name: "Mouse", price: 15, quantity: 1 }
/*
{
  id: number,        // identifiant unique
  name: string,      // nom du produit
  price: number,     // prix en €
  quantity: number   // quantité dans le panier
}
*/
```

---

### Étapes :

1. Implémentez le `reducer(state, action)`
ajouter un article → `items.push()` (en version immuable)
supprimer un article → filtrez le tableau
vider le panier

2. Créez trois boutons :
"Add product"
"Remove last product"
"Clear cart"

3. Affichez :
La liste des articles
Le total du panier

---

### Indications :

Utilisez le **pattern des événements** :
chaque bouton **déclenche une action** claire que `reducer` interprète.
C'est exactement la même logique qu'un système d'événements centralisé.


---

## Merci d'avoir écouter cette première partie

Pour revenir à la page d'accueil

[Plan du cours](https://antoine07.github.io/react_web2/#2)