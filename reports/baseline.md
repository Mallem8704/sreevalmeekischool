# Sree Valmeeki School Website Baseline Audit (Step 0)
**Date:** 18 October 2026  
**Auditor:** Senior Next.js Engineer, SEO Specialist & Accessibility Auditor  
**Branch:** `improve/10of10`  
**Target Domain:** [https://www.sreevalmeekischool.in](https://www.sreevalmeekischool.in)

---

## 1. Environment & Build Baseline
- **Next.js Version:** 16.3.8 (Webpack mode)
- **React Version:** 19.0.0
- **TypeScript:** 5.8.2
- **Tailwind CSS:** v4.0.0
- **Prerendered Static Routes (27 total):**
  - `/` (Homepage)
  - `/_not-found`
  - `/about`
  - `/academics`
  - `/academics/iit-foundation`
  - `/achievements`
  - `/admin`, `/admin/*` (CRM, Enquiries, Announcements, Gallery, Settings, Timeline, Testimonials)
  - `/admissions`
  - `/campus`
  - `/contact`
  - `/events`
  - `/events/[slug]` (Dynamic route currently without `generateStaticParams`)
  - `/gallery`
  - `/leadership`
  - `/news`
  - `/privacy-policy`
  - `/robots.txt`
  - `/sitemap.xml`
- **Build Status:** Clean compilation, 0 fatal TypeScript or Webpack errors.

---

## 2. Link & Route Crawl Audit
- Crawled internal links: 22 distinct paths.
- Verified dynamic event slugs in `eventStories`:
  1. `annual-day-celebrations`
  2. `valmeeki-premier-league`
  3. `national-science-fair`
  4. `farewell-felicitation`
- **Identified Navigation Defect:** Header and Mobile Drawer currently use relative anchor hashes (`#about`, `#academics`, `#results`, etc.) which only work when on the homepage `/`. When a visitor is on `/admissions` or `/about`, clicking these nav items fails to navigate.

---

## 3. SEO Baseline Findings
1. **Canonical Tag Defect:**
   - `src/app/layout.tsx` hardcodes `alternates: { canonical: "https://www.sreevalmeekischool.in" }`.
   - Inner pages (`/about`, `/academics`, `/admissions`, `/contact`, `/campus`, `/leadership`, `/achievements`, `/gallery`, `/news`, `/privacy-policy`) lack self-referencing canonicals and inherit the root URL, signaling search engines to treat inner pages as duplicates of the homepage.
2. **Metadata Duplication:**
   - Inner pages lack unique `generateMetadata` / `Metadata` exports with tailored `title` and `description`.
3. **Structured Data:**
   - Root layout contains a basic `EducationalOrganization` snippet, but inner pages lack `BreadcrumbList`, full addresses, or unified JSON-LD.
4. **Sitemap `lastmod`:**
   - `src/app/sitemap.ts` generates identical timestamps (`new Date()`) for every route on build.

---

## 4. UX, Accessibility & Performance Baseline
1. **Hero Video:** Background video autoplays without pre-checking connection speed or user preferences (`prefers-reduced-data`).
2. **Pamphlet Image Delivery:** Raw scanned pamphlets are delivered at full resolution without small responsive thumbnails in initial view.
3. **Carousel Controls:** Auto-sliding carousels lack explicit visible pause/play controls for keyboard and screen-reader accessibility.
4. **Forms:**
   - Phone input lacks 10-digit Indian mobile regex enforcement.
   - Missing DPDP Act parental consent notice on admission enquiry form.
   - Grade dropdowns differ slightly between homepage modal and contact page.

---

## 5. Data Discrepancies Cataloged
All 13 discrepancies noted in the review (pass rates, student counts, rank titles, years of legacy, address variants, email addresses, and unsourced claims) have been queued for cataloging in `DATA_DISCREPANCIES.md` in strict adherence to Rule 1 (never alter existing client data without owner authorization).
