import { useState, type FormEvent } from 'react';
import { User, Phone, Mail, Globe, Calendar, Users, Send, Check, Loader2, AlertCircle, MessageCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { company } from '@/data/site';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function InquiryForm({ destination, compact = false }: { destination?: string; compact?: boolean }) {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({
    full_name: '', email: '', phone: '', destination: destination || '', travel_month: '', group_size: '', message: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');
    const { error } = await supabase.from('contact_enquiries').insert({
      full_name: form.full_name, email: form.email, phone: form.phone,
      destination: form.destination || 'General Enquiry',
      travel_month: form.travel_month || null, group_size: form.group_size || null, message: form.message || null,
    });
    if (error) { setStatus('error'); setErrorMsg('Something went wrong. Please try again or message us on WhatsApp.'); return; }
    setStatus('success');
    setForm({ full_name: '', email: '', phone: '', destination: destination || '', travel_month: '', group_size: '', message: '' });
  };

  const inputClass = 'w-full rounded-xl border border-navy-200 bg-white px-4 py-3.5 text-sm text-navy-900 placeholder:text-navy-400 transition-all focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/20';
  const labelClass = 'mb-1.5 block text-xs font-semibold uppercase tracking-wide2 text-navy-500';

  if (status === 'success') {
    return (
      <div className={`flex flex-col items-center justify-center rounded-3xl border border-navy-100 bg-white p-8 text-center shadow-luxury ${compact ? '' : 'md:p-12'}`}>
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10"><Check className="h-8 w-8 text-success" strokeWidth={2.5} /></span>
        <h3 className="mt-6 font-display text-2xl font-bold text-navy-900">Enquiry Received!</h3>
        <p className="mt-3 max-w-sm text-navy-600">Thank you for reaching out. Our team will contact you within 24 hours to craft your perfect journey.</p>
        <button onClick={() => setStatus('idle')} className="btn-outline-gold mt-8">Send Another Enquiry</button>
      </div>
    );
  }

  return (
    <div className={`rounded-3xl border border-navy-100 bg-white p-8 shadow-luxury ${compact ? '' : 'md:p-10'}`}>
      <div className="mb-6 flex items-center justify-between">
        <h3 className="font-display text-2xl font-bold text-navy-900">Plan Your Journey</h3>
        <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105">
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="iq_name">Full Name *</label>
            <div className="relative"><User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" strokeWidth={2} />
              <input id="iq_name" type="text" required value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} placeholder="Your full name" className={`${inputClass} pl-10`} /></div>
          </div>
          <div>
            <label className={labelClass} htmlFor="iq_phone">Phone / WhatsApp *</label>
            <div className="relative"><Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" strokeWidth={2} />
              <input id="iq_phone" type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210" className={`${inputClass} pl-10`} /></div>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="iq_email">Email *</label>
            <div className="relative"><Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" strokeWidth={2} />
              <input id="iq_email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" className={`${inputClass} pl-10`} /></div>
          </div>
          <div>
            <label className={labelClass} htmlFor="iq_dest">Destination</label>
            <div className="relative"><Globe className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" strokeWidth={2} />
              <input id="iq_dest" type="text" value={form.destination} onChange={(e) => setForm({ ...form, destination: e.target.value })} placeholder="e.g. Iraq, Dubai, Maldives" className={`${inputClass} pl-10`} /></div>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="iq_month">Preferred Month</label>
            <div className="relative"><Calendar className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" strokeWidth={2} />
              <input id="iq_month" type="month" value={form.travel_month} onChange={(e) => setForm({ ...form, travel_month: e.target.value })} className={`${inputClass} pl-10`} /></div>
          </div>
          <div>
            <label className={labelClass} htmlFor="iq_group">Group Size</label>
            <div className="relative"><Users className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" strokeWidth={2} />
              <input id="iq_group" type="number" min="1" value={form.group_size} onChange={(e) => setForm({ ...form, group_size: e.target.value })} placeholder="Number of travellers" className={`${inputClass} pl-10`} /></div>
          </div>
        </div>
        {!compact && (
          <div>
            <label className={labelClass} htmlFor="iq_msg">Message</label>
            <textarea id="iq_msg" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your dream journey..." className={inputClass} />
          </div>
        )}
        {status === 'error' && (
          <div className="flex items-center gap-2 rounded-xl border border-error/40 bg-error/5 px-4 py-3 text-sm text-error"><AlertCircle className="h-4 w-4 shrink-0" />{errorMsg}</div>
        )}
        <button type="submit" disabled={status === 'submitting'} className="flex w-full items-center justify-center gap-2 rounded-full bg-gold-400 py-4 font-semibold text-navy-900 transition-all duration-300 hover:bg-gold-300 hover:shadow-gold-glow disabled:cursor-not-allowed disabled:opacity-60">
          {status === 'submitting' ? <><Loader2 className="h-5 w-5 animate-spin" /> Sending...</> : <><Send className="h-5 w-5" strokeWidth={2.5} /> Send Enquiry</>}
        </button>
        <p className="text-center text-xs text-navy-400">We respond within 24 hours · Your information is safe with us</p>
      </form>
    </div>
  );
}
