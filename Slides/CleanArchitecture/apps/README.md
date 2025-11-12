# Projet Clean Architecture 

## 1. Présentation

Construire une application **machine de Turing** avec :

* Un **serveur Node/Express** + MongoDB pour la logique et la persistance des bandes.
* Une **interface web** moderne (Next.js ou Vite + React + TS) consommant cette API.
* Une **architecture monorepo minimale** pour garder cohérence et clarté.

Reprennez le TP sur la machine de Turing 

[sujet](../../../TPs/03_machine_turing.md)

Si vous le souhaitez (conseillez) utiliser Docker pour faire l'exercice, voyez dans ce cas dans le dossiers apps du dossier CleanArchitecture

---

## 2. Structure du monorepo simple

```
turing-app/
 ├── backend/                  → API Express (MongoDB)
 │   ├── application/          → routes + contrôleurs
 │   ├── domain/               → entités + règles métier
 │   ├── infrastructure/       → adaptateurs Mongo, connecteurs
 │   └── server.ts
 ├── frontend/                 → client React/TypeScript
 │   ├── src/
 │   │   ├── app/              → routes TanStack Router
 │   │   ├── features/         → modules métier (tape, editor, runner…)
 │   │   ├── ui/               → composants atomiques (Atomic Design)
 │   │   ├── hooks/            → hooks custom (useTape, useStep…)
 │   │   ├── lib/              → config TanStack Query, clients API, etc.
 │   │   └── types/            → types partagés
 │   ├── index.html / main.tsx
 │   └── vite.config.ts        → ou config Next.js
 ├── shared/                   → types, constantes, logique commune (facultatif)
 └── package.json
```

Aucun gestionnaire de workspace : tout est à la racine, chaque partie est autonome mais peut importer depuis `../shared` si nécessaire.

---

## 3. Partie **backend**

### Rôles principaux :

* **`domain`** : définit les entités (`Tape`), leurs comportements et les règles (machine de Turing).
* **`infrastructure`** : accès aux données (MongoDB), schéma Mongoose, repository CRUD.
* **`application`** : contient les cas d'usage (exécuter une étape, réinitialiser une bande, etc.) et les contrôleurs Express.
* **`server.ts`** : assemble Express, connecte Mongo et monte les routes sous `/api`.

### Points clés :

* Une seule collection MongoDB : `tapes`.
* Les routes principales :

  * `POST /api/tapes` : création d'une bande.
  * `GET /api/tapes/:id` : lecture.
  * `PUT /api/tapes/:id/step` : exécution d'une étape.
  * `DELETE /api/tapes/:id` : suppression.
* Possibilité d'ajouter une route `PUT /api/tapes/:id/run` pour plusieurs transitions d'un coup.

---

## 4. Partie **frontend**

### Outils requis :

* **React + TypeScript** (Vite ou Next.js)
* **TanStack Query** pour la gestion des requêtes et du cache serveur.
* **TanStack Router** pour le routage sans dépendance externe.
* **TailwindCSS** ou Shadcn UI (optionnel) pour le design.
* **Architecture inspirée de la clean architecture** ou **Atomic Design** pour séparer clairement :

  * logique métier,
  * composants UI,
  * logique de données.

### Structure interne suggérée :

```
src/
│
├── api/                              # Gestion centralisée des appels API (TanStack Query)
│   ├── client.ts                     # Configuration du client HTTP (fetch ou axios)
│   └── endpoints/                    # Définition des points d'entrée API
│       └── tapes.ts                  # API pour les bandes de Turing
│
├── components/                       # Atomic Design : structure claire et hiérarchisée
│   ├── atoms/                        # Éléments fondamentaux UI
│   │   ├── Button.tsx                # Bouton générique
│   │   ├── Input.tsx                 # Champ texte / symbole
│   │   └── SymbolCell.tsx            # Case individuelle de la bande
│   │
│   ├── molecules/                    # Combinaisons d’atomes
│   │   ├── TapeRow.tsx               # Ligne de bande affichant plusieurs symboles
│   │   └── StateBadge.tsx            # Indicateur visuel d’état courant
│   │
│   ├── organisms/                    # Structures complexes de l’UI
│   │   ├── TapeViewer.tsx            # Visualiseur interactif de la bande
│   │   ├── TapeControls.tsx          # Contrôles de simulation (play, step, reset)
│   │   └── TransitionEditor.tsx      # Interface pour modifier les transitions
│   │
│   ├── templates/                    # Layouts de page
│   │   ├── AppLayout.tsx             # Layout global (Header, Footer)
│   │   └── TapeLayout.tsx            # Layout spécifique aux vues de simulation
│   │
│   └── pages/                        # Pages finales accessibles via le router
│       ├── HomePage.tsx              # Page d’accueil
│       ├── TapesPage.tsx             # Liste de toutes les bandes
│       ├── TapeDetailPage.tsx        # Détail + simulation d’une bande
│       └── TapeEditorPage.tsx        # Création / édition d’une bande
│
├── app/                              # Configuration globale
│   ├── queryClient.ts                # Configuration de TanStack QueryClient
│   ├── router.ts                     # Définition des routes TanStack Router
│   └── providers.tsx                 # Providers globaux (QueryClientProvider, Theme, etc.)
│
├── hooks/                            # Hooks personnalisés
│   ├── useTapeQuery.ts               # Récupération d’une bande
│   ├── useTapesQuery.ts              # Liste des bandes
│   ├── useStepTape.ts                # Mutation pour exécuter une étape
│   ├── useCreateTape.ts              # Mutation pour créer une bande
│   └── useDeleteTape.ts              # Suppression
│
├── utils/                            # Fonctions utilitaires
│   ├── formatTape.ts                 # Formatage visuel de la bande
│   ├── transitionsHelpers.ts         # Application des règles de transition
│   └── apiHelpers.ts                 # Helpers HTTP génériques
│
├── assets/                           # Ressources statiques
│   ├── styles.css                    # Feuille de style globale
│   └── icons/                        # Icônes spécifiques à la simulation
│
└── main.tsx                          # Point d’entrée : initialisation du router et du QueryClient

```

### Comportement attendu côté front :

* **TanStack Query** s'occupe de la communication avec le backend :

  * `useQuery(['tape', id], getTape)`
  * `useMutation(updateTapeStep)`
* **TanStack Router** gère les pages :

  * `/` : accueil
  * `/tapes` : liste des bandes
  * `/tapes/:id` : visualisation
  * `/tapes/:id/edit` : modification ou simulation
* Les composants sont construits suivant **Atomic Design** :

  * **Atoms** : boutons, textes, inputs.
  * **Molecules** : cartes, barres de contrôle.
  * **Organisms** : visualiseur de bande, simulateur.
  * **Pages** : combinaisons finales exposées via le router.

---

## 5. Bonnes pratiques pour ce monorepo minimal

* **Un seul `package.json`** à la racine, avec deux scripts :

  ```bash
  "dev:backend": "cd backend && tsx server.ts"
  "dev:frontend": "cd frontend && vite"
  ```
* Utiliser **TypeScript** dans les deux parties (compiler séparément).
* Centraliser les types partagés dans `shared/` pour éviter les duplications (ex : type `Tape`).
* Garder des **interfaces claires entre front et back**, en exposant uniquement les endpoints nécessaires.
