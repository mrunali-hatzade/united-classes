"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, Calendar, Clock, User, Phone, BookOpen, Send, Sparkles } from "lucide-react";
import { validateIndianMobile, submitDemoEnquiry, EnquiryPayload } from "@/lib/utils";

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
    interestedCourse: (defaultCourse as EnquiryPayload["interestedCourse"]) || "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryPayload, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    referenceId: string;
    studentName: string;
    course: string;
    date: string;
    time: string;
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
      newErrors.mobileNumber = "Enter a valid 10-digit Indian mobile number (starts with 6, 7, 8, or 9)";
    }

    if (!formData.currentClass) {
      newErrors.currentClass = "Please select current academic class";
    }

    if (!formData.interestedCourse) {
      newErrors.interestedCourse = "Please select interested course program";
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = "Select a preferred demo date";
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = "Select a preferred time slot";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await submitDemoEnquiry(formData);
      if (response.success) {
        setSubmittedData({
          referenceId: response.referenceId,
          studentName: formData.studentName,
          course: formData.interestedCourse,
          date: formData.preferredDate,
          time: formData.preferredTime,
        });
        if (onSuccess) {
          onSuccess();
        }
      }
    } catch {
      setErrors({
        studentName: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      studentName: "",
      mobileNumber: "",
      currentClass: "",
      interestedCourse: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
    });
    setErrors({});
  };

  // If already successfully submitted
  if (submittedData) {
    return (
      <div className="bg-slate-900 border border-blue-500/30 rounded-2xl p-6 sm:p-8 text-center space-y-5 animate-in fade-in duration-300">
        <div className="w-16 h-16 bg-blue-500/20 text-cyan-400 rounded-full flex items-center justify-center mx-auto border border-cyan-400/30 shadow-lg shadow-cyan-500/10">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/15 text-amber-300 border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5" /> Demo Booking Simulated
          </span>
          <h3 className="text-2xl font-bold text-white font-heading">
            Demo Lecture Reserved!
          </h3>
          <p className="text-slate-300 text-sm max-w-md mx-auto">
            Thank you, <strong className="text-white">{submittedData.studentName}</strong>. Your request for a free demo session in{" "}
            <span className="text-cyan-300 font-medium">{submittedData.course}</span> has been simulated successfully.
          </p>
        </div>

        {/* Demo Reference Ticket */}
        <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 text-left space-y-2 text-xs sm:text-sm">
          <div className="flex justify-between items-center border-b border-slate-800 pb-2">
            <span className="text-slate-400">Demo Reference ID:</span>
            <span className="font-mono font-semibold text-cyan-400">{submittedData.referenceId}</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-800 pb-2">
            <span className="text-slate-400">Preferred Date:</span>
            <span className="text-slate-200 font-medium">{submittedData.date}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Preferred Slot:</span>
            <span className="text-slate-200 font-medium">{submittedData.time}</span>
          </div>
        </div>

        <div className="bg-blue-950/40 border border-blue-900/60 rounded-xl p-3.5 text-left text-xs text-blue-200/90 flex items-start gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white">Confirmation:</strong> Our academic coordinator in Bhandara will contact you to confirm batch timings and lecture classroom details.
          </div>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-blue-600/30 cursor-pointer"
        >
          Book Another Demo Session
        </button>
      </div>
    );
  }

  const [todayString, setTodayString] = useState("2026-01-01");

  React.useEffect(() => {
    setTodayString(new Date().toISOString().split("T")[0]);
  }, []);

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Student Name */}
      <div>
        <label className="block text-xs sm:text-sm font-semibold text-slate-200 mb-1.5">
          Student Name <span className="text-rose-400">*</span>
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
          Mobile Number (WhatsApp Preferred) <span className="text-rose-400">*</span>
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
          <div className="relative">
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
              <option value="11th" className="bg-slate-900 text-white">Class 11th Science</option>
              <option value="12th" className="bg-slate-900 text-white">Class 12th Science</option>
              <option value="Repeater / Other" className="bg-slate-900 text-white">Repeater / Dropper / Other</option>
            </select>
          </div>
          {errors.currentClass && (
            <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.currentClass}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-semibold text-slate-200 mb-1.5">
            Interested Program <span className="text-rose-400">*</span>
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
                  interestedCourse: e.target.value as EnquiryPayload["interestedCourse"],
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
                Select Course / Subject
              </option>
              <option value="Physics Tuition (11th, 12th, JEE, NEET, CET)" className="bg-slate-900 text-white">Physics Tuition (Class 11th &amp; 12th, Boards, JEE, NEET, CET)</option>
              <option value="Chemistry Tuition (11th, 12th, JEE, NEET, CET)" className="bg-slate-900 text-white">Chemistry Tuition (Physical, Organic, Inorganic • Boards &amp; Entrance)</option>
              <option value="Mathematics Tuition (11th, 12th, JEE, CET)" className="bg-slate-900 text-white">Mathematics Tuition (Calculus, Vectors, CET Speed &amp; Boards)</option>
              <option value="Biology Tuition (11th, 12th, NEET, CET)" className="bg-slate-900 text-white">Biology Tuition (NEET 360/360 Target, Botany, Zoology &amp; Boards)</option>
              <option value="Complete PCMB Package (All 4 Subjects)" className="bg-slate-900 text-white">Complete PCMB Package (All 4 Subjects Bundle)</option>
              <option value="PCM Engineering Package (JEE / CET)" className="bg-slate-900 text-white">PCM Engineering Package (Physics, Chemistry, Maths)</option>
              <option value="PCB Medical Package (NEET)" className="bg-slate-900 text-white">PCB Medical Package (Physics, Chemistry, Biology)</option>
            </select>
          </div>
          {errors.interestedCourse && (
            <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.interestedCourse}
            </p>
          )}
        </div>
      </div>

      {/* Grid: Preferred Date & Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-slate-200 mb-1.5">
            Preferred Demo Date <span className="text-rose-400">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Calendar className="w-4 h-4" />
            </div>
            <input
              type="date"
              min={todayString}
              value={formData.preferredDate}
              onChange={(e) => {
                setFormData({ ...formData, preferredDate: e.target.value });
                if (errors.preferredDate) setErrors({ ...errors, preferredDate: undefined });
              }}
              className={`w-full pl-10 pr-3 py-2.5 bg-slate-900/80 border rounded-xl text-white text-sm focus:outline-none focus:ring-2 transition-all ${
                errors.preferredDate
                  ? "border-rose-500/80 focus:ring-rose-500/40"
                  : "border-slate-700/80 focus:border-blue-500 focus:ring-blue-500/30"
              }`}
            />
          </div>
          {errors.preferredDate && (
            <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.preferredDate}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-semibold text-slate-200 mb-1.5">
            Preferred Time Slot <span className="text-rose-400">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Clock className="w-4 h-4" />
            </div>
            <select
              value={formData.preferredTime}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  preferredTime: e.target.value as EnquiryPayload["preferredTime"],
                });
                if (errors.preferredTime) setErrors({ ...errors, preferredTime: undefined });
              }}
              className={`w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border rounded-xl text-white text-sm focus:outline-none focus:ring-2 transition-all appearance-none cursor-pointer ${
                errors.preferredTime
                  ? "border-rose-500/80 focus:ring-rose-500/40"
                  : "border-slate-700/80 focus:border-blue-500 focus:ring-blue-500/30"
              }`}
            >
              <option value="" disabled className="text-slate-500">
                Select Time Slot
              </option>
              <option value="Morning (7:00 AM - 10:00 AM)" className="bg-slate-900 text-white">Morning (7:00 AM – 10:00 AM)</option>
              <option value="Afternoon (1:00 PM - 4:00 PM)" className="bg-slate-900 text-white">Afternoon (1:00 PM – 4:00 PM)</option>
              <option value="Evening (4:30 PM - 7:30 PM)" className="bg-slate-900 text-white">Evening (4:30 PM – 7:30 PM)</option>
              <option value="Any Convenient Slot" className="bg-slate-900 text-white">Any Convenient Slot</option>
            </select>
          </div>
          {errors.preferredTime && (
            <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.preferredTime}
            </p>
          )}
        </div>
      </div>

      {/* Optional Message */}
      {!isCompact && (
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-slate-200 mb-1.5">
            Any specific topic or query? <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <textarea
            rows={2}
            placeholder="e.g. Currently facing difficulty in Rotational Motion / Want to know batch timings in Bhandara..."
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
            <span>Processing Reservation...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            <span>CONFIRM FREE DEMO LECTURE</span>
          </>
        )}
      </button>

      <p className="text-center text-[11px] text-slate-400">
        100% Free Demo • No Payment Required • Limited to 30 Students/Batch
      </p>
    </form>
  );
}
