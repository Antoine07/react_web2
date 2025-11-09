---
marp: true
theme: default
paginate: true
class: lead
---


### **Pourquoi persister l'état**

Certains états doivent **continuer d'exister même si la page est rechargée**.

Exemples concrets :

1. Le **thème clair / sombre** choisi par l'utilisateur
1. L'**utilisateur connecté** si l'application utilise une authentification (pas forcément une bonne idée si on fait du JWT).
1. Des **préférences d'affichage** (ex : langue, mode compact)
1. Un **panier d'achat**

---

### Attention

**Sans persistance**, tout revient au **défaut** après un simple `Ctrl+R`.
Résultat : **mauvaise expérience utilisateur**.

L'objectif de la persistance est donc de garder **la même interface et les mêmes choix** entre les sessions.

---

### **Utiliser la persistance avec Zustand**

Zustand offre une fonction prête à l'emploi : `persist`.

---

```js
// useThemeStore.js
import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useThemeStore = create(
  persist(
    (set) => ({
      theme: "light",
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light"
        })),
    }),
    {
      name: "theme-storage" // nom sous lequel l'état sera sauvegardé
    }
  )
)
```

---

Ce que cela change :

* L'état `theme` est **automatiquement enregistré dans localStorage**
* Au rechargement, Zustand **le restaure sans votre intervention**

Aucune ligne supplémentaire dans les composants.

---

### **Exercice — Vérifier**

1. Ouvrir votre application.
2. Changer le thème (ex : cliquer sur votre bouton `toggleTheme()`).
3. Ouvrir le navigateur → Outils développeur → Onglet "Application".
4. Dans "LocalStorage", vous verrez **une entrée** nommée `theme-storage`.
5. Rechargez la page.
6. Le thème reste **identique** → la persistance fonctionne.

Vous avez maintenant :

1. Un **état global**
1. Facilement accessible depuis n'importe quel composant
1. Et **persisté automatiquement**

---

## Merci d'avoir écouter cette première partie

Pour revenir à la page d'accueil

[Plan du cours](https://antoine07.github.io/react_web2/#2)
