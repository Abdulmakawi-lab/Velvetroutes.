import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, Globe } from 'lucide-react';
import { company } from '@/data/site';
import { destinations } from '@/data/destinations';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Destinations', href: '/destinations', mega: true },
  { label: 'Services', href: '/services/visa-assistance' },
  { label: 'Blog', href: '/blog' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60 || !isHome);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [isHome]);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const dark = scrolled || !isHome;

  return (
    <>
      <div className="relative z-50 bg-navy-900 py-2">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-xs text-white/70">
          <div className="hidden items-center gap-6 md:flex">
            <a href={`tel:${company.phone}`} className="flex items-center gap-1.5 transition-colors hover:text-gold-400">
              <Phone className="h-3.5 w-3.5" /> {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="transition-colors hover:text-gold-400">{company.email}</a>
          </div>
          <div className="flex items-center gap-2 text-white/50 md:ml-auto">
            <Globe className="h-3.5 w-3.5 text-gold-400" /> India's Premium Travel Partner
          </div>
        </div>
      </div>

      <header className={`fixed inset-x-0 top-8 z-50 transition-all duration-500 ${dark ? 'bg-white shadow-[0_2px_20px_rgba(15,23,42,0.08)] py-3' : 'bg-transparent py-5'}`}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Link to="/" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 transition-all duration-300 group-hover:shadow-gold-glow">
              <span className="font-display text-xl font-bold leading-none text-gold-400">V</span>
            </span>
            <span>
              <span className={`block font-display text-xl font-bold leading-none transition-colors ${dark ? 'text-navy-900' : 'text-white'}`}>Velvet Routes</span>
              <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-wide3 text-gold-500">Beyond Borders</span>
            </span>
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((l) => l.mega ? (
              <div key={l.href} className="relative" onMouseEnter={() => setMegaOpen(true)} onMouseLeave={() => setMegaOpen(false)}>
                <button className={`group flex items-center gap-1 text-sm font-medium transition-colors ${dark ? 'text-navy-700 hover:text-gold-500' : 'text-white/90 hover:text-gold-400'}`}>
                  {l.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute left-1/2 top-full mt-2 w-[600px] -translate-x-1/2 origin-top rounded-2xl border border-navy-100 bg-white p-6 shadow-luxury transition-all duration-200 ${megaOpen ? 'pointer-events-auto scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'}`}>
                  <div className="grid grid-cols-3 gap-4">
                    {destinations.map((d) => (
                      <Link key={d.slug} to={`/destinations/${d.slug}`} className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-warm-100">
                        <img src={d.card} alt={d.name} loading="lazy" className="h-12 w-16 shrink-0 rounded-lg object-cover" />
                        <div>
                          <p className="text-sm font-semibold text-navy-900 group-hover:text-gold-600">{d.name}</p>
                          <p className="text-xs text-navy-400">{d.tagline}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link to="/destinations" className="mt-4 flex items-center justify-center rounded-xl bg-navy-900 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold-400 hover:text-navy-900">
                    View All Destinations
                  </Link>
                </div>
              </div>
            ) : (
              <Link key={l.href} to={l.href} className={`group relative text-sm font-medium transition-colors ${dark ? 'text-navy-700 hover:text-gold-500' : 'text-white/90 hover:text-gold-400'}`}>
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex">
            <Link to="/contact" className="btn-primary text-xs">Plan Your Journey</Link>
          </div>

          <button onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" className={`rounded-lg p-2 transition-colors lg:hidden ${dark ? 'text-navy-900 hover:bg-navy-50' : 'text-white hover:bg-white/10'}`}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      <div className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div className={`absolute inset-0 bg-navy-950/70 backdrop-blur-sm transition-opacity duration-500 ${open ? 'opacity-100' : 'opacity-0'}`} onClick={() => setOpen(false)} />
        <div className={`absolute right-0 top-0 h-full w-80 overflow-y-auto bg-white shadow-2xl transition-transform duration-500 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between px-6 py-8">
            <span className="font-display text-xl font-bold text-navy-900">Velvet Routes</span>
            <button onClick={() => setOpen(false)} className="rounded-lg p-1.5 text-navy-500 hover:bg-navy-50"><X className="h-5 w-5" /></button>
          </div>
          <nav className="flex flex-col gap-1 px-4">
            {navLinks.map((l) => <Link key={l.href} to={l.href} className="rounded-xl px-4 py-3 text-base font-medium text-navy-700 transition-colors hover:bg-warm-100 hover:text-gold-600">{l.label}</Link>)}
          </nav>
          <div className="mt-6 px-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide2 text-navy-400">Popular Destinations</p>
            <div className="flex flex-wrap gap-2">
              {destinations.slice(0, 8).map((d) => (
                <Link key={d.slug} to={`/destinations/${d.slug}`} className="rounded-full bg-warm-100 px-3 py-1.5 text-xs font-medium text-navy-700 transition-colors hover:bg-gold-400 hover:text-navy-900">{d.name}</Link>
              ))}
            </div>
          </div>
          <div className="mt-auto space-y-3 px-6 py-8">
            <a href={`tel:${company.phone}`} className="flex items-center gap-2 text-sm text-navy-600"><Phone className="h-4 w-4 text-gold-500" />{company.phone}</a>
            <Link to="/contact" className="btn-primary w-full justify-center">Plan Your Journey</Link>
          </div>
        </div>
      </div>
    </>
  );
}
