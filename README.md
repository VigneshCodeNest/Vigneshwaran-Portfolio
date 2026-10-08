# Vigneshwaran B | Portfolio

React + TypeScript + Vite + Tailwind CSS + Framer Motion + Lucide React.

## Run

```bash
npm install
npm run dev        # local dev server
npm run build      # type-check + production build into dist/
npm run preview    # preview the production build
```

## Deploy (Vercel or Netlify)

Import the repo, then use: Build command `npm run build`, Output directory `dist`. No other config needed.

## Where to edit things

| What | File |
| --- | --- |
| GitHub / LinkedIn URLs, phone, email, resume path | `src/data/config.ts` |
| Project details and GitHub / Live Demo links | `src/data/projects.ts` |
| Skills | `src/data/skills.ts` |
| Internship | `src/data/experience.ts` |
| Education | `src/data/education.ts` |
| Professional highlights | `src/data/highlights.ts` |
| About text and cards | `src/data/about.ts` |

Any link that still contains `YOUR_` is shown as a disabled, clearly marked button, so a placeholder never looks like a real link.

## Resume

Put your PDF at `public/resume/Vigneshwaran_B_Resume.pdf`. The Download Resume button points there.

## Contact form

No email service is configured, so the form validates in the browser and then opens the visitor's email app with a prefilled message (mailto). It does not claim to send anything itself.
