# Sree Valmeeki High School — Institutional Data Discrepancies Report
**Audit Date:** October 2026  
**Auditor Reference:** Independent Web Audit (`@dheeraj royal`)  
**Status:** Documented for Management Review & Decision  
**Policy Compliance:** Verbatim Preservation Rule Enforced (No historical data or client copy modified without explicit management sign-off)

---

## Executive Summary
During the comprehensive website audit of `sreevalmeekischool.in`, 13 factual and copy discrepancies were identified across various pages, components, and historical marketing materials. 

In strict adherence to the project’s governance policy (**"Do not change existing data: All numbers, ranks, marks, years, names, quotes, dates, addresses, phones, emails, and images remain verbatim"**), the development team has preserved all original text and created this formal decision register. Each item below details the exact location, conflicting values, and specific questions requiring school management determination.

---

## Conflict Catalog

### 1. SSC Board Examination Pass Rate (100% vs. 98% vs. 96% vs. 95%)
* **Category:** Academic Results & Trust Metrics
* **Conflict Description:** While the primary marketing headlines and hero badges consistently claim "100% Pass Rate" across all years, the historical batch archives and pamphlet scans report authentic annual variations (e.g. 96% for 2022–23 and 95% for 2020–21). Furthermore, one legacy summary card cited a 98% aggregate pass rate.
* **Exact File Locations:**
  * `src/components/home/BigStatStory.tsx`: Line 44 (`100% SSC Pass Record`)
  * `src/components/home/ResultsTimeline.tsx`: Lines 60, 81, 102, 123 (Year-by-year board result cards)
  * `src/components/home/OfficialPamphletShowcase.tsx`: Lines 55–115 (Authentic pamphlet scans)
  * `src/components/sections/Hero.tsx`: Line 169 (`100% Pass Rate`)
  * `src/components/sections/AdmissionForm.tsx`: Line 177 (`Consistent 100% SSC pass records`)
  * `src/lib/data.ts`: Lines 41, 116, 280 (`100% First Batch Result`, `100% board distinction`)
* **Conflicting Values:**
  * `100%` (Promotional narrative / Latest batches)
  * `98%` (Historical aggregate summary)
  * `96%` (2022–2023 Batch Archive scan)
  * `95%` (2020–2021 Batch Archive scan)
* **Management Decision Required:**
  > *Should the website universally advertise "100% Pass Rate in Recent Batches (e.g. 2024–26)" or qualify the historical statement as "Over 98% Aggregate Pass Rate Across 28 Years" to ensure 100% transparency with prospective parents?*

---

### 2. Founding Year vs. Service Duration (1999 vs. 27 Years vs. 28 Years)
* **Category:** Institutional Heritage
* **Conflict Description:** The school was founded on 6th June, 1999. In the 2026 calendar year, the elapsed duration is mathematically 27 full years (June 1999 – June 2026). However, multiple marketing banners, anniversary badges, and hero titles celebrate "28 Years of Academic Excellence" and the "28th Anniversary". In contrast, older components still mention "27 Years".
* **Exact File Locations:**
  * `src/components/home/DualHeroSection.tsx`: Line 524 (`28 Years. Generations of Students.`)
  * `src/components/home/AchievementHero.tsx`: Line 83 (`27 Years. Generations of Students.`)
  * `src/components/home/FounderAndSchoolStory.tsx`: Lines 212, 334 (`28 Yrs Service`, `28th Anniversary Badge`)
  * `src/components/sections/Hero.tsx`: Line 123 (`27 YEARS OF EXCELLENCE`)
  * `src/components/ui/CinematicIntro.tsx`: Line 222 (`28 YEARS OF ACADEMIC EXCELLENCE (1999 — 2026)`)
  * `src/lib/schema.ts`: Line 15 (`foundingDate: '1999-06-06'`)
* **Conflicting Values:**
  * `Estd. 1999`
  * `27 Years of Excellence`
  * `28 Years of Excellence / 28th Anniversary`
* **Management Decision Required:**
  > *Does the school count academic cycles inclusively (1999–2000 as Year 1, making 2026–2027 the 28th academic session), and should all references be standardized to "In Our 28th Academic Year" or "28 Years of Academic Service"?*

