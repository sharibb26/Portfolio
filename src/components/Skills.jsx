import { Cpu, Radio, CircuitBoard, Zap, Wrench } from 'lucide-react'
import { skillCategories } from '../data.js'

const icons = [Cpu, Radio, CircuitBoard, Zap, Wrench]

export default function Skills() {
  return (
    <section id="skills" className="section-pad border-b border-line bg-panel/30">
      <div className="container-w">
        <p className="pin-label mb-3">02 — technical skills</p>
        <h2 className="section-heading max-w-xl">What I build and simulate with</h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => {
            const Icon = icons[i % icons.length]
            return (
              <div
                key={cat.title}
                className="card p-6 hover:border-signal-dim transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-void border border-line2">
                    <Icon size={17} className="text-signal" />
                  </div>
                  <h3 className="font-display text-[15px] font-medium text-ink">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-[12px] text-muted border border-line2 rounded px-2 py-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
