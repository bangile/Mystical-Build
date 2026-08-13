import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ExternalLink, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface ContactSectionProps {
  prefilledNotes?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledNotes }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    projectScope: 'Custom Residential Build',
    budgetRange: 'R750,000 – R1,500,000',
    timeline: 'Immediate / Next 30 Days',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledNotes) {
      setFormData(prev => ({
        ...prev,
        notes: prefilledNotes
      }));
    }
  }, [prefilledNotes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section 
      id="contact"
      className="py-20 sm:py-28 bg-[#edeeef] border-b border-[#d0c5af]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#d0c5af]/50 text-[#735c00] text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>259 Ketjen St, Pretoria West • Free On-Site Consultations</span>
          </div>

          <h2 
            id="contact-heading"
            className="font-heading font-bold text-3xl sm:text-4xl text-[#191c1d] tracking-tight"
          >
            Contact Mystical Construction
          </h2>
          <div className="w-16 h-1 bg-[#d4af37] mx-auto mt-4 mb-5 rounded-full" />
          <p className="text-[#4d4635] text-base leading-relaxed">
            Ready to build, renovate, or order building materials? Reach out directly via phone, email, or request a comprehensive free on-site quotation across Pretoria and Gauteng.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Business Contact & Google Maps Identity (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Action Contact Card */}
            <div className="bg-white rounded-lg p-6 sm:p-8 border border-[#e1e3e4] shadow-sm">
              <h3 className="font-heading font-bold text-xl text-[#191c1d] mb-4 flex items-center justify-between">
                <span>Head Office & Yard</span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#ffe088]/40 text-[#735c00]">
                  Pretoria West
                </span>
              </h3>

              <div className="space-y-4 text-sm text-[#4d4635]">
                {/* Physical Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#f3f4f5] flex items-center justify-center text-[#735c00] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-xs uppercase text-[#191c1d] tracking-wider">
                      Physical Location
                    </span>
                    <span className="text-sm text-[#191c1d] font-medium leading-snug">
                      {BUSINESS_INFO.address}
                    </span>
                    <a
                      href={BUSINESS_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#735c00] hover:underline mt-1"
                    >
                      <Navigation className="w-3 h-3" />
                      <span>Open in Google Maps</span>
                    </a>
                  </div>
                </div>

                {/* Primary & Secondary Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#f3f4f5] flex items-center justify-center text-[#735c00] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-xs uppercase text-[#191c1d] tracking-wider">
                      Direct Phone Lines
                    </span>
                    <div className="flex flex-col gap-1 mt-0.5">
                      <a 
                        href={`tel:${BUSINESS_INFO.phonePrimaryIntl}`}
                        className="text-sm font-bold text-[#191c1d] hover:text-[#735c00] transition-colors"
                      >
                        {BUSINESS_INFO.phonePrimary} (Primary / Quotes)
                      </a>
                      <a 
                        href={`tel:${BUSINESS_INFO.phoneSecondaryIntl}`}
                        className="text-xs text-[#4e6073] hover:text-[#191c1d] transition-colors"
                      >
                        {BUSINESS_INFO.phoneSecondary} (Site Operations)
                      </a>
                      <a 
                        href={`tel:${BUSINESS_INFO.phoneAlternateIntl}`}
                        className="text-xs text-[#4e6073] hover:text-[#191c1d] transition-colors"
                      >
                        {BUSINESS_INFO.phoneAlternate} (Customer Care)
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#f3f4f5] flex items-center justify-center text-[#735c00] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-xs uppercase text-[#191c1d] tracking-wider">
                      Email Inquiries
                    </span>
                    <a 
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-sm text-[#191c1d] hover:text-[#735c00] underline font-medium block"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                    <a 
                      href={`mailto:${BUSINESS_INFO.emailSecondary}`}
                      className="text-xs text-[#7f7663] hover:text-[#191c1d]"
                    >
                      {BUSINESS_INFO.emailSecondary}
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3 pt-3 border-t border-stone-200">
                  <div className="w-8 h-8 rounded bg-[#f3f4f5] flex items-center justify-center text-[#735c00] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-xs uppercase text-[#191c1d] tracking-wider">
                      Operating Hours
                    </span>
                    <span className="text-xs text-[#4d4635] leading-relaxed">
                      {BUSINESS_INFO.hours}<br />
                      <span className="text-[11px] text-[#7f7663]">Sunday: Closed (Emergency on-call)</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Location Preview Card */}
            <div className="bg-white rounded-lg p-5 border border-[#e1e3e4] shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#191c1d]">
                  Google Maps Location
                </span>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-[#735c00] hover:underline flex items-center gap-1"
                >
                  <span>View Larger Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Embedded Interactive Map */}
              <div className="relative aspect-[16/10] w-full rounded overflow-hidden border border-stone-200 bg-stone-100">
                <iframe
                  title="Mystical Construction Google Map"
                  src="https://maps.google.com/maps?q=-25.7475519,28.1650891&z=15&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px] text-[#7f7663]">
                <span>GPS: -25.7475519, 28.1650891</span>
                <span>Pretoria West, South Africa</span>
              </div>
            </div>

          </div>

          {/* Right Column: Free On-Site Consultation & Quotation Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-lg p-6 sm:p-8 border border-[#e1e3e4] shadow-sm">
            <div className="mb-6">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#735c00] block mb-1">
                South African Inquiries
              </span>
              <h3 className="font-heading font-bold text-2xl text-[#191c1d]">
                Request a Free On-Site Quotation
              </h3>
              <p className="text-[#4d4635] text-xs sm:text-sm mt-1">
                Fill out the specifications below or submit your project details. We will contact you within 24 hours to schedule an inspection.
              </p>
            </div>

            {isSubmitted ? (
              <div 
                id="contact-submission-success-banner"
                className="bg-[#ffe088]/20 border border-[#d4af37] rounded-lg p-8 text-center space-y-4 animate-in fade-in"
              >
                <div className="w-14 h-14 rounded-full bg-[#d4af37] text-[#241a00] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-heading font-bold text-xl text-[#191c1d]">
                  Quotation Request Received!
                </h4>
                <p className="text-[#4d4635] text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name || 'valued client'}</strong>. Our project estimator will review your project details and contact you at <strong>{formData.phone || formData.email}</strong> to confirm your on-site assessment.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        location: '',
                        projectScope: 'Custom Residential Build',
                        budgetRange: 'R750,000 – R1,500,000',
                        timeline: 'Immediate / Next 30 Days',
                        notes: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded bg-stone-100 hover:bg-stone-200 text-[#191c1d] text-xs font-semibold uppercase tracking-wider cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#191c1d] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Johan van der Merwe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded bg-stone-50 border border-stone-300 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-sm text-[#191c1d] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#191c1d] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. johan@example.co.za"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded bg-stone-50 border border-stone-300 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-sm text-[#191c1d] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#191c1d] mb-1.5">
                      South African Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 082 123 4567 or 061 860 7883"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded bg-stone-50 border border-stone-300 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-sm text-[#191c1d] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#191c1d] mb-1.5">
                      Site / Suburb Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Waterkloof, Centurion, Menlyn, Pretoria West"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-2.5 rounded bg-stone-50 border border-stone-300 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-sm text-[#191c1d] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#191c1d] mb-1.5">
                      Scope of Work
                    </label>
                    <select
                      value={formData.projectScope}
                      onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                      className="w-full px-3 py-2.5 rounded bg-stone-50 border border-stone-300 focus:border-[#d4af37] text-xs font-medium text-[#191c1d] outline-none cursor-pointer"
                    >
                      <option>New Turnkey House Build</option>
                      <option>Full Home Renovation</option>
                      <option>House Extension & Alteration</option>
                      <option>Roofing, Trusses & Ceilings</option>
                      <option>Commercial Drywall & Ceilings</option>
                      <option>Aluminium Doors & Windows</option>
                      <option>Building Materials / Sand Supply</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#191c1d] mb-1.5">
                      Budget Range (ZAR)
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-3 py-2.5 rounded bg-stone-50 border border-stone-300 focus:border-[#d4af37] text-xs font-medium text-[#191c1d] outline-none cursor-pointer"
                    >
                      <option>R50,000 – R250,000</option>
                      <option>R250,000 – R750,000</option>
                      <option>R750,000 – R1,500,000</option>
                      <option>R1,500,000 – R3,500,000</option>
                      <option>R3,500,000 – R8,000,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#191c1d] mb-1.5">
                      Target Start
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3 py-2.5 rounded bg-stone-50 border border-stone-300 focus:border-[#d4af37] text-xs font-medium text-[#191c1d] outline-none cursor-pointer"
                    >
                      <option>Immediate / Next 30 Days</option>
                      <option>Within 1 - 3 months</option>
                      <option>3 - 6 months</option>
                      <option>Planning Phase / Getting Quotes</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#191c1d] mb-1.5">
                    Project Details & Site Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your site details, square metres (m²), structural plans, building material needs, or any specific questions..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded bg-stone-50 border border-stone-300 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-sm text-[#191c1d] outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="w-full py-4 rounded bg-[#d4af37] hover:bg-[#c49f2b] active:bg-[#b08e23] text-[#241a00] font-heading font-bold text-xs uppercase tracking-widest transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Free On-Site Consultation</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
