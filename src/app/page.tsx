import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { team } from "@/data/sample";
import ContractCard from "@/components/ui/ContractCard";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30" aria-hidden>
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-3xl" style={{
          background:
            "radial-gradient(closest-side, var(--accent), transparent 60%)",
        }} />
      </div>

      <section className="py-20 sm:py-28 text-center">
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">
          Welcome to <span className="text-[color:var(--accent)]">Data Science Society</span>
        </h1>
        <p className="mt-4 text-muted max-w-2xl mx-auto">
          CMRIT Hyderabad • A modern community for data enthusiasts, builders, and innovators.
          Join our events, meet the team, and explore the gallery.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="/join" className="btn-primary rounded-full px-5 py-3 text-sm font-medium">Join the Club</a>
          <a href="/events" className="rounded-full px-5 py-3 text-sm font-medium border border-white/[0.12]">View Events</a>
        </div>
      </section>

        <Section title="Our Expertise" subtitle="Data Science is an art and we're artists">
          <div id="testimonials" className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-4">Community Highlights</h3>
              <div className="space-y-4">
                {[
                  { title: "DSS blog on Medium where", link: "Read the blog" },
                  { title: "Interview for Data Science Weekly", link: "See the interview" },
                  { title: "We published a case study", link: "See the case study" },
                  { title: "Our society twitter", link: "Follow us" },
                ].map((it, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-white/[0.12]">
                    <span className="text-sm">{it.title}</span>
                    <a href="#" className="text-xs text-[color:var(--accent)] hover:underline">{it.link}</a>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-4">Core Domains</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Machine Learning", num: "01" },
                  { title: "Data Visualization", num: "02" },
                  { title: "MLOps & Deployment", num: "03" },
                  { title: "Research & Innovation", num: "04" },
                ].map((c, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg border border-white/[0.12] text-center"
                  >
                    <div className="text-xs text-muted mb-2">{c.num}.</div>
                    <div className="text-sm font-medium">{c.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

      <Section title="About" subtitle="Who we are" >
        <div id="about" className="grid md:grid-cols-5 gap-5">
          <Card className="p-6 md:col-span-3">
            <h3 className="text-lg font-semibold mb-3">Data Science Society at CMRIT Hyderabad</h3>
            <p className="text-sm text-muted mb-4">
              A student-led organization dedicated to fostering innovation, learning, and collaboration 
              in the field of data science and artificial intelligence.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-[color:var(--accent)] mb-2">Our Mission</h4>
                <ul className="space-y-1 text-muted">
                  <li>• Bridge academic learning and industry practice</li>
                  <li>• Foster innovation through collaboration</li>
                  <li>• Build strong data science networks</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-[color:var(--accent)] mb-2">What We Do</h4>
                <ul className="space-y-1 text-muted">
                  <li>• Workshops & Training sessions</li>
                  <li>• Inter-college competitions</li>
                  <li>• Research projects & discussions</li>
                </ul>
              </div>
            </div>
          </Card>
          <Card className="p-6 md:col-span-2">
            <div className="font-medium mb-3">Our Impact</div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-[color:var(--accent)]">150+</div>
                <div className="text-xs text-muted">Members</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[color:var(--accent)]">25+</div>
                <div className="text-xs text-muted">Events</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[color:var(--accent)]">12+</div>
                <div className="text-xs text-muted">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[color:var(--accent)]">5+</div>
                <div className="text-xs text-muted">Years</div>
              </div>
            </div>
            <div className="mt-4">
              <Button asChild><a href="/about">Learn more</a></Button>
            </div>
          </Card>
        </div>
      </Section>

      <Section title="Events" subtitle="What's happening next">
        <div id="events" className="grid md:grid-cols-1 gap-5">
          <ContractCard
            title="LivecodeX"
            subtitle="24 Oct 2025 • CMRIT Hyderabad"
            footer={<Button asChild><a href="/events">Register Now</a></Button>}
          >
            <div className="space-y-3">
              <p className="text-sm">Inter-college live coding competition with algorithmic challenges.</p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="rounded-full border border-white/[0.12] px-3 py-1">Teams of 1-2</span>
                <span className="rounded-full border border-white/[0.12] px-3 py-1">₹199 per team</span>
                <span className="rounded-full border border-white/[0.12] px-3 py-1">C/C++/Python/Java/JS</span>
              </div>
            </div>
          </ContractCard>
        </div>
        <div className="mt-4"><Button variant="outline" asChild><a href="/events">View full details</a></Button></div>
      </Section>

      <Section title="Team" subtitle="People behind the club">
        <div id="team" className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {team.slice(0, 4).map((m) => (
            <Card key={m.id} className="p-0">
              {/* Reusing TeamCard layout inline to keep preview compact */}
              <div className="p-5">
                <div className="flex items-center gap-4">
                  <div
                    className="size-12 shrink-0 rounded-full grid place-items-center text-white text-xs font-semibold"
                    style={{
                      background:
                        "conic-gradient(from 180deg at 50% 50%, color-mix(in oklab, var(--accent) 85%, transparent), #111, color-mix(in oklab, var(--accent) 85%, transparent))",
                    }}
                  >
                    {m.name.split(" ").map((p) => p[0]).slice(0,2).join("").toUpperCase()}
                  </div>
                  <div>
                    <div className="font-medium tracking-tight text-foreground">{m.name}</div>
                    <div className="mt-0.5 inline-flex items-center gap-2 text-xs">
                      <span className="rounded-full px-2 py-1 border border-white/[0.12] text-muted">{m.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-4"><Button variant="outline" asChild><a href="/team">Meet the full team</a></Button></div>
      </Section>

      <Section title="Gallery" subtitle="A peek into our activities">
        <div id="gallery" className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="aspect-video" />
          ))}
        </div>
        <div className="mt-4"><Button variant="outline" asChild><a href="/gallery">Open gallery</a></Button></div>
      </Section>

      <Section title="Udbhav Magazine" subtitle="The official DSS publication">
        <div id="udbhav" className="grid md:grid-cols-5 gap-5 items-stretch">
          <Card className="p-0 md:col-span-2 overflow-hidden">
            <div
              className="h-full p-8 text-white"
              style={{
                background:
                  "linear-gradient(160deg, color-mix(in oklab, var(--accent) 55%, #0a0a0a) 0%, #0a0a0a 70%)",
              }}
            >
              <div className="text-xs tracking-wide opacity-90">NEW RELEASE</div>
              <div className="mt-3 text-3xl font-semibold tracking-tight">Udbhav 2025</div>
              <p className="mt-2 text-sm opacity-90 max-w-sm">
                Articles, projects, and interviews from the Data Science Society at CMRIT Hyderabad.
              </p>
              <div className="mt-6 flex gap-3">
                <Button asChild><a href="#">Read online</a></Button>
                <Button variant="outline" asChild><a href="#">Download PDF</a></Button>
              </div>
            </div>
          </Card>
          <Card className="p-6 md:col-span-3">
            <div className="font-medium">Inside this issue</div>
            <ul className="mt-3 grid gap-2 text-sm">
              <li>• Feature: Building an MLOps pipeline on campus</li>
              <li>• Case Study: Forecasting lab occupancy with time series</li>
              <li>• Tutorial: Visualizing embeddings with UMAP</li>
              <li>• Interview: Alumni working in applied AI</li>
              <li>• Showcase: Award-winning DSS projects</li>
            </ul>
            <div className="mt-5 text-xs text-muted">Contributors: DSS Editorial Team</div>
          </Card>
        </div>
      </Section>

      <Section title="Contact" subtitle="We'd love to hear from you">
        <div id="contact" className="grid md:grid-cols-5 gap-5">
          <Card className="p-6 md:col-span-2">
            <div className="font-medium">Contact Information</div>
            <ul className="mt-3 grid gap-3 text-sm">
              <li>
                <span className="text-muted">Email</span>
                <div className="text-foreground">dss@cmrithyderabad.edu.in</div>
              </li>
              <li>
                <span className="text-muted">Location</span>
                <div className="text-foreground">CMRIT Hyderabad, Data Science Society Room</div>
              </li>
              <li>
                <span className="text-muted">Office Hours</span>
                <div className="text-foreground">Wed–Fri, 3:00–5:00 PM</div>
              </li>
            </ul>
            <div className="mt-4">
              <div className="text-sm text-muted">Socials</div>
              <div className="mt-2 flex gap-2">
                <a className="rounded-full px-3 py-1 border border-white/[0.12] text-xs" href="#">Instagram</a>
                <a className="rounded-full px-3 py-1 border border-white/[0.12] text-xs" href="#">X</a>
                <a className="rounded-full px-3 py-1 border border-white/[0.12] text-xs" href="#">LinkedIn</a>
              </div>
            </div>
          </Card>
          <Card className="p-6 md:col-span-3">
            <div className="font-medium">Send us a message</div>
            <div className="mt-4 h-[500px]">
              <iframe
                title="Contact Form"
                src="https://docs.google.com/forms/d/e/CONTACT_FORM_ID/viewform?embedded=true"
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
              >Loading…</iframe>
            </div>
          </Card>
        </div>
      </Section>

      <Section title="Join" subtitle="Become a member">
        <div id="join" className="grid md:grid-cols-5 gap-5">
          <Card className="p-6 md:col-span-2">
            <div className="font-medium">Membership Benefits</div>
            <ul className="mt-3 grid gap-2 text-sm">
              <li>• Priority access to events and workshops</li>
              <li>• Project showcases and mentorship</li>
              <li>• Networking with industry and alumni</li>
              <li>• Member-only resources and study groups</li>
            </ul>
            <div className="mt-4">
              <div className="text-sm text-muted">Tracks</div>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/[0.12] px-3 py-1 text-xs">ML</span>
                <span className="rounded-full border border-white/[0.12] px-3 py-1 text-xs">Data Viz</span>
                <span className="rounded-full border border-white/[0.12] px-3 py-1 text-xs">MLOps</span>
                <span className="rounded-full border border-white/[0.12] px-3 py-1 text-xs">Research</span>
              </div>
            </div>
          </Card>
          <Card className="p-6 md:col-span-3">
            <div className="font-medium">Join the Society</div>
            <div className="mt-4 h-[500px]">
              <iframe
                title="Join Form"
                src="https://docs.google.com/forms/d/e/JOIN_FORM_ID/viewform?embedded=true"
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
              >Loading…</iframe>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}
