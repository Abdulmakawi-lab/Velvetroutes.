import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, MessageCircle, ArrowRight, Globe } from 'lucide-react';
import { company } from '@/data/site';
import { destinations } from '@/data/destinations';

const socials = [
  { icon: Instagram, label: 'Instagram', href: company.instagram },
  { icon: Facebook, label: 'Facebook', href: company.facebook },
  { icon: Youtube, label: 'YouTube', href: company.youtube },
  { icon: MessageCircle, label: 'WhatsApp', href: `https://wa.me/${company.whatsapp}` },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(''); }
  };

  return (
    <footer className="relative overflow-hidden bg-navy-950 pt-20 noise">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.4fr]">
          <div className="max-w-sm">
            <Link to="/" className="group flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400 transition-all duration-300 group-hover:shadow-gold-glow">
                <span className="font-display text-2xl font-bold leading-none text-navy-900">V</span>
              </span>
              <span>
                <span className="block font-display text-2xl font-bold text-white">Velvet Routes</span>
                <span className="text-[10px] font-semibold uppercase tracking-wide3 text-gold-400">Beyond Borders</span>
              </span>
            </Link>
            <p className="mt-6 leading-relaxed text-white/60">Premium international travel experiences — from sacred pilgrimages in Iraq to luxury holidays across the globe. We craft journeys that move your soul.</p>
            <div className="mt-7 flex gap-3">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/60 transition-all duration-300 hover:border-gold-400 hover:bg-gold-400 hover:text-navy-900">
                  <s.icon className="h-5 w-5" strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-wide3 text-gold-400">Destinations</p>
            <ul className="space-y-3">
              {destinations.slice(0, 6).map((d) => (
                <li key={d.slug}><Link to={`/destinations/${d.slug}`} className="group inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-gold-400"><ArrowRight className="h-3 w-0 overflow-hidden transition-all duration-300 group-hover:w-3 group-hover:mr-1" strokeWidth={2.5} />{d.name}</Link></li>
              ))}
              <li><Link to="/destinations" className="text-sm font-semibold text-gold-400 hover:text-gold-300">View All →</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-wide3 text-gold-400">Services</p>
            <ul className="space-y-3">
              <li><Link to="/services/visa-assistance" className="text-sm text-white/60 transition-colors hover:text-gold-400">Visa Assistance</Link></li>
              <li><Link to="/services/flight-booking" className="text-sm text-white/60 transition-colors hover:text-gold-400">Flight Booking</Link></li>
              <li><Link to="/services/hotel-booking" className="text-sm text-white/60 transition-colors hover:text-gold-400">Hotel Reservations</Link></li>
              <li><Link to="/services/customized-holidays" className="text-sm text-white/60 transition-colors hover:text-gold-400">Customized Holidays</Link></li>
              <li><Link to="/services/corporate-travel" className="text-sm text-white/60 transition-colors hover:text-gold-400">Corporate Travel</Link></li>
              <li><Link to="/services/religious-tourism" className="text-sm text-white/60 transition-colors hover:text-gold-400">Religious Tourism</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-wide3 text-gold-400">Quick Links</p>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-white/60 transition-colors hover:text-gold-400">About Us</Link></li>
              <li><Link to="/blog" className="text-sm text-white/60 transition-colors hover:text-gold-400">Blog</Link></li>
              <li><Link to="/testimonials" className="text-sm text-white/60 transition-colors hover:text-gold-400">Testimonials</Link></li>
              <li><Link to="/contact" className="text-sm text-white/60 transition-colors hover:text-gold-400">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-wide3 text-gold-400">Newsletter</p>
            <p className="mb-4 text-sm text-white/60">Travel inspiration, destination guides, and exclusive updates — delivered to your inbox.</p>
            {subscribed ? (
              <p className="rounded-xl bg-gold-400/10 px-4 py-3 text-sm text-gold-400">Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold-400 focus:outline-none" />
                <button type="submit" className="rounded-full bg-gold-400 py-3 text-sm font-semibold text-navy-900 transition-all hover:bg-gold-300">Subscribe</button>
              </form>
            )}
            <div className="mt-6 space-y-2">
              <a href={`tel:${company.phone}`} className="flex items-center gap-2 text-sm text-white/60 hover:text-gold-400"><Phone className="h-4 w-4 text-gold-400" />{company.phone}</a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-2 text-sm text-white/60 hover:text-gold-400"><Mail className="h-4 w-4 text-gold-400" />{company.email}</a>
              <p className="flex items-start gap-2 text-sm text-white/60"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />{company.address}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Velvet Routes — Beyond Borders. All rights reserved.</p>
          <p className="flex items-center gap-2"><Globe className="h-4 w-4 text-gold-400/60" />Crafted for travellers who seek more than just a destination</p>
        </div>
      </div>
    </footer>
  );
}
