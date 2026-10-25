# Aadarsha Subedi, portfolio

A one-page career wall: experience, projects, education, skills and contact, linked from my resume.

## Run it

```sh
npm install
npm run dev
```

- `/` is the site.
- `/specimens` is the component review page (every component with its states).

## Where things live

- `src/content/resume.ts`: all copy, taken from the resume. Edit text here.
- `src/components/ui`: buttons, links, tags, toast.
- `src/components/site`: navbar, Cmd/Ctrl+K index, timetable, project and role entries, contact.
- `src/styles/index.css`: design tokens (colours, type scale, easing).
- `PRODUCT.md` and `.impeccable/`: the brief and design direction used with the impeccable skill.

## Adding project screenshots

Drop an image in `src/assets/projects/`, import it at the top of `src/content/resume.ts`, and set `image` on the project. ResolveAI and Pro-Goal still show placeholders.

## Stack

Vite, React 19, TypeScript, Tailwind CSS v4, Motion, Base UI, Phosphor Icons. Typeface: Archivo (self-hosted via Fontsource).
