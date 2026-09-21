import { BadgeCheck } from 'lucide-react'
import { certification as cert } from '../data.js'

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad border-b border-line">
      <div className="container-w">
        <p className="pin-label mb-3">05 — certification</p>
        <h2 className="section-heading max-w-xl">Formal training in IoT systems</h2>

        <div className="mt-12 card p-8 sm:p-10 grid lg:grid-cols-[1fr_1fr] gap-10">
          <div>
            <div className="flex items-start gap-3 mb-4">
              <BadgeCheck size={20} className="text-copper mt-0.5 shrink-0" />
              <div>
                <h3 className="font-display text-lg sm:text-xl font-medium text-ink leading-snug">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted mt-1.5">{cert.provider}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted mt-4">{cert.description}</p>
          </div>

          <div>
            <p className="pin-label mb-3">covered</p>
            <ul className="space-y-2 mb-6">
              {cert.learnings.map((l) => (
                <li key={l} className="flex items-start gap-2 text-sm text-ink/90">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                  {l}
                </li>
              ))}
            </ul>

            <p className="pin-label mb-3">projects built during training</p>
            <div className="flex flex-wrap gap-2">
              {cert.builtProjects.map((p) => (
                <span key={p} className="font-mono text-[11px] text-muted border border-line2 rounded px-2 py-1">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
