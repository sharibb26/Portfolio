import { leadership } from '../data.js'

export default function Leadership() {
  return (
    <section id="leadership" className="section-pad border-b border-line bg-panel/30">
      <div className="container-w">
        <p className="pin-label mb-3">06 — leadership &amp; activities</p>
        <h2 className="section-heading max-w-xl">Outside the lab bench</h2>

        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {leadership.map((l) => (
            <div key={l.org} className="card p-7">
              <p className="font-mono text-xs text-copper mb-1.5">{l.role}</p>
              <h3 className="font-display text-lg font-medium text-ink mb-3">{l.org}</h3>
              <p className="text-sm leading-relaxed text-muted mb-5">{l.description}</p>
              <ul className="space-y-2">
                {l.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-ink/90">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
