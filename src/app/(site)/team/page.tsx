export const metadata = { title: "Team" };
import { team } from "@/data/sample";
import TeamCard from "@/components/team/TeamCard";

export default function Page() {
  return (
    <div>
      <header className="card p-8">
        <h1 className="text-3xl font-semibold tracking-tight">Meet the Team</h1>
        <p className="mt-3 text-muted max-w-2xl">
          The passionate individuals behind the Data Science Society, driving innovation and fostering 
          a vibrant community of data enthusiasts at CMRIT Hyderabad.
        </p>
      </header>

      <section className="mt-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {team.map((m) => (
            <TeamCard key={m.id} name={m.name} role={m.role} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4">Leadership Structure</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium text-[color:var(--accent)]">Executive Board</h3>
              <p className="text-sm text-muted mt-1">President, Vice President, and core leadership team</p>
            </div>
            <div>
              <h3 className="font-medium text-[color:var(--accent)]">Event Leads</h3>
              <p className="text-sm text-muted mt-1">Coordinators for workshops, competitions, and meetups</p>
            </div>
            <div>
              <h3 className="font-medium text-[color:var(--accent)]">Technical Leads</h3>
              <p className="text-sm text-muted mt-1">Specialists in ML, data viz, and research domains</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4">Join Our Team</h2>
          <p className="text-sm text-muted mb-4">
            We&apos;re always looking for passionate individuals to join our leadership team. 
            Help us organize events, mentor peers, and shape the future of data science at CMRIT.
          </p>
          <div className="flex gap-3">
            <a href="/contact" className="btn-primary rounded-full px-5 py-3 text-sm font-medium">Contact Us</a>
            <a href="/join" className="rounded-full px-5 py-3 text-sm font-medium border border-white/[0.12]">Apply Now</a>
          </div>
        </div>
      </section>
    </div>
  );
}
