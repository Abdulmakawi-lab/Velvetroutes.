import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { testimonials } from '@/data/site';
import { useReveal } from '@/hooks/useReveal';
import { Link } from 'react-router-dom';

export default function Testimonials() {
  const [i, setI] = useState(0);
  const { ref, visible } = useReveal();
  const t = testimonials[i];
  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setI((p) => (p + 1) % testimonials.length);

  return (
    <>
      <PageHero title="Traveller Stories" subtitle="Real experiences from real travellers. See what our clients say about their Velvet Routes journeys." image="https://images.pexels.com/photos/6874283/pexels-photo-6874283.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000" crumbs={[{ label: 'Testimonials' }]} />

      <section className="bg-warm-50 py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          {/* Featured carousel */}
          <div className="relative rounded-3xl border border-navy-100 bg-white p-8 shadow-luxury md:p-12">
            <Quote className="mx-auto h-12 w-12 text-gold-300/40" strokeWidth={1} />
            <div key={i} className="animate-fade-in">
              <div className="mt-6 flex items-center justify-center gap-1">{[...Array(t.rating)].map((_, s) => <Star key={s} className="h-5 w-5 fill-gold-400 text-gold-400" strokeWidth={0} />)}</div>
              <p className="mt-6 font-display text-xl font-medium italic leading-[1.5] text-navy-800 sm:text-2xl md:text-3xl">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 font-display text-sm font-bold text-gold-400">{t.avatar}</div>
                <div className="text-left"><p className="font-semibold text-navy-900">{t.name}</p><p className="text-sm text-navy-500">{t.city} · {t.journey}</p></div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button onClick={prev} className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-200 bg-white text-navy-600 shadow-card transition-all hover:border-gold-400 hover:bg-gold-400 hover:text-navy-900"><ChevronLeft className="h-5 w-5" strokeWidth={2.5} /></button>
            <div className="flex items-center gap-2">{testimonials.map((_, idx) => <button key={idx} onClick={() => setI(idx)} className={`h-2 rounded-full transition-all duration-300 ${i === idx ? 'w-8 bg-gold-400' : 'w-2 bg-navy-200'}`} />)}</div>
            <button onClick={next} className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-200 bg-white text-navy-600 shadow-card transition-all hover:border-gold-400 hover:bg-gold-400 hover:text-navy-900"><ChevronRight className="h-5 w-5" strokeWidth={2.5} /></button>
          </div>
        </div>
      </section>

      {/* Grid of all testimonials */}
      <section className="bg-white py-20 md:py-28">
        <div ref={ref} className="mx-auto max-w-7xl px-6">
          <h2 className={`mb-12 text-center font-display text-3xl font-bold text-navy-900 sm:text-4xl reveal ${visible ? 'is-visible' : ''}`}>All Reviews</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className={`rounded-2xl border border-navy-100 bg-warm-50 p-7 shadow-card transition-all hover:shadow-luxury reveal reveal-delay-${(i % 3) + 1} ${visible ? 'is-visible' : ''}`}>
                <div className="flex items-center gap-1">{[...Array(t.rating)].map((_, s) => <Star key={s} className="h-4 w-4 fill-gold-400 text-gold-400" strokeWidth={0} />)}</div>
                <p className="mt-4 text-sm leading-relaxed text-navy-600 line-clamp-3">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-5 flex items-center gap-3 border-t border-navy-100 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 font-display text-xs font-bold text-gold-400">{t.avatar}</div>
                  <div><p className="text-sm font-semibold text-navy-900">{t.name}</p><p className="text-xs text-navy-500">{t.city} · {t.journey}</p></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link to="/contact" className="btn-primary">Start Your Journey <ChevronRight className="h-4 w-4" strokeWidth={2.5} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
