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

## **Exercice — Horloge avec montage et démontage**

Créer une horloge qui :

* Affiche l'heure actuelle, mise à jour chaque seconde.
* Se démonte proprement (arrêt du timer).
* Informe le parent lorsqu'elle est démontée (affiche un message dans le DOM).

Pour cet exercice vous pouvez partir sur un dossier `src` avec un fichier `App.jsx` et à la racine du projet un fichier `index.html`. Pas besoin d'utiliser vite dans ce projet.

---

### Contraintes

1. Créer un composant `Clock` :

   * utilise `useState()` pour stocker l'heure ;
   * utilise `useEffect()` pour démarrer un `setInterval()` ;
   * dans le nettoyage (`return` du `useEffect`), appeler une fonction `onUnmount()` passée par le parent.
2. Créer un composant `App` :

   * gère un state `showClock` (toggle) et un message ;
   * affiche soit `<Clock />`, soit le message de démontage.

---

## **Étapes à réaliser**

1. Initialiser le projet (ou fichier HTML) avec React et ReactDOM.
2. Implémenter `Clock` :

   * au montage → démarrer le timer (`setInterval()`) ;
   * au démontage → nettoyer avec `clearInterval()` et notifier le parent.
3. Implémenter `App` :

   * un bouton `Toggle Clock` pour monter / démonter l'horloge ;
   * afficher le message transmis par `onUnmount()`.
4. Tester dans la console :

   * le timer s'arrête bien après démontage ;
   * le message s'affiche à la place de l'horloge.

---

## Merci d'avoir écouter cette partie sur `useEffect`

Pour revenir à la page d'accueil

[Plan du cours](https://antoine07.github.io/react_web2/#2)
