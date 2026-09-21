import { profile } from '../data.js'

const points = [
  'Electronics & Telecommunication Engineering student (2023–2027)',
  'Hands-on experience across embedded systems, sensors and IoT projects',
  'Comfortable working across the hardware-software boundary',
  'Focused on testing, troubleshooting, and getting prototypes actually working',
  'Growing interest in embedded firmware and hardware product development',
]

export default function About() {
  return (
    <section id="about" className="section-pad border-b border-line">
      <div className="container-w grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12">
        <div>
          <p className="pin-label mb-3">01 — about</p>
          <h2 className="section-heading">Grounded in hardware,<br />comfortable in code.</h2>
        </div>

        <div>
          <p className="text-[17px] leading-relaxed text-muted max-w-2xl">
            I approach engineering problems from the circuit up — starting with how a signal moves
            through a sensor, a microcontroller, and a communication interface before it ever reaches
            an application layer. That grounding shapes how I build: prototype in hardware, validate with
            simulation, then write the firmware that brings it to life.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-ink/90">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex items-center gap-3 font-mono text-xs text-faint">
            <span className="h-px w-8 bg-line2" />
            {profile.location}
          </div>
        </div>
      </div>
    </section>
  )
}
