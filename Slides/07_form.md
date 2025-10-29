---
marp: true
theme: default
paginate: true
class: lead
---


# **Événements et Formulaires en React**

---

## 1. Introduction aux événements

Les événements React ressemblent à ceux du DOM,
mais utilisent une **syntaxe camelCase** et du **JSX**.

```jsx
onClick={handleClick}
onChange={handleChange}
onSubmit={handleSubmit}
```

React gère un système d'événements **synthétiques** pour la compatibilité entre navigateurs.

---

## 2. Exemple simple : clic de bouton

```jsx
function ButtonExample() {
  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <button onClick={handleClick} className="bg-blue-600 text-white px-3 py-2 rounded">
      Click me
    </button>
  );
}
```

---

**À retenir :**

* `onclick` devient `onClick`
* On passe une **fonction de rappel** (pas `handleClick()`)
* React gère la propagation automatiquement

---

## 3. Passage de paramètres

```jsx
function Product({ name }) {
  const handleBuy = (item) => alert(`You bought a ${item}!`);
  return (
    <button onClick={() => handleBuy(name)} className="bg-green-500 text-white px-3 py-1 rounded">
      Buy {name}
    </button>
  );
}
```

⚠️ `onClick={handleBuy(name)}` exécuterait la fonction immédiatement.

---

## 4. Formulaires contrôlés

React synchronise les champs d'un formulaire avec le **state** du composant.
Chaque frappe met à jour le state → l'UI se met à jour automatiquement.

---

```jsx
function NameForm() {
  const [name, setName] = React.useState("");
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"
      />
      <p>Hello, {name || "Anonymous"}!</p>
    </div>
  );
}
```

> Le state est la **source de vérité** de l'UI.

---

## 5. Exemple complet – Formulaire d'inscription

```jsx
function SignupForm() {
  const [form, setForm] = React.useState({ name: "", email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome ${form.name}!`);
    setForm({ name: "", email: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
      <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Register</button>
    </form>
  );
}
```

---

## 6. Validation de formulaires avec Zod

La validation native (`required`, `type="email"`) est limitée.
**Zod** permet de décrire et valider les données avec une syntaxe déclarative.

```html
<script src="https://unpkg.com/zod@3.23.8/lib/index.umd.js"></script>
```

```js
const { z } = window.zod;
const schema = z.object({
  name: z.string().min(2, "Too short"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "At least 6 chars"),
});
```

---

## 7. Validation en direct avec React + Zod

```jsx
function SignupFormZod() {
  const [form, setForm] = React.useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = React.useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    const field = schema.shape[name];
    const result = field.safeParse(value);
    setErrors({ ...errors, [name]: result.success ? "" : result.error.issues[0].message });
  };
}
```

> `safeParse()` retourne `{ success, data }` ou `{ success: false, error }`.

---

## 8. Résumé

| Concept                 | Description                     |
| ----------------------- | ------------------------------- |
| `onClick`, `onChange`   | Gèrent les événements JSX       |
| **Formulaire contrôlé** | Le state pilote l'affichage     |
| `e.preventDefault()`    | Empêche le rechargement         |
| `z.object()`            | Définit un schéma de validation |
| `safeParse()`           | Valide sans lever d'erreur      |
| `errors[field]`         | Message d'erreur dynamique      |


---

## Merci d'avoir écouter cette première partie

Pour revenir à la page d'accueil

[Plan du cours](https://antoine07.github.io/react_web2/#2)