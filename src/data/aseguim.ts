// Contenu réel de l'ASEGUIM (Association des Stagiaires et Étudiants Guinéens au Maroc).
// Source : projet ASEGUIM existant de l'utilisateur.

export const SITE = {
  nom: "ASEGUIM",
  nomComplet: "Association des Stagiaires et Étudiants Guinéens au Maroc",
  slogan: "La plateforme de référence",
  accroche: "Façonnons l'Avenir Ensemble",
  sousTitre:
    "L'ASEGUIM est le pont d'excellence entre la réussite académique et l'épanouissement culturel des étudiants guinéens au Maroc.",
  logo: "/aseguim/logo.jpeg",
  banniereVideo: "/aseguim/banniere.mp4",
};

export const NAV = [
  { label: "Accueil", href: "/" },
  { label: "Qui sommes-nous", href: "/qui-sommes-nous" },
  { label: "Nos domaines", href: "/nos-domaines" },
  { label: "Talents", href: "/talents" },
  { label: "Actualités", href: "/actualites" },
];

export const HISTOIRE = {
  titre: "Notre Histoire",
  paragraphes: [
    "Depuis 1981, l'ASEGUIM symbolise l'excellence et la cohésion de la communauté estudiantine guinéenne au Maroc. Première association guinéenne officiellement reconnue par les autorités marocaines, elle est devenue un pilier essentiel pour plus de 1100 étudiants.",
    "ASEGUIM, organisation amicale, démocratique, apolitique et indépendante, rassemble ses membres autour d'un idéal commun visant à promouvoir l'excellence académique et favoriser l'épanouissement estudiantin. Elle façonne l'avenir étudiant.",
  ],
};

export const VISION = {
  titre: "Notre Vision",
  paragraphes: [
    "Au cœur de notre mission se trouve la conviction profonde que la jeunesse guinéenne est le moteur du changement. Nous cultivons un environnement où l'innovation, la collaboration et l'excellence académique se rencontrent pour façonner les leaders de demain.",
    "Notre engagement va au-delà du simple soutien académique. Nous construisons des ponts entre cultures, facilitons les échanges intellectuels et créons des opportunités qui transforment nos étudiants en acteurs du développement de la Guinée.",
  ],
};

export const DOMAINES = [
  {
    slug: "scientifique",
    nom: "Scientifique",
    image: "/aseguim/domains/scientifique.jpg",
    description:
      "Nous organisons des événements académiques et scientifiques stimulants et offrons un soutien continu pour promouvoir l'excellence et catalyser la réussite scolaire de nos membres.",
  },
  {
    slug: "social",
    nom: "Social",
    image: "/aseguim/domains/social.jpeg",
    description:
      "Notre engagement social se manifeste à travers l'accueil chaleureux et l'intégration des nouveaux étudiants, le renforcement des liens au sein de notre communauté.",
  },
  {
    slug: "culturel",
    nom: "Culturel",
    image: "/aseguim/domains/culturel.jpg",
    description:
      "Nous célébrons et promouvons la richesse de la culture guinéenne à travers une variété d'événements et d'activités tout au long de l'année.",
  },
  {
    slug: "sportif",
    nom: "Sportif",
    image: "/aseguim/domains/sportif.jpg",
    description:
      "Le sport occupe une place centrale dans nos activités. Nous organisons régulièrement des tournois sportifs variés et des activités physiques pour promouvoir le bien-être.",
  },
];

export const CHIFFRES = [
  { valeur: 1100, suffixe: "+", titre: "Étudiants membres", detail: "Siège social : Rabat" },
  { valeur: 830, suffixe: "", titre: "Étudiants boursiers", detail: "Boursiers cette année : 170" },
  { valeur: 43, suffixe: "", titre: "Années d'existence", detail: "Création : 1981" },
  { valeur: 15, suffixe: "", titre: "Bureaux régionaux", detail: "Ville scientifique : Tétouan" },
];

