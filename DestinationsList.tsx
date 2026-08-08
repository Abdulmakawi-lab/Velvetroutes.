import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { destinations } from '@/data/destinations';
import { useReveal } from '@/hooks/useReveal';

export default function DestinationsList() {
  const { ref, visible } = useReveal();
  const iraq = destinations.find((d) => d.slug === 'iraq')!;
  const rest = destinations.filter((d) => d.slug !== 'iraq');

  return (
    <>
      <PageHero title="Worldwide Destinations" subtitle="From the sacred shrines of Iraq to the beaches of the Maldives and the cities of Europe — explore 20+ destinations we craft journeys to." image="https://images.pexels.com/photos/20411450/pexels-photo-20411450.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000" crumbs={[{ label: 'Destinations' }]} />

      {/* Iraq featured banner */}
      <section className="bg-warm-50 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <Link to="/destinations/iraq" className="group relative block overflow-hidden rounded-3xl shadow-luxury">
            <div className="relative h-80 md:h-96 overflow-hidden">
              <img src={iraq.hero} alt="Iraq pilgrimage" className="h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/70 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16">
                <span className="mb-4 w-fit rounded-full bg-gold-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide2 text-gold-400">Flagship Destination</span>
                <h2 className="max-w-lg font-display text-4xl font-bold text-white md:text-5xl">Iraq — The Sacred Journey</h2>
                <p className="mt-3 max-w-md text-white/70">{iraq.tagline} · Najaf, Karbala, Kazmain, Samarra, Baghdad</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-400">Explore Iraq <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} /></span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All destinations grid */}
      <section className="bg-warm-50 py-16 md:py-24">
        <div ref={ref} className="mx-auto max-w-7xl px-6">
          <div className={`reveal mb-12 ${visible ? 'is-visible' : ''}`}>
            <p className="section-tag">Worldwide Tours</p>
            <h2 className="mt-6 font-display text-4xl font-bold text-navy-900 sm:text-5xl">All Destinations</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {rest.map((d, i) => (
              <Link key={d.slug} to={`/destinations/${d.slug}`} className={`group relative overflow-hidden rounded-2xl shadow-card transition-all duration-500 hover:shadow-luxury reveal reveal-delay-${(i % 4) + 1} ${visible ? 'is-visible' : ''}`}>
                <div className="relative h-72 overflow-hidden">
                  <img src={d.card} alt={d.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/20 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-semibold text-navy-900">{d.category}</span>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="flex items-center gap-1.5 text-xs text-gold-300"><MapPin className="h-3.5 w-3.5" strokeWidth={2} />{d.country}</p>
                    <h3 className="mt-1 font-display text-xl font-bold text-white">{d.name}</h3>
                    <p className="mt-0.5 text-xs italic text-white/70">{d.tagline}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
