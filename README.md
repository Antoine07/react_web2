# Programme React

## Programme WEB 2

- Jour 1 & 2


- Jour 3, 4, 5, 6


## Pratique

```bash
for f in *.html; do pandoc "$f" -o "pdf/${f%.html}.pdf" --pdf-engine=weasyprint; done

for f in *.md; do pandoc "$f" -o "pdf/${f%.md}.pdf" --pdf-engine=xelatex --standalone; done

for file in Slides/*.md; do
  marp "$file" --html --allow-local-files -o "docs/$(basename "${file%.md}.html")"
done

```

Pour créer des slides 

```md
---
marp: true
theme: default
paginate: true
class: lead
---
```