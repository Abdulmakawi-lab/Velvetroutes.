import { Phone, Mail, MapPin, MessageCircle, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import PageHero from '@/components/PageHero';
import InquiryForm from '@/components/InquiryForm';
import { company } from '@/data/site';
import { useReveal } from '@/hooks/useReveal';

const socials = [
  { icon: Instagram, label: 'Instagram', href: company.instagram },
  { icon: Facebook, label: 'Facebook', href: company.facebook },
  { icon: Youtube, label: 'YouTube', href: company.youtube },
  { icon: MessageCircle, label: 'WhatsApp', href: `https://wa.me/${company.whatsapp}` },
];

export default function Contact() {
  const { ref, visible } = useReveal();
  const contactCards = [
    { icon: Phone, label: 'Call Us', value: company.phone, href: `tel:${company.phone.replace(/\s/g, '')}` },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: `https://wa.me/${company.whatsapp}` },
    { icon: Mail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
    { icon: MapPin, label: 'Visit Us', value: 'Pune, India', href: '#map' },
  ];

  return (
    <>
      <PageHero title="Get In Touch" subtitle="Let's plan your next adventure. Reach out and our travel experts will craft the perfect journey for you." image="https://images.pexels.com/photos/7235814/pexels-photo-7235814.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000" crumbs={[{ label: 'Contact' }]} />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {contactCards.map((c) => (
                  <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="group flex flex-col gap-3 rounded-2xl border border-navy-100 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-luxury hover:border-gold-300">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 transition-colors group-hover:bg-gold-400"><c.icon className="h-5 w-5 text-gold-400 transition-colors group-hover:text-navy-900" strokeWidth={2} /></span>
                    <div><p className="text-xs font-semibold uppercase tracking-wide2 text-navy-400">{c.label}</p><p className="mt-0.5 text-sm font-medium text-navy-900">{c.value}</p></div>
                  </a>
                ))}
              </div>

              <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#1ebe57] p-6 text-white shadow-card transition-all hover:-translate-y-0.5 hover:shadow-luxury">
                <div className="flex items-center gap-4"><MessageCircle className="h-8 w-8" strokeWidth={2} /><div><p className="font-display text-lg font-bold">Chat on WhatsApp</p><p className="text-sm text-white/80">Fastest way to reach us</p></div></div>
              </a>

              {/* Business hours */}
              <div className="rounded-2xl border border-navy-100 bg-warm-50 p-6">
                <div className="mb-4 flex items-center gap-2"><Clock className="h-5 w-5 text-gold-500" strokeWidth={2} /><p className="text-sm font-semibold uppercase tracking-wide2 text-navy-500">Business Hours</p></div>
                <ul className="space-y-3">
                  {company.hours.map((h) => (
                    <li key={h.day} className="flex items-center justify-between border-b border-navy-100 pb-3 last:border-0 last:pb-0"><span className="text-navy-600">{h.day}</span><span className="font-medium text-navy-900">{h.time}</span></li>
                  ))}
                </ul>
              </div>

              {/* Social links */}
              <div className="rounded-2xl border border-navy-100 bg-white p-6">
                <p className="mb-4 text-sm font-semibold uppercase tracking-wide2 text-navy-500">Follow Us</p>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="group flex h-11 w-11 items-center justify-center rounded-xl border border-navy-200 text-navy-600 transition-all hover:border-gold-400 hover:bg-gold-400 hover:text-navy-900"><s.icon className="h-5 w-5" strokeWidth={1.8} /></a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div id="map" className="overflow-hidden rounded-2xl border border-navy-100 shadow-card">
                <iframe src={company.mapsEmbed} width="100%" height="220" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Velvet Routes location on Google Maps" />
              </div>
            </div>

            <div ref={ref} className={`reveal reveal-delay-2 ${visible ? 'is-visible' : ''}`}>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
