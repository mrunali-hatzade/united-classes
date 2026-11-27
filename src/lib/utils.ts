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
  currentClass: "11th" | "12th" | "Repeater / Other" | string;
  interestedCourse: string;
  preferredTiming?: string;
  preferredDate?: string;
  message?: string;
  source?: string;
}

export interface WhatsAppPayloadResult {
  url: string;
  formattedText: string;
  isPlaceholder: boolean;
  cleanNumber: string;
}

/**
 * Generates an instant WhatsApp click-to-chat URL with prefilled student lead details.
 */
export function buildWhatsAppEnquiryPayload(
  payload: Partial<EnquiryPayload>,
  whatsappNumber: string = "91XXXXXXXXXX"
): WhatsAppPayloadResult {
  const lines = [
    `*Admission / Free Demo Enquiry — United Classes Bhandara*`,
    payload.studentName ? `• *Student Name:* ${payload.studentName}` : null,
    payload.mobileNumber ? `• *Mobile Number:* ${payload.mobileNumber}` : null,
    payload.currentClass ? `• *Current Academic Class:* ${payload.currentClass}` : null,
    payload.interestedCourse ? `• *Interested Programme/Subject:* ${payload.interestedCourse}` : null,
    payload.preferredTiming ? `• *Preferred Batch Slot:* ${payload.preferredTiming}` : null,
    payload.message ? `• *Note / Query:* ${payload.message}` : null,
  ].filter(Boolean);

  const formattedText = lines.join("\n");
  const isPlaceholder = !whatsappNumber || whatsappNumber.includes("X") || whatsappNumber.length < 10;
  const cleanNumber = whatsappNumber.replace(/\D/g, "");
  const url = `https://wa.me/${cleanNumber || "919800000000"}?text=${encodeURIComponent(formattedText)}`;

  return {
    url,
    formattedText,
    isPlaceholder,
    cleanNumber,
  };
}

/**
 * Backward compatible wrapper
 */
export function buildWhatsAppEnquiryUrl(
  payload: Partial<EnquiryPayload>,
  whatsappNumber: string = "91XXXXXXXXXX"
): string {
  return buildWhatsAppEnquiryPayload(payload, whatsappNumber).url;
}

/**
 * Demo submission handler.
 * Ready for future backend or CRM integration.
 */
export async function submitDemoEnquiry(payload: EnquiryPayload): Promise<{
  success: boolean;
  referenceId: string;
  message: string;
  isDemo: boolean;
  whatsAppPayload: WhatsAppPayloadResult;
}> {
  // Simulate network latency for realistic feel
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Generate clean demo booking reference ID
  const datePart = new Date().toISOString().slice(2, 10).replace(/-/g, "");
  const randomPart = Math.floor(1000 + Math.random() * 9000);
  const referenceId = `UC-DEMO-${datePart}-${randomPart}`;

  const whatsAppPayload = buildWhatsAppEnquiryPayload(payload, "91XXXXXXXXXX");

  return {
    success: true,
    referenceId,
    message: "Enquiry validated successfully!",
    isDemo: true,
    whatsAppPayload,
  };
}
