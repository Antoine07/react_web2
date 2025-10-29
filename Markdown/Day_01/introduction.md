
# **Jour 1 — Introduction à React (sans JSX puis avec JSX)**

## Objectifs pédagogiques

À la fin de cette séance, les étudiants doivent être capables de :

* comprendre le rôle de React et du Virtual DOM ;
* créer une interface simple avec `React.createElement()` et `ReactDOM` sans JSX ;
* écrire leurs premiers composants React fonctionnels ;
* comprendre ce que JSX apporte et comment Babel le transforme.

---

## 1. Introduction — Pourquoi React ?

Avant React, les développeurs manipulaient directement le **DOM** avec du JavaScript classique :

```js
const el = document.createElement("h1");
el.textContent = "Hello";
document.body.appendChild(el);
```

Cette approche devient vite complexe lorsque :

* l’interface doit se mettre à jour fréquemment ;
* plusieurs éléments changent en même temps ;
* le code doit rester maintenable.

React apporte une solution :

* une **approche déclarative** : on décrit l’état final de l’interface ;
* un **Virtual DOM** : une représentation virtuelle du DOM réel pour rendre les mises à jour efficaces ;
* une structure **modulaire** : les composants.

---

## 2. Créer une première page React **sans JSX**

### a. Structure de projet

Créez un dossier `day1-react-no-jsx/` et un fichier `index.html` :

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React sans JSX</title>
  </head>
  <body>
    <div id="root"></div>

    <!-- React et ReactDOM via CDN -->
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>

    <script>
      const root = ReactDOM.createRoot(document.getElementById("root"));

      // Création d’éléments React sans JSX
      const title = React.createElement("h1", null, "Hello React!");
      const paragraph = React.createElement("p", null, "This is React without JSX.");

      const app = React.createElement("div", { className: "container" }, [title, paragraph]);

      root.render(app);
    </script>
  </body>
</html>
```

---

### b. Explication

La fonction :

```js
React.createElement(type, props, ...children)
```

crée un **élément React virtuel** (un objet JavaScript), que ReactDOM traduit ensuite dans le DOM réel.

Exemple :

```js
React.createElement("h1", { className: "title" }, "Hello!");
```

est équivalent à :

```html
<h1 class="title">Hello!</h1>
```

mais en mémoire seulement, jusqu’à ce que `root.render()` soit exécuté.

---

## 3. Créer des composants sans JSX

Un **composant React** est une fonction qui retourne un élément React.

```html
<script>
  function Hello() {
    return React.createElement("h2", null, "Hello World Component");
  }

  function App() {
    return React.createElement("div", null, [
      React.createElement(Hello, null),
      React.createElement("p", null, "Rendered without JSX.")
    ]);
  }

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(React.createElement(App));
</script>
```

---

##  **Exercice 1 — React et ReactDOM purs (sans JSX)**

**Objectif :** Comprendre comment construire une interface entièrement avec `React.createElement()`.

### Consigne :

Créer un composant `ProfileCard` affichant :

* une image (prop `image`) ;
* un nom (prop `name`) ;
* un rôle (prop `role`).

Le tout **sans JSX**.

### Exemple attendu :

```js
function ProfileCard(props) {
  return React.createElement("div", { className: "card" }, [
    React.createElement("img", { src: props.image, alt: props.name, width: 80 }),
    React.createElement("h3", null, props.name),
    React.createElement("p", null, props.role)
  ]);
}

function App() {
  return React.createElement("div", null, [
    React.createElement(ProfileCard, { name: "Alice", role: "Student", image: "https://i.pravatar.cc/80?u=alice" }),
    React.createElement(ProfileCard, { name: "Bob", role: "Developer", image: "https://i.pravatar.cc/80?u=bob" })
  ]);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
```

### Objectif pédagogique :

* manipuler le Virtual DOM explicitement ;
* comprendre la logique interne avant de masquer la complexité avec JSX.

---

## 4. Introduction de JSX et de Babel

### a. Pourquoi JSX ?

JSX est une **extension de syntaxe JavaScript**.
Elle permet d’écrire des composants de manière plus lisible et naturelle.

```jsx
const element = <h1>Hello JSX!</h1>;
```

est transformé par Babel en :

```js
const element = React.createElement("h1", null, "Hello JSX!");
```

---

### b. Activation de Babel dans notre page

Modifiez votre `index.html` :

```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

<script type="text/babel">
  function Hello() {
    return <h2>Hello World Component</h2>;
  }

  function App() {
    return (
      <div>
        <Hello />
        <p>Rendered with JSX and Babel.</p>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
</script>
```

### c. Observation

* JSX **n’est pas** du HTML, mais du JavaScript enrichi.
* Babel le compile automatiquement en appels à `React.createElement`.

---

## 🧠 **Exercice 2 — Comparaison sans / avec JSX**

### Consigne :

1. Créer un composant `ProductCard` (avec image, name, price) **en deux versions** :

   * sans JSX (`React.createElement()`) ;
   * avec JSX et Babel.
2. Comparer la lisibilité des deux approches.

---

## 5. Expressions JavaScript dans JSX

Dans JSX, les expressions JavaScript se placent entre `{}` :

```jsx
function App() {
  const hour = new Date().getHours();
  const message = hour < 12 ? "Good morning!" : "Good evening!";

  return (
    <div>
      <h1>{message}</h1>
      <p>It is currently {hour} o'clock.</p>
    </div>
  );
}
```

---

## 6. QCM de fin de séance (5 min)

1. Quelle fonction crée un élément React sans JSX ?
2. À quoi servent les *props* ?
3. Que fait Babel dans le processus JSX ?
4. Quelle est la différence entre `React.createElement()` et `<div></div>` ?
5. Où peut-on insérer du code JavaScript dans JSX ?

---

## 7. Résumé du Jour 1

| Notion                  | Explication                                       |
| ----------------------- | ------------------------------------------------- |
| `React.createElement()` | Crée un élément virtuel React sans JSX            |
| `ReactDOM.createRoot()` | Initialise le point d’ancrage dans le DOM         |
| `root.render()`         | Rendu du composant dans le navigateur             |
| `JSX`                   | Syntaxe plus lisible transformée en appels React  |
| `props`                 | Données passées d’un composant parent à un enfant |
| `Babel`                 | Traduit le JSX en JavaScript classique            |

---

## 8. Travail personnel

* Relire :

  * [Créer et imbriquer des composants – React](https://fr.react.dev/learn)
  * [Démarrer avec React – MDN](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)
* Reproduire la `ProfileCard` en version JSX et comparer les deux fichiers.
* Préparer une réponse à la question :

  > En quoi JSX simplifie-t-il la lecture et la maintenance du code React ?


