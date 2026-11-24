"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  Clock,
  User,
  Phone,
  BookOpen,
  Send,
  Sparkles,
  Copy,
  Check,
  ExternalLink,
  PhoneCall,
  MessageCircle,
} from "lucide-react";
import {
  validateIndianMobile,
  buildWhatsAppEnquiryPayload,
  submitDemoEnquiry,
  EnquiryPayload,
  WhatsAppPayloadResult,
} from "@/lib/utils";
import { siteConfig } from "@/config/site";

interface DemoEnquiryFormProps {
  defaultCourse?: string;
  onSuccess?: () => void;
  isCompact?: boolean;
}

export default function DemoEnquiryForm({
  defaultCourse = "",
  onSuccess,
  isCompact = false,
}: DemoEnquiryFormProps) {
  const [formData, setFormData] = useState<EnquiryPayload>({
    studentName: "",
    mobileNumber: "",
    currentClass: "",
    interestedCourse: defaultCourse || "",
    preferredTiming: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryPayload, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [submittedResult, setSubmittedResult] = useState<{
    referenceId: string;
    studentName: string;
    course: string;
    payload: WhatsAppPayloadResult;
  } | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryPayload, string>> = {};

    if (!formData.studentName.trim()) {
      newErrors.studentName = "Please enter student's full name";
    } else if (formData.studentName.trim().length < 3) {
      newErrors.studentName = "Name must be at least 3 characters";
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (!validateIndianMobile(formData.mobileNumber)) {
      newErrors.mobileNumber = "Enter a valid 10-digit Indian mobile number (e.g. 9876543210)";
    }

    if (!formData.currentClass) {
      newErrors.currentClass = "Please select current academic class";
    }

    if (!formData.interestedCourse) {
      newErrors.interestedCourse = "Please select interested programme or subject";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      // Build WhatsApp payload using centralized config
      const whatsAppPayload = buildWhatsAppEnquiryPayload(
        formData,
        siteConfig.contact.whatsappNumber
      );

      // Simulate submission & reference ID generation
      const response = await submitDemoEnquiry(formData);

      // If live WhatsApp number is configured, open WhatsApp automatically
      if (!whatsAppPayload.isPlaceholder) {
        window.open(whatsAppPayload.url, "_blank", "noopener,noreferrer");
      }

      setSubmittedResult({
        referenceId: response.referenceId,
        studentName: formData.studentName,
        course: formData.interestedCourse,
        payload: whatsAppPayload,
      });

      if (onSuccess) {
        onSuccess();
      }
    } catch {
      setErrors({
        studentName: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopy = () => {
    if (!submittedResult) return;
    navigator.clipboard.writeText(submittedResult.payload.formattedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setSubmittedResult(null);
    setFormData({
      studentName: "",
      mobileNumber: "",
      currentClass: "",
      interestedCourse: "",
      preferredTiming: "",
      message: "",
    });
    setErrors({});
  };

  // Honest Confirmation State
  if (submittedResult) {
    const isPlaceholder = submittedResult.payload.isPlaceholder;

    return (
      <div className="bg-slate-900 border border-blue-500/30 rounded-2xl p-6 sm:p-7 text-center space-y-5 animate-in fade-in duration-300">
        <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-400/30 shadow-lg">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-1.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5" /> Enquiry Prepared
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
            {isPlaceholder ? "Ready for WhatsApp Connection" : "WhatsApp Chat Opened"}
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-white">{submittedResult.studentName}</strong>. Your enquiry for{" "}
            <span className="text-cyan-300 font-medium">{submittedResult.course}</span> has been structured.
          </p>
        </div>

        {/* Honest Notice */}
        <div className="bg-blue-950/40 border border-blue-800/70 rounded-xl p-4 text-left text-xs text-blue-200 space-y-2">
          <div className="flex items-start gap-2.5">
            <MessageCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              {isPlaceholder ? (
                <>
                  <strong className="text-white block mb-0.5">Client Demo Mode Notice:</strong>
                  The institute WhatsApp number is currently set to a demonstration placeholder (
                  <span className="font-mono text-cyan-300">{siteConfig.contact.whatsappDisplay}</span>). In the official launch, clicking submit opens WhatsApp directly on your phone.
                </>
              ) : (
                <>
                  <strong className="text-white block mb-0.5">Important: Please Tap &quot;Send&quot; in WhatsApp</strong>
                  Your prefilled enquiry message has been prepared. Please press <strong>Send</strong> in WhatsApp so our faculty receives your enquiry.
                </>
              )}
            </div>
          </div>
        </div>

        {/* Generated WhatsApp Message Preview & Copy */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 text-left space-y-2 text-xs">
          <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
            <span className="font-mono text-[11px]">Booking Ref: {submittedResult.referenceId}</span>
            <button
              onClick={handleCopy}
              className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Message</span>
                </>
              )}
            </button>
          </div>

          <pre className="text-slate-300 text-[11px] font-sans whitespace-pre-wrap leading-relaxed max-h-36 overflow-y-auto bg-slate-900/50 p-2.5 rounded-lg border border-slate-800/60">
            {submittedResult.payload.formattedText}
          </pre>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-1">
          <a
            href={submittedResult.payload.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all duration-200 shadow-md hover:shadow-emerald-600/30 flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Open in WhatsApp</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <div className="flex items-center justify-center gap-3 pt-1">
            <a
              href={`tel:${siteConfig.contact.phoneValue}`}
              className="text-xs text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
              <span>Call Helpline ({siteConfig.contact.phoneDisplay})</span>
            </a>
            <span className="text-slate-600">•</span>
            <button
              type="button"
              onClick={handleReset}
              className="text-xs text-cyan-400 hover:underline cursor-pointer"
            >
              New Enquiry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Student Name */}
      <div>
        <label className="block text-xs sm:text-sm font-semibold text-slate-200 mb-1.5">
          Student Full Name <span className="text-rose-400">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <User className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="e.g. Rahul Sharma"
            value={formData.studentName}
            onChange={(e) => {
              setFormData({ ...formData, studentName: e.target.value });
              if (errors.studentName) setErrors({ ...errors, studentName: undefined });
            }}
            className={`w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all ${
              errors.studentName
                ? "border-rose-500/80 focus:ring-rose-500/40"
                : "border-slate-700/80 focus:border-blue-500 focus:ring-blue-500/30"
            }`}
          />
        </div>
        {errors.studentName && (
          <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.studentName}
          </p>
        )}
      </div>

      {/* Mobile Number */}
      <div>
        <label className="block text-xs sm:text-sm font-semibold text-slate-200 mb-1.5">
          Mobile Number (WhatsApp) <span className="text-rose-400">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 font-medium text-xs">
            <Phone className="w-4 h-4 mr-1 text-slate-400" />
            +91
          </div>
          <input
            type="tel"
            maxLength={10}
            placeholder="98765 43210"
            value={formData.mobileNumber}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, "");
              setFormData({ ...formData, mobileNumber: val });
              if (errors.mobileNumber) setErrors({ ...errors, mobileNumber: undefined });
            }}
            className={`w-full pl-16 pr-4 py-2.5 bg-slate-900/80 border rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all ${
              errors.mobileNumber
                ? "border-rose-500/80 focus:ring-rose-500/40"
                : "border-slate-700/80 focus:border-blue-500 focus:ring-blue-500/30"
            }`}
          />
        </div>
        {errors.mobileNumber && (
          <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.mobileNumber}
          </p>
        )}
      </div>

      {/* Grid: Current Class & Interested Course */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-slate-200 mb-1.5">
            Current Class <span className="text-rose-400">*</span>
          </label>
          <select
            value={formData.currentClass}
            onChange={(e) => {
              setFormData({
                ...formData,
                currentClass: e.target.value as EnquiryPayload["currentClass"],
              });
              if (errors.currentClass) setErrors({ ...errors, currentClass: undefined });
            }}
            className={`w-full px-3.5 py-2.5 bg-slate-900/80 border rounded-xl text-white text-sm focus:outline-none focus:ring-2 transition-all appearance-none cursor-pointer ${
              errors.currentClass
                ? "border-rose-500/80 focus:ring-rose-500/40"
                : "border-slate-700/80 focus:border-blue-500 focus:ring-blue-500/30"
            }`}
          >
            <option value="" disabled className="text-slate-500">
              Select Class
            </option>
            <option value="Class 11th Science" className="bg-slate-900 text-white">Class 11th Science</option>
            <option value="Class 12th Science" className="bg-slate-900 text-white">Class 12th Science</option>
            <option value="Repeater / Dropper" className="bg-slate-900 text-white">Repeater / Dropper / CET Target</option>
          </select>
          {errors.currentClass && (
            <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.currentClass}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-semibold text-slate-200 mb-1.5">
            Interested Subject / Programme <span className="text-rose-400">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <BookOpen className="w-4 h-4" />
            </div>
            <select
              value={formData.interestedCourse}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  interestedCourse: e.target.value,
                });
                if (errors.interestedCourse) setErrors({ ...errors, interestedCourse: undefined });
              }}
              className={`w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border rounded-xl text-white text-sm focus:outline-none focus:ring-2 transition-all appearance-none cursor-pointer ${
                errors.interestedCourse
                  ? "border-rose-500/80 focus:ring-rose-500/40"
                  : "border-slate-700/80 focus:border-blue-500 focus:ring-blue-500/30"
              }`}
            >
              <option value="" disabled className="text-slate-500">
                Select Programme
              </option>
              <option value="Complete PCMB Package (Physics, Chem, Maths & Bio)" className="bg-slate-900 text-white">Complete PCMB (All 4 Subjects)</option>
              <option value="Class 11 Science (Foundation & Boards)" className="bg-slate-900 text-white">Class 11 Science Batch</option>
              <option value="Class 12 Science (Boards & Entrance)" className="bg-slate-900 text-white">Class 12 Science Batch</option>
              <option value="JEE Main & Advanced Target" className="bg-slate-900 text-white">JEE Main &amp; Advanced (PCM)</option>
              <option value="NEET-UG Target (Medical)" className="bg-slate-900 text-white">NEET-UG Medical Target (PCB)</option>
              <option value="MHT-CET Target Batch" className="bg-slate-900 text-white">MHT-CET Target Batch</option>
              <option value="Physics Individual Subject" className="bg-slate-900 text-white">Physics Tuition Only</option>
              <option value="Chemistry Individual Subject" className="bg-slate-900 text-white">Chemistry Tuition Only</option>
              <option value="Mathematics Individual Subject" className="bg-slate-900 text-white">Mathematics Tuition Only</option>
              <option value="Biology Individual Subject" className="bg-slate-900 text-white">Biology Tuition Only</option>
            </select>
          </div>
          {errors.interestedCourse && (
            <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.interestedCourse}
            </p>
          )}
        </div>
      </div>

      {/* Optional Preferred Timing */}
      <div>
        <label className="block text-xs sm:text-sm font-semibold text-slate-200 mb-1.5">
          Preferred Batch Timing <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Clock className="w-4 h-4" />
          </div>
          <select
            value={formData.preferredTiming}
            onChange={(e) => setFormData({ ...formData, preferredTiming: e.target.value })}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-slate-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all appearance-none cursor-pointer"
          >
            <option value="" className="text-slate-500">
              Select Batch Timing (Optional)
            </option>
            <option value="Morning: 6:30 AM – 9:00 AM" className="bg-slate-900 text-white">Morning: 6:30 AM – 9:00 AM</option>
            <option value="Evening: 4:30 PM – 8:00 PM" className="bg-slate-900 text-white">Evening: 4:30 PM – 8:00 PM</option>
            <option value="Any Convenient Slot" className="bg-slate-900 text-white">Any Convenient Slot</option>
          </select>
        </div>
      </div>

      {/* Optional Note / Query */}
      {!isCompact && (
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-slate-200 mb-1.5">
            Any specific query or note? <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <textarea
            rows={2}
            placeholder="e.g. Interested in dual Board + MHT-CET preparation..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-2.5 bg-slate-900/80 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all resize-none"
          />
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 hover:shadow-cyan-500/30 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed group"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Validating Enquiry...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            <span>SUBMIT VIA WHATSAPP / BOOK DEMO</span>
          </>
        )}
      </button>

      <p className="text-center text-[11px] text-slate-400">
        100% Free Demo • Batch capped at 30 students • No payment required
      </p>
    </form>
  );
}
