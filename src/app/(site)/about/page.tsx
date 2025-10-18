export const metadata = { title: "About" };

export default function Page() {
  return (
    <div>
      <header className="card p-8">
        <h1 className="text-3xl font-semibold tracking-tight">About Data Science Society</h1>
        <p className="mt-3 text-muted max-w-3xl">
          The Data Science Society at CMRIT Hyderabad is a student-led organization dedicated to fostering 
          innovation, learning, and collaboration in the field of data science and artificial intelligence.
        </p>
      </header>

      <section className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
          <p className="text-sm text-muted mb-4">
            To create an inclusive community where students can explore, learn, and apply data science 
            concepts through hands-on projects, competitions, and peer collaboration.
          </p>
          <ul className="text-sm space-y-2">
            <li>• Bridge the gap between academic learning and industry practice</li>
            <li>• Foster innovation through collaborative projects</li>
            <li>• Build a strong network of data science enthusiasts</li>
            <li>• Promote ethical and responsible use of AI and data</li>
          </ul>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4">What We Do</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Workshops & Training</h3>
              <p className="text-sm text-muted">Regular sessions on ML, data visualization, and industry tools</p>
            </div>
            <div>
              <h3 className="font-medium">Competitions</h3>
              <p className="text-sm text-muted">Inter-college coding competitions and hackathons</p>
            </div>
            <div>
              <h3 className="font-medium">Research Projects</h3>
              <p className="text-sm text-muted">Collaborative research initiatives and paper discussions</p>
            </div>
            <div>
              <h3 className="font-medium">Industry Connect</h3>
              <p className="text-sm text-muted">Guest lectures and networking with professionals</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[color:var(--accent)]">150+</div>
              <div className="text-sm text-muted">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[color:var(--accent)]">25+</div>
              <div className="text-sm text-muted">Events Conducted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[color:var(--accent)]">12+</div>
              <div className="text-sm text-muted">Projects Completed</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4">Join Our Community</h2>
          <p className="text-sm text-muted mb-4">
            Whether you&apos;re a beginner or an expert, there&apos;s a place for you in our society. 
            We welcome students from all backgrounds who share our passion for data science.
          </p>
          <div className="flex gap-3">
            <a href="/join" className="btn-primary rounded-full px-5 py-3 text-sm font-medium">Join Now</a>
            <a href="/events" className="rounded-full px-5 py-3 text-sm font-medium border border-white/[0.12]">View Events</a>
          </div>
        </div>
      </section>
    </div>
  );
}
