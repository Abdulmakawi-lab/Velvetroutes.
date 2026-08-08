import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { blogPosts } from '@/data/site';
import { useReveal } from '@/hooks/useReveal';

export default function Blog() {
  const { ref, visible } = useReveal();
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <PageHero title="Travel Blog & Guides" subtitle="Destination guides, travel tips, visa information, and cultural insights to inspire your next journey." image="https://images.pexels.com/photos/6874283/pexels-photo-6874283.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000" crumbs={[{ label: 'Blog' }]} />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          {/* Featured post */}
          <Link to={`/blog/${featured.slug}`} className="group mb-12 grid gap-8 overflow-hidden rounded-3xl border border-navy-100 bg-warm-50 shadow-card transition-all hover:shadow-luxury lg:grid-cols-2">
            <div className="relative h-64 overflow-hidden lg:h-full">
              <img src={featured.image} alt={featured.title} className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-105" />
            </div>
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-gold-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide2 text-gold-600">{featured.category}</span>
                <span className="flex items-center gap-1 text-xs text-navy-400"><Calendar className="h-3 w-3" />{featured.date}</span>
                <span className="flex items-center gap-1 text-xs text-navy-400"><Clock className="h-3 w-3" />{featured.readTime}</span>
              </div>
              <h2 className="mt-5 font-display text-2xl font-bold text-navy-900 sm:text-3xl group-hover:text-gold-600">{featured.title}</h2>
              <p className="mt-4 leading-relaxed text-navy-600">{featured.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-600">Read Article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} /></span>
            </div>
          </Link>

          {/* Grid */}
          <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className={`group overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-luxury reveal reveal-delay-${(i % 3) + 1} ${visible ? 'is-visible' : ''}`}>
                <div className="relative h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-900">{post.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-navy-400">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold text-navy-900 group-hover:text-gold-600">{post.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-500 line-clamp-3">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-600">Read more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
