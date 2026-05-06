import Link from "next/link";

export default function DonatePage() {
  return (
    <main>
      <section className="sub-hero donate-hero">
        <div>
          <p className="eyebrow">Faire un don</p>
          <h1>Votre soutien aide a construire des parcours d'education et de leadership.</h1>
          <p>
            Cette page pourra etre connectee a une solution de don en ligne ou a
            un lien externe gere par Ashinaga Senegal.
          </p>
          <Link href="/studio" className="primary-button">
            Configurer le lien de don
          </Link>
        </div>
      </section>
    </main>
  );
}
