import { Mail, Phone, MapPin, Download } from 'lucide-react'
import { profile } from '../data.js'

const items = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, '')}` },
  { icon: MapPin, label: 'Location', value: profile.location, href: null },
]

export default function Contact() {
  return (
    <section id="contact" className="section-pad border-b border-line bg-panel/30">
      <div className="container-w">
        <p className="pin-label mb-3">08 — contact</p>
        <h2 className="section-heading max-w-xl">Let's talk hardware</h2>
        <p className="mt-4 text-[17px] text-muted max-w-xl leading-relaxed">
          Open to Electronics Hardware Developer and Embedded Engineer roles, internships, and
          conversations about embedded product work.
        </p>

        <div className="mt-12 grid sm:grid-cols-3 gap-5">
          {items.map(({ icon: Icon, label, value, href }) => {
            const content = (
              <>
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-void border border-line2 mb-4">
                  <Icon size={16} className="text-signal" />
                </div>
                <p className="pin-label mb-1">{label}</p>
                <p className="text-sm text-ink break-words">{value}</p>
              </>
            )
            return href ? (
              <a key={label} href={href} className="card p-6 block hover:border-signal-dim transition-colors">
                {content}
              </a>
            ) : (
              <div key={label} className="card p-6">
                {content}
              </div>
            )
          })}
        </div>

        <a
          href="/resume.pdf"
          download
          className="mt-10 inline-flex items-center gap-2 rounded-md bg-copper px-5 py-3 text-sm font-medium text-void hover:bg-copper-bright transition-colors"
        >
          <Download size={16} />
          Download Resume
        </a>
      </div>
    </section>
  )
}
