---
marp: true
theme: default
paginate: true
class: lead
---


### **Zustand plusieurs stores - organisation**

---

### **Pourquoi séparer l'état en plusieurs stores**

Dans une application réelle, tout mettre dans un seul store rend l'état :

1. difficile à lire
1. difficile à maintenir
1. difficile à faire évoluer

---

### Retenir ce qui suit 

**Idée importante :**
On ne sépare pas en stores par composants,
on sépare **par domaines logiques**.

---

Exemples de domaines :

1. Authentification (utilisateur connecté, login/logout)
1. Interface (thème, panneaux ouverts, modals)
1. Données métier (ex : tâches, produits, configuration, etc.)

Chaque domaine devient **un store indépendant**.

---

### **Exemple : Un store pour l'utilisateur + un store pour l'UI**

---

Pour un utilisateur.

```js
// useUserStore.js
import { create } from "zustand"

export const useUserStore = create((set) => ({
  user: null,
  login: (name) => set({ user: { name } }),
  logout: () => set({ user: null })
}))
```

---

Pour l'UI.

```js
// useUIStore.js
import { create } from "zustand"

export const useUIStore = create((set) => ({
  theme: "light",
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light"
    }))
}))
```

---

**Ce que cela change :**

1. Chaque store est **court**, clair, lisible.
1. On modifie **un domaine** sans toucher aux autres.
1. Aucun store n'a besoin de connaître l'autre.

---

### **Composants qui consomment indépendamment**

```jsx
// Afficher le nom de l'utilisateur
import { useUserStore } from "./useUserStore"

function Header() {
  const user = useUserStore((state) => state.user)
  return <div>{user ? `Bonjour ${user.name}` : "Non connecté"}</div>
}
```

```jsx
// Bouton de changement de thème
import { useUIStore } from "./useUIStore"

function ThemeButton() {
  const toggleTheme = useUIStore((state) => state.toggleTheme)
  return <button onClick={toggleTheme}>Changer le thème</button>
}
```

---

**Résultat obtenu :**

1. Les composants prennent **uniquement ce qui les concerne**
1. L'architecture reste **propre et modulaire**
1. L'UI peut évoluer **sans réécrire la logique**

---

### Architecture conseillée

```txt
src/
  components/
    Header.jsx
    ThemeButton.jsx
    UserMenu.jsx

  stores/
    useUserStore.js     // état utilisateur
    useUIStore.js       // état interface (thème, modals…)
    useTasksStore.js    // état métier (ex : liste de tâches)

  pages/               // utile quand on va faire du routing
    Home.jsx
    Dashboard.jsx

  services/

  App.jsx
  main.jsx
```

---


## Merci d'avoir écouter cette première partie

Pour revenir à la page d'accueil

[Plan du cours](https://antoine07.github.io/react_web2/#2)

