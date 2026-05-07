import Link from "next/link";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { SectionHeading } from "@/components/section-heading";
import { getLocalizedContent } from "@/lib/content";
import { getDictionary, localizePath, type Locale } from "@/lib/i18n";
import { getPosts, getSanityPrograms, getSiteSettings } from "@/lib/sanity-queries";

export async function HomePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const content = getLocalizedContent(locale);
  const [settings, posts, sanityPrograms] = await Promise.all([
    getSiteSettings().catch(() => null),
    getPosts(locale, 3).catch(() => []),
    getSanityPrograms(locale).catch(() => []),
  ]);

  const partnerNames =
    settings?.partnerNames?.length > 0
      ? settings.partnerNames.map((name: string) => ({ name, shortName: name }))
      : content.partners;
  const displayedPrograms = sanityPrograms?.length ? sanityPrograms : content.programs;
  const displayedPosts = posts?.length ? posts : content.defaultPosts;

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

        <div className="hero-content hero-animate">
          <p className="eyebrow">{dict.home.heroEyebrow}</p>
          <h1>{dict.home.heroTitle}</h1>
          <p>{dict.home.heroText}</p>
          <div className="hero-actions">
            <Link href={localizePath("/nos-programmes", locale)} className="primary-button">
              {dict.home.heroPrimary}
            </Link>
            <Link href={localizePath("/a-propos", locale)} className="secondary-button">
              {dict.home.heroSecondary}
            </Link>
          </div>
        </div>
      </section>

      <section className="partner-strip" aria-label={dict.home.partnersAria}>
        <div className="marquee">
          {[...partnerNames, ...partnerNames].map((partner, index) => (
            <span key={`${partner.name}-${index}`}>{partner.shortName}</span>
          ))}
        </div>
      </section>

      <section className="intro-grid page-band">
        <RevealOnScroll>
          <div className="intro-grid-inner">
            <div>
              <SectionHeading
                eyebrow={dict.home.missionEyebrow}
                title={dict.home.missionTitle}
                text={dict.home.missionText}
              />
              <Link href="/studio" className="inline-link">
                {dict.home.studioLink}
              </Link>
            </div>
            <div className="mission-panel">
              <span>Ethos</span>
              <p>{dict.home.ethos}</p>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="program-section">
        <RevealOnScroll>
          <SectionHeading eyebrow={dict.home.journeyEyebrow} title={dict.home.journeyTitle} />
          <div className="card-grid">
          {displayedPrograms.map((program: any) => (
            <article className="feature-card" key={program.title}>
              <p>{program.eyebrow || program.theme || "Programme"}</p>
              <h3>{program.title}</h3>
              <span>{program.text || program.excerpt}</span>
            </article>
          ))}
          </div>
        </RevealOnScroll>
      </section>

      <section className="impact-band">
        <RevealOnScroll>
          <SectionHeading
            eyebrow={dict.home.impactEyebrow}
            title={dict.home.impactTitle}
            text={dict.home.impactText}
          />
          <Stats locale={locale} />
        </RevealOnScroll>
      </section>

      <section className="news-section page-band">
        <RevealOnScroll>
          <SectionHeading eyebrow={dict.home.newsEyebrow} title={dict.home.newsTitle} />
          <NewsCards posts={displayedPosts} />
        </RevealOnScroll>
      </section>

      <section className="donation-callout">
        <div className="fabric-ribbon" aria-hidden="true" />
        <RevealOnScroll className="donation-callout-inner">
          <div>
            <p className="eyebrow">{dict.home.contribute}</p>
            <h2>{dict.home.donationTitle}</h2>
          </div>
          <Link
            href={settings?.donationUrl || localizePath("/faire-un-don", locale)}
            className="support-button"
          >
            <svg className="donate-link__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            {dict.nav.donate}
          </Link>
        </RevealOnScroll>
      </section>
    </main>
  );
}

