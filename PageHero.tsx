import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';

type Crumb = { label: string; to?: string };

export default function PageHero({
  title, subtitle, image, crumbs = [], dark = true,
}: {
  title: string;
  subtitle?: string;
  image: string;
  crumbs?: Crumb[];
  dark?: boolean;
}) {
  return (
    <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-navy-950 pt-32">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/30" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16">
        <motion.nav initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6 flex items-center gap-2 text-sm text-white/60">
          <Link to="/" className="transition-colors hover:text-gold-400">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-2">
              <ChevronRight className="h-3 w-3" />
              {c.to ? <Link to={c.to} className="transition-colors hover:text-gold-400">{c.label}</Link> : <span className="text-gold-400">{c.label}</span>}
            </span>
          ))}
        </motion.nav>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="max-w-4xl font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl">
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-5 max-w-2xl text-lg text-white/70">
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