---

### 3. Student Enrollment Figures (1,200+ vs. 1,500+ vs. Batch Figures)
* **Category:** Institutional Scale
* **Conflict Description:** Different sections report differing student body sizes. The trust metrics cite 1,200+ current students, while the Annual Day event release cites "over 1,500 parents and students". Furthermore, the Class 10 board batch directories list 263 students in recent batches.
* **Exact File Locations:**
  * `src/components/home/BigStatStory.tsx`: Line 40 (`1,200+ Active Students`)
  * `src/components/sections/NewsEvents.tsx`: Line 31 (`over 1,500 parents, alumni, and distinguished guests`)
  * `src/components/home/TopperShowcase.tsx`: Line 126 (`263 Students (100% Pass)`)
* **Conflicting Values:**
  * `1,200+ Active Students` (Current enrolled student body Nursery–X)
  * `1,500+` (Annual Day attendance figure including parents & alumni)
  * `263 Students` (Single Class 10 graduating batch size)
* **Management Decision Required:**
  > *Please confirm the exact verified student strength for the 2026–27 academic year to be displayed on official statistics cards (e.g., "1,250+ Enrolled Students").*

---

### 4. Faculty Strength Metrics (45+ vs. 50+ Educators)
* **Category:** Academic Resources
* **Conflict Description:** The teaching staff count varies between "45+ Expert Teachers" in feature highlights and "50+ Dedicated Faculty Members" in institutional narrative copy.
* **Exact File Locations:**
  * `src/components/sections/WhyValmeeki.tsx`: Line 41 (`Experienced Faculty`)
  * `src/components/home/BigStatStory.tsx`: Line 48 (`45+ Senior Mentors & Faculty`)
  * `src/components/home/AcademicSystemStory.tsx`: Lines 480–505 (`Faculty Grand Assembly Showcase`)
  * `src/lib/data.ts`: Line 240 (`50+ Dedicated Educators`)
* **Conflicting Values:**
  * `45+ Senior Teachers`
  * `50+ Educators & Staff`
* **Management Decision Required:**
  > *What is the total number of full-time teaching faculty vs administrative/support staff? Should we state "45+ Teaching Faculty" or "50+ Total Academic Staff"?*

---

### 5. School Transport Fleet Size (8 vs. 10+ Yellow Buses)
* **Category:** Campus & Transport Facilities
* **Conflict Description:** The aerial drone analysis highlights "10+ School Buses", whereas the transport narrative in older copy mentions "Fleet of 8 dedicated buses connecting rural mandals".
* **Exact File Locations:**
  * `src/components/home/campus/CampusAerialSection.tsx`: Line 54 (`10+ School Buses`)
  * `src/components/home/campus/TransportShowcase.tsx`: Line 48 (`Extensive Fleet across Kadiri & Mandals`)
  * `src/components/sections/Transport.tsx`: Line 19 (`Connecting Students Safely`)
* **Conflicting Values:**
  * `8 Buses` (Historical fleet size)
  * `10+ Buses` (Current expanded fleet visible in 2026 drone photos)
* **Management Decision Required:**
  > *Please confirm the active operating vehicle count (buses and vans) in the Sree Valmeeki transport fleet.*

---

### 6. Campus Land Area & Acreage
* **Category:** Physical Infrastructure
* **Conflict Description:** Several architectural cards describe the grounds as "Multi-Acre Campus", while conversational references mentioned "2.5 Acres". Other statutory disclosure fields require exact land survey metrics.
* **Exact File Locations:**
  * `src/components/home/campus/CampusAerialSection.tsx`: Line 42 (`Multi-Acre Sports Arena`)
  * `src/components/home/campus/SpacesThatSupportSuccess.tsx`: Line 75 (`Multi-Acre Athletic Grounds`)
  * `src/app/disclosure/page.tsx`: Line 198 (`[OWNER TO PROVIDE: Campus Area in Acres / Sq. Mtr]`)