export const PARTENAIRES = [
  { nom: "AMCI", logo: "/aseguim/partners/amci.jpg" },
  { nom: "Alsaba Group", logo: "/aseguim/partners/alsaba.jpg" },
  { nom: "Office National du Tourisme", logo: "/aseguim/partners/ont.jpg" },
  { nom: "Université Mohammed VI Polytechnique", logo: "/aseguim/partners/um6p.jpg" },
  { nom: "Ahlam Rêves", logo: "/aseguim/partners/ahlam-reves.jpg" },
  { nom: "CESAM", logo: "/aseguim/partners/cesam.jpg" },
  { nom: "Ambassade de Guinée au Maroc", logo: "/aseguim/partners/ambassade-guinee.jpg" },
  { nom: "Conseil des Guinéens au Maroc", logo: "/aseguim/partners/conseil-guineens.jpg" },
  { nom: "SUP MTI", logo: "/aseguim/partners/sup-mti.jpg", recent: true },
];

const CL = "https://res.cloudinary.com/dlikl4ilr/image/upload";

export const BUREAU = [
  { nom: "Mohamed Sylla", role: "Secrétaire Général", image: `${CL}/v1750776323/SG_woyrbz.jpg` },
  { nom: "Alpha Mamadou Fofana", role: "Secrétaire Général Adjoint", image: `${CL}/v1750776473/Fofana_rr1tvp.jpg` },
  { nom: "Fatoumata Sidibé", role: "Chargée aux Affaires Scientifiques", image: `${CL}/v1750776981/Fatoumata_SIDIBE_smdacj.jpg` },
  { nom: "Mohamed Kébé", role: "Trésorier", image: `${CL}/v1750776666/K%C3%A9b%C3%A9_eegnsl.jpg` },
  { nom: "Fatoumata Bah", role: "Chargée à la Communication", image: `${CL}/v1750776564/Faty_w7sbey.jpg` },
  { nom: "Amadou Benthe Diallo", role: "Chargé aux Affaires Sportives", image: `${CL}/v1750776637/Benthe_rfallv.jpg` },
  { nom: "Issiaga Bangoura", role: "Chargé aux Affaires Sociales et Administratives", image: `${CL}/v1750776597/Issiaga_ecdgwg.jpg` },
  { nom: "Alhassane Kallé", role: "Chargé aux Affaires Culturelles", image: `${CL}/v1750796349/Kall%C3%A9_puutob.jpg` },
  { nom: "Yacouba Condé", role: "Commissaire au Compte", image: `${CL}/v1750777120/WhatsApp_Image_2025-06-22_%C3%A0_12.05.10_57c1fe22_vxyib3.jpg` },
];

export const CONSEIL_CONSULTATIF = [
  { nom: "Sékouba Doukouré", role: "Président du Conseil Consultatif", image: `${CL}/v1750794392/CC_pr%C3%A9si_e0zdbq.jpg` },
  { nom: "Aïssatou Lamarana Diallo", role: "Chargée aux Rapports des Activités", image: `${CL}/v1750778594/A%C3%AFcha_xef3fi.jpg` },
  { nom: "Elhadj Mamadou Lamarana Bah", role: "Chargé aux Rapports Financiers", image: `${CL}/v1750778701/El_hadj_sdonme.jpg` },
];

