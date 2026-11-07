# VelClick Agency — Premium Digital Marketing Website

> **Tagline:** Your Growth. Our Click.  
> **Location:** Chennai, Tamil Nadu, India  
> **WhatsApp / Phone:** [+91 63795 53564](https://wa.me/916379553564)  
> **Email:** [velclickagency@gmail.com](mailto:velclickagency@gmail.com)

A high-performance, responsive corporate agency website built with **React**, **Vite**, **Tailwind CSS**, and **Motion for React (Framer Motion)**.

---

## 🎨 Brand Identity & Design System

- **Primary White (`#FFFFFF`):** Dominant website canvas (~65%)
- **Warm Ivory (`#F5F1E8`):** Alternating background sections (~20%)
- **Premium Black (`#111111`):** High-contrast typography & luxurious dark footer (~5%)
- **Metallic Gold (`#D6A536` / `#E8C875`):** Accents, buttons, badges, and borders (~10%)
- **Gold Gradient:** `linear-gradient(100deg, #A97819, #F5D98B, #C18A25)`
- **Preserved Original Logo:** Original gold Vel emblem and typography intact with exact aspect ratio.

---

## 🚀 Key Features

1. **Sticky Navigation Bar:**
   - Preserved original VelClick gold logo
   - Smooth-scrolling section links with active state indicator
   - Gold gradient "Let's Talk" CTA
   - Accessible mobile menu drawer with hamburger toggle

2. **High-Converting Hero Section:**
   - 2-column layout with "We Help Businesses Grow with Smart Digital Marketing"
   - Metallic gold gradient highlight on "Businesses Grow"
   - Dual CTAs: "Get Free Consultation" and "Explore Our Services"
   - 3D visual illustration blending seamlessly into the white background

3. **Trust & Value Indicators:**
   - 4 horizontal pillars with gold circular icons: Creative Solutions, Business-Focused Strategy, Modern AI Technology, Growth-Oriented Approach.
   - Thin gold vertical dividers; 2-column mobile grid.

4. **Digital Services (Warm Ivory Section):**
   - **AI Video Creation:** High-engagement promotional reels and product showcases
   - **Meta & Instagram Ads:** Strategic lead generation & targeted advertising
   - **Portfolio Websites:** Fast, responsive business landing pages and portfolios (Non-eCommerce)
   - **Google Business Profile:** Local search optimization, Google Maps, and reviews

5. **About VelClick:**
   - Mission statement and core strategic pillars
   - Location highlight: Chennai, Tamil Nadu, India

6. **Filterable Portfolio Showcase:**
   - Category filters: All Projects, AI Video Advertisements, Meta Ads Creatives, Portfolio Websites, Promotional Designs
   - Interactive modal preview with deliverables breakdown and WhatsApp inquiry link
   - Clearly labeled demonstration case studies

7. **How We Work (Timeline):**
   - 4-step execution framework (Understand, Plan, Create, Improve) with connected desktop timeline and vertical mobile flow.

8. **Tailored Pricing Solutions:**
   - STARTER, GROWTH, and CUSTOM packages
   - Honest "Request a Quote" model based on scope rather than arbitrary fixed pricing.

9. **Authentic Testimonials Section:**
   - Professional client feedback onboarding state respecting genuine review policies (zero fake testimonials or star ratings).

10. **Interactive FAQ Accordion:**
    - 7 comprehensive agency questions answered with smooth expansion and accessibility.

11. **Direct Contact & Enquiry Form:**
    - Form with full validation for Name, Business, Email, Phone, Service, and Project Details
    - Direct integration with WhatsApp (+91 63795 53564) and email (`velclickagency@gmail.com`)
    - Floating pulse WhatsApp button with tooltip

12. **SEO & Performance:**
    - Semantic HTML5 structure
    - Google Fonts (`Plus Jakarta Sans` & `Outfit`)
    - Open Graph & Twitter meta tags
    - `robots.txt` and `sitemap.xml`
    - Custom branded `404.html` page

---

## 🛠️ Technology Stack

- **Framework:** React 18
- **Bundler:** Vite 5
- **Styling:** Tailwind CSS + PostCSS + Autoprefixer
- **Icons:** Lucide React
- **Forms:** React Hook Form
- **Typography:** Plus Jakarta Sans & Outfit (Google Fonts)

---

## 💻 Local Development

### 1. Prerequisites
Ensure you have Node.js (v18+) installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 4. Build for Production
```bash
npm run build
```
Output will be generated in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🔗 Contact Form Endpoint Setup (Optional Backend Integration)

The contact form is currently wired to pre-format client inquiries and send them directly to **VelClick Agency's official WhatsApp (+91 63795 53564)**.

To optionally connect an email endpoint like [Web3Forms](https://web3forms.com/) or [Formspree](https://formspree.io/):
1. Sign up for free at Web3Forms or Formspree.
2. Get your Access Key.
3. In `src/sections/Contact.jsx`, add your `fetch('https://api.web3forms.com/submit', ...)` request inside `onSubmit`.

---

## 📦 Cloudflare Pages Deployment

### Option A: Cloudflare Pages Git Integration (Recommended)
1. Push this project to your GitHub repository:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/velclick-agency.git
   git branch -M main
   git push -u origin main
   ```
2. In the **Cloudflare Dashboard**, navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your repository.
4. Set the build settings:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (or leave blank)
5. Click **Save and Deploy**.

### Option B: Cloudflare Direct Upload via Wrangler CLI
```bash
npm run build
npx wrangler pages deploy dist --project-name=velclick-agency
```

---

## 📄 License & Attribution

&copy; 2026 **VelClick Agency**. All Rights Reserved.  
*Your Growth. Our Click.*