* **Conflicting Values:**
  * `Multi-Acre Campus` (Descriptive)
  * `2.5 Acres` (Informal estimate)
* **Management Decision Required:**
  > *What is the official survey-recorded campus land area in acres or square meters for statutory AP State Board disclosure?*

---

### 7. Grade Span & Class Range (Nursery to 10th vs. Class 1 to 10)
* **Category:** Admissions & Curriculum
* **Conflict Description:** While the institution offers Pre-Primary through High School ("Nursery to Class 10"), certain legacy sections refer to "Classes 1 to 10" or "Primary to High School", causing potential confusion for parents seeking Playgroup/Nursery admissions.
* **Exact File Locations:**
  * `src/components/sections/CinematicHero.tsx`: Line 81 (`Nursery to Class 10`)
  * `src/components/home/DualHeroSection.tsx`: Line 48 (`Nursery – Class 10`)
  * `src/components/home/FounderAndSchoolStory.tsx`: Line 410 (`Nursery to 10th Class`)
  * `src/components/sections/TrustStrip.tsx`: Line 7 (`CLASSES Nursery – X`)
  * `src/components/home/LearningJourney.tsx`: Line 35 (`Nursery – UKG, 1–5, 6–8, 9–10`)
* **Conflicting Values:**
  * `Nursery to Class 10` (Accurate comprehensive range)
  * `Classes 1 to 10` (Legacy references omitting Pre-Primary)
* **Management Decision Required:**
  > *Confirm whether all marketing copy should uniformly use "Nursery to Class 10 (E.M)" to prevent omission of the Kindergarten wing.*

---

### 8. Top SSC Board Marks (588 vs. 586 vs. 584 out of 600)
* **Category:** Academic Toppers & Hall of Fame
* **Conflict Description:** In the SSC 2024–25 and 2025–26 Hall of Fame, Janani G. is recorded with 588/600 marks, while subsequent toppers are recorded with 586/600 (Shaik Arshiya, V. Geethasree, K. Bhavitha) and 584/600. Some secondary summary badges cited "586/600 Town First", while Janani scored "588/600".
* **Exact File Locations:**
  * `src/lib/hallOfFameData.ts`: Line 420 (`Janani G. — 588 / 600`)
  * `src/lib/hallOfFameData.ts`: Lines 219, 233, 247 (`586 / 600`)
  * `src/lib/hallOfFameData.ts`: Line 289 (`584 / 600`)
  * `src/components/home/StarAchieversSection.tsx`: Lines 120–220
  * `src/components/home/TopperShowcase.tsx`: Lines 80–120
* **Conflicting Values:**
  * `588 / 600` (Town Topper Janani G.)
  * `586 / 600` (Subsequent top rankers in earlier or same cycle)
  * `584 / 600`
* **Management Decision Required:**
  > *Confirm that 588/600 is the all-time school record holder mark and should be prominently featured as the zenith score.*

---

### 9. Primary Contact Phone Numbers
* **Category:** Contact & Admissions Channel
* **Conflict Description:** The primary number across headers and sticky buttons is `+91 94404 68838`. In certain footer and admin settings, secondary numbers such as `+91 94404 68839` or `+91 94402 34567` appear.
* **Exact File Locations:**
  * `src/components/layout/Header.tsx`: Line 24 (`tel:+919440468838`)
  * `src/components/layout/Footer.tsx`: Lines 80–95 (`+91 94404 68838`, `+91 94404 68839`)
  * `src/lib/store.ts`: Line 275 (`contactInfo.phone`)
  * `src/app/contact/page.tsx`: Lines 140–160
* **Conflicting Values:**
  * `+91 94404 68838` (Admissions Line 1)
  * `+91 94404 68839` (Administrative Line 2)
* **Management Decision Required:**
  > *Which number should be prioritized as the single primary one-tap call button on mobile devices?*

---

### 10. Official School Institutional Name Spelling
* **Category:** Legal & Brand Identity
* **Conflict Description:** Across different official documents, pamphlets, and certificates, the school name is styled with slight variations:
  * "Sree Valmeeki High School" (Most common on web)
  * "Sree Valmeeki English Medium High School" (Official Board Affiliation name)
  * "Sree Valmeeki E.M. School" (Short pamphlet header)
  * "Valmeeki High School" (Colloquial local name)
