import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-navy-950 px-6 text-center">
      <div>
        <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gold-400/10 ring-1 ring-gold-400/20"><Compass className="h-10 w-10 text-gold-400" strokeWidth={1.5} /></span>
        <h1 className="mt-8 font-display text-6xl font-bold text-white">404</h1>
        <p className="mt-4 text-lg text-white/60">This destination seems to be off the map.</p>
        <Link to="/" className="btn-primary mt-8">Back to Home</Link>
      </div>
    </section>
  );
}
