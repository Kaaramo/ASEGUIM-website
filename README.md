<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=2b614a&height=220&section=header&text=ASEGUIM&fontSize=70&fontColor=eaebdb&fontAlignY=38&animation=fadeIn&desc=Le%20site%20officiel%20des%20Stagiaires%20et%20%C3%89tudiants%20Guin%C3%A9ens%20au%20Maroc&descSize=18&descAlignY=60" width="100%" alt="ASEGUIM" />

*« Façonnons l'Avenir Ensemble »*

![Next.js](https://img.shields.io/badge/Next.js%2016-2b614a?style=for-the-badge&logo=nextdotjs&logoColor=eaebdb)
![React](https://img.shields.io/badge/React%2019-2b614a?style=for-the-badge&logo=react&logoColor=eaebdb)
![TypeScript](https://img.shields.io/badge/TypeScript-2b614a?style=for-the-badge&logo=typescript&logoColor=eaebdb)
![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS%20v4-2b614a?style=for-the-badge&logo=tailwindcss&logoColor=eaebdb)
![Postgres](https://img.shields.io/badge/Neon%20Postgres-2b614a?style=for-the-badge&logo=postgresql&logoColor=eaebdb)

![Last commit](https://img.shields.io/github/last-commit/Kaaramo/ASEGUIM-website?style=flat-square&color=ef562c&labelColor=112a20)
![Repo size](https://img.shields.io/github/repo-size/Kaaramo/ASEGUIM-website?style=flat-square&color=fddb22&labelColor=112a20)
![Stars](https://img.shields.io/github/stars/Kaaramo/ASEGUIM-website?style=flat-square&color=2b614a&labelColor=112a20)

</div>

## Présentation

Ce dépôt contient le site vitrine de l'**ASEGUIM** (Association des Stagiaires et Étudiants Guinéens au Maroc) : présentation de l'association, de ses domaines d'action, de son Bureau Exécutif Central et de son Conseil Consultatif, et parcours d'adhésion / don / partenariat. Les formulaires soumettent directement en base (Neon Postgres serverless) via des routes API internes — pas de maquette, les demandes sont réellement enregistrées.

## Comment ça marche

```mermaid
flowchart LR
    Visiteur([Visiteur]) --> Formulaire["Formulaire (adhésion / don / partenariat / contact)"]
    Formulaire --> API["Route API Next.js (/app/api/...)"]
    API --> DB[("Neon Postgres")]

    style Visiteur fill:#eaebdb,color:#112a20
    style DB fill:#2b614a,color:#eaebdb
```

Chaque formulaire (`AdhesionForm`, `DonForm`, `PartenaireForm`) poste vers sa route API dédiée (`src/app/api/adhesion`, `/don`, `/partenariat`), qui insère la soumission dans la table correspondante via `@neondatabase/serverless`.

## Stack

<img src="https://skillicons.dev/icons?i=nextjs,react,ts,tailwind,postgres,vscode" alt="Stack" />

- **Next.js 16** (App Router, React 19, TypeScript strict)
- **Tailwind CSS v4** — design tokens dans `globals.css` (palette ASEGUIM : `--green-700`, `--cream`, `--ink`, `--yellow`, `--orange`)
- **Neon** (`@neondatabase/serverless`) pour la persistance des formulaires
- **Lenis** (smooth scroll) · animations d'apparition maison (IntersectionObserver)
- **lucide-react** (icônes) · **shadcn / base-ui** (primitives UI)
- **Playwright** pour l'audit visuel (`scripts/mobile-audit.mjs`, `scripts/scroll-shots.mjs`)

## Démarrage

```bash
npm install
npm run dev        # http://localhost:3000
```

Variables d'environnement requises (`.env`) :

```
DATABASE_URL=postgresql://...   # instance Neon
```

Initialiser les tables (adhésions, dons, partenariats) :

```bash
node scripts/init-db.mjs
```

Autres commandes : `npm run build`, `npm run start`, `npm run lint`, `npm run typecheck`, `npm run check`.
Node **≥ 24** requis.

<details>
<summary><b>Structure du dépôt</b></summary>

<br/>

```
src/
  app/
    page.tsx                # Accueil
    api/                     # adhesion/ don/ partenariat/ — routes Neon
    qui-sommes-nous/  bureau-executif/  nos-domaines/
    commission-scientifique/  conseil-consultatif/  talents/
    adhesion/  don/  devenir-partenaire/  contact/  legal/
  components/
    ui/                     # Primitives : Logo, Pill, Reveal, SmoothScroll
    layout/                 # Navbar, Footer
    sections/               # Sections de l'accueil (Hero, Mission, Domaines, Chiffres…)
    forms/                  # Adhésion, Don, Partenaire, Contact
    shared/                 # PageHeader, SectionHeading, CtaBanner, TeamCard, OrgConnector, LegalPage
  data/aseguim.ts            # Toutes les données de l'association (source unique)
  hooks/useCountUp.ts         # Compteurs animés
  lib/db.ts                   # Client Neon (sql`...`)
  lib/utils.ts                # cn()
public/aseguim/
  images/                     # logo + partenaires + domaines + bureau-2026
  videos/                     # bannière vidéo
scripts/
  init-db.mjs                 # Création des tables Neon
  mobile-audit.mjs             # Audit responsive (Playwright)
  scroll-shots.mjs              # Captures de scroll (Playwright)
```

</details>

<details>
<summary><b>Contenu et Bureau Exécutif</b></summary>

<br/>

Tout le contenu (identité, mission, domaines, chiffres, partenaires, bureau exécutif, commissions, conseil consultatif, talents, contact, bureaux régionaux, réseaux) est centralisé dans **`src/data/aseguim.ts`** — un seul fichier à éditer pour mettre à jour le site.

La page `/bureau-executif` affiche le bureau sous forme d'organigramme : le Secrétaire Général en avant (`TeamCard` avec `featured`), relié par des connecteurs animés (`OrgConnector.tsx`, SVG + `stroke-dashoffset`) à deux rangées de trois membres. Les photos du BEC en cours sont locales, dans `public/aseguim/images/bureau-2026/`. Pour changer d'équipe : mettre à jour le tableau `BUREAU` dans `src/data/aseguim.ts` (un seul membre avec `featured: true`, les six autres suivent dans l'ordre d'affichage) et déposer les nouvelles photos dans le même dossier.

</details>

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=2b614a&height=120&section=footer" width="100%" alt="footer" />

</div>
