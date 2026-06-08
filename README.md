# ASEGUIM — Site officiel

Site web de l'**ASEGUIM** (Association des Stagiaires et Étudiants Guinéens au Maroc).
*« Façonnons l'Avenir Ensemble »*

## Stack

- **Next.js 16** (App Router, React 19, TypeScript strict)
- **Tailwind CSS v4** (design tokens dans `globals.css`)
- **Lenis** (smooth scroll) · animations d'apparition maison (IntersectionObserver)
- **lucide-react** (icônes)

## Démarrage

```bash
npm install
npm run dev        # http://localhost:3000
```

Autres commandes : `npm run build`, `npm run start`, `npm run lint`, `npm run typecheck`, `npm run check`.
Node **≥ 24** requis.

## Structure

```
src/
  app/                     # Routes (App Router)
    page.tsx               # Accueil
    qui-sommes-nous/  bureau-executif/  nos-domaines/
    commission-scientifique/  conseil-consultatif/  talents/
    adhesion/  don/  devenir-partenaire/  contact/  legal/
  components/
    ui/                    # Primitives : Logo, Pill, Reveal, SmoothScroll
    layout/                # Navbar, Footer
    sections/              # Sections de l'accueil (Hero, Mission, Domaines, Chiffres…)
    forms/                 # Adhésion, Don, Partenaire, Contact
    shared/                # PageHeader, SectionHeading, CtaBanner, TeamCard, LegalPage
  data/aseguim.ts          # Toutes les données de l'association (source unique)
  hooks/useCountUp.ts      # Compteurs animés
  lib/utils.ts             # cn()
public/aseguim/
  images/                  # logo + partenaires + domaines
  videos/                  # bannière vidéo
```

## Contenu

Tout le contenu (identité, mission, domaines, chiffres, partenaires, bureau exécutif,
commissions, conseil consultatif, talents, contact, bureaux régionaux, réseaux) est
centralisé dans **`src/data/aseguim.ts`** — un seul fichier à éditer pour mettre à jour le site.

## Notes

- Les photos du bureau et des conseils sont servies depuis Cloudinary (`res.cloudinary.com`,
  autorisé dans `next.config.ts`).
- Les formulaires (adhésion, don, partenariat, contact) sont des maquettes fonctionnelles ;
  à brancher à un backend / webhook pour les rendre opérationnels.
- La page `/talents` existe mais n'est pas liée dans la navigation (masquée).
