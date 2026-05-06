import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import {
  defaultPosts,
  impactStats,
  partners,
  programs,
} from "@/lib/content";
import { getPosts, getSanityPrograms, getSiteSettings } from "@/lib/sanity-queries";

export const revalidate = 60;

export default async function Home() {
  const [settings, posts, sanityPrograms] = await Promise.all([
    getSiteSettings().catch(() => null),
    getPosts(3).catch(() => []),
    getSanityPrograms().catch(() => []),
  ]);

  const partnerNames =
    settings?.partnerNames?.length > 0
      ? settings.partnerNames.map((name: string) => ({ name, shortName: name }))
      : partners;
  const displayedPrograms = sanityPrograms?.length ? sanityPrograms : programs;
  const displayedPosts = posts?.length ? posts : defaultPosts;

  return (
    <main>
      <section className="hero-section">
        <div className="hero-video-fallback" />
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          poster="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1800&q=80"
        >
          <source src={settings?.heroVideoUrl || "/videos/ashinaga-hero.mp4"} type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="fabric-ribbon hero-ribbon" aria-hidden="true" />

        <div className="hero-content">
          <p className="eyebrow">Ashinaga Senegal</p>
          <h1>Education pour tous</h1>
          <p>
            Nous accompagnons de jeunes orphelins vers une education de qualite,
            un reseau solide et la confiance necessaire pour devenir des leaders
            de changement.
          </p>
          <div className="hero-actions">
            <Link href="/nos-programmes" className="primary-button">
              Decouvrir nos programmes
            </Link>
            <Link href="/a-propos" className="secondary-button">
              Connaitre Ashinaga
            </Link>
          </div>
        </div>
      </section>

      <section className="partner-strip" aria-label="Partenaires">
        <div className="marquee">
          {[...partnerNames, ...partnerNames].map((partner, index) => (
            <span key={`${partner.name}-${index}`}>{partner.shortName}</span>
          ))}
        </div>
      </section>

      <section className="intro-grid page-band">
        <div>
          <SectionHeading
            eyebrow="Notre mission"
            title="Ouvrir les portes de l'enseignement superieur et du leadership."
            text="Ashinaga Senegal est le bureau regional francophone de l'Ashinaga Africa Initiative. Le site est concu pour etre administre par le staff depuis Sanity Studio."
          />
          <Link href="/studio" className="inline-link">
            Gerer le contenu dans Sanity Studio
          </Link>
        </div>
        <div className="mission-panel">
          <span>Ethos</span>
          <p>Un coeur chaleureux, un esprit ouvert, une attitude proactive et une perspective internationale.</p>
        </div>
      </section>

      <section className="program-section">
        <SectionHeading
          eyebrow="Parcours"
          title="Un accompagnement complet, du potentiel a l'impact."
        />
        <div className="card-grid">
          {displayedPrograms.map((program: any) => (
            <article className="feature-card" key={program.title}>
              <p>{program.eyebrow || program.theme || "Programme"}</p>
              <h3>{program.title}</h3>
              <span>{program.text || program.excerpt}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="impact-band">
        <SectionHeading
          eyebrow="Impact"
          title="Une histoire mondiale, un ancrage senegalais."
          text="Le langage du site met l'accent sur le potentiel, la dignite et l'engagement des Scholars."
        />
        <div className="stats-row">
          {impactStats.map((stat) => (
            <div key={stat.value}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="news-section page-band">
        <SectionHeading eyebrow="Actualites" title="A publier directement par l'equipe." />
        <div className="news-grid">
          {displayedPosts.map((post: any) => (
            <article className="news-card" key={post.title}>
              <div>
                <span>{post.category || "Actualite"}</span>
                <time>{post.publishedAt ? new Date(post.publishedAt).getFullYear() : post.date}</time>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="donation-callout">
        <div className="fabric-ribbon" aria-hidden="true" />
        <div>
          <p className="eyebrow">Contribuer</p>
          <h2>Chaque soutien peut devenir une chaine d'opportunites.</h2>
        </div>
        <Link href={settings?.donationUrl || "/faire-un-don"} className="primary-button dark">
          Faire un don
        </Link>
      </section>
    </main>
  );
}
