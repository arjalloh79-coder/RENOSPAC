# Site web RENOSPAC Guinée

Site vitrine bilingue (Français par défaut · English toggle) du **RENOSPAC** — Réseau National des
Organisations Sanitaires Privées, Associatives et Confessionnelles de Guinée.

- `index.html` — la page complète (HTML + un peu de JavaScript, aucune dépendance serveur)
- `.github/workflows/deploy-pages.yml` — publication automatique sur GitHub Pages à chaque modification
- `assets/tailwind.css` — styles Tailwind compilés (déjà générés, rien à faire)
- `assets/logo.png` — logo officiel (extrait du document fourni)

## ⚠️ Ajouter les photos (1 minute)

Les photos partagées dans la conversation n'ont pas pu être jointes automatiquement.
Enregistrez-les dans le dossier `assets/` avec **exactement** ces noms :

| Fichier | Photo |
|---|---|
| `assets/photo-1.jpg` | Intervenant au micro (gilet noir RENOSPAC, casquette blanche) |
| `assets/photo-2.jpg` | Salle de conférence — panel « Quelles stratégies pour le contrôle des structures privées ? » |
| `assets/photo-3.jpg` | Membres de dos en gilets RENOSPAC |
| `assets/photo-4.jpg` | Équipe mains levées dans la salle de réunion |
| `assets/photo-5.jpg` | Photo de groupe devant la banderole « MORALISATION DU SOUS-SECTEUR PRIVÉ » *(aussi utilisée dans la section « Qui sommes-nous »)* |
| `assets/photo-6.jpg` | Groupe devant l'établissement aux murs verts (perron) |
| `assets/photo-7.jpg` | Point de presse — trois responsables à la table, drapeau guinéen |
| `assets/photo-8.jpg` | Grand groupe dehors devant le bâtiment |

Tant qu'un fichier manque, le site affiche automatiquement une vignette élégante avec la légende
à sa place — rien ne casse.

Vous pouvez aussi remplacer `assets/logo.png` par la version carrée haute qualité du logo.

## Coordonnées à compléter

Dans `index.html`, recherchez `6XX XX XX XX` et `contact@renospac-guinee.org` et remplacez par les
vrais numéro de téléphone et email (ils apparaissent dans la barre du haut, la section Contact et le pied de page).

## Mise en ligne (automatique)

Le site est publié automatiquement sur **GitHub Pages** à chaque push sur `main` :

> https://arjalloh79-coder.github.io/RENOSPAC/

Aucune manipulation nécessaire — ajoutez les photos ou modifiez `index.html`, poussez, et le site
se met à jour en une à deux minutes. (Si la première publication échoue, vérifiez dans
Settings → Pages que la source est bien **GitHub Actions**.)

## Régénérer le CSS (seulement si vous modifiez les classes Tailwind)

```bash
npx tailwindcss@3.4.1 -c tw.config.js -i tw.input.css -o assets/tailwind.css --minify
```

(config identique à celle décrite en tête de `assets/tailwind.css` — couleurs `petrol/ciel/vitale/lime/creme`,
polices Fraunces + Instrument Sans.)
