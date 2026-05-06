import { SectionHeading } from "@/components/section-heading";
import { programs } from "@/lib/content";

export default function ProgramsPage() {
  return (
    <main>
      <section className="sub-hero programs-hero">
        <div>
          <p className="eyebrow">Nos programmes</p>
          <h1>Selection, preparation, accompagnement et engagement communautaire.</h1>
        </div>
      </section>
      <section className="program-section">
        <SectionHeading
          eyebrow="Cycle d'accompagnement"
          title="Une experience construite autour de la confiance et du leadership."
        />
        <div className="card-grid">
          {programs.map((program) => (
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
