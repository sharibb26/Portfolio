import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-void/90 backdrop-blur border-b border-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container-w flex items-center justify-between px-6 sm:px-10 lg:px-16 h-16">
        <a href="#top" className="font-mono text-sm text-ink tracking-tight">
          SA<span className="text-copper">/</span>
          <span className="text-muted">ece</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-[13px] text-muted hover:text-signal transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-panel border-t border-line px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm text-muted hover:text-signal transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
