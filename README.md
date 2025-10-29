# Programme React

# Plan de cours 

## Installation pour commencer

1. Tous les modèles sont dans le dossier `models`

1. Organisation pour votre travail

* Créez un dossier COURS_REACT sur votre bureau.
* Ouvrez ce dossier avec vscode.
* Créez un sous dossier introduction
* Créez un autre sous dossier Examples.

---

## Le cours React

- [Introduction](https://antoine07.github.io/react_web2/001_introduction.html)
- [Props](https://antoine07.github.io/react_web2/002_props.html)
- [States](https://antoine07.github.io/react_web2/003_state.html)
- [useEffect](https://antoine07.github.io/react_web2/005_useEffect.html)

Dans un projet moderne on utilisera `vite`

- [vite](https://antoine07.github.io/react_web2/vite.html)


## Pratique pour le déploiement du cours 

```bash
for f in *.html; do pandoc "$f" -o "pdf/${f%.html}.pdf" --pdf-engine=weasyprint; done

for f in *.md; do pandoc "$f" -o "pdf/${f%.md}.pdf" --pdf-engine=xelatex --standalone; done

for file in Slides/*.md; do
  marp "$file" --html --allow-local-files -o "docs/$(basename "${file%.md}.html")"
done

```

### Pour créer des slides 

En haut de chaque `markdown`

```md
---
marp: true
theme: default
paginate: true
class: lead
---
```