export type FeatureCard = {
  title: string;
  text: string;
  eyebrow?: string;
};

export type Partner = {
  name: string;
  shortName: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export const partners: Partner[] = [
  { name: "Ashinaga Foundation", shortName: "Ashinaga" },
  { name: "Ashinaga Africa Initiative", shortName: "AAI" },
  { name: "Universites partenaires", shortName: "Universites" },
  { name: "Reseau Alumni", shortName: "Alumni" },
  { name: "Mentors internationaux", shortName: "Mentors" },
  { name: "Organisations locales", shortName: "Partenaires" },
];

export const programs: FeatureCard[] = [
  {
    eyebrow: "Selection",
    title: "Identifier les futurs leaders",
    text: "Un accompagnement rigoureux pour reperer les jeunes orphelins a fort potentiel academique et social.",
  },
  {
    eyebrow: "Preparation",
    title: "Former avant le depart",
    text: "Du renforcement academique, du mentorat, de l'orientation et une preparation culturelle avant l'universite.",
  },
  {
    eyebrow: "Accompagnement",
    title: "Soutenir chaque parcours",
    text: "Un suivi academique, logistique et humain pendant les etudes, avec un reseau de mentors et d'alumni.",
  },
  {
    eyebrow: "Impact",
    title: "Payer au suivant",
    text: "Les Scholars construisent des projets pour contribuer au developpement de leurs communautes.",
  },
];

export const impactStats = [
  { value: "110 000+", label: "jeunes soutenus par Ashinaga dans le monde" },
  { value: "2015", label: "annee de creation du bureau Ashinaga Senegal" },
  { value: "55+", label: "annees d'experience au service de l'education" },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Direction regionale",
    role: "Coordination Ashinaga Senegal",
    bio: "Pilotage des programmes, relations institutionnelles et accompagnement des Scholars francophones.",
  },
  {
    name: "Equipe programmes",
    role: "Selection, formation et suivi",
    bio: "Preparation academique, mentorat, orientation et suivi individuel avant et pendant les etudes.",
  },
  {
    name: "Communaute Alumni",
    role: "Reseau et engagement",
    bio: "Animation du reseau, partage d'opportunites et valorisation des initiatives portees par les alumni.",
  },
];

export const resources = [
  "Guides de candidature et ressources pour les futurs Scholars",
  "Rapports d'activites et documents institutionnels",
  "Kits partenaires pour universites, mentors et organisations locales",
  "Articles, portraits et actualites du reseau Ashinaga Senegal",
];

export const defaultPosts = [
  {
    title: "Ouverture de la prochaine cohorte AAI",
    category: "Actualite",
    date: "2026",
    excerpt:
      "Les informations de candidature seront publiees ici pour permettre au staff de garder le public informe.",
  },
  {
    title: "Rencontre alumni a Dakar",
    category: "Communaute",
    date: "2026",
    excerpt:
      "Un espace pour valoriser les parcours, projets et engagements des Scholars et alumni.",
  },
  {
    title: "Nouveaux partenariats academiques",
    category: "Partenaires",
    date: "2026",
    excerpt:
      "Les collaborations avec les universites et organisations partenaires pourront etre gerees depuis Sanity.",
  },
];
