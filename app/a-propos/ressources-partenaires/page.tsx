import { SectionHeading } from "@/components/section-heading";
import { partners, resources } from "@/lib/content";

export default function ResourcesPartnersPage() {
  return (
    <main>
      <section className="sub-hero resources-hero">
        <div>
          <p className="eyebrow">Ressources et partenaires</p>
          <h1>Un espace pour centraliser documents, opportunites et collaborations.</h1>
        </div>
      </section>
      <section className="two-column page-band">
        <SectionHeading
          eyebrow="Ressources"
          title="Des contenus utiles, faciles a actualiser."
        />
        <ul className="resource-list">
          {resources.map((resource) => (
            <li key={resource}>{resource}</li>
          ))}
        </ul>
      </section>
      <section className="partner-wall">
        {partners.map((partner) => (
          <span key={partner.name}>{partner.shortName}</span>
        ))}
      </section>
    </main>
  );
}
