import { experience } from '../data.js'

export default function Experience() {
  return (
    <section id="experience" className="section-pad border-b border-line bg-panel/30">
      <div className="container-w">
        <p className="pin-label mb-3">04 — internships</p>
        <h2 className="section-heading max-w-xl">Time spent in labs and in the field</h2>

        <div className="mt-14 relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line2 hidden sm:block" />

          <div className="flex flex-col gap-12">
            {experience.map((exp) => (
              <div key={exp.org} className="relative sm:pl-12">
                <span className="hidden sm:block absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-void border-2 border-signal" />

                <p className="font-mono text-xs text-copper mb-1.5">{exp.date}</p>
                <h3 className="font-display text-lg sm:text-xl font-medium text-ink">
                  {exp.role}
                </h3>
                <p className="text-sm text-muted mt-1">
                  {exp.org} <span className="text-faint">· {exp.track}</span>
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((s) => (
                    <span key={s} className="font-mono text-[11px] text-signal border border-signal-dim/50 rounded px-2 py-1">
                      {s}
                    </span>
                  ))}
                </div>

                <ul className="mt-5 space-y-2 max-w-2xl">
                  {exp.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-ink/90 leading-relaxed">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-copper" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
