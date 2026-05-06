import { SectionHeading } from "@/components/section-heading";
import { defaultPosts } from "@/lib/content";
import { getPosts } from "@/lib/sanity-queries";

export const revalidate = 60;

export default async function NewsPage() {
  const posts = await getPosts(12).catch(() => []);
  const displayedPosts = posts?.length ? posts : defaultPosts;

  return (
    <main>
      <section className="sub-hero news-hero">
        <div>
          <p className="eyebrow">Actualites/blog</p>
          <h1>Articles, annonces, evenements et portraits publies par le staff.</h1>
        </div>
      </section>
      <section className="news-section page-band">
        <SectionHeading eyebrow="Publications" title="Dernieres nouvelles" />
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
    </main>
  );
}