export const COMMISSION_SCIENTIFIQUE = {
  titre: "Commission Scientifique Nationale",
  mission:
    "Notre mission est d'organiser des activités, des événements et des formations destinées à renforcer les compétences scientifiques des membres de l'association.",
  objectif:
    "Créer un environnement propice à l'épanouissement intellectuel et au développement professionnel de nos étudiants.",
  initiatives: [
    {
      titre: "Webinaires de Formation",
      texte:
        "Nous organisons régulièrement des webinaires sur des sujets variés selon les besoins et attentes de nos étudiants membres sur notre page Facebook officielle.",
    },
    {
      titre: "Interventions d'Experts",
      texte:
        "Des experts chevronnés transmettent leur savoir sur divers sujets et thématiques lors de conférences et webinaires, apportant des perspectives enrichissantes.",
    },
    {
      titre: "Événements Continus",
      texte:
        "Organisation d'événements tout au long de l'année au niveau national et régional pour nourrir l'intérêt et les compétences de nos membres.",
    },
  ],
  journee: {
    titre: "Journée Scientifique & Culturelle Nationale",
    texte:
      "Un moment fort de notre calendrier, riche en activités scientifiques, débats inter-villes, concours d'éloquence et challenges entrepreneuriaux.",
  },
  equipe: [
    { nom: "André Loua", role: "Président de la Commission Scientifique Nationale" },
    { nom: "Marcel Fassou Haba", role: "Vice-Président" },
    { nom: "Mohamed Condé", role: "Secrétaire Général" },
    { nom: "Mamady Traoré", role: "Conseiller de la Chargée Scientifique" },
    { nom: "Boubacar Younoussa Diallo", role: "Communication et mobilisation" },
    { nom: "Martin Goumou", role: "Finances et rapports" },
    { nom: "Thierno Hamidou Wansan Bah", role: "Planification et activités" },
    { nom: "Nantenin Bérété", role: "Adjointe planification et activités" },
    { nom: "Moussa Konaté", role: "Logistique" },
    { nom: "François Zogbélémou", role: "Innovation et ateliers" },
    { nom: "Maurice Louba", role: "Adjoint innovation et ateliers" },
  ],
};

export const TALENTS = [
  { nom: "Bangoura Issiaga", categorie: "Académique", annee: "2023", detail: "Major de promotion — Sciences Économiques, Gestion et Commerce, Université Ibn Tofail de Kénitra (16,33)." },
  { nom: "Baldé Ibrahima M'Bemba", categorie: "Académique", annee: "2023", detail: "Major ex æquo — Sciences Économiques, Gestion et Commerce, Université Hassan II (16,33)." },
  { nom: "Doré Monsourou", categorie: "Académique", annee: "2023", detail: "Major de promotion — Sciences Juridiques, Université Chouaib Doukkali d'El Jadida (14,64)." },
  { nom: "Kourouma Lamine", categorie: "Académique", annee: "2023", detail: "Major de promotion — FST, Université Mohammed Premier d'Oujda (17,45)." },
  { nom: "Sylla Aboubacar", categorie: "Académique", annee: "2023", detail: "Major — Cycle ingénieur Réseaux et Télécoms, ENSA de Khouribga (17,12)." },
  { nom: "Diallo Abdoul Wahab", categorie: "Académique", annee: "2023", detail: "Major — Formation professionnelle, génie civil, EST de Laâyoune (17,66)." },
  { nom: "Mohamed Diabaté", categorie: "Scientifique", annee: "2023", detail: "Prix du meilleur débatteur national — Droit, FSJ Abdelmalek Essaâdi de Tétouan." },
  { nom: "François Mansaré", categorie: "Scientifique", annee: "2023", detail: "Prix national du concours d'éloquence — Sciences Mathématiques et Informatique." },
  { nom: "Yero Bhoye Sow", categorie: "Scientifique", annee: "2023", detail: "Prix entrepreneurial & projets innovants — Développement Web Full Stack, ISTA Maroc." },
  { nom: "Mariame Diarra", categorie: "Culturel", annee: "2024", detail: "Miss Guinée-Maroc 2024 — Université Ibn Tofail de Kénitra." },
];

