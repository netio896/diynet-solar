# Codex Engineering Rules – Diynet Solar Website

This document defines STRICT rules for all code modifications.
Any AI assistant (Codex / Copilot / GPT) MUST follow these rules.

If any instruction conflicts with this file, THIS FILE HAS HIGHEST PRIORITY.

---

## 1. Project Nature (DO NOT CHANGE)

- Project Name: Diynet Solar
- Type: Engineering company website
- Tech Stack:
  - Vite
  - React (Function Components only)
  - TypeScript
  - Tailwind CSS
  - Static Frontend (NO backend, NO database)
- Deployment:
  - Built using `npm run build`
  - Served via Docker + Nginx + Reverse Proxy
- This is a PRODUCTION ENGINEERING WEBSITE, not a demo, not a playground.

---

## 2. ABSOLUTE FORBIDDEN ACTIONS

Codex MUST NEVER:

- ❌ Rewrite the entire project structure
- ❌ Change Vite config structure randomly
- ❌ Remove Tailwind
- ❌ Replace React with another framework
- ❌ Replace TypeScript with JavaScript
- ❌ Introduce backend frameworks (Express, Next.js API, NestJS, etc.)
- ❌ Add authentication systems
- ❌ Add database logic
- ❌ Add payment systems
- ❌ Add Gemini / OpenAI / AI API dependencies
- ❌ Add forms that require server submission
- ❌ Break Docker static deployment compatibility

---

## 3. ALLOWED MODIFICATIONS ONLY

Codex is ONLY allowed to modify:

✅ Visual UI details  
✅ Animations  
✅ Images  
✅ Text content  
✅ Project cards  
✅ CSS effects  
✅ Tailwind class refinement  
✅ Static data in `constants.ts` or section components  

ALL modifications MUST remain:

- ✅ Static
- ✅ Frontend only
- ✅ Buildable via `npm run build`
- ✅ Deployable via existing Docker container

---

## 4. PROJECTS SECTION RULE (VERY IMPORTANT)

- All project images MUST come only from:
  - `https://cloud.diynet.club/`
- NO base64 images
- NO random external stock images
- NO Unsplash / Pexels / placeholder services
- Images must be real engineering photos only

When adding a new project:

Each project MUST include:
- Chinese Title
- English Title
- Capacity (kW)
- Duration (days)
- Location
- Usage Type (Home / Factory / Farm / Backup)

---

## 5. IMAGE HANDLING RULES

Allowed image usage:
- Direct URL to `cloud.diynet.club`
- JPG / PNG only
- Max 6 images per project card

Forbidden:
- ❌ Random generated images
- ❌ AI generated stock images
- ❌ Inline base64 images

---

## 6. LANGUAGE RULE

ALL content must be bilingual:

Format:
- First line: Chinese
- Second line: English

Never output:
- English-only sections
- Chinese-only sections

---

## 7. UI STYLE LOCK (DO NOT BREAK)

Mandatory style:
- Dark engineering theme
- Glass morphism cards
- Soft glow accents
- Subtle animation only
- No flashy marketing style
- No cartoon UI
- No crypto / gaming UI

This is a serious engineering company website.

---

## 8. DOCKER & BUILD SAFETY

- Codex MUST NOT modify:
  - `docker-compose.yml` (unless explicitly told)
  - Nginx config (unless explicitly told)
- Codex MUST NOT introduce runtime-only logic
- Everything must work with:
  - `npm run build`
  - Static `dist/` output

---

## 9. SAFE MODIFICATION MODE (DEFAULT)

Unless explicitly stated:
- Modify ONLY ONE component at a time
- Do NOT cascade changes into other files
- Do NOT refactor unrelated logic
- Do NOT optimize randomly

---

## 10. FAILURE HANDLING RULE

If a requested change:
- Risks breaking build
- Risks breaking Docker deployment
- Requires backend

Codex MUST STOP and respond with:

"⚠️ This request violates CODEX_RULES.md and is blocked for safety."

---

## 11. CURRENT ACTIVE TASK LOCK

Current allowed task:
✅ Replace placeholder project images with real engineering images from cloud.diynet.club
✅ Add real solar project cases
✅ Keep all existing animations and glass-ui effects unchanged

All other tasks are frozen unless manually unlocked.

---

## ✅ FINAL DIRECTIVE

Codex must behave like a:
- Senior Frontend Engineer
- DevOps-safe Operator
- Enterprise Website Maintainer

NOT like a creative coding playground.

All changes must be:
✅ Minimal
✅ Controlled
✅ Reversible
✅ Production-safe
