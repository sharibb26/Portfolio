import { ArrowRight, Download, Mail } from 'lucide-react'
import { profile } from '../data.js'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      {/* schematic trace, single orchestrated load-in animation */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.5]"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M -20 620 H 260 L 320 560 H 560 L 620 620 H 900 L 960 560 H 1220"
          stroke="#2C362F"
          strokeWidth="1.5"
          className="trace-path"
          style={{ '--trace-length': 1600 }}
        />
        <path
          d="M -20 180 H 180 L 240 120 H 500 V 260 L 560 320 H 820 L 880 260 H 1220"
          stroke="#2C362F"
          strokeWidth="1.5"
          className="trace-path"
          style={{ '--trace-length': 1600, animationDelay: '0.15s' }}
        />
        <circle cx="320" cy="560" r="4" fill="#C97B4A" opacity="0.6" />
        <circle cx="620" cy="620" r="4" fill="#7FB88F" opacity="0.6" />
        <circle cx="500" cy="120" r="4" fill="#7FB88F" opacity="0.6" />
        <circle cx="880" cy="260" r="4" fill="#C97B4A" opacity="0.6" />
      </svg>

      <div className="container-w relative px-6 sm:px-10 lg:px-16 pt-36 pb-24 sm:pt-44 sm:pb-32">
        <p className="pin-label mb-5 fade-in">// electronics &amp; telecommunication engineering</p>

        <h1 className="font-display text-[2.5rem] leading-[1.08] sm:text-6xl sm:leading-[1.05] font-medium text-ink max-w-3xl fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
          {profile.headline}
        </h1>

        <p className="mt-3 font-mono text-sm text-copper fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
          {profile.name} — {profile.degree}
        </p>

        <p className="mt-7 max-w-2xl text-[17px] leading-relaxed text-muted fade-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
          {profile.intro}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4 fade-in" style={{ animationDelay: '0.4s', opacity: 0 }}>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-copper px-5 py-3 text-sm font-medium text-void hover:bg-copper-bright transition-colors"
          >
            View Projects
            <ArrowRight size={16} />
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-md border border-line2 px-5 py-3 text-sm font-medium text-ink hover:border-signal hover:text-signal transition-colors"
          >
            <Download size={16} />
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-muted hover:text-ink transition-colors"
          >
            <Mail size={16} />
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
