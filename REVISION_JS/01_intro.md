## Bases du langage — avec exemples détaillés

### 2.1 Variables et constantes

* `let` : variable réassignable (portée bloc)
* `const` : constante (référence non réassignable, mais contenu d’un objet/array modifiable)
* `var` : obsolète (portée fonction + hoisting) → éviter

```js
let compteur = 0;        // peut changer
const TAUX_TVA = 0.2;    // ne change pas

compteur = compteur + 1; // OK
// TAUX_TVA = 0.21;      // ❌ TypeError

const utilisateur = { nom: "Ada", age: 28 };
utilisateur.age = 29;    // OK (on modifie le contenu, pas la variable elle-même)
```

Bonnes pratiques : noms explicites en camelCase, éviter les abréviations cryptiques.

---

### 2.2 Types de données essentiels

#### Type primitif immutable

* `number` : entiers et flottants (NaN, Infinity inclus)
* `string` : chaînes `"..."`, `'...'`, ou **template literals** `` `...${expr}` ``
* `boolean` : `true` / `false`
* `null` : absence volontaire de valeur
* `undefined` : non défini (variable déclarée sans valeur)

### Type object type mutable

* `object` : objets, tableaux, fonctions
* (optionnel) `bigint`, `symbol`

#### Détection de type

```js
typeof 42;                 // "number"
typeof "hello";            // "string"
typeof true;               // "boolean"
typeof undefined;          // "undefined"
typeof null;               // "object"   (quirk historique)
typeof { a: 1 };           // "object"
Array.isArray([1,2,3]);    // true
```

#### Nombres

```js
0.1 + 0.2;        // 0.30000000000000004 (précision flottante)
Number.isNaN(NaN) // true
Number.isFinite(10/0); // false (Infinity)
```

#### Chaînes

```js
const nom = "Ada";
const s1 = "Bonjour, " + nom + " !"; // 
const s2 = `Bonjour, ${nom} !`;  // concaté 
```

#### Valeurs “falsy” (coercion booléenne vers false)

`0`, `-0`, `""`, `null`, `undefined`, `NaN`, `false`
Tout le reste est “truthy”.

---

### 2.3 Opérateurs de base

#### Arithmétique

`+  -  *  /  %  **` (puissance)

```js
5 + 2;      // 7
5 ** 2;     // 25
7 % 3;      // 1
```

#### Affectation

`=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`

```js
let x = 10;
x += 3;     // 13
```

#### Comparaison

* **Toujours préférer** `===` et `!==` (comparaison stricte)
* Éviter `==` et `!=` (coercions surprises)

```js
3 === "3";  // false
3 == "3";   // true  (⚠️ coercion)
null == undefined; // true (règle spéciale)
```

#### Logiques

`&&` (ET), `||` (OU), `!` (NON), `??` (nullish coalescing)

```js
true && "ok";     // "ok"   (retourne la dernière valeur truthy)
false || "def";   // "def"
0 ?? 42;          // 0      (?? ne remplace QUE null/undefined)
undefined ?? 42;  // 42
```

#### Conversions explicites utiles

```js
Number("42");      // 42
Number("42a");     // NaN
String(10);        // "10"
Boolean("hello");  // true
Boolean("");       // false
```

---

### 2.4 Structures de contrôle

#### Conditionnelles

```js
const age = 17;

if (age >= 18) {
  console.log("Majeur");
} else if (age === 17) {
  console.log("Bientôt majeur");
} else {
  console.log("Mineur");
}

// Ternaire (pour petites branches)
const statut = age >= 18 ? "majeur" : "mineur"; // "mineur"
```

#### `switch` (quand plusieurs cas)

```js
const role = "admin";
switch (role) {
  case "admin":
    console.log("Accès complet");
    break;
  case "editor":
    console.log("Accès limité");
    break;
  default:
    console.log("Lecture seule");
}
```

#### Boucles

```js
// for classique
for (let i = 1; i <= 3; i++) {
  console.log(i); // 1,2,3
}

// while
let n = 3;
while (n > 0) {
  n--;            // 2,1,0
}

// for...of (sur itérables : arrays, strings, etc.)
for (const lettre of "JS") {
  console.log(lettre); // J, S
}

// for...in (sur clés d’objet) → préférer Object.keys/entries
const obj = { a: 1, b: 2 };
for (const k in obj) {
  console.log(k, obj[k]); // a 1 / b 2
}
```

---

### 2.5 Tableaux et objets — premiers pas

```js
// Tableaux
const fruits = ["pomme", "banane"];
fruits.push("kiwi");         // ["pomme","banane","kiwi"]
fruits[1];                   // "banane"
fruits.length;               // 3

// Objets
const user = { nom: "Ada", age: 28 };
user.nom;                    // "Ada"
user["age"];                 // 28
user.actif = true;           // ajoute une propriété
```

Méthodes de tableau courantes (aperçu) :

```js
[1,2,3].map(x => x * 2);     // [2,4,6]
[1,2,3].filter(x => x > 1);  // [2,3]
[1,2,3].reduce((a,b) => a+b, 0); // 6
```

---

### 2.6 Exemples complets

#### Exemple A — calcul simple et affichage

```js
const prixHT = 50;
const TAUX_TVA = 0.2;
const prixTTC = prixHT * (1 + TAUX_TVA);
console.log(`TTC: ${prixTTC}`); // "TTC: 60"
```

#### Exemple B — normaliser une entrée utilisateur

```js
const entree = "  bonJour  ";
const propre = entree.trim().toLowerCase(); // "bonjour"
console.log(propre);
```

#### Exemple C — décision + boucle

```js
const max = 5;
let sortie = "";
for (let i = 1; i <= max; i++) {
  sortie += i % 2 === 0 ? `[${i}]` : `${i}`;
  if (i < max) sortie += " ";
}
console.log(sortie); // "1 [2] 3 [4] 5"
```

---

### 2.7 Mini-exercices (avec solutions)

1. Créer deux variables `a=7` et `b="3"`. Afficher la somme correctement en nombre.

```js
const a = 7;
const b = "3";
console.log(a + Number(b)); // 10
```

2. Écrire une condition qui affiche “OK” si `password` a au moins 8 caractères, sinon “Court”.

```js
const password = "secret123";
console.log(password.length >= 8 ? "OK" : "Court");
```

3. Parcourir un tableau de nombres et construire une chaîne des nombres > 10, séparés par “, ”.

```js
const nums = [4, 12, 8, 33, 10];
const res = nums.filter(n => n > 10).join(", ");
console.log(res); // "12, 33"
```

4. Éviter la coercion : vérifier strictement que `val` est le nombre 0.

```js
const val = 0;
if (typeof val === "number" && val === 0) {
  console.log("zéro nombre");
}
```

5. Utiliser `??` pour fournir une valeur par défaut seulement si `null`/`undefined`.

```js
const saisie = "";                // chaîne vide mais définie
const valeur = saisie ?? "N/A";   // "" (pas "N/A")
console.log(valeur);
```

---

### 2.8 Pièges fréquents à éviter

* Utiliser `==` au lieu de `===`.
* Oublier `let`/`const` → crée une variable globale implicite (strictement à éviter).
* Se fier à la précision des flottants (`0.1 + 0.2 !== 0.3`).
* Confondre `null` et `undefined` (`??` est souvent plus sûr que `||`).

---

### 2.9 Check-list rapide

* Déclarer avec `const` par défaut, `let` si réassignation.
* Comparer avec `===`/`!==`.
* Préférer les template literals.
* Manipuler les tableaux avec `map/filter/reduce`.
* Utiliser `??` pour les valeurs “absentes” (null/undefined).
