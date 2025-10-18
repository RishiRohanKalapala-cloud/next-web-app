import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] mt-16">
      <div className="container py-10 grid sm:grid-cols-2 gap-6 text-sm text-foreground">
        <div>
          <div className="font-medium text-foreground mb-2">Data Science Society</div>
          <p>CMRIT Hyderabad • Building a vibrant community through data and collaboration.</p>
        </div>
        <div className="flex sm:justify-end gap-6">
          <Link href="/about">About</Link>
          <Link href="/events">Events</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/developer-notes">Dev Notes</Link>
        </div>
      </div>
      <div className="container grid sm:grid-cols-2 gap-4 pb-6">
        <div className="card p-5">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-lg bg-green-500 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0599L4.841 5.4077a.416.416 0 00-.5676-.1521.416.416 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/>
              </svg>
            </div>
            <div>
              <div className="text-sm">Android</div>
              <div className="mt-1 font-medium text-foreground">Download APK</div>
            </div>
          </div>
          <p className="mt-3 text-xs">Install the latest Android build directly.</p>
          <div className="mt-4">
            <Link href="#" className="btn-primary rounded-full px-4 py-2 text-sm font-medium">Download APK</Link>
          </div>
        </div>
        <div className="card p-5">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-lg bg-gray-900 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.11-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </div>
            <div>
              <div className="text-sm">Apple</div>
              <div className="mt-1 font-medium text-foreground">Coming Soon</div>
            </div>
          </div>
          <p className="mt-3 text-xs">iOS build will be available when released.</p>
          <div className="mt-4">
            <span className="rounded-full px-4 py-2 text-sm font-medium border border-white/[0.12] inline-block">Notify me</span>
          </div>
        </div>
      </div>
      <div className="container pb-2 text-xs text-foreground">
        App available on Android (APK) and Apple (coming soon).
      </div>
      <div className="container pb-1 text-xs text-foreground flex items-center justify-between">
        <span>© {new Date().getFullYear()} Data Science Society, CMRIT Hyderabad</span>
        <span>Web v0.1</span>
      </div>
      <div className="container pb-8 text-[11px] text-foreground/80">
        Developed by <span className="text-[color:var(--accent)] font-medium">Gearup</span>
      </div>
    </footer>
  );
}


