import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import BackToTop from "@/components/common/BackToTop";
import { DemoModalProvider } from "@/context/DemoModalContext";

export const viewport: Viewport = {
  themeColor: "#101D38",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "United Classes Bhandara | 11th & 12th Science Coaching (Physics, Chemistry, Maths & Biology)",
  description:
    "Understand Science. Master Your Future. United Classes is the premier science coaching institute in Bhandara, Maharashtra for Class 11th, 12th (PCMB), JEE Main, NEET-UG, and MHT-CET. Book a free demo lecture.",
  keywords: [
    "United Classes Bhandara",
    "Science Coaching Bhandara",
    "11th and 12th Science Classes Bhandara",
    "Physics Chemistry Maths Biology Tuition Bhandara",
    "JEE Coaching in Bhandara",
    "NEET Coaching in Bhandara",
    "MHT-CET Coaching Bhandara",
    "Best Science Coaching Institute Bhandara Maharashtra",
  ],
  authors: [{ name: "United Classes" }],
  creator: "Simplified Works",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://unitedclasses-bhandara.demo",
    title: "United Classes Bhandara | Understand Science. Master Your Future.",
    description:
      "Premier Science coaching in Bhandara, Maharashtra for Class 11th, 12th (PCMB), JEE Main, NEET & MHT-CET.",
    siteName: "United Classes",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className="min-h-screen bg-white text-[#0F172A] font-sans antialiased selection:bg-[#2563EB] selection:text-white flex flex-col"
        suppressHydrationWarning
      >
        <DemoModalProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
          <BackToTop />
        </DemoModalProvider>
      </body>
    </html>
  );
}
