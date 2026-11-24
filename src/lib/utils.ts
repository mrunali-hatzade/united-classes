export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Validates Indian 10-digit mobile number format
 * Valid numbers start with 6, 7, 8, or 9 and have 10 digits
 */
export function validateIndianMobile(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-\+\(\)]/g, "");
  // Allow +91 or 91 prefix, or bare 10-digit
  const bareNumber = cleaned.replace(/^(\+91|91)/, "");
  const indianMobileRegex = /^[6-9]\d{9}$/;
  return indianMobileRegex.test(bareNumber);
}

export function formatIndianMobile(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");
  const last10 = cleaned.slice(-10);
  if (last10.length === 10) {
    return `+91 ${last10.slice(0, 5)} ${last10.slice(5)}`;
  }
  return phone;
}

export interface EnquiryPayload {
  studentName: string;
  mobileNumber: string;
  currentClass: "11th" | "12th" | "Repeater / Other" | "";
  interestedCourse: string;
  preferredDate: string;
  preferredTime: "Morning (7:00 AM - 10:00 AM)" | "Afternoon (1:00 PM - 4:00 PM)" | "Evening (4:30 PM - 7:30 PM)" | "Any Convenient Slot" | "";
  message?: string;
  source?: string;
}

/**
 * Demo submission handler.
 * Ready for future Supabase or backend integration.
 * In production:
 * const { data, error } = await supabase.from('enquiries').insert([payload]);
 */
export async function submitDemoEnquiry(payload: EnquiryPayload): Promise<{
  success: boolean;
  referenceId: string;
  message: string;
  isDemo: boolean;
}> {
  // Simulate network latency for realistic feel
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Generate clean demo booking reference ID
  const datePart = new Date().toISOString().slice(2, 10).replace(/-/g, "");
  const randomPart = Math.floor(1000 + Math.random() * 9000);
  const referenceId = `UC-DEMO-${datePart}-${randomPart}`;

  // Log in development/client console
  if (typeof window !== "undefined") {
    console.log("[United Classes Demo Form Submission] Payload received:", payload);
    console.log("[Future Supabase Destination]: Ready for Supabase `enquiries` table insert.");
  }

  return {
    success: true,
    referenceId,
    message: "Demo lecture reservation received successfully!",
    isDemo: true,
  };
}