export function AboutPage({ locale }: { locale: Locale }) {
  const content = getLocalizedContent(locale);
  const page = content.pages.about;

  return (
    <main>
      <section className="sub-hero about-hero">
        <div>
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p>{page.text}</p>
        </div>
      </section>

      <section className="about-links page-band">
        <Link href={localizePath("/a-propos/notre-histoire", locale)}>{page.links[0]}</Link>
        <Link href={localizePath("/a-propos/notre-equipe", locale)}>{page.links[1]}</Link>
        <Link href={localizePath("/a-propos/ressources-partenaires", locale)}>{page.links[2]}</Link>
      </section>

      <section className="two-column page-band">
        <SectionHeading
          eyebrow={page.positionEyebrow}
          title={page.positionTitle}
          text={page.positionText}
        />
        <div className="text-block">
          {page.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="impact-band">
        <Stats locale={locale} />
      </section>
    </main>
  );
}

export function HistoryPage({ locale }: { locale: Locale }) {
  const page = getLocalizedContent(locale).pages.history;

  return (
    <main>
      <section className="sub-hero history-hero">
        <div>
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
        </div>
      </section>
      <section className="timeline page-band">
        <SectionHeading eyebrow={page.sectionEyebrow} title={page.sectionTitle} />
        {page.timeline.map(([year, text]) => (
          <article key={year}>
            <strong>{year}</strong>
            <p>{text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export function TeamPage({ locale }: { locale: Locale }) {
  const content = getLocalizedContent(locale);
  const page = content.pages.team;

  return (
    <main>
      <section className="sub-hero team-hero">
        <div>
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
        </div>
      </section>
      <section className="program-section">
        <SectionHeading eyebrow={page.sectionEyebrow} title={page.sectionTitle} />
        <div className="card-grid">
          {content.teamMembers.map((member) => (
            <article className="feature-card portrait-card" key={member.name}>
              <div className="portrait-mark">{member.name.charAt(0)}</div>
              <p>{member.role}</p>
              <h3>{member.name}</h3>
              <span>{member.bio}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export function ResourcesPartnersPage({ locale }: { locale: Locale }) {
  const content = getLocalizedContent(locale);
  const page = content.pages.resources;

  return (
    <main>
      <section className="sub-hero resources-hero">
        <div>
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
        </div>
      </section>
      <section className="two-column page-band">
        <SectionHeading eyebrow={page.sectionEyebrow} title={page.sectionTitle} />
        <ul className="resource-list">
          {content.resources.map((resource) => (
            <li key={resource}>{resource}</li>
          ))}
        </ul>
      </section>
      <section className="partner-wall">
        {content.partners.map((partner) => (
          <span key={partner.name}>{partner.shortName}</span>
        ))}
      </section>
    </main>
  );
}

export function ProgramsPage({ locale }: { locale: Locale }) {
  const content = getLocalizedContent(locale);
  const page = content.pages.programs;

  return (
    <main>
      <section className="sub-hero programs-hero">
        <div>
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
        </div>
      </section>
      <section className="program-section">
        <SectionHeading eyebrow={page.sectionEyebrow} title={page.sectionTitle} />
        <div className="card-grid">
          {content.programs.map((program) => (
            <article className="feature-card" key={program.title}>
              <p>{program.eyebrow}</p>
              <h3>{program.title}</h3>
              <span>{program.text}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export function ImpactPage({ locale }: { locale: Locale }) {
  const page = getLocalizedContent(locale).pages.impact;

  return (
    <main>
      <section className="sub-hero impact-hero">
        <div>
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
        </div>
      </section>
      <section className="impact-band">
        <SectionHeading eyebrow={page.sectionEyebrow} title={page.sectionTitle} />
        <Stats locale={locale} />
      </section>
    </main>
  );
}

export async function NewsPage({ locale }: { locale: Locale }) {
  const content = getLocalizedContent(locale);
  const page = content.pages.news;
  const posts = await getPosts(locale, 12).catch(() => []);
  const displayedPosts = posts?.length ? posts : content.defaultPosts;

  return (
    <main>
      <section className="sub-hero news-hero">
        <div>
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
        </div>
      </section>
      <section className="news-section page-band">
        <SectionHeading eyebrow={page.sectionEyebrow} title={page.sectionTitle} />
        <NewsCards posts={displayedPosts} />
      </section>
    </main>
  );
}

export function DonatePage({ locale }: { locale: Locale }) {
  const page = getLocalizedContent(locale).pages.donate;

  return (
    <main>
      <section className="sub-hero donate-hero">
        <div>
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p>{page.text}</p>
          <Link href="/studio" className="primary-button">
            {page.button}
          </Link>
        </div>
      </section>
    </main>
  );
}

function Stats({ locale }: { locale: Locale }) {
  return (
    <div className="stats-row">
      {getLocalizedContent(locale).impactStats.map((stat) => (
        <div key={stat.value}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

function NewsCards({ posts }: { posts: any[] }) {
  return (
    <div className="news-grid">
      {posts.map((post: any) => (
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
  );
}
