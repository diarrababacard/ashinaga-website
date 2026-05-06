import { SectionHeading } from "@/components/section-heading";
import { impactStats } from "@/lib/content";

export default function ImpactPage() {
  return (
    <main>
      <section className="sub-hero impact-hero">
        <div>
          <p className="eyebrow">Notre impact</p>
          <h1>Mesurer l'impact, c'est raconter des trajectoires de resilience et d'action.</h1>
        </div>
      </section>
      <section className="impact-band">
        <SectionHeading
          eyebrow="Chiffres cles"
          title="Une mission internationale portee localement."
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
    </main>
  );
}
