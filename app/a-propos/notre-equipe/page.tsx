import { SectionHeading } from "@/components/section-heading";
import { teamMembers } from "@/lib/content";

export default function TeamPage() {
  return (
    <main>
      <section className="sub-hero team-hero">
        <div>
          <p className="eyebrow">Notre equipe</p>
          <h1>Une equipe proche des Scholars, des familles, des mentors et des partenaires.</h1>
        </div>
      </section>
      <section className="program-section">
        <SectionHeading
          eyebrow="Organisation"
          title="Des roles clairs pour un accompagnement continu."
        />
        <div className="card-grid">
          {teamMembers.map((member) => (
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
