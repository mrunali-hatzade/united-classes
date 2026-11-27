"use client";

import React, { useState } from "react";
import { MessageCircle, X, Sparkles, Copy, Check, ExternalLink } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";

export default function WhatsAppButton() {
  const [showDemoNotice, setShowDemoNotice] = useState(false);
  const [copied, setCopied] = useState(false);

  const prefilledMessage = siteConfig.contact.defaultWhatsAppMessage;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const { url, isPlaceholder } = getWhatsAppUrl(prefilledMessage);
    if (isPlaceholder) {
      setShowDemoNotice(true);
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(prefilledMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center group">
        <span className="hidden sm:inline-block mr-3 px-3 py-1.5 rounded-full bg-slate-900/90 text-slate-100 text-xs font-medium shadow-lg border border-slate-700 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
          Chat on WhatsApp (Demo)
        </span>

        <button
          onClick={handleClick}
          aria-label="Contact on WhatsApp"
          className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        >
          {/* Subtle pulse wave */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
          <MessageCircle className="w-7 h-7 relative z-10 fill-white/20" />
        </button>
      </div>

      {/* Demo Modal when placeholder number is used */}
      {showDemoNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-[#101D38] border border-blue-500/40 rounded-2xl p-6 shadow-2xl text-left space-y-4">
            <button
              onClick={() => setShowDemoNotice(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center border border-[#25D366]/40">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-cyan-300 bg-blue-900/60 px-2 py-0.5 rounded-full">
                  <Sparkles className="w-3 h-3 text-cyan-400" /> Admissions Desk
                </span>
                <h3 className="text-lg font-bold text-white font-heading mt-0.5">
                  Connect on WhatsApp
                </h3>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              Connect directly with our admissions counselor in Bhandara. In this demo preview, the WhatsApp destination is set to the institute placeholder (<span className="text-cyan-300 font-mono">+91 XXXXXXXXXX</span>).
            </p>

            <p className="text-slate-300 text-xs leading-relaxed bg-blue-950/50 p-3 rounded-xl border border-blue-900/60 text-blue-200">
              You can test the pre-filled enquiry message below. In production, this button connects directly to the coaching institute&apos;s verified WhatsApp number:
            </p>

            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3.5 space-y-2">
              <span className="text-[11px] text-slate-400 block font-semibold uppercase tracking-wider">
                Pre-Filled Student Message:
              </span>
              <p className="text-xs text-slate-200 italic">&ldquo;{prefilledMessage}&rdquo;</p>
              <button
                type="button"
                onClick={handleCopyMessage}
                className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied to clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy message</span>
                  </>
                )}
              </button>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setShowDemoNotice(false)}
                className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wide transition-all shadow-md"
              >
                Understood & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
