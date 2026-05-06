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

const localizedContent = {
  fr: {
    partners,
    programs,
    impactStats,
    teamMembers,
    resources,
    defaultPosts,
    pages: {
      about: {
        eyebrow: "A propos",
        title: "Ashinaga Senegal accompagne les talents francophones de l'Ashinaga Africa Initiative.",
        text:
          "Le bureau de Dakar soutient les Scholars dans leur preparation, leur orientation et leur engagement envers leurs communautes.",
        links: ["Notre histoire", "Notre equipe", "Ressources et partenaires"],
        positionEyebrow: "Positionnement",
        positionTitle: "Un bureau regional au service de jeunes leaders.",
        positionText:
          "Ashinaga Senegal s'inscrit dans un reseau international qui associe soutien financier, accompagnement academique, mentorat et developpement du leadership.",
        paragraphs: [
          "Le site met en avant les parcours, programmes, ressources et actualites avec une administration autonome via Sanity. Le staff peut mettre a jour les pages, publier des articles et gerer les contenus structurants sans intervention technique.",
          "L'approche editoriale respecte la charte Ashinaga: parler des Scholars avec dignite, insister sur leur potentiel et eviter tout langage condescendant.",
        ],
      },
      history: {
        eyebrow: "Notre histoire",
        title: "Une initiative nee d'une conviction: l'education peut rompre les cycles de vulnerabilite.",
        sectionEyebrow: "Reperes",
        sectionTitle: "De l'experience japonaise a l'engagement en Afrique francophone.",
        timeline: [
          ["1967", "Naissance du mouvement Ashinaga au Japon pour soutenir les orphelins d'accidents de la route."],
          ["2001", "Ouverture des activites internationales avec un premier bureau en Ouganda."],
          ["2014", "Lancement officiel de l'Ashinaga Africa Initiative pour former de futurs leaders."],
          ["2015", "Creation d'Ashinaga Senegal, bureau regional pour les Scholars francophones."],
        ],
      },
      team: {
        eyebrow: "Notre equipe",
        title: "Une equipe proche des Scholars, des familles, des mentors et des partenaires.",
        sectionEyebrow: "Organisation",
        sectionTitle: "Des roles clairs pour un accompagnement continu.",
      },
      resources: {
        eyebrow: "Ressources et partenaires",
        title: "Un espace pour centraliser documents, opportunites et collaborations.",
        sectionEyebrow: "Ressources",
        sectionTitle: "Des contenus utiles, faciles a actualiser.",
      },
      programs: {
        eyebrow: "Nos programmes",
        title: "Selection, preparation, accompagnement et engagement communautaire.",
        sectionEyebrow: "Cycle d'accompagnement",
        sectionTitle: "Une experience construite autour de la confiance et du leadership.",
      },
      impact: {
        eyebrow: "Notre impact",
        title: "Mesurer l'impact, c'est raconter des trajectoires de resilience et d'action.",
        sectionEyebrow: "Chiffres cles",
        sectionTitle: "Une mission internationale portee localement.",
      },
      news: {
        eyebrow: "Actualites/blog",
        title: "Articles, annonces, evenements et portraits publies par le staff.",
        sectionEyebrow: "Publications",
        sectionTitle: "Dernieres nouvelles",
      },
      donate: {
        eyebrow: "Faire un don",
        title: "Votre soutien aide a construire des parcours d'education et de leadership.",
        text:
          "Cette page pourra etre connectee a une solution de don en ligne ou a un lien externe gere par Ashinaga Senegal.",
        button: "Configurer le lien de don",
      },
    },
  },
  en: {
    partners,
    programs: [
      {
        eyebrow: "Selection",
        title: "Identifying future leaders",
        text: "A rigorous process to identify orphaned young people with strong academic and social potential.",
      },
      {
        eyebrow: "Preparation",
        title: "Training before departure",
        text: "Academic strengthening, mentoring, guidance, and cultural preparation before university.",
      },
      {
        eyebrow: "Support",
        title: "Supporting every journey",
        text: "Academic, logistical, and human support during studies, with a network of mentors and alumni.",
      },
      {
        eyebrow: "Impact",
        title: "Paying it forward",
        text: "Scholars develop projects that contribute to their communities.",
      },
    ],
    impactStats: [
      { value: "110,000+", label: "young people supported by Ashinaga worldwide" },
      { value: "2015", label: "year Ashinaga Senegal was founded" },
      { value: "55+", label: "years of experience supporting education" },
    ],
    teamMembers: [
      {
        name: "Regional leadership",
        role: "Ashinaga Senegal coordination",
        bio: "Program leadership, institutional relations, and support for francophone Scholars.",
      },
      {
        name: "Programs team",
        role: "Selection, training, and follow-up",
        bio: "Academic preparation, mentoring, guidance, and individual support before and during studies.",
      },
      {
        name: "Alumni community",
        role: "Network and engagement",
        bio: "Network animation, opportunity sharing, and visibility for alumni-led initiatives.",
      },
    ],
    resources: [
      "Application guides and resources for future Scholars",
      "Activity reports and institutional documents",
      "Partner kits for universities, mentors, and local organizations",
      "Articles, profiles, and updates from the Ashinaga Senegal network",
    ],
    defaultPosts: [
      {
        title: "Opening of the next AAI cohort",
        category: "News",
        date: "2026",
        excerpt: "Application information will be published here so staff can keep the public informed.",
      },
      {
        title: "Alumni meeting in Dakar",
        category: "Community",
        date: "2026",
        excerpt: "A space to highlight the journeys, projects, and commitments of Scholars and alumni.",
      },
      {
        title: "New academic partnerships",
        category: "Partners",
        date: "2026",
        excerpt: "University and partner collaborations can be managed directly from Sanity.",
      },
    ],
    pages: {
      about: {
        eyebrow: "About",
        title: "Ashinaga Senegal supports francophone talents of the Ashinaga Africa Initiative.",
        text:
          "The Dakar office supports Scholars through preparation, guidance, and engagement with their communities.",
        links: ["Our story", "Our team", "Resources and partners"],
        positionEyebrow: "Positioning",
        positionTitle: "A regional office serving young leaders.",
        positionText:
          "Ashinaga Senegal is part of an international network combining financial support, academic guidance, mentoring, and leadership development.",
        paragraphs: [
          "The website highlights pathways, programs, resources, and news with autonomous administration through Sanity. Staff can update pages, publish articles, and manage key content without technical intervention.",
          "The editorial approach follows Ashinaga's brand guidance: speak about Scholars with dignity, emphasize their potential, and avoid condescending language.",
        ],
      },
      history: {
        eyebrow: "Our story",
        title: "An initiative rooted in one conviction: education can break cycles of vulnerability.",
        sectionEyebrow: "Milestones",
        sectionTitle: "From the Japanese experience to engagement in francophone Africa.",
        timeline: [
          ["1967", "Birth of the Ashinaga movement in Japan to support traffic accident orphans."],
          ["2001", "Launch of international activities with the first office in Uganda."],
          ["2014", "Official launch of the Ashinaga Africa Initiative to develop future leaders."],
          ["2015", "Creation of Ashinaga Senegal, the regional office for francophone Scholars."],
        ],
      },
      team: {
        eyebrow: "Our team",
        title: "A team close to Scholars, families, mentors, and partners.",
        sectionEyebrow: "Organization",
        sectionTitle: "Clear roles for continuous support.",
      },
      resources: {
        eyebrow: "Resources and partners",
        title: "A space to centralize documents, opportunities, and collaborations.",
        sectionEyebrow: "Resources",
        sectionTitle: "Useful content that is easy to update.",
      },
      programs: {
        eyebrow: "Programs",
        title: "Selection, preparation, support, and community engagement.",
        sectionEyebrow: "Support cycle",
        sectionTitle: "An experience built around trust and leadership.",
      },
      impact: {
        eyebrow: "Impact",
        title: "Measuring impact means telling stories of resilience and action.",
        sectionEyebrow: "Key figures",
        sectionTitle: "An international mission with local roots.",
      },
      news: {
        eyebrow: "News/blog",
        title: "Articles, announcements, events, and profiles published by staff.",
        sectionEyebrow: "Publications",
        sectionTitle: "Latest updates",
      },
      donate: {
        eyebrow: "Donate",
        title: "Your support helps build pathways to education and leadership.",
        text:
          "This page can be connected to an online donation solution or an external link managed by Ashinaga Senegal.",
        button: "Configure donation link",
      },
    },
  },
  pt: {
    partners,
    programs: [
      {
        eyebrow: "Selecao",
        title: "Identificar futuros lideres",
        text: "Um processo rigoroso para identificar jovens orfaos com forte potencial academico e social.",
      },
      {
        eyebrow: "Preparacao",
        title: "Formar antes da partida",
        text: "Reforco academico, mentoria, orientacao e preparacao cultural antes da universidade.",
      },
      {
        eyebrow: "Acompanhamento",
        title: "Apoiar cada percurso",
        text: "Apoio academico, logistico e humano durante os estudos, com uma rede de mentores e alumni.",
      },
      {
        eyebrow: "Impacto",
        title: "Retribuir o apoio",
        text: "Scholars desenvolvem projetos que contribuem para suas comunidades.",
      },
    ],
    impactStats: [
      { value: "110.000+", label: "jovens apoiados pela Ashinaga no mundo" },
      { value: "2015", label: "ano de criacao da Ashinaga Senegal" },
      { value: "55+", label: "anos de experiencia apoiando a educacao" },
    ],
    teamMembers: [
      {
        name: "Direcao regional",
        role: "Coordenacao Ashinaga Senegal",
        bio: "Gestao de programas, relacoes institucionais e apoio aos Scholars francofonos.",
      },
      {
        name: "Equipe de programas",
        role: "Selecao, formacao e acompanhamento",
        bio: "Preparacao academica, mentoria, orientacao e acompanhamento individual antes e durante os estudos.",
      },
      {
        name: "Comunidade alumni",
        role: "Rede e engajamento",
        bio: "Animacao da rede, partilha de oportunidades e valorizacao de iniciativas lideradas por alumni.",
      },
    ],
    resources: [
      "Guias de candidatura e recursos para futuros Scholars",
      "Relatorios de atividades e documentos institucionais",
      "Kits para universidades, mentores e organizacoes locais parceiras",
      "Artigos, perfis e noticias da rede Ashinaga Senegal",
    ],
    defaultPosts: [
      {
        title: "Abertura da proxima coorte AAI",
        category: "Noticias",
        date: "2026",
        excerpt: "As informacoes de candidatura serao publicadas aqui para manter o publico informado.",
      },
      {
        title: "Encontro alumni em Dakar",
        category: "Comunidade",
        date: "2026",
        excerpt: "Um espaco para valorizar percursos, projetos e compromissos de Scholars e alumni.",
      },
      {
        title: "Novas parcerias academicas",
        category: "Parceiros",
        date: "2026",
        excerpt: "Colaboracoes com universidades e parceiros podem ser geridas diretamente no Sanity.",
      },
    ],
    pages: {
      about: {
        eyebrow: "Sobre",
        title: "Ashinaga Senegal acompanha talentos francofonos da Ashinaga Africa Initiative.",
        text:
          "O escritorio de Dakar apoia Scholars em sua preparacao, orientacao e compromisso com suas comunidades.",
        links: ["Nossa historia", "Nossa equipe", "Recursos e parceiros"],
        positionEyebrow: "Posicionamento",
        positionTitle: "Um escritorio regional a servico de jovens lideres.",
        positionText:
          "Ashinaga Senegal faz parte de uma rede internacional que combina apoio financeiro, acompanhamento academico, mentoria e desenvolvimento de lideranca.",
        paragraphs: [
          "O site destaca percursos, programas, recursos e noticias com administracao autonoma via Sanity. A equipe pode atualizar paginas, publicar artigos e gerir conteudos sem intervencao tecnica.",
          "A abordagem editorial respeita a marca Ashinaga: falar dos Scholars com dignidade, destacar seu potencial e evitar linguagem condescendente.",
        ],
      },
      history: {
        eyebrow: "Nossa historia",
        title: "Uma iniciativa nascida de uma conviccao: a educacao pode romper ciclos de vulnerabilidade.",
        sectionEyebrow: "Marcos",
        sectionTitle: "Da experiencia japonesa ao compromisso com a Africa francofona.",
        timeline: [
          ["1967", "Nascimento do movimento Ashinaga no Japao para apoiar orfaos de acidentes de transito."],
          ["2001", "Inicio das atividades internacionais com o primeiro escritorio em Uganda."],
          ["2014", "Lancamento oficial da Ashinaga Africa Initiative para formar futuros lideres."],
          ["2015", "Criacao da Ashinaga Senegal, escritorio regional para Scholars francofonos."],
        ],
      },
      team: {
        eyebrow: "Nossa equipe",
        title: "Uma equipe proxima dos Scholars, familias, mentores e parceiros.",
        sectionEyebrow: "Organizacao",
        sectionTitle: "Papeis claros para um acompanhamento continuo.",
      },
      resources: {
        eyebrow: "Recursos e parceiros",
        title: "Um espaco para centralizar documentos, oportunidades e colaboracoes.",
        sectionEyebrow: "Recursos",
        sectionTitle: "Conteudos uteis e faceis de atualizar.",
      },
      programs: {
        eyebrow: "Programas",
        title: "Selecao, preparacao, acompanhamento e engajamento comunitario.",
        sectionEyebrow: "Ciclo de apoio",
        sectionTitle: "Uma experiencia construida em torno da confianca e lideranca.",
      },
      impact: {
        eyebrow: "Impacto",
        title: "Medir impacto e contar trajetorias de resiliencia e acao.",
        sectionEyebrow: "Numeros-chave",
        sectionTitle: "Uma missao internacional com raizes locais.",
      },
      news: {
        eyebrow: "Noticias/blog",
        title: "Artigos, anuncios, eventos e perfis publicados pela equipe.",
        sectionEyebrow: "Publicacoes",
        sectionTitle: "Ultimas noticias",
      },
      donate: {
        eyebrow: "Doar",
        title: "Seu apoio ajuda a construir caminhos de educacao e lideranca.",
        text:
          "Esta pagina pode ser conectada a uma solucao de doacao online ou a um link externo gerido pela Ashinaga Senegal.",
        button: "Configurar link de doacao",
      },
    },
  },
};

export function getLocalizedContent(locale: Locale) {
  return localizedContent[locale] ?? localizedContent.fr;
}
import type { Locale } from "@/lib/i18n";
