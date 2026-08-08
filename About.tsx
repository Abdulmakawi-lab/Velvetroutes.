import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plane, FileCheck, Map, Hotel, Compass, Star, Target, Users, Award } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { company, stats } from '@/data/site';
import { useReveal, useCountUp } from '@/hooks/useReveal';

const pillars = [
  { icon: Target, title: 'Our Mission', text: 'To make every journey seamless, comfortable, and deeply meaningful — so you can focus entirely on the experience.' },
  { icon: Compass, title: 'Our Vision', text: 'To be the most trusted name in international travel, known for devotion, reliability, and the highest standard of care.' },
  { icon: Users, title: 'Our Promise', text: 'We plan. You travel. Every detail — visa, hotel, food, transport — handled with care so your heart is free to explore.' },
];

const illustrationItems = [
  { icon: Plane, label: 'Flights', pos: 'top-4 left-4', delay: '0s' },
  { icon: FileCheck, label: 'Visa', pos: 'top-12 right-6', delay: '0.5s' },
  { icon: Hotel, label: 'Hotels', pos: 'bottom-28 left-2', delay: '1s' },
  { icon: Compass, label: 'Explore', pos: 'bottom-20 right-4', delay: '1.5s' },
];

function StatItem({ stat, start, index }: { stat: typeof stats[0]; start: boolean; index: number }) {
  const value = useCountUp(stat.value, 2200, start);
  return (
    <div className={`text-center reveal reveal-delay-${index + 1} ${start ? 'is-visible' : ''}`}>
      <p className="font-display text-4xl font-bold text-gold-gradient sm:text-5xl">{value}{stat.suffix}</p>
      <p className="mt-2 text-sm text-navy-500">{stat.label}</p>
    </div>
  );
}

export default function About() {
  const { ref, visible } = useReveal();
  const { ref: ref2, visible: vis2 } = useReveal();

  return (
    <>
      <PageHero title="About Velvet Routes" subtitle="A decade of crafting journeys that move the soul — from sacred pilgrimages to luxury holidays worldwide." image="https://images.pexels.com/photos/7235895/pexels-photo-7235895.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000" crumbs={[{ label: 'About' }]} />

      <section className="relative overflow-hidden bg-warm-50 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div ref={ref} className={`reveal relative ${visible ? 'is-visible' : ''}`}>
              <div className="relative aspect-[5/4]">
                <div className="absolute inset-0 overflow-hidden rounded-3xl shadow-luxury">
                  <img src="https://images.pexels.com/photos/7235895/pexels-photo-7235895.jpeg?auto=compress&cs=tinysrgb&h=700&w=900" alt="Travel planning with world map, passport, and compass" className="h-full w-full object-cover" />
                </div>
                <div className="absolute -bottom-8 -left-6 h-48 w-40 overflow-hidden rounded-2xl border-4 border-white shadow-luxury md:h-56 md:w-48">
                  <img src="https://images.pexels.com/photos/18766057/pexels-photo-18766057.jpeg?auto=compress&cs=tinysrgb&h=400&w=320" alt="Imam Hussain Shrine in Karbala" className="h-full w-full object-cover" />
                </div>
                {illustrationItems.map((item) => (
                  <div key={item.label} className={`absolute ${item.pos} glass-gold flex items-center gap-2 rounded-2xl px-4 py-2.5 shadow-luxury`} style={{ animation: 'float 6s ease-in-out infinite', animationDelay: item.delay }}>
                    <item.icon className="h-4 w-4 text-gold-600" strokeWidth={2} />
                    <span className="text-xs font-semibold text-navy-900">{item.label}</span>
                  </div>
                ))}
                <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full border-2 border-gold-400/30" />
              </div>
            </div>

            <div className={`reveal reveal-delay-2 ${visible ? 'is-visible' : ''}`}>
              <p className="section-tag">Our Story</p>
              <h2 className="mt-6 font-display text-4xl font-bold leading-[1.1] text-navy-900 sm:text-5xl">Your Journey, <span className="italic text-gold-gradient">Crafted with Care.</span></h2>
              <div className="mt-7 space-y-5 text-lg leading-relaxed text-navy-600">
                <p>{company.name} is a premium international travel agency based in Pune, India. We specialize in curating extraordinary travel experiences — whether a sacred pilgrimage to Iraq, an Umrah journey to Makkah, or a luxury holiday anywhere in the world.</p>
                <p>Founded by <span className="font-semibold text-navy-900">{company.founder}</span>, Velvet Routes was born from a simple belief: that travel is more than movement — it is transformation. Whether standing before the golden shrine of Imam Hussain (A.S.) in Karbala or watching the sunset over the Swiss Alps, every journey should move the soul.</p>
                <p>From visa assistance and flight bookings to luxury hotel reservations and fully customized itineraries, we handle every detail so you can focus on what truly matters — the experience.</p>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-navy-100 pt-8">
                <div><p className="font-display text-3xl font-bold text-gold-gradient">10+</p><p className="mt-1 text-sm text-navy-500">Years</p></div>
                <div><p className="font-display text-3xl font-bold text-gold-gradient">20+</p><p className="mt-1 text-sm text-navy-500">Destinations</p></div>
                <div><p className="font-display text-3xl font-bold text-gold-gradient">1200+</p><p className="mt-1 text-sm text-navy-500">Travellers</p></div>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-gold-200 bg-gold-50/60 p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-400 text-navy-900"><Star className="h-5 w-5 fill-navy-900" /></div>
                    <div><p className="font-semibold text-navy-900">{company.founder}</p><p className="text-sm text-navy-500">{company.founderTitle}</p></div>
                  </div>
                </div>
                <div className="rounded-2xl border border-navy-200 bg-white p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-gold-400"><Star className="h-5 w-5 fill-gold-400" /></div>
                    <div><p className="font-semibold text-navy-900">{company.director}</p><p className="text-sm text-navy-500">{company.directorTitle}</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <div key={p.title} className={`group rounded-2xl border border-navy-100 bg-white p-8 shadow-card transition-all duration-500 hover:shadow-luxury hover:border-gold-300 reveal reveal-delay-${i + 1} ${visible ? 'is-visible' : ''}`}>
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold-50 transition-all duration-500 group-hover:bg-gold-400"><p.icon className="h-7 w-7 text-gold-500 transition-colors group-hover:text-navy-900" strokeWidth={1.8} /></span>
                <h3 className="mt-6 font-display text-2xl font-bold text-navy-900">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-navy-600">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-navy-900 py-20 noise">
        <div ref={ref2} className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => <StatItem key={s.label} stat={s} start={vis2} index={i} />)}
          </div>
        </div>
      </section>

      <section className="relative bg-white py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl font-bold text-navy-900 sm:text-5xl">Ready to Begin Your Journey?</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-navy-500">Let us turn your travel dreams into reality. No destination is too far, no detail too small.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/destinations" className="btn-primary">Explore Destinations</Link>
            <Link to="/contact" className="btn-outline-gold">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
