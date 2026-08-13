import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO } from '../data/mockData';
import { X, Send, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const defaultMessage = "Hello Mystical Construction, I would like to request a quotation for a building / renovation project.";

  const quickPrompts = [
    { label: "Free On-Site Quotation", msg: "Hello Phillip, I'd like to book a free on-site quotation for my property in Pretoria / Gauteng." },
    { label: "Send Building Plans / Specs", msg: "Hi Mystical Build, I have architectural plans/drawings I'd like to share for a cost estimate." },
    { label: "Building Materials Supply", msg: "Hi Mystical Construction, I'd like to order building materials (sand, cement, bricks) with delivery." }
  ];

  const handleOpenWhatsApp = (text?: string) => {
    const messageToSend = encodeURIComponent(text || customMsg || defaultMessage);
    const cleanPhone = BUSINESS_INFO.phonePrimaryIntl.replace('+', '');
    const url = `https://wa.me/${cleanPhone}?text=${messageToSend}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Smart Quick Chat Flyout Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="whatsapp-chat-flyout"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="pointer-events-auto mb-3 w-[calc(100vw-3rem)] max-w-sm rounded-2xl bg-white shadow-2xl border border-stone-200 overflow-hidden text-[#191c1d]"
          >
            {/* Header */}
            <div className="bg-[#111315] p-4 text-white flex items-center justify-between border-b border-stone-800">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-md">
                    {/* WhatsApp Icon */}
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.35.49 1.199.533 1.286.044.087.073.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
                    </svg>
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#111315] rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm leading-tight text-white">Mystical Construction</h4>
                  <p className="text-[11px] text-stone-400 flex items-center gap-1.5 mt-0.5">
                    <Clock className="w-3 h-3 text-[#d4af37]" />
                    <span>Typically replies within 15 mins</span>
                  </p>
                </div>
              </div>
              <button
                id="close-whatsapp-chat-btn"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-stone-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close WhatsApp Flyout"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 bg-[#f8f9fa] border-b border-stone-200">
              <div className="bg-white p-3 rounded-xl border border-stone-200/80 shadow-xs mb-3 text-xs leading-relaxed text-[#4d4635]">
                <p className="font-medium text-[#191c1d] mb-1">👋 Welcome to Mystical Construction!</p>
                How can Phillip and our structural team assist with your building project in Pretoria or Gauteng today?
              </div>

              {/* Quick Select Prompts */}
              <div className="space-y-1.5 mb-3">
                <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block mb-1">
                  Quick Actions:
                </span>
                {quickPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    id={`quick-whatsapp-prompt-${idx}`}
                    onClick={() => handleOpenWhatsApp(prompt.msg)}
                    className="w-full text-left px-3 py-2 rounded-lg bg-white hover:bg-[#eafaf1] hover:border-[#25D366]/40 border border-stone-200 text-xs font-medium text-stone-700 hover:text-[#0b6623] transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <span>{prompt.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#25D366] group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>

              {/* Direct Input */}
              <div className="flex gap-2">
                <input
                  id="whatsapp-custom-input"
                  type="text"
                  placeholder="Type your message..."
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleOpenWhatsApp(customMsg)}
                  className="flex-1 bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-[#191c1d] focus:outline-none focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366]"
                />
                <button
                  id="whatsapp-send-custom-btn"
                  onClick={() => handleOpenWhatsApp(customMsg)}
                  className="px-3 py-2 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-sm cursor-pointer transition-colors"
                  aria-label="Send via WhatsApp"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Footer Trust Bar */}
            <div className="px-4 py-2 bg-stone-100 flex items-center justify-between text-[10px] text-stone-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#d4af37]" />
                Direct to Project Engineer
              </span>
              <span>{BUSINESS_INFO.phonePrimary}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Smart WhatsApp Action Button */}
      <div className="relative pointer-events-auto flex items-center gap-3">
        {/* Hover Tooltip / Smart Indicator (Monochrome to emerald on hover) */}
        <AnimatePresence>
          {hovered && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111315] text-white shadow-xl border border-stone-700 text-xs font-semibold whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
              <span>Chat with Mystical on WhatsApp</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Smart Monochrome Button that dynamically turns WhatsApp green on hover */}
        <motion.button
          id="floating-whatsapp-btn"
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          aria-label="Contact Mystical Construction on WhatsApp"
          className={`relative group flex items-center justify-center w-14 h-14 rounded-full shadow-2xl cursor-pointer transition-all duration-300 ${
            hovered || isOpen
              ? 'bg-[#25D366] text-white shadow-[#25D366]/40 ring-4 ring-[#25D366]/20'
              : 'bg-[#191c1d] text-white border border-stone-700/80 shadow-black/30'
          }`}
        >
          {/* Subtle pulse ring in monochrome state */}
          {!hovered && !isOpen && (
            <span className="absolute -inset-1 rounded-full bg-stone-400/20 animate-ping pointer-events-none" />
          )}

          {/* Active online green dot in monochrome mode */}
          {!hovered && !isOpen && (
            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#25D366] border-2 border-[#191c1d] rounded-full" />
          )}

          {/* Authentic WhatsApp SVG Logo */}
          <svg 
            className="w-7 h-7 fill-current transition-transform duration-300 group-hover:scale-110" 
            viewBox="0 0 24 24"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.35.49 1.199.533 1.286.044.087.073.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824zM19.05 4.91C17.18 3.037 14.69 2 12.04 2 6.51 2 2.02 6.49 2.02 12.02c0 1.77.46 3.49 1.33 5.01L2 22l5.12-1.34c1.47.8 3.12 1.22 4.88 1.22h.01c5.52 0 10.01-4.49 10.01-10.02 0-2.67-1.04-5.18-2.97-7.05z" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
}
