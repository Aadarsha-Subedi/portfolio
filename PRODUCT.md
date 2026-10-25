# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Vite + React + TypeScript + Tailwind CSS v4, components in the shadcn/ui open-code pattern. No MDX, no blog. Motion (motion.dev) is the default animation library. Only free components from shadcn/ui, Kobra (free tier, personal use) and Aceternity UI (free components) may be used.

## Users

Recruiters and hiring managers who reach the site from Aadarsha's resume. They arrive with the resume open or just read, usually on a laptop, sometimes on a phone from a LinkedIn or email link. Their job: confirm the resume is real, see the work behind each line, and decide whether to reach out.

## Product Purpose

A career wall for Aadarsha Subedi: one place that holds every role, project and achievement, linked from the resume. Success is a recruiter who, within a minute, can see what Aadarsha built, at what depth, and how to get in touch or download the resume.

## Positioning

Undecided (user parked this on 2026-10-25). Evidence that could carry it: full-stack engineer who ships multi-tenant AI SaaS features end to end (Django/DRF + React/TypeScript), and who cares about frontend craft and motion (profile README: "I love experimenting with animations and making websites feel alive").

## Operating Context

- Linked from the resume PDF hosted at https://pub-b2c92cab66f04a2bbb3db9deca643007.r2.dev/aadarsha-subedi-resume.pdf (the site's resume download points here).
- Visitors scan, compare against the resume, and leave; repeat visits are rare.

## Capabilities and Constraints

- Sections: intro, experience, projects, education and achievements, skills, contact. No blog.
- Must stay fast and readable on mobile; content visible without JavaScript-driven reveals.
- Repo is public on GitHub.

## Brand Commitments

- Name: Aadarsha Subedi. Role title on resume: Full Stack Engineer. Location: Kathmandu, Nepal.
- Existing assets: avatar photo (`src/assets/avatar.jpg` in the old site), project screenshots for Finance Tracker, Type Tester, Fresher Resume Builder.

## Evidence on Hand

From the resume (2026-10; source of truth is the user's `aadarsha-subedi-resume.tex`):

- **Summary (resume wording):** Full-stack engineer (Python/Django, ReactJS/TypeScript) with a year of production experience building multi-tenant AI-powered SaaS applications. Comfortable owning features end to end, from high-level architectural decisions to scalable, maintainable code through design patterns.
- **Full Stack Engineer, Vanarx Tech**, Nov 2025 to Oct 2026, Kathmandu, Nepal.
  - Real-time inbox for Socify, a customer-messaging and CRM product (30+ businesses, NPR 10 lakh+ in sales), connecting Instagram, Messenger, WhatsApp and TikTok with 1,000+ messages per account and full data separation between businesses.
  - Integrated Evolution API so customers connect existing WhatsApp numbers, reducing onboarding friction from Meta's pricing and number restrictions.
  - Post management, comment management/moderation and comment automation across Facebook, Instagram and TikTok.
  - Led usage-based billing for AI replies (about 500,000 credits purchased and used by clients) and ChargeBee subscriptions.
  - About 35% faster response times on optimized pages through caching and fewer database queries.
- **Full Stack Developer Intern, Professional Computer Systems**, Aug 2023 to Nov 2023, Kathmandu, Nepal.
  - School Management System: ReactJS + TailwindCSS frontend, Spring Boot backend; authentication and role-based access for admins and students, course management, attendance, leave workflows (students apply; admins approve or reject).
  - Integrated the frontend with REST APIs, tested with Postman, agile sprints.
- **Projects (resume):**
  - ResolveAI: multi-tenant AI-powered support desk. Customers submit tickets through a public workspace portal; agents reply by Gmail; ticket assignment, knowledge base, role-based access, audit log, dashboard; hybrid RAG (vector + PostgreSQL full-text search) powering human-reviewed AI reply drafts via custom AI model integration. Reusable Django/DRF foundation (standardized API responses, pagination, filtering, cache manager, soft deletes, structured request logging, secrets management). Deployed on Cloudflare (Workers, Pages, Containers). Stack: Django, DRF, PostgreSQL, Redis, React, Tailwind CSS, shadcn/ui, Docker, Cloudflare. Live: https://resolve-ai.aadarshasubedi20.workers.dev/ · GitHub: https://github.com/Aadarsha-Subedi/resolve-ai
  - Pro-Goal: project management platform. Explore projects, manage tasks and notes in one place, discuss through comments, sync via Slack integration; activity tracking, note versioning, configurable Slack and email reminders. Same Django/DRF foundation and Cloudflare deployment; same stack. Live: https://pro-goal.aadarshasubedi20.workers.dev/ · GitHub: https://github.com/Aadarsha-Subedi/Pro-Goal
- **Older projects (old portfolio, not on resume):** Finance Tracker (https://finance-tracker-frontend-gules.vercel.app/), Type Tester (https://type-tester-eight.vercel.app/), Fresher Resume Builder (https://fresher-resume-builder.vercel.app/), with screenshots.
- **Education:** Vellore Institute of Technology, B.Tech Computer Science and Engineering, Dec 2021 to Sep 2025, Vellore, Tamil Nadu, India. GPA 9.03/10. Coursework: DSA, Databases, Operating Systems, Computer Networks, Software Engineering, Java, Python, C/C++ (structured and OOP), Machine Learning, Artificial Intelligence.
- **Skills:** Languages: Python, Java, TypeScript, JavaScript, SQL, HTML/CSS. Backend: Django, Django REST Framework, Spring Boot, Express.js. Frontend: ReactJS, Tailwind CSS, shadcn/ui, TanStack. Databases: PostgreSQL (pgvector), MongoDB, Redis. Deployment: Docker, GitHub Actions (CI/CD), AWS (EC2, Bedrock), Cloudflare (Workers, R2, Pages, Containers). Monitoring: Sentry, Cloudflare (metrics, logs, traces, dashboards). Tools: Git, GitHub, Jira, Slack, Postman, Apidog.
- **Contact:** aadarshasubedi406@gmail.com · https://linkedin.com/in/aadarsha-subedi-dev · https://github.com/Aadarsha-Subedi · phone/WhatsApp is on the resume; whether it appears on the public site is undecided.
- **Absent, do not invent:** achievements and certifications beyond the GPA, testimonials, metrics beyond those above.

## Product Principles

1. The resume is the index; the site is the evidence. Every resume line should have a place here, with more depth.
2. A recruiter's minute matters most: role, best work and contact are reachable from the first screen.
3. Show the work, don't describe it: screenshots, real numbers, real stacks.
4. Craft is part of the pitch. Motion and finish should show frontend skill without slowing anyone down.
