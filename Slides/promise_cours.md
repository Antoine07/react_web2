---
marp: true
paginate: true
theme: default
---


# Promesse

**1. Définition**
Une *promise* représente une opération asynchrone qui n'a pas encore terminé au moment où le code s'exécute. Elle sert à gérer du code qui prendra du temps (requêtes réseau, timers, lectures de fichiers…).

**2. Trois états**

* **pending** : en cours
* **fulfilled** : réussie
* **rejected** : échouée

**3. Utilisation de base**

```js
const maPromesse = new Promise((resolve, reject) => {
  const ok = true;
  if (ok) resolve("Succès");
  else reject("Erreur");
});
```

**4. Consommer une promise**

```js
maPromesse
  .then((résultat) => {
    console.log(résultat); // si succès
  })
  .catch((erreur) => {
    console.error(erreur); // si erreur
  });
```

**5. Avec async/await (plus lisible)**

```js
async function run() {
  try {
    const valeur = await maPromesse;
    console.log(valeur);
  } catch (e) {
    console.error(e);
  }
}
```

## Exemple

```js
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Terminé après " + ms + " ms");
    }, ms);
  });
}

wait(1000)
  .then((msg) => {
    console.log(msg);
  });
```

Et la même chose avec **async/await** :

```js
async function test() {
  const msg = await wait(1000);
  console.log(msg);
}

test();
```
