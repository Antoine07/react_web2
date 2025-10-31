---
marp: true
theme: default
paginate: true
class: lead
---


# **Le Hook `useEffect()`**

Pour revenir à la page d'accueil

[Plan du cours](https://antoine07.github.io/react_web2/#2)

---

## 1. Introduction

### Définition

Le hook **`useEffect()`** permet d'exécuter du **code en réaction à un changement d'état, de props ou au cycle de vie** d'un composant.

> En React, tout ce qui est un "effet secondaire" (appel réseau, timer, manipulation du DOM, log, etc.) doit être géré avec `useEffect`, en théorie.

---

## 2. Pourquoi un *hook d'effet* ?

Sans `useEffect`, un composant React **ne fait que du rendu** :
il affiche des données à partir de son `state` ou de ses `props`.

Mais parfois, on veut :

* récupérer des données depuis une API,
* écouter un événement du navigateur,
* modifier le titre de la page,
* démarrer ou arrêter un intervalle.

Ces actions **n'appartiennent pas directement au rendu**,
ce sont des **effets de bord (side effects)**.

---

## 3. Syntaxe de base

```jsx
React.useEffect(() => {
  // Code exécuté après le rendu
  console.log("Composant rendu ou mis à jour !");
});
```

### Paramètres :

```jsx
React.useEffect(callback, [dépendances]);
```

| Élément         | Description                                                     |
| --------------- | --------------------------------------------------------------- |
| `callback`      | Fonction exécutée après le rendu                                |
| `[dépendances]` | Liste de variables qui déclenchent l'effet quand elles changent |

---

## 4. Les trois cas d'usage principaux

### (1) Sans dépendance → à chaque rendu

```jsx
useEffect(() => {
  console.log("Rendu !");
});
```

→ L'effet s'exécute **à chaque fois** que le composant est re-rendu.

---

### (2) Avec tableau vide → une seule fois (montage)

```jsx
useEffect(() => {
  console.log("Composant monté !");
}, []);
```

→ L'effet ne s'exécute **qu'une seule fois** :
parfait pour initialiser un timer, un fetch ou un listener.

---

### (3) Avec dépendances → à chaque changement

```jsx
useEffect(() => {
  console.log("Le nom a changé :", name);
}, [name]);
```

→ L'effet ne se déclenche **que si `name`** change (votre state name change le `useEffect` est exécuté).

---

## 5. Exemple 1 — Effet simple avec console.log

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("Le compteur a changé :", count);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
```

Chaque clic :

* modifie le `state`,
* provoque un **re-render**,
* relance le `useEffect` car `count` a changé.

---

# **Exercice 1 — Toggle avec compteur d'effets**

* Utiliser **2 états distincts** :

  1. `isActive` → pour activer / désactiver un état logique.
  2. `counter` → compteur d'exécutions de l'effet.
* Utiliser un `useEffect()` dépendant de `isActive`.
* À chaque changement de `isActive`, incrémenter `counter`.
* Afficher le nombre de fois que l'effet a été déclenché.

---

# **Exercice 2 - Exercice météo**

Vous avez du code dans le dossier correction.

1. Créez un composant `TemperatureTable`.
2. États :
`data` : tableau d'objets `{ time, temperature }`.
`loading` : booléen pour afficher "Chargement..." avant les données. 
3. Dans `useEffect` :
Utilisez `setTimeout` (1 s) pour simuler un chargement des données (voir le tableau dans le fichier lui-même)
4. Affichez un tableau à deux colonnes : **Heure / Température (°C)**.
5. Stylisez avec Tailwind (fond sombre, lignes alternées, hover).

---

**Exemple attendu :**

| Heure | Température (°C) |
| ----- | ---------------- |
| 14:00 | 18.7             |
| 14:01 | 19.3             |
| …     | …                |

---


## 6. Nettoyage des effets (clean-up)

Certains effets doivent être **nettoyés** avant de quitter le composant
(par exemple : un timer ou un listener).

React propose une fonction de "nettoyage" à retourner depuis le `useEffect`.

```jsx
useEffect(() => {
  const timer = setInterval(() => console.log("Tick"), 1000);

  return () => {
    clearInterval(timer);
    console.log("Composant démonté");
  };
}, []);
```

---

## 7. Ordre d'exécution

1. Le composant s'affiche (rendu initial).
2. React exécute le code de `useEffect()`.
3. Si le state change → React re-render.
4. React exécute à nouveau l'effet (et nettoie l'ancien si nécessaire).

---

## 9. Schéma mental

```
render() 
   ↓
useEffect() exécuté après affichage
   ↓
(setState ?)
   ↓
→ nouveau render → nouvel effet
```

---

## Merci d'avoir écouter cette partie sur `useEffect`

Pour revenir à la page d'accueil

[Plan du cours](https://antoine07.github.io/react_web2/#2)
