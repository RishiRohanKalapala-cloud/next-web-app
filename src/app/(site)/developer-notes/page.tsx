export const metadata = { title: "Developer Notes" };

export default function Page() {
  return (
    <div>
      <header className="card p-8">
        <h1 className="text-3xl font-semibold tracking-tight">Developer Notes</h1>
        <p className="mt-3 text-muted max-w-2xl">
          Technical documentation, development guidelines, and implementation details for the Data Science Society website.
        </p>
      </header>

      <section className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h2 className="text-lg font-semibold mb-4">Tech Stack</h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between p-3 rounded-lg border border-white/[0.12]">
              <span>Framework</span>
              <span className="text-[color:var(--accent)]">Next.js 14</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg border border-white/[0.12]">
              <span>Language</span>
              <span className="text-[color:var(--accent)]">TypeScript</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg border border-white/[0.12]">
              <span>Styling</span>
              <span className="text-[color:var(--accent)]">Tailwind CSS</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg border border-white/[0.12]">
              <span>Deployment</span>
              <span className="text-[color:var(--accent)]">Vercel</span>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-lg font-semibold mb-4">Project Structure</h2>
          <div className="space-y-2 text-sm font-mono">
            <div>src/</div>
            <div className="ml-4">app/</div>
            <div className="ml-8">(site)/</div>
            <div className="ml-12">about/</div>
            <div className="ml-12">contact/</div>
            <div className="ml-12">events/</div>
            <div className="ml-12">join/</div>
            <div className="ml-12">team/</div>
            <div className="ml-12">gallery/</div>
            <div className="ml-8">globals.css</div>
            <div className="ml-8">layout.tsx</div>
            <div className="ml-8">page.tsx</div>
            <div className="ml-4">components/</div>
            <div className="ml-8">layout/</div>
            <div className="ml-8">ui/</div>
            <div className="ml-8">theme/</div>
            <div className="ml-4">data/</div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="card p-6">
          <h2 className="text-lg font-semibold mb-4">Development Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-[color:var(--accent)] mb-3">Code Standards</h3>
              <ul className="space-y-2 text-sm">
                <li>• Use TypeScript for type safety</li>
                <li>• Follow Next.js App Router patterns</li>
                <li>• Use Tailwind for consistent styling</li>
                <li>• Implement responsive design</li>
                <li>• Follow accessibility guidelines</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-[color:var(--accent)] mb-3">Component Guidelines</h3>
              <ul className="space-y-2 text-sm">
                <li>• Create reusable UI components</li>
                <li>• Use proper prop typing</li>
                <li>• Implement dark theme support</li>
                <li>• Follow naming conventions</li>
                <li>• Add proper documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="card p-6">
          <h2 className="text-lg font-semibold mb-4">Environment Setup</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Prerequisites</h3>
              <div className="bg-black/20 p-4 rounded-lg font-mono text-sm">
                <div>Node.js 18+</div>
                <div>npm or yarn</div>
                <div>Git</div>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Installation</h3>
              <div className="bg-black/20 p-4 rounded-lg font-mono text-sm">
                <div>npm install</div>
                <div>npm run dev</div>
                <div># Open http://localhost:3000</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="card p-6">
          <h2 className="text-lg font-semibold mb-4">Deployment</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Build Commands</h3>
              <div className="bg-black/20 p-4 rounded-lg font-mono text-sm">
                <div>npm run build</div>
                <div>npm start</div>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Environment Variables</h3>
              <div className="bg-black/20 p-4 rounded-lg font-mono text-sm">
                <div>NEXT_PUBLIC_SITE_URL=</div>
                <div>GOOGLE_FORM_CONTACT_ID=</div>
                <div>GOOGLE_FORM_JOIN_ID=</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="card p-6">
          <h2 className="text-lg font-semibold mb-4">Contributing</h2>
          <p className="text-sm text-muted mb-4">
            This website is maintained by the Gearup development team. 
            For contributions or issues, please contact the technical lead.
          </p>
          <div className="flex gap-3">
            <a href="/contact" className="btn-primary rounded-full px-5 py-3 text-sm font-medium">Contact GearUp Dev Team</a>
            <a href="https://github.com" className="rounded-full px-5 py-3 text-sm font-medium border border-white/[0.12]">View Source</a>
          </div>
        </div>
      </section>
    </div>
  );
}
