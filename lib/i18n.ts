export const locales = ["fr", "en", "pt"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split("/").filter(Boolean)[0];
  return segment && isLocale(segment) ? segment : defaultLocale;
}

export function stripLocale(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] && isLocale(parts[0])) {
    return `/${parts.slice(1).join("/")}` || "/";
  }
  return pathname || "/";
}

export function localizePath(path: string, locale: Locale) {
  if (locale === defaultLocale) {
    return path;
  }
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

export const languageNames: Record<Locale, string> = {
  fr: "FR",
  en: "EN",
  pt: "PT",
};

export const dictionaries = {
  fr: {
    nav: {
      home: "Accueil",
      about: "A propos",
      history: "Notre histoire",
      team: "Notre equipe",
      resources: "Ressources et partenaires",
      programs: "Nos programmes",
      impact: "Notre impact",
      news: "Actualites/blog",
      donate: "Faire un don",
      donateShort: "Don",
      aria: "Navigation principale",
    },
    footer: {
      kicker: "Ashinaga Senegal",
      title: "Soutien et education pour les etudiants orphelins a travers le monde.",
      studio: "Espace edition",
      news: "Actualites",
      donate: "Faire un don",
    },
    home: {
      heroEyebrow: "Ashinaga Senegal",
      heroTitle: "Education pour tous",
      heroText:
        "Nous accompagnons de jeunes orphelins vers une education de qualite, un reseau solide et la confiance necessaire pour devenir des leaders de changement.",
      heroPrimary: "Decouvrir nos programmes",
      heroSecondary: "Connaitre Ashinaga",
      partnersAria: "Partenaires",
      missionEyebrow: "Notre mission",
      missionTitle: "Ouvrir les portes de l'enseignement superieur et du leadership.",
      missionText:
        "Ashinaga Senegal est le bureau regional francophone de l'Ashinaga Africa Initiative. Le site est concu pour etre administre par le staff depuis Sanity Studio.",
      studioLink: "Gerer le contenu dans Sanity Studio",
      ethos:
        "Un coeur chaleureux, un esprit ouvert, une attitude proactive et une perspective internationale.",
      journeyEyebrow: "Parcours",
      journeyTitle: "Un accompagnement complet, du potentiel a l'impact.",
      impactEyebrow: "Impact",
      impactTitle: "Une histoire mondiale, un ancrage senegalais.",
      impactText:
        "Le langage du site met l'accent sur le potentiel, la dignite et l'engagement des Scholars.",
      newsEyebrow: "Actualites",
      newsTitle: "A publier directement par l'equipe.",
      contribute: "Contribuer",
      donationTitle: "Chaque soutien peut devenir une chaine d'opportunites.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      history: "Our story",
      team: "Our team",
      resources: "Resources and partners",
      programs: "Programs",
      impact: "Impact",
      news: "News/blog",
      donate: "Donate",
      donateShort: "Give",
      aria: "Main navigation",
    },
    footer: {
      kicker: "Ashinaga Senegal",
      title: "Education and support for orphaned students worldwide.",
      studio: "Editorial space",
      news: "News",
      donate: "Donate",
    },
    home: {
      heroEyebrow: "Ashinaga Senegal",
      heroTitle: "Education for all",
      heroText:
        "We support orphaned young people with quality education, a strong network, and the confidence to become leaders of change.",
      heroPrimary: "Explore programs",
      heroSecondary: "Discover Ashinaga",
      partnersAria: "Partners",
      missionEyebrow: "Our mission",
      missionTitle: "Opening access to higher education and leadership.",
      missionText:
        "Ashinaga Senegal is the francophone regional office of the Ashinaga Africa Initiative. The website is built so staff can manage content through Sanity Studio.",
      studioLink: "Manage content in Sanity Studio",
      ethos:
        "A warm heart, an open mind, a proactive attitude, and an international outlook.",
      journeyEyebrow: "Journey",
      journeyTitle: "Complete support, from potential to impact.",
      impactEyebrow: "Impact",
      impactTitle: "A global history with Senegalese roots.",
      impactText:
        "The site language focuses on potential, dignity, and the commitment of Scholars.",
      newsEyebrow: "News",
      newsTitle: "Published directly by the team.",
      contribute: "Contribute",
      donationTitle: "Every gift can become a chain of opportunity.",
    },
  },
  pt: {
    nav: {
      home: "Inicio",
      about: "Sobre",
      history: "Nossa historia",
      team: "Nossa equipe",
      resources: "Recursos e parceiros",
      programs: "Programas",
      impact: "Impacto",
      news: "Noticias/blog",
      donate: "Doar",
      donateShort: "Doar",
      aria: "Navegacao principal",
    },
    footer: {
      kicker: "Ashinaga Senegal",
      title: "Educacao e apoio para estudantes orfaos em todo o mundo.",
      studio: "Espaco editorial",
      news: "Noticias",
      donate: "Doar",
    },
    home: {
      heroEyebrow: "Ashinaga Senegal",
      heroTitle: "Educacao para todos",
      heroText:
        "Apoiamos jovens orfaos com educacao de qualidade, uma rede solida e a confianca necessaria para se tornarem lideres de mudanca.",
      heroPrimary: "Ver programas",
      heroSecondary: "Conhecer Ashinaga",
      partnersAria: "Parceiros",
      missionEyebrow: "Nossa missao",
      missionTitle: "Abrir acesso ao ensino superior e a lideranca.",
      missionText:
        "Ashinaga Senegal e o escritorio regional francofono da Ashinaga Africa Initiative. O site foi criado para que a equipe gerencie o conteudo pelo Sanity Studio.",
      studioLink: "Gerenciar conteudo no Sanity Studio",
      ethos:
        "Um coracao caloroso, uma mente aberta, uma atitude proativa e uma perspectiva internacional.",
      journeyEyebrow: "Percurso",
      journeyTitle: "Apoio completo, do potencial ao impacto.",
      impactEyebrow: "Impacto",
      impactTitle: "Uma historia global com raizes senegalesas.",
      impactText:
        "A linguagem do site valoriza o potencial, a dignidade e o compromisso dos Scholars.",
      newsEyebrow: "Noticias",
      newsTitle: "Publicado diretamente pela equipe.",
      contribute: "Contribuir",
      donationTitle: "Cada apoio pode se tornar uma cadeia de oportunidades.",
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
