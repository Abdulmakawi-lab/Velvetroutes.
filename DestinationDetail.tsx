import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Compass, Check, Sun, Cloud, Snowflake, CloudRain, ArrowRight, Star, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { getDestination, destinations } from '@/data/destinations';
import { useReveal } from '@/hooks/useReveal';
import InquiryForm from '@/components/InquiryForm';

const seasonIcons: Record<string, typeof Sun> = { hot: Sun, warm: Sun, cool: Cloud, cold: Snowflake, rain: CloudRain };

export default function DestinationDetail() {
  const { slug } = useParams();
  const dest = getDestination(slug || '');
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIdx, setGalleryIdx] = useState(0);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  if (!dest) return <Navigate to="/destinations" replace />;

  const { ref, visible } = useReveal();
  const isIraq = dest.slug === 'iraq';
  const related = destinations.filter((d) => d.slug !== dest.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-navy-950 pt-32">
        <div className="absolute inset-0">
          <img src={dest.hero} alt={dest.name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/30" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16">
          <motion.nav initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6 flex items-center gap-2 text-sm text-white/60">
            <Link to="/" className="hover:text-gold-400">Home</Link><span className="text-white/30">/</span>
            <Link to="/destinations" className="hover:text-gold-400">Destinations</Link><span className="text-white/30">/</span>
            <span className="text-gold-400">{dest.name}</span>
          </motion.nav>
          {isIraq && <span className="mb-4 inline-block rounded-full bg-gold-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide2 text-gold-400">Flagship Destination</span>}
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-display text-5xl font-bold text-white md:text-6xl lg:text-7xl">{dest.name}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-3 font-display text-2xl italic text-gold-400">{dest.tagline}</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-4 flex flex-wrap gap-4 text-sm text-white/70">
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-gold-400" />{dest.country}</span>
            <span className="flex items-center gap-1.5"><Compass className="h-4 w-4 text-gold-400" />{dest.region}</span>
            <span className="flex items-center gap-1.5"><Star className="h-4 w-4 text-gold-400" />{dest.category}</span>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
            <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
              <p className="section-tag">Overview</p>
              <h2 className="mt-6 font-display text-3xl font-bold text-navy-900 sm:text-4xl">Discover {dest.name}</h2>
              <p className="mt-6 text-lg leading-relaxed text-navy-600">{dest.overview}</p>
            </div>
            <div className={`reveal reveal-delay-2 ${visible ? 'is-visible' : ''}`}>
              <div className="overflow-hidden rounded-3xl shadow-luxury">
                <img src={dest.gallery[1] || dest.card} alt={dest.name} className="aspect-[4/3] w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {dest.gallery.length > 1 && (
        <section className="bg-warm-50 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <p className="section-tag">Gallery</p>
            <h2 className="mt-6 mb-10 font-display text-3xl font-bold text-navy-900 sm:text-4xl">Moments from {dest.name}</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {dest.gallery.map((img, i) => (
                <button key={i} onClick={() => { setGalleryIdx(i); setGalleryOpen(true); }} className={`group relative overflow-hidden rounded-2xl shadow-card transition-all hover:shadow-luxury ${i === 0 ? 'col-span-2 row-span-2' : ''}`}>
                  <img src={img} alt={`${dest.name} ${i + 1}`} loading="lazy" className={`w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110 ${i === 0 ? 'h-full min-h-[300px]' : 'h-48'}`} />
                  <div className="absolute inset-0 bg-navy-950/0 transition-colors group-hover:bg-navy-950/20" />
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      {galleryOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/90 p-6 backdrop-blur-md" onClick={() => setGalleryOpen(false)}>
          <button className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20" onClick={() => setGalleryOpen(false)}>✕</button>
          <img src={dest.gallery[galleryIdx]} alt={`${dest.name} ${galleryIdx + 1}`} className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      {/* Attractions */}
      {dest.attractions.length > 0 && (
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <p className="section-tag">Top Attractions</p>
            <h2 className="mt-6 mb-12 font-display text-3xl font-bold text-navy-900 sm:text-4xl">Must-Visit Places in {dest.name}</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {dest.attractions.map((a, i) => (
                <div key={i} className={`group rounded-2xl border border-navy-100 bg-warm-50 p-7 transition-all duration-500 hover:border-gold-300 hover:shadow-luxury reveal reveal-delay-${(i % 3) + 1} ${visible ? 'is-visible' : ''}`}>
                  <span className="font-display text-4xl font-bold text-gold-300/40 transition-colors group-hover:text-gold-400">0{i + 1}</span>
                  <h3 className="mt-3 font-display text-xl font-bold text-navy-900">{a.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">{a.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Seasons */}
      {dest.seasons.length > 0 && (
        <section className="bg-navy-900 py-20 md:py-28 noise">
          <div className="mx-auto max-w-7xl px-6">
            <p className="section-tag">Best Time to Visit</p>
            <h2 className="mt-6 mb-12 font-display text-3xl font-bold text-white sm:text-4xl">Travel Seasons</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {dest.seasons.map((s, i) => {
                const Icon = s.description.toLowerCase().includes('hot') ? Sun : s.description.toLowerCase().includes('cool') || s.description.toLowerCase().includes('cold') || s.description.toLowerCase().includes('snow') ? Snowflake : s.description.toLowerCase().includes('rain') || s.description.toLowerCase().includes('monsoon') ? CloudRain : Cloud;
                return (
                  <div key={i} className={`rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm reveal reveal-delay-${i + 1} ${visible ? 'is-visible' : ''}`}>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/10 ring-1 ring-gold-400/20"><Icon className="h-6 w-6 text-gold-400" strokeWidth={2} /></span>
                    <h3 className="mt-5 font-display text-xl font-bold text-white">{s.period}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{s.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Experiences */}
      {dest.experiences.length > 0 && (
        <section className="bg-warm-50 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <p className="section-tag">Local Experiences</p>
            <h2 className="mt-6 mb-12 font-display text-3xl font-bold text-navy-900 sm:text-4xl">Unforgettable Moments</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {dest.experiences.map((e, i) => (
                <div key={i} className={`flex items-start gap-3 rounded-2xl border border-navy-100 bg-white p-5 shadow-card transition-all hover:shadow-luxury reveal reveal-delay-${(i % 4) + 1} ${visible ? 'is-visible' : ''}`}>
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-400"><Check className="h-3.5 w-3.5 text-navy-900" strokeWidth={3} /></span>
                  <p className="text-sm font-medium text-navy-700">{e}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Itinerary */}
      {dest.itinerary.length > 0 && (
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-6">
            <p className="section-tag">Suggested Itinerary</p>
            <h2 className="mt-6 mb-12 font-display text-3xl font-bold text-navy-900 sm:text-4xl">Sample {dest.itinerary.length}-Day Journey</h2>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gold-200" />
              {dest.itinerary.map((day, i) => (
                <div key={i} className={`relative mb-8 pl-16 reveal reveal-delay-${Math.min(i + 1, 4)} ${visible ? 'is-visible' : ''}`}>
                  <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 font-display text-sm font-bold text-gold-400 shadow-card">{day.day.replace('Day ', '')}</span>
                  <div className="rounded-2xl border border-navy-100 bg-warm-50 p-6 shadow-card">
                    <p className="text-xs font-semibold uppercase tracking-wide2 text-gold-600">{day.day}</p>
                    <h3 className="mt-1 font-display text-xl font-bold text-navy-900">{day.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-600">{day.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Requirements & Tips */}
      {(dest.requirements.length > 0 || dest.travelTips.length > 0) && (
        <section className="bg-warm-50 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              {dest.requirements.length > 0 && (
                <div className={`reveal ${visible ? 'is-visible' : ''}`}>
                  <p className="section-tag">Travel Requirements</p>
                  <h2 className="mt-6 mb-6 font-display text-2xl font-bold text-navy-900">What You'll Need</h2>
                  <ul className="space-y-3">
                    {dest.requirements.map((r, i) => (
                      <li key={i} className="flex items-start gap-3 rounded-xl border border-navy-100 bg-white p-4 shadow-card">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" strokeWidth={2.5} />
                        <span className="text-sm text-navy-700">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {dest.travelTips.length > 0 && (
                <div className={`reveal reveal-delay-2 ${visible ? 'is-visible' : ''}`}>
                  <p className="section-tag">Travel Tips</p>
                  <h2 className="mt-6 mb-6 font-display text-2xl font-bold text-navy-900">Insider Advice</h2>
                  <ul className="space-y-3">
                    {dest.travelTips.map((t, i) => (
                      <li key={i} className="flex items-start gap-3 rounded-xl border border-navy-100 bg-white p-4 shadow-card">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-100 font-display text-xs font-bold text-gold-600">{i + 1}</span>
                        <span className="text-sm text-navy-700">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {dest.faqs.length > 0 && (
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6">
            <p className="section-tag justify-center">FAQs</p>
            <h2 className="mt-6 mb-10 text-center font-display text-3xl font-bold text-navy-900 sm:text-4xl">Questions About {dest.name}</h2>
            <div className="space-y-4">
              {dest.faqs.map((faq, i) => {
                const isOpen = faqOpen === i;
                return (
                  <div key={i} className={`overflow-hidden rounded-2xl border transition-all ${isOpen ? 'border-gold-300 bg-gold-50/40' : 'border-navy-100 bg-white'}`}>
                    <button onClick={() => setFaqOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
                      <span className={`font-display text-lg font-semibold ${isOpen ? 'text-gold-600' : 'text-navy-900'}`}>{faq.q}</span>
                      <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-gold-500' : 'text-navy-400'}`} />
                    </button>
                    <div className="grid transition-all duration-400" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                      <div className="overflow-hidden"><p className="px-5 pb-5 leading-relaxed text-navy-600">{faq.a}</p></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Inquiry + Related */}
      <section className="bg-warm-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="section-tag">Plan Your Trip</p>
              <h2 className="mt-6 font-display text-3xl font-bold text-navy-900 sm:text-4xl">Enquire About {dest.name}</h2>
              <p className="mt-5 text-lg text-navy-500">Share your travel plans and we'll craft the perfect {dest.name} journey for you. Our experts will respond within 24 hours.</p>
              <div className="mt-8 space-y-3">
                {[`${dest.attractions.length} top attractions to visit`, `${dest.experiences.length} unique local experiences`, `${dest.itinerary.length}-day sample itinerary included`, 'Complete visa assistance provided'].map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-sm text-navy-600"><Check className="h-5 w-5 text-gold-500" strokeWidth={2.5} />{f}</div>
                ))}
              </div>
            </div>
            <InquiryForm destination={dest.name} />
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 font-display text-3xl font-bold text-navy-900">Explore Other Destinations</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((d) => (
              <Link key={d.slug} to={`/destinations/${d.slug}`} className="group relative overflow-hidden rounded-2xl shadow-card transition-all hover:shadow-luxury">
                <div className="relative h-56 overflow-hidden">
                  <img src={d.card} alt={d.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent" />
                  <div className="absolute bottom-0 p-4"><h3 className="font-display text-xl font-bold text-white">{d.name}</h3><p className="text-xs text-gold-300">{d.tagline}</p></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
