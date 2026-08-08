import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Globe, FileCheck, Plane, Building2, Sparkles, Users, Briefcase,
  MessageSquare, Moon, Bus, Heart, Shield, Check, ArrowRight, type LucideIcon,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import InquiryForm from '@/components/InquiryForm';
import { services, company } from '@/data/site';
import { useReveal } from '@/hooks/useReveal';

const iconMap: Record<string, LucideIcon> = {
  Globe, FileCheck, Plane, Building2, Sparkles, Users, Briefcase, MessageSquare, Moon, Bus, Heart, Shield,
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  const { ref, visible } = useReveal();
  if (!service) return <Navigate to="/destinations" replace />;
  const Icon = iconMap[service.icon] ?? Globe;
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 5);

  return (
    <>
      <PageHero title={service.title} subtitle={service.description} image="https://images.pexels.com/photos/7235814/pexels-photo-7235814.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000" crumbs={[{ label: 'Services', to: '/services/visa-assistance' }, { label: service.title }]} />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
            <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-900"><Icon className="h-8 w-8 text-gold-400" strokeWidth={1.8} /></span>
              <h2 className="mt-6 font-display text-3xl font-bold text-navy-900 sm:text-4xl">{service.title}</h2>
              <p className="mt-6 text-lg leading-relaxed text-navy-600">{service.longDesc}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {['Personalised consultation', 'Transparent process', '24/7 support', 'Experienced team', 'Premium partners', 'End-to-end service'].map((f) => (
                  <div key={f} className="flex items-center gap-2.5 rounded-xl border border-navy-100 bg-warm-50 p-4"><Check className="h-5 w-5 text-gold-500" strokeWidth={2.5} /><span className="text-sm font-medium text-navy-700">{f}</span></div>
                ))}
              </div>
            </div>
            <div className={`reveal reveal-delay-2 ${visible ? 'is-visible' : ''}`}>
              <InquiryForm destination={`Service: ${service.title}`} compact />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-warm-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 font-display text-3xl font-bold text-navy-900">Other Services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {otherServices.map((s) => {
              const OIcon = iconMap[s.icon] ?? Globe;
              return (
                <Link key={s.slug} to={`/services/${s.slug}`} className="group rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all hover:border-gold-300 hover:shadow-luxury">
                  <OIcon className="h-8 w-8 text-gold-500 transition-colors group-hover:text-gold-400" strokeWidth={1.8} />
                  <h3 className="mt-4 font-display text-base font-bold text-navy-900">{s.title}</h3>
                  <p className="mt-2 text-xs text-navy-500 line-clamp-2">{s.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-gold-600">Learn more <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
