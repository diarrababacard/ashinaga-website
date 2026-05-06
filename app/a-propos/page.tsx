import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { impactStats } from "@/lib/content";

export default function AboutPage() {
  return (
    <main>
      <section className="sub-hero about-hero">
        <div>
          <p className="eyebrow">A propos</p>
          <h1>Ashinaga Senegal accompagne les talents francophones de l'Ashinaga Africa Initiative.</h1>
          <p>
            Le bureau de Dakar soutient les Scholars dans leur preparation, leur
            orientation et leur engagement envers leurs communautes.
          </p>
        </div>
      </section>

      <section className="about-links page-band">
        <Link href="/a-propos/notre-histoire">Notre histoire</Link>
        <Link href="/a-propos/notre-equipe">Notre equipe</Link>
        <Link href="/a-propos/ressources-partenaires">Ressources et partenaires</Link>
      </section>

      <section className="two-column page-band">
        <SectionHeading
          eyebrow="Positionnement"
          title="Un bureau regional au service de jeunes leaders."
          text="Ashinaga Senegal s'inscrit dans un reseau international qui associe soutien financier, accompagnement academique, mentorat et developpement du leadership."
        />
        <div className="text-block">
          <p>
            Le site met en avant les parcours, programmes, ressources et actualites
            avec une administration autonome via Sanity. Le staff peut mettre a jour
            les pages, publier des articles et gerer les contenus structurants sans
            intervention technique.
          </p>
          <p>
            L'approche editoriale respecte la charte Ashinaga: parler des Scholars
            avec dignite, insister sur leur potentiel et eviter tout langage
            condescendant.
          </p>
        </div>
      </section>

      <section className="impact-band">
        <div className="stats-row">
          {impactStats.map((stat) => (
            <div key={stat.value}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
