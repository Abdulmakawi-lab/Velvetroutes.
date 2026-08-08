import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, MapPin, Star, Shield, Globe, Plane, FileCheck,
  Building2, Sparkles, Users, Briefcase, MessageSquare, Moon, Bus, Heart,
  Globe2, HeartHandshake, SlidersHorizontal, Award, Phone, Compass, Hotel,
  type LucideIcon,
} from 'lucide-react';
import { useReveal, useCountUp } from '@/hooks/useReveal';
import { destinations, featuredDestinations } from '@/data/destinations';
import { services, whyUs, testimonials, stats, company } from '@/data/site';

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden bg-navy-950">
      <div className="absolute inset-0 animate-slow-zoom">
        <img src="https://images.pexels.com/photos/11278700/pexels-photo-11278700.jpeg?auto=compress&cs=tinysrgb&h=1400&w=2000" alt="Airplane wing above clouds at golden sunset" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/60 to-navy-950/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-900/40" />
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-gold-400/50 to-transparent" />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-24 pb-20">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-8 flex items-center gap-3">
          <span className="h-px w-12 bg-gold-400" />
          <span className="text-xs font-semibold uppercase tracking-wide3 text-gold-400">{company.tagline}</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="max-w-4xl font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          Where Every Journey Becomes <span className="text-gold-gradient italic">Extraordinary.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="mt-7 max-w-xl text-lg leading-relaxed text-white/80">
          Premium international travel — sacred pilgrimages, luxury holidays, and unforgettable experiences across 20+ destinations worldwide.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }} className="mt-10 flex flex-wrap items-center gap-4">
          <Link to="/destinations" className="btn-primary group">Explore Destinations <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} /></Link>
          <Link to="/contact" className="btn-secondary">Plan Your Journey</Link>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.9 }} className="mt-14 flex flex-wrap gap-6">
          {[{ icon: MapPin, text: '20+ Destinations' }, { icon: Star, text: '1,200+ Happy Travellers' }, { icon: Shield, text: '10+ Years of Trust' }].map((b) => (
            <div key={b.text} className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-400/15 ring-1 ring-gold-400/30"><b.icon className="h-4 w-4 text-gold-400" strokeWidth={2} /></span>
              <span className="text-sm font-medium text-white/80">{b.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="mx-auto max-w-7xl px-6 pb-8">
          <div className="flex flex-wrap items-center gap-3">
            {destinations.slice(0, 7).map((d) => (
              <Link key={d.slug} to={`/destinations/${d.slug}`} className="glass rounded-full px-4 py-1.5 text-xs font-medium text-white/90 transition-all duration-200 hover:bg-gold-400/20 hover:text-gold-300">{d.name}</Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Iraq Showcase ───────────────────────────────────────────────────────────
function IraqShowcase() {
  const { ref, visible } = useReveal();
  const iraq = destinations.find((d) => d.slug === 'iraq')!;
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 md:py-32 noise">
      <div className="absolute inset-0 opacity-15"><img src={iraq.hero} alt="" className="h-full w-full object-cover" /></div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/90 to-navy-950" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div ref={ref} className={`reveal mb-16 max-w-2xl ${visible ? 'is-visible' : ''}`}>
          <div className="mb-6 flex items-center gap-3">
            <span className="rounded-full bg-gold-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide2 text-gold-400">Flagship Destination</span>
            <span className="h-px w-12 bg-gold-400/50" />
          </div>
          <h2 className="font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl">Iraq — <span className="italic text-gold-gradient">The Sacred Journey</span></h2>
          <p className="mt-6 text-lg leading-relaxed text-white/70">{iraq.overview.split('.')[0]}.</p>
          <Link to="/destinations/iraq" className="btn-primary mt-8 group">Explore Iraq <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} /></Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {iraq.gallery.slice(0, 3).map((img, i) => (
            <Link key={i} to="/destinations/iraq" className={`group relative overflow-hidden rounded-2xl shadow-luxury reveal reveal-delay-${i + 1} ${visible ? 'is-visible' : ''}`}>
              <div className="relative h-64 overflow-hidden">
                <img src={img} alt={`Iraq ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-xl font-bold text-white">{iraq.attractions[i]?.name || `Iraq ${i + 1}`}</h3>
                  <p className="mt-1 text-xs text-gold-300 line-clamp-2">{iraq.attractions[i]?.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Featured Destinations ───────────────────────────────────────────────────
function FeaturedDestinations() {
  const { ref, visible } = useReveal();
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={ref} className={`reveal mb-14 text-center ${visible ? 'is-visible' : ''}`}>
          <p className="section-tag justify-center">Worldwide Destinations</p>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight text-navy-900 sm:text-5xl md:text-6xl">The World is <span className="italic text-gold-gradient">Yours to Explore</span></h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-navy-500">From the golden shrines of Iraq to the snow-capped Swiss Alps — we craft unforgettable journeys to the world's most breathtaking destinations.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {destinations.slice(1, 5).map((d, i) => (
            <Link key={d.slug} to={`/destinations/${d.slug}`} className={`group relative overflow-hidden rounded-2xl shadow-card transition-all duration-500 hover:shadow-luxury reveal reveal-delay-${i + 1} ${visible ? 'is-visible' : ''}`}>
              <div className="relative h-80 overflow-hidden">
                <img src={d.card} alt={d.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/20 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-900 backdrop-blur-sm">{d.category}</span>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="flex items-center gap-1.5 text-sm text-gold-300"><MapPin className="h-4 w-4" strokeWidth={2} />{d.country}</p>
                  <h3 className="mt-1 font-display text-2xl font-bold text-white">{d.name}</h3>
                  <p className="mt-0.5 text-sm italic text-white/70">{d.tagline}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/destinations" className="btn-outline-gold">View All Destinations <ArrowRight className="h-4 w-4" strokeWidth={2.5} /></Link>
        </div>
      </div>
    </section>
  );
}

// ─── Services Preview ────────────────────────────────────────────────────────
const serviceIcons: Record<string, LucideIcon> = { Globe, FileCheck, Plane, Building2, Sparkles, Users, Briefcase, MessageSquare, Moon, Bus, Heart, Shield };

function ServicesPreview() {
  const { ref, visible } = useReveal();
  return (
    <section className="relative overflow-hidden bg-warm-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={ref} className={`reveal mb-16 text-center ${visible ? 'is-visible' : ''}`}>
          <p className="section-tag justify-center">What We Do</p>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight text-navy-900 sm:text-5xl md:text-6xl">Every Service for <span className="italic text-gold-gradient">Your Journey</span></h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-navy-500">From the first visa stamp to the final boarding pass — we handle every aspect of your travel with precision and care.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 8).map((s, i) => {
            const Icon = serviceIcons[s.icon] ?? Globe;
            return (
              <Link key={s.slug} to={`/services/${s.slug}`} className={`group relative overflow-hidden rounded-3xl border border-navy-100 bg-white p-7 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-luxury hover:border-gold-300 reveal reveal-delay-${(i % 4) + 1} ${visible ? 'is-visible' : ''}`}>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold-50/0 to-gold-50/0 transition-all duration-500 group-hover:from-gold-50/60 group-hover:to-transparent" />
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 transition-all duration-500 group-hover:bg-gold-400 group-hover:shadow-gold-glow"><Icon className="h-7 w-7 text-gold-400 transition-colors duration-500 group-hover:text-navy-900" strokeWidth={1.8} /></span>
                <h3 className="relative mt-6 font-display text-xl font-bold text-navy-900">{s.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-navy-500 line-clamp-3">{s.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Why Choose Us ───────────────────────────────────────────────────────────
const whyIcons: Record<string, LucideIcon> = { Globe2, Star, Shield, HeartHandshake, SlidersHorizontal, Award };

function WhyChooseUs() {
  const { ref, visible } = useReveal();
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24 md:py-32 noise">
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-gold-400/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-gold-400/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div ref={ref} className={`reveal mb-16 max-w-2xl ${visible ? 'is-visible' : ''}`}>
          <p className="section-tag">Why Velvet Routes</p>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">Trusted by Travellers. <span className="italic text-gold-gradient">Built on Care.</span></h2>
          <p className="mt-5 text-lg text-white/60">We hold ourselves to the highest standards — because your journey deserves nothing less than excellence.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((f, i) => {
            const Icon = whyIcons[f.icon] ?? Star;
            return (
              <div key={f.title} className={`group rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-500 hover:border-gold-400/30 hover:bg-white/8 reveal reveal-delay-${(i % 3) + 1} ${visible ? 'is-visible' : ''}`}>
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/10 ring-1 ring-gold-400/20 transition-all duration-500 group-hover:bg-gold-400"><Icon className="h-6 w-6 text-gold-400 transition-colors group-hover:text-navy-900" strokeWidth={2} /></span>
                  <span className="font-display text-3xl font-bold text-gold-gradient">{f.stat}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-white">{f.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/60">{f.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Stats ───────────────────────────────────────────────────────────────────
function StatItem({ stat, start, index }: { stat: typeof stats[0]; start: boolean; index: number }) {
  const value = useCountUp(stat.value, 2200, start);
  return (
    <div className={`text-center reveal reveal-delay-${index + 1} ${start ? 'is-visible' : ''}`}>
      <p className="font-display text-5xl font-bold text-gold-gradient sm:text-6xl">{value}{stat.suffix}</p>
      <p className="mt-3 text-sm font-semibold uppercase tracking-wide2 text-white/50">{stat.label}</p>
    </div>
  );
}

function StatsSection() {
  const { ref, visible } = useReveal();
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 md:py-24 noise">
      <div className="absolute inset-0 opacity-10"><img src="https://images.pexels.com/photos/2387803/pexels-photo-2387803.jpeg?auto=compress&cs=tinysrgb&h=500&w=1600" alt="" className="h-full w-full object-cover" /></div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/80 to-navy-950" />
      <div ref={ref} className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => <StatItem key={s.label} stat={s} start={visible} index={i} />)}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials Preview ────────────────────────────────────────────────────
function TestimonialsPreview() {
  const [i, setI] = useState(0);
  const { ref, visible } = useReveal();
  const t = testimonials[i];
  return (
    <section className="relative bg-warm-50 py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <p className="section-tag justify-center">Traveller Stories</p>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight text-navy-900 sm:text-5xl md:text-6xl">Loved by <span className="italic text-gold-gradient">Our Travellers</span></h2>
          <div key={i} className="mt-14 rounded-3xl border border-navy-100 bg-white p-8 shadow-luxury md:p-12">
            <div className="flex items-center justify-center gap-1">{[...Array(t.rating)].map((_, s) => <Star key={s} className="h-5 w-5 fill-gold-400 text-gold-400" strokeWidth={0} />)}</div>
            <p className="mt-6 font-display text-xl font-medium italic leading-[1.5] text-navy-800 sm:text-2xl">&ldquo;{t.text}&rdquo;</p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 font-display text-sm font-bold text-gold-400">{t.avatar}</div>
              <div className="text-left"><p className="font-semibold text-navy-900">{t.name}</p><p className="text-sm text-navy-500">{t.city} · {t.journey}</p></div>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((_, idx) => <button key={idx} onClick={() => setI(idx)} className={`h-2 rounded-full transition-all duration-300 ${i === idx ? 'w-8 bg-gold-400' : 'w-2 bg-navy-200 hover:bg-navy-300'}`} />)}
          </div>
          <Link to="/testimonials" className="btn-outline-gold mt-10">Read More Stories <ArrowRight className="h-4 w-4" strokeWidth={2.5} /></Link>
        </div>
      </div>
    </section>
  );
}

// ─── CTA ─────────────────────────────────────────────────────────────────────
function CTA() {
  const { ref, visible } = useReveal();
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20">
      <div className="absolute inset-0"><img src="https://images.pexels.com/photos/11278700/pexels-photo-11278700.jpeg?auto=compress&cs=tinysrgb&h=600&w=1600" alt="" className="h-full w-full object-cover opacity-20" /></div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 to-navy-900/80" />
      <div ref={ref} className={`relative mx-auto max-w-4xl px-6 text-center ${visible ? 'is-visible' : ''} reveal`}>
        <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">Your Next Adventure <span className="italic text-gold-gradient">Awaits</span></h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">Let us craft the journey of a lifetime. No destination is too far, no detail too small.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="btn-primary group">Contact Our Experts <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} /></Link>
          <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-secondary"><Phone className="h-4 w-4" /> WhatsApp Us</a>
        </div>
      </div>
    </section>
  );
}

// ─── Home Page ───────────────────────────────────────────────────────────────
import { useState } from 'react';
export default function Home() {
  return (
    <>
      <Hero />
      <IraqShowcase />
      <FeaturedDestinations />
      <ServicesPreview />
      <WhyChooseUs />
      <StatsSection />
      <TestimonialsPreview />
      <CTA />
    </>
  );
}