export const IMPLICATION = [
  { icon: "UserPlus", titre: "Adhérer à l'ASEGUIM", texte: "Devenez membre officiel et rejoignez le plus grand réseau étudiant guinéen au Maroc.", href: "/adhesion" },
  { icon: "HandHeart", titre: "Faire un don", texte: "Soutenez les activités, le logement et l'alimentation de nos étudiants.", href: "/don" },
  { icon: "Handshake", titre: "Devenir partenaire", texte: "Associez votre organisation à notre mission d'excellence et d'épanouissement.", href: "/devenir-partenaire" },
  { icon: "Users", titre: "Rejoindre une commission", texte: "Mettez vos compétences au service de la communauté au sein de nos commissions.", href: "/commission-scientifique" },
];

export const CONTACT = {
  email: "aseguimcentralebec@gmail.com",
  telephone: "+212 656-755-225",
  telLink: "tel:+212656755225",
  adresse: "Campus Agdal, Rabat",
  mapLink: "https://maps.app.goo.gl/xLPc3qC7RGGbV5jRA",
};

export const RESEAUX = [
  { nom: "Facebook", href: "https://web.facebook.com/becaseguim/" },
  { nom: "Instagram", href: "https://www.instagram.com/ase.guimcentrale/" },
  { nom: "LinkedIn", href: "https://www.linkedin.com/company/aseguim-association-des-stagiaires-%C3%A9l%C3%A8ves-et-%C3%A9tudiants-guin%C3%A9ens-du-maroc/" },
  { nom: "WhatsApp", href: "https://whatsapp.com/channel/0029Vaadv9iJUM2ecUcAhR0i" },
];

export const FOOTER = {
  commissions: [
    { label: "Commission Scientifique", href: "/commission-scientifique" },
    { label: "Conseil Consultatif", href: "/conseil-consultatif" },
    { label: "Commission Sociale", href: "https://www.facebook.com/profile.php?id=61563995780769", external: true },
    { label: "Commission Sportive", href: "https://www.facebook.com/profile.php?id=61558578915123", external: true },
  ],
  liensUtiles: [
    { label: "Ambassade de Guinée au Maroc", href: "https://web.facebook.com/ambaguirabat/", external: true },
    { label: "SNABE", href: "https://snabe.gov.gn/", external: true },
    { label: "PayCard", href: "https://paycard.co/", external: true },
    { label: "AMCI", href: "https://www.amci.ma/", external: true },
  ],
  agir: [
    { label: "Adhérer", href: "/adhesion" },
    { label: "Faire un don", href: "/don" },
    { label: "Devenir partenaire", href: "/devenir-partenaire" },
    { label: "Contact", href: "/contact" },
  ],
};

export const BUREAUX_REGIONAUX = [
  { ville: "Tétouan", href: "https://web.facebook.com/profile.php?id=100067774127528" },
  { ville: "Tanger", href: "https://web.facebook.com/profile.php?id=100008675266800" },
  { ville: "Kénitra", href: "https://web.facebook.com/aseguim.kenitra.7" },
  { ville: "Mohammedia", href: "https://web.facebook.com/aseguim.mohammedia.9" },
  { ville: "Fès", href: "https://web.facebook.com/aseguim.fes" },
  { ville: "Settat", href: "https://web.facebook.com/profile.php?id=100090839149854" },
  { ville: "El Jadida", href: "https://www.facebook.com/profile.php?id=61559839994837" },
  { ville: "Marrakech", href: "https://web.facebook.com/AseguimDeMarrakech" },
  { ville: "Meknès", href: "https://web.facebook.com/aseguim.meknes.758" },
  { ville: "Casablanca", href: "https://www.facebook.com/profile.php?id=100081144679635" },
  { ville: "Béni Mellal", href: "https://web.facebook.com/profile.php?id=61560032616630" },
  { ville: "Agadir", href: "https://web.facebook.com/aseguim.agadir.35" },
  { ville: "Errachidia", href: "https://web.facebook.com/profile.php?id=100092546003951" },
  { ville: "Oujda", href: "https://web.facebook.com/aseguim.oujda.1" },
  { ville: "Aseguim Unie du Sud", href: "https://web.facebook.com/profile.php?id=61559726279213" },
];