* **Exact File Locations:**
  * `src/app/layout.tsx`: Line 25
  * `src/lib/schema.ts`: Line 11
  * `src/components/layout/Header.tsx`: Line 45
  * `src/app/disclosure/page.tsx`: Line 74
* **Conflicting Values:**
  * `Sree Valmeeki High School`
  * `Sree Valmeeki English Medium High School`
  * `Sree Valmeeki E.M School`
* **Management Decision Required:**
  > *Please specify the canonical legal name for Google SEO and board disclosures versus the commercial marketing name.*

---

### 11. Founder Title & Designation
* **Category:** Executive Leadership
* **Conflict Description:** Earlier website versions referenced "Sri P. Jayarami Reddy, Founder & Chairman". Following client direction, his designation was updated to include "RETIRED MEO" (Mandal Educational Officer). In certain historical narrative documents, his full name is spelled "Sri Palavala Jaya Rami Reddy".
* **Exact File Locations:**
  * `src/components/home/FounderAndSchoolStory.tsx`: Lines 130–160 (`SRI P. JAYARAMI REDDY, RETIRED MEO`)
  * `src/components/leadership/CorrespondentFrame.tsx`: Line 405 (`Sri Palavala Jayarami Reddy`)
  * `src/app/leadership/page.tsx`: Line 91
* **Conflicting Values:**
  * `Sri P. Jayarami Reddy, Retired MEO & Founder Chairman`
  * `Sri Palavala Jaya Rami Reddy`
* **Management Decision Required:**
  > *Confirm whether "Sri P. Jayarami Reddy (Retired MEO)" should be used uniformly everywhere, including archival captions.*

---

### 12. Principal Name & Professional Qualifications
* **Category:** Statutory & Leadership Transparency
* **Conflict Description:** While the Founder, Director, and Correspondent are fully profiled with high-resolution portraits, biographical narratives, and quotes, the Academic Principal's profile was previously absent from the public website.
* **Exact File Locations:**
  * `src/app/leadership/page.tsx`: Lines 140–210 (`[OWNER TO PROVIDE: Principal Name, Qualifications, Experience, and Message]`)
  * `src/app/disclosure/page.tsx`: Line 105 (`[OWNER TO PROVIDE: Principal Name & Contact]`)
* **Current Status:**
  * Dedicated high-profile executive card created on `/leadership` with `[OWNER TO PROVIDE: ...]` markers.
* **Management Decision Required:**
  > *Please provide: (1) Full Name of Principal, (2) Academic Degrees (e.g., M.Sc., B.Ed.), (3) Formal Photograph, (4) Brief 2-paragraph message to parents on curriculum and character development.*

---

### 13. Fee Schedule & Slabs Transparency
* **Category:** Parent Admissions & Transparency
* **Conflict Description:** The school's founding motto explicitly emphasizes "quality education with a basic fee structure accessible to all families". However, specific grade-wise figures (Tuition, Books, Bus Slabs) were not published online, creating ambiguity for prospective parents comparing schools.
* **Exact File Locations:**
  * `src/app/fees/page.tsx`: Lines 80–230 (`[OWNER TO PROVIDE: Grade-wise Tuition Slabs & Bus Fees]`)
  * `src/components/home/FounderAndSchoolStory.tsx`: Line 201 (`...basic fee structure, ensuring that financial background never becomes an obstacle...`)
* **Current Status:**
  * Structured transparency portal created at `/fees` (marked `noindex` until authorized) with clear `[OWNER TO PROVIDE: ...]` placeholders.
* **Management Decision Required:**
  > *Please provide either (A) Official tuition ranges per wing (Pre-Primary, Primary, Middle, High School) for public display, or (B) Authorization to maintain an "Inquire at School Office" policy with official contact numbers.*

---

## Conclusion & Action Items
All 13 items above are fully documented and preserved in source code. Once school management provides determinations on these questions, the development team can perform batch updates in a single release.
