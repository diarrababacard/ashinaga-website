import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

// Cette fonction va chercher les données d'Ashinaga dans Sanity
async function getHomePage() {
  const query = `*[_type == "page" && slug.current == "accueil"][0]`;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const page = await getHomePage();

  if (!page) return <div className="p-20 text-center">En cours de chargement...</div>;

  return (
    <main className="min-h-screen bg-slate-50">
      {/* SECTION HERO : L'aspect original et épuré */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-ashinaga-dark">
        {page.heroImage && (
          <Image
            src={urlFor(page.heroImage).url()}
            alt={page.title}
            fill
            className="object-cover opacity-60"
            priority
          />
        )}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6">
            {page.title}
          </h1>
          <div className="w-24 h-1 bg-ashinaga-red mx-auto"></div>
        </div>
      </section>

      {/* SECTION CONTENU : Typographie soignée */}
      <section className="max-w-3xl mx-auto py-24 px-6">
        <article className="prose prose-lg prose-slate lg:prose-xl mx-auto">
          {/* Ici nous afficherons le corps du texte plus tard avec PortableText */}
          <p className="text-xl leading-relaxed text-slate-700 italic">
            Bienvenue sur le nouveau portail institutionnel Ashinaga Sénégal.
          </p>
        </article>
      </section>
    </main>
  );
}