import { useParams, Navigate, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, ChevronRight, Share2 } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { blogPosts } from '@/data/site';
import { useReveal } from '@/hooks/useReveal';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const { ref, visible } = useReveal();
  if (!post) return <Navigate to="/blog" replace />;
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <PageHero title={post.title} image={post.image} crumbs={[{ label: 'Blog', to: '/blog' }, { label: post.category }]} />

      <article className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-8 flex items-center gap-4">
            <span className="rounded-full bg-gold-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide2 text-gold-600">{post.category}</span>
            <span className="flex items-center gap-1 text-sm text-navy-400"><Calendar className="h-3.5 w-3.5" />{post.date}</span>
            <span className="flex items-center gap-1 text-sm text-navy-400"><Clock className="h-3.5 w-3.5" />{post.readTime} read</span>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-luxury">
            <img src={post.image} alt={post.title} className="aspect-[16/9] w-full object-cover" />
          </div>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-navy-700">
            <p>{post.excerpt}</p>
            <p>Travel is more than just visiting a new place — it's about immersing yourself in a different culture, tasting unfamiliar flavours, and collecting moments that last a lifetime. At Velvet Routes, we believe every journey should be thoughtfully planned and deeply personal.</p>
            <h2 className="font-display text-2xl font-bold text-navy-900">Planning Your Journey</h2>
            <p>The key to a successful trip lies in preparation. From understanding visa requirements to choosing the right season, every detail matters. Our travel consultants at Velvet Routes have years of experience crafting journeys that are both seamless and memorable.</p>
            <h2 className="font-display text-2xl font-bold text-navy-900">What to Expect</h2>
            <p>Whether you're planning a sacred pilgrimage to Iraq, a luxury honeymoon in the Maldives, or a cultural tour of Europe, we handle every aspect — flights, hotels, visas, transport, and curated experiences. You focus on the adventure; we handle the logistics.</p>
            <h2 className="font-display text-2xl font-bold text-navy-900">Tips from Our Experts</h2>
            <ul className="space-y-3">
              {['Research your destination\'s culture and customs before you go', 'Pack light but smart — essentials first', 'Keep digital and physical copies of important documents', 'Stay connected — share your itinerary with family', 'Embrace the unexpected — the best moments are often unplanned'].map((tip) => (
                <li key={tip} className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" /><span>{tip}</span></li>
              ))}
            </ul>
            <p>Ready to start planning? <Link to="/contact" className="font-semibold text-gold-600 underline-offset-2 hover:underline">Contact our travel experts</Link> today and let us craft your perfect journey.</p>
          </div>

          <div className="mt-10 flex items-center justify-between border-t border-navy-100 pt-6">
            <Link to="/blog" className="flex items-center gap-1 text-sm font-medium text-navy-500 hover:text-gold-600"><ChevronRight className="h-4 w-4 rotate-180" />Back to Blog</Link>
            <button className="flex items-center gap-2 text-sm font-medium text-navy-500 hover:text-gold-600"><Share2 className="h-4 w-4" />Share</button>
          </div>
        </div>
      </article>

      <section ref={ref} className="bg-warm-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className={`mb-10 font-display text-3xl font-bold text-navy-900 reveal ${visible ? 'is-visible' : ''}`}>Related Articles</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {related.map((p, i) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className={`group overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card transition-all hover:shadow-luxury reveal reveal-delay-${i + 1} ${visible ? 'is-visible' : ''}`}>
                <div className="relative h-40 overflow-hidden"><img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110" /></div>
                <div className="p-5"><span className="text-xs font-semibold uppercase tracking-wide2 text-gold-600">{p.category}</span><h3 className="mt-2 font-display text-lg font-bold text-navy-900 group-hover:text-gold-600">{p.title}</h3><span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-gold-600">Read <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
