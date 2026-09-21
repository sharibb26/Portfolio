import { GraduationCap } from 'lucide-react'
import { education } from '../data.js'

export default function Education() {
  return (
    <section id="education" className="section-pad border-b border-line">
      <div className="container-w">
        <p className="pin-label mb-3">07 — education</p>
        <h2 className="section-heading max-w-xl mb-10">Academic background</h2>

        <div className="card p-7 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-6 max-w-2xl">
          <div className="flex h-11 w-11 items-center justify-center rounded-md bg-void border border-line2 shrink-0">
            <GraduationCap size={20} className="text-copper" />
          </div>
          <div className="flex-1">
            <h3 className="font-display text-lg font-medium text-ink">{education.degree}</h3>
            <p className="text-sm text-muted mt-1">{education.institute}</p>
          </div>
          <div className="flex sm:flex-col gap-6 sm:gap-1 sm:text-right font-mono text-sm shrink-0">
            <span className="text-muted">{education.years}</span>
            <span className="text-signal">CGPA {education.cgpa}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
