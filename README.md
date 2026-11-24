# UNITED CLASSES – Physics Coaching Institute Website Demo
> Developed by **Simplified Works** for client presentation and demonstration.

---

## 🎯 Project Overview

**UNITED CLASSES** is a premium, modern, and responsive website designed for a specialized Physics Coaching Institute located in **Bhandara, Maharashtra, India**.

The objective of this presentation demo is to showcase how a high-calibre digital presence builds immediate academic trust with parents, engages Class 11th & 12th Science students, and converts visitors into **Free Demo Lecture** reservations.

---

## 🎨 Brand & Design System

- **Brand Name**: UNITED CLASSES
- **Tagline**: *"Understand Physics. Master Your Future."*
- **Location**: Bhandara, Maharashtra, India (Pincode: 441904)
- **Primary Palette**:
  - Deep Navy: `#101D38`
  - Secondary Navy Card: `#162746`
  - Electric Blue (Primary Accent): `#2563EB`
  - Cyan (Secondary Accent): `#38BDF8`
  - Light Background: `#F8FAFC`
  - Dark Slate Text: `#172033`
  - Amber Highlight: `#F59E0B`
- **Typography**: Manrope (Headings), Inter (Body)
- **Aesthetic**: Alternating dark navy and clean white sections, glassmorphism equation badges, quantum atom orbitals, rounded cards, subtle shadows, and zero cartoonish clutter.

---

## 🧭 Site Architecture & Pages

All pages share consistent sticky navigation, brand header, footer, floating WhatsApp button, back-to-top button, and interactive demo lecture reservation modal:

| Route | Page | Key Content |
|---|---|---|
| `/` | **Homepage** | All 12 requested sections in exact order (Hero, Exam Strip, About, Courses, Why Choose Us, Methodology, Results, Testimonials, CTA, Location, Footer). |
| `/about` | **About the Institute** | Teaching philosophy, lead faculty profile placeholder, 4 core values, classroom & lab infrastructure in Bhandara. |
| `/courses` | **All Courses Directory** | Complete listing of all 5 specialized programs with target audiences, batch limits, and curriculum highlights. |
| `/courses/class-11-physics` | **Class 11 Physics** | Mechanics, Laws of Motion, Work Energy Power, Thermodynamics, Oscillations & Waves. |
| `/courses/class-12-physics` | **Class 12 Physics** | Electrostatics, Current Electricity, Magnetism, Optics, Modern Physics. |
| `/courses/jee-physics` | **JEE Physics Mastery** | Conceptual problem-solving, 20+ years PYQs, advanced numericals, CBT mock simulations. |
| `/courses/neet-physics` | **NEET Physics Accelerator** | NCERT mapping, speed drills (45 Qs / 50 mins), formula shortcuts for medical aspirants. |
| `/courses/mht-cet-physics` | **MHT-CET Physics** | State Board Balbharati textbook deep dive, CET speed tricks without negative marking. |
| `/results` | **Results & Achievements** | Merit showcase with clearly marked sample placeholders, exam-wise breakdown, and success CTA. |
| `/testimonials` | **Student Testimonials** | Testimonial cards, video review placeholders, parent feedback, trial class prompt. |
| `/contact` | **Contact & Enquiry** | Full validated demo booking form, phone/email placeholders, Bhandara Google Maps embed, and FAQ accordion. |
| `/sitemap.xml` | **SEO Sitemap** | Automatically generated XML sitemap with all routes and priorities. |
| `/robots.txt` | **SEO Robots** | Search engine crawling directives. |

---

## ⚡ Key Interactive Features

1. **Free Demo Lecture Modal & Forms**:
   - Accessible via **BOOK FREE DEMO** in the Navbar, Hero, Course Cards, CTA sections, or directly on `/contact`.
   - Fields: Student Name, Mobile Number (Indian 10-digit validation), Current Class (11th/12th/Other), Interested Program, Preferred Date, Preferred Time Slot, and Optional Query.
   - Interactive demo booking confirmation with a generated reference ticket (`PE-DEMO-XXXX`) and clear disclaimer that no database has been altered during the demo.
   - Ready for Supabase (`src/lib/utils.ts` -> `submitDemoEnquiry`).

2. **WhatsApp Floating Integration**:
   - Configured via `siteConfig.contact.whatsappNumber` in `src/config/site.ts`.
   - Preset to `"91XXXXXXXXXX"`.
   - When clicked in demo mode, opens a polished dialog explaining where the institute owner can enter their real WhatsApp number, and allows copying the prefilled message.
   - When updated with a real phone number, instantly directs to `https://wa.me/<number>`.

3. **Physics Visual Simulation**:
   - Custom SVG orbital paths with rotating electron particles, central nucleus quantum glow, and authentic physics equations ($E=mc^2$, $\oint B\cdot dl = \mu_0 I$, $\lambda = h/p$, $F = dp/dt$).

---

## 🛠️ How to Replace Demo Information with Real Client Details

All customizable institute details are centralized in:

### 1. Institute Info & Contacts: `src/config/site.ts`
```typescript
export const siteConfig = {
  brandName: "PHYSICS EDGE",
  tagline: "Understand Physics. Master Your Future.",
  location: {
    city: "Bhandara",
    addressLine1: "Replace with Building / Premise Name",
    addressLine2: "Main Road, Bhandara, Maharashtra - 441904",
    landmarkPlaceholder: "Near Gandhi Chowk",
  },
  contact: {
    phonePlaceholder: "+91 98XXX XXXXX", // Replace with real phone
    whatsappNumber: "91XXXXXXXXXX",      // Replace with real 10-digit WhatsApp number
    emailPlaceholder: "contact@institute.com",
    officeHours: "Monday – Saturday: 8:00 AM – 7:30 PM",
  },
  teacherProfile: {
    name: "Prof. [Real Teacher Name]",
    qualificationPlaceholder: "M.Sc. Physics, Gold Medalist / B.Tech",
    experiencePlaceholder: "12+ Years Coaching Experience in Vidarbha",
    specialization: "Mechanics & Electrodynamics",
  },
};
```

### 2. Courses & Syllabus: `src/data/courses.ts`
Update chapter names, batch timings, and fee structures.

### 3. Real Student Results: `src/data/results.ts`
Replace the sample student placeholders with verified ranks, percentiles, and photos.

### 4. Real Student & Parent Reviews: `src/data/testimonials.ts`
Replace the demo testimonials with authentic Google reviews or student statements.

---

## 🚀 Running Locally

```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Run local development server
npm run dev

# 3. Open in browser
http://localhost:3000

# 4. Create production build
npm run build

# 5. Run production build
npm start
```

---

*Physics Edge Demo Website • Developed with precision by Simplified Works.*
