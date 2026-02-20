# Guide de Développement : Site Web Fluxiabiz

Bienvenue sur le dépôt du site web de **Fluxiabiz**. Ce document centralise toutes les informations nécessaires pour qu'un nouveau développeur puisse reprendre le projet, le comprendre et le faire évoluer **sans rien casser**.

---

## 1. Contexte du Projet
- **Qu'est-ce que Fluxiabiz ?** C'est une plateforme tout-en-un (ERP/CRM) ciblant principalement le marché africain (avec support de l'OHADA, devises locales, mode hors-ligne). L'application mobile (développée sous Expo) gère les stocks, les Ventes/POS, les employés, et même des agents IA.
- **Objectif de ce site web :** Servir de vitrine ultra-moderne (Landing Page) pour l'acquisition de nouveaux clients. Le site doit présenter les fonctionnalités de l'écosystème Fluxiabiz et offrir des Call-to-Actions (CTAs) pour télécharger les applications ou réserver des démos.
- **Règle d'or :** Cohérence avec l'application mobile. Le design doit rester dans le même esprit d'écosystème.

---

## 2. Stack Technique
- **Framework Core :** Next.js (Version 14+ avec App Router)
- **Langage :** TypeScript (strict)
- **Styling :** Tailwind CSS
- **Hébergement cible :** Vercel
- **Animations :** Framer Motion (recommandé pour l'homogénéité avec React) ou Tailwind utilities.

---

## 3. Charte Graphique et Design System
**Extrêmement important !** Ne partez pas dans tous les sens avec les couleurs. Le thème est basé sur le **logo de l'entreprise** et le design de **l'application mobile**.

### A. Couleurs Principales (Logo)
- **Fond principal :** Blanc clair pur / mode clair privilégié pour faire ressortir le "F" logo.
- **Couleur d'accentuation (Le "Biz" du logo) :** Turquoise vibrante / Vert Menthe (`#00C9A7` environ, correspondant à une classe Tailwind `teal-400` / `emerald-400` à vérifier).
- **Texte primaire (Le "Fluxia") :** Noir profond (`slate-900` ou `#0F172A`).
- **Gris neutres :** `slate-500` pour les sous-textes et `gray-50`/`slate-50` pour les fonds secondaires.

### B. Couleurs des Modules (Application Mobile)
Si vous présentez un module spécifique, utilisez sa couleur d'application :
- **CRM :** Bleu (`blue-500`)
- **Stock & POS :** Vert Émeraude (`emerald-500`)
- **Comptabilité :** Ambre/Or (`amber-500`)
- **Ressources Humaines :** Violet (`violet-500`)
- **Projets :** Sarcelle (`teal-500`)
- **IA Agents :** Indigo/Violet clair (`indigo-500`)

### C. Style Visuel
- **Glassmorphism :** Des cartes floutées (ex. `bg-white/50 backdrop-blur-md`) sur des arrière-plans subtilement dégradés.
- **Bordures :** Coins très arrondis (`rounded-2xl` ou `rounded-[32px]`), bordures très fines (`border border-slate-100`).

---

## 4. Architecture du Projet (App Router)
Le projet utilise le dossier `src/app/`. Voici comment organiser vos fichiers :

- `/src/components/` : Tous les composants réutilisables (Boutons, Cartes, Navbar). **Séparez bien la logique UI des pages.**
  - `/src/components/ui/` : Boutons de base, Inputs (souvent générés par shadcn/ui si utilisé).
  - `/src/components/sections/` : Les grands blocs de la landing page (Hero, Features, Pricing, Footer).
- `/src/app/page.tsx` : La page d'accueil principale.
- `/src/assets/` ou `/public/` : Stockez toutes vos images (Mockups, Logos) ici.

---

## 5. Bonnes Pratiques de Développement
Pour ne rien casser et garder un code sain :

1. **SEO First :** Utilisez toujours les bonnes balises HTML5 (`<header>`, `<section>`, `<article>`). Remplissez scrupuleusement les `metadata` dans les fichiers `page.tsx` et `layout.tsx`.
2. **Accessibilité :** Ajoutez toujours des attributs `alt` aux images et un contraste textuel suffisant.
3. **Images :** Utilisez la balise `<Image />` de Next.js (`next/image`) pour l'optimisation automatique des tailles et du lazy loading.
4. **Composants Client vs Server :** En App Router, tout composant est *Server Component* par défaut. N'ajoutez la directive `"use client";` au-dessus du fichier **que si** vous utilisez du `useState`, `useEffect`, onClick ou de l'animation avec Framer Motion.
5. **Commodes Git :** Utilisez des conventions de commits claires (`feat: ...`, `fix: ...`, `style: ...`).

---

## 6. Outils de Commandes

```bash
# Lancer le serveur de développement (http://localhost:3000)
npm run dev

# Lancer un linter pour vérifier les erreurs
npm run lint

# Compiler l'application pour la production (Tester localement avant chaque push !)
npm run build
```

---

*Avec ce guide, le site Fluxiabiz bénéficiera d'une évolution saine et harmonieuse. Bon développement ! 🚀*
