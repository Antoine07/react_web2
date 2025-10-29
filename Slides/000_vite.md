---
marp: true
theme: default
paginate: true
class: lead
---


# **Introduction à Vite.js et installation de React**

Pour revenir à la page d'accueil

[Plan du cours](https://antoine07.github.io/react_web2/#2)

---


## 🚀  `npm create vite@latest`

Cette commande **ne crée pas un framework**,
elle **génère une structure de projet** avec Vite comme **outil de build**
et React comme **bibliothèque UI**.

---

Concrètement :

1. **Vite** agit comme un **serveur de développement** ultra rapide (hot reload, ESM natif).
2. **React** est la **bibliothèque de rendu** que ton code va utiliser.
3. Le template Vite fournit une base minimale (`App.jsx`, `main.jsx`) pour démarrer ton app React.

---

## Après l'installation :

* **React** (le framework UI minimaliste)
* **ReactDOM** (pour brancher React au DOM)
* **Vite** (le moteur qui exécute, compile et optimise le code)

Rien d'autre.

**Pas de routes, pas de backend, pas de state global — seulement le strict nécessaire pour démarrer.**


---

## 1. Pourquoi utiliser Vite.js ?

Avant Vite, la plupart des projets React utilisaient **Create React App (CRA)** pour démarrer rapidement un environnement de développement.

Mais CRA est devenu lent et complexe à maintenir.

**Vite.js** (prononcé *vite*, comme en français) est aujourd'hui l'outil moderne standard pour le développement front-end.

---

### Avantages de Vite.js

| Avantage       | Description                                                                           |
| -------------- | ------------------------------------------------------------------------------------- |
| **Rapide**     | Démarrage quasi instantané grâce à *esbuild* et au *hot reload* très performant.      |
| **Simple**     | Peu de configuration, tout est prêt dès l'installation.                               |
| **Moderne**    | Supporte les dernières versions d'ES Modules et JSX.                                  |
| **Compatible** | Fonctionne avec React, Vue, Svelte, Vanilla JS, etc.                                  |
| **Flexible**   | Peut être étendu avec des plugins et facilement intégré à un backend (Python, Node…). |

---

## 2. Installation de Vite.js

Assurez-vous d'avoir :

* **Node.js ≥ 18**
* **npm** (inclus avec Node)

### Vérifiez vos versions :

```bash
node -v
npm -v
```

---

## 3. Création d'un projet React avec Vite (sans TypeScript)

Exécutez dans le terminal :

```bash
npm create vite@latest my-react-app
```

> `my-react-app` = nom de votre projet (vous pouvez en choisir un autre)

---

Vite vous posera quelques questions :

```
✔ Project name: … my-react-app
✔ Select a framework: › React
✔ Select a variant: › JavaScript
```

---

### Architecture du projet

Vite crée une structure de projet prête à l'emploi :

```
my-react-app/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── assets/
└── node_modules/
```

---

## 4. Installation des dépendances

Entrez dans le projet :

```bash
cd my-react-app
npm install
```

Cela installe toutes les dépendances définies dans `package.json` (React, ReactDOM, Vite…).

---

## 5. Lancer le serveur de développement

Démarrez le serveur local :

```bash
npm run dev
```

Le terminal affiche :

```
VITE v5.x.x  ready in 300 ms

  ➜  Local:   http://localhost:5173/
```

> Ouvrez ce lien dans votre navigateur : vous verrez votre application React en fonctionnement.

---

## 6. Structure du projet expliquée

| Fichier / dossier  | Rôle                                                   |
| ------------------ | ------------------------------------------------------ |
| **index.html**     | Point d'entrée principal du projet                     |
| **src/main.jsx**   | Monte le composant React principal (`App`) dans le DOM |
| **src/App.jsx**    | Composant racine de l'application                      |
| **vite.config.js** | Configuration du serveur et des plugins                |
| **package.json**   | Liste des dépendances et scripts npm                   |

---

### Exemple : `src/main.jsx`

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

---

### Exemple : `src/App.jsx`

```jsx
function App() {
  return (
    <div>
      <h1>Hello from React + Vite!</h1>
      <p>This project runs without TypeScript.</p>
    </div>
  )
}

export default App
```

---

## 7. Scripts npm utiles

| Commande          | Action                                     |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Démarre le serveur local avec *hot reload* |
| `npm run build`   | Compile le projet pour la production       |
| `npm run preview` | Prévisualise la version compilée           |

---

## 8. Compilation pour la production

Une fois le développement terminé :

```bash
npm run build
```

Cela crée un dossier `/dist` contenant tous les fichiers optimisés pour le déploiement.

> Pour vérifier localement :

```bash
npm run preview
```

---

## 9. Résumé

* Vite.js = outil moderne de **build et dev server ultra-rapide**.
* Il remplace avantageusement *Create React App*.
* Installation simple, zéro configuration.
* Compatible avec React, sans TypeScript ou avec, selon le choix.

---

## Merci d'avoir écouter cette première partie

Pour revenir à la page d'accueil

[Plan du cours](https://antoine07.github.io/react_web2/#2)
