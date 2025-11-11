## Sujet : Implémenter une mini « machine à additionner » avec Zustand

### Objectif

On veut simuler une machine très simple inspirée de la machine de Turing.
Elle va **additionner deux nombres représentés en unaire**, par exemple :

```txt
1 = 1
2 = 11
3 = 111
4 = 1111
```

en **collant les deux groupes de `1`**.

Exemple :

```
1 + 1 = 11
```

Nous allons représenter la bande (mémoire) comme un tableau :

```
["1", "_", "1", "_", "_", "_"]
```

Le premier `1` représente le premier nombre, le second `1` représente le deuxième nombre.
Le rôle de la machine est de **avancer jusqu'au premier `_`** et de **le remplacer par `1`**.
Puis elle s'arrête.

---

### Règles de transition de la machine

La machine possède **un état** (ici toujours `A` jusqu'à l'arrêt),
une **tête de lecture** (un index dans le tableau),
et applique ces règles :

| État | Symbole lu | Écrire | Déplacer             | Nouvel état |
| ---- | ---------- | ------ | -------------------- | ----------- |
| A    | 1          | 1      | → (droite)           | A           |
| A    | _          | 1      | (pas de déplacement) | HALT (fin)  |

---

### Contraintes de l'exercice

1. Créer un **store Zustand** contenant :

   * `tape` : la bande (un tableau de chaînes de caractères)
   * `head` : position actuelle de la tête (index)
   * `mode` : état actuel (`"A"` au départ)
   * `step()` : exécuter **un pas** selon les règles
   * `reset()` : remettre la machine à l'état initial

2. Créer une **interface React simple** permettant :

   * d'afficher la bande avec la position de la tête
   * de voir l'état actuel
   * un bouton `Step`
   * un bouton `Reset`

---

### À propos de l'utilisation de `produce`

Zustand ne force pas l'immuabilité, mais si vous modifiez l'état directement sans recréer les objets, React peut **ne pas détecter le changement** → donc votre interface **ne se mettra pas à jour**.

Deux choix possibles :

**Sans `produce`** (il faut recréer une nouvelle référence) :

```js
set(state => ({
  tape: state.tape.map((v, i) => i === state.head ? "1" : v),
  head: state.head + 1
}));
```

**Avec `produce` (recommandé ici)** :

* On écrit comme si on modifiait l'objet directement,
* Immer s'occupe de produire une **nouvelle référence immuable**,
* React et Zustand détectent le changement **automatiquement**.

```js
set(produce(state => {
  state.tape[mode.head] = "1";
  state.head++;
}));
```

**Conclusion** :
Sans `produce`, il faut **reconstruire manuellement** les tableaux/objets pour changer de référence.
Avec `produce`, on écrit simplement et l'immuabilité est **assurée automatiquement**.

---


### Travail attendu

* Ajouter le composant React affichant la bande et les boutons.
* Tester l'exécution étape par étape (avec un clique)
* Vérifier le passage à l'état `HALT` et l'addition des deux nombres en unaire.
