# Accredian Enterprise Landing Page Clone

## Overview

A production-quality frontend clone of the Accredian Enterprise landing page, built as part of an internship assignment. The project focuses on clean architecture, reusable components, responsive design, and maintainable code rather than pixel-perfect accuracy.

This project recreates the core marketing sections of an enterprise learning platform, including the hero, statistics, feature highlights, course offerings, testimonials, FAQs, and call-to-action sections, all built using a scalable component-based architecture.

## Features

- Fully responsive enterprise landing page (desktop, tablet, mobile)
- Reusable, composable UI components
- Modern component architecture with clear separation of concerns
- Type-safe components using TypeScript interfaces
- Consistent design system across all sections
- Clean, predictable folder structure
- Accessible, semantic markup

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Linting:** ESLint
- **Icons:** Lucide React

No backend, database, or authentication is included in this project.

## Sections

| Section | Description |
|---|---|
| Hero | Primary landing banner with heading, CTA, and imagery |
| Track Record | Key statistics and platform metrics |
| Companies | Trusted enterprise logos |
| Enterprise Edge | Core value propositions for enterprises |
| Domain Expertise | Technology domains covered by the platform |
| Course Segmentation | Program, industry, topic, and level-specific offerings |
| Who Should Join | Target audience segments |
| CAT Framework | Concept, Application, and Tools learning methodology |
| Delivery Process | Step-by-step program delivery workflow |
| FAQ | Frequently asked questions with accordion interaction |
| Testimonials | Client and learner feedback |
| CTA | Final call-to-action banner |
| Footer | Site links, contact information, and social channels |

## Folder Structure

```
accredian-enterprise-clone/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── TrackRecord.tsx
│   │   ├── Companies.tsx
│   │   ├── EnterpriseEdge.tsx
│   │   ├── DomainExpertise.tsx
│   │   ├── CourseSegmentation.tsx
│   │   ├── WhoShouldJoin.tsx
│   │   ├── CATFramework.tsx
│   │   ├── DeliveryProcess.tsx
│   │   ├── FAQ.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTA.tsx
│   │
│   └── ui/
│       ├── Container.tsx
│       ├── PrimaryButton.tsx
│       ├── SectionHeading.tsx
│       ├── StatCard.tsx
│       ├── FeatureCard.tsx
│       ├── CourseCard.tsx
│       ├── FrameworkCard.tsx
│       └── ProcessCard.tsx
│
└── public/
    └── assets/
```

## Installation

Clone the repository and install dependencies.

```bash
git clone <repository-url>
cd accredian-enterprise-clone
npm install
```

## Run Locally

Start the development server.

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Build

Create a production build.

```bash
npm run build
npm start
```


## Future Improvements

- Add CMS integration for dynamic content management
- Introduce animation and scroll-based transitions
- Add dark mode support
- Integrate analytics and performance monitoring
- Add unit and integration tests
- Improve accessibility coverage (WCAG compliance)

## Author

Built as part of a frontend engineering internship assignment.
