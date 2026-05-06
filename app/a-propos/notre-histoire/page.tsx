import { SectionHeading } from "@/components/section-heading";

export default function HistoryPage() {
  return (
    <main>
      <section className="sub-hero history-hero">
        <div>
          <p className="eyebrow">Notre histoire</p>
          <h1>Une initiative nee d'une conviction: l'education peut rompre les cycles de vulnerabilite.</h1>
        </div>
      </section>
      <section className="timeline page-band">
        <SectionHeading
          eyebrow="Reperes"
          title="De l'experience japonaise a l'engagement en Afrique francophone."
        />
        {[
          ["1967", "Naissance du mouvement Ashinaga au Japon pour soutenir les orphelins d'accidents de la route."],
          ["2001", "Ouverture des activites internationales avec un premier bureau en Ouganda."],
          ["2014", "Lancement officiel de l'Ashinaga Africa Initiative pour former de futurs leaders."],
          ["2015", "Creation d'Ashinaga Senegal, bureau regional pour les Scholars francophones."],
        ].map(([year, text]) => (
          <article key={year}>
            <strong>{year}</strong>
            <p>{text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
