import { useState } from 'react'
import { ChevronDown, Github } from 'lucide-react'
import { projects } from '../data.js'

function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(index === 0)

  return (
    <div className="card overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left p-7 sm:p-8 flex items-start justify-between gap-6"
        aria-expanded={open}
      >
        <div>
          <p className="font-mono text-xs text-copper mb-2">{project.team}</p>
          <h3 className="font-display text-xl sm:text-2xl font-medium text-ink">{project.title}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] text-signal border border-signal-dim/50 rounded px-2 py-1"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <ChevronDown
          size={20}
          className={`mt-1 shrink-0 text-muted transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-7 sm:px-8 pb-8 border-t border-line pt-6 grid sm:grid-cols-2 gap-8">
            <div>
              <p className="pin-label mb-2">problem</p>
              <p className="text-sm leading-relaxed text-muted">{project.problem}</p>

              <p className="pin-label mb-2 mt-6">solution</p>
              <p className="text-sm leading-relaxed text-muted">{project.solution}</p>
            </div>

            <div>
              <p className="pin-label mb-3">key features</p>
              <ul className="space-y-2 mb-6">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink/90">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-copper" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                disabled
                title="Source not published yet"
                className="inline-flex items-center gap-2 rounded-md border border-line2 px-4 py-2 text-xs font-mono text-faint cursor-not-allowed"
              >
                <Github size={14} />
                Source — coming soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad border-b border-line">
      <div className="container-w">
        <p className="pin-label mb-3">03 — projects</p>
        <h2 className="section-heading max-w-xl">Hardware built, tested, and wired to firmware</h2>

        <div className="mt-12 flex flex-col gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
