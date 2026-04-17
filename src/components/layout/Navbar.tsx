import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navigationData } from '../../data'
import { Button } from '../ui/Button'
import { Container } from './Container'
import { Logo } from './Logo'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'whitespace-nowrap px-1 py-2 text-[0.9375rem] font-medium text-white/90 underline-offset-[10px] transition-all duration-200',
    isActive
      ? 'font-semibold text-white underline decoration-2 decoration-white/90'
      : 'hover:text-white hover:underline hover:decoration-white/50 hover:decoration-1',
  ].join(' ')

export function Navbar() {
  const [open, setOpen] = useState(false)
  const regularItems = navigationData.items.filter((i) => !i.highlight)
  const cta = navigationData.items.find((i) => i.highlight)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/15 bg-header-bar shadow-md shadow-black/10">
      <Container className="w-full">
        {/* Mobile: logo left + controls right */}
        <div className="flex items-center justify-between gap-4 py-3.5 lg:hidden">
          <div className="flex min-w-0 flex-1 items-center">
            <Logo variant="header" className="min-w-0" />
          </div>
          <button
            type="button"
            className="inline-flex shrink-0 rounded-lg border border-white/30 bg-white/10 p-2 text-white transition-colors hover:border-white/50 hover:bg-white/15"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden className="h-6 w-6" /> : <Menu aria-hidden className="h-6 w-6" />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>

        {/* Desktop: full-width 3 columns — logo | centered nav | CTA */}
        <div className="hidden min-h-[4.5rem] w-full grid-cols-[minmax(0,auto)_1fr_minmax(0,auto)] items-center gap-6 py-1 lg:grid">
          <div className="flex shrink-0 items-center justify-self-start">
            <Logo variant="header" />
          </div>

          <nav className="flex min-w-0 justify-center justify-self-stretch self-center" aria-label="Primary">
            <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-1 xl:gap-x-9">
              {regularItems.map((item) => (
                <li key={item.id}>
                  <NavLink to={item.href} className={navLinkClass} end={item.href === '/'}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center justify-self-end">
            {cta ? (
              <Button to={cta.href} size="sm" variant="onDark">
                {cta.label}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>

      {open ? (
        <div id="mobile-menu" className="border-t border-white/15 bg-header-bar lg:hidden">
          <Container>
            <nav className="flex flex-col py-2 pb-4" aria-label="Mobile">
              {regularItems.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.href}
                  className={({ isActive }) =>
                    [
                      'border-b border-white/10 py-3.5 text-base font-medium',
                      isActive ? 'text-white' : 'text-white/85',
                    ].join(' ')
                  }
                  end={item.href === '/'}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              {cta ? (
                <Button
                  to={cta.href}
                  variant="onDark"
                  className="mt-4 mb-1 w-full !py-3 !font-semibold !shadow-md"
                  onClick={() => setOpen(false)}
                >
                  {cta.label}
                </Button>
              ) : null}
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
