好，这一步非常关键，而且你方向完全正确 ✅
你现在需要的是：一份“给 Codex 用的专用 README.md 指令协议”，作为它的长期记忆与行为规范入口文件。

下面这份就是你要的 ✅
你直接保存为：

README.md

或者如果你已经有 README.md，你可以覆盖，或者我也可以帮你拆成 CODEX_RULES.md + PROJECTS_DATA.md 的组合版。


---

✅【最终版：Codex 专用 README.md（生产级）】

# Diynet Solar – Codex Operation Manual (Production Rules)

This file is the highest-priority instruction set for any AI assistant (Codex, Copilot, GPT) working on this repository.

If any prompt conflicts with this document, THIS DOCUMENT OVERRIDES ALL.

---

## 1. Project Overview

- Project Name: Diynet Solar
- Website Type: Engineering company official website
- Business Scope:
  - Solar PV systems (6kW – 150kW)
  - Battery storage systems
  - Hybrid inverters
  - Network engineering
  - Low-voltage & CCTV systems
- Deployment:
  - Static frontend
  - Built with `npm run build`
  - Deployed using Docker + Nginx + Reverse Proxy
- This is a PRODUCTION website, not a demo or playground.

---

## 2. Tech Stack (LOCKED)

The following stack is PERMANENT and MUST NOT be replaced:

- Vite
- React (Function Components ONLY)
- TypeScript
- Tailwind CSS
- Static frontend only (NO backend, NO database)

---

## 3. Absolute Forbidden Actions

Codex MUST NEVER:

- ❌ Rewrite project structure
- ❌ Replace Vite, React, or Tailwind
- ❌ Convert TypeScript to JavaScript
- ❌ Introduce backend frameworks (Next.js API, Express, NestJS)
- ❌ Introduce any database logic
- ❌ Add authentication systems
- ❌ Add payment systems
- ❌ Add AI APIs (Gemini, OpenAI, Claude, etc.)
- ❌ Add server-side forms or API calls
- ❌ Break Docker static deployment compatibility

---

## 4. Allowed Modifications Only

Codex is ONLY allowed to modify:

✅ UI styles  
✅ Animations  
✅ Images  
✅ Text content  
✅ Static project data  
✅ Tailwind class refinement  
✅ Static constants  

All modifications MUST remain:

- ✅ Frontend only
- ✅ Static
- ✅ Compatible with `npm run build`
- ✅ Compatible with Docker static deployment

---

## 5. Language Rule (Strict)

ALL displayed content MUST be bilingual:

- First line: Chinese
- Second line: English

❌ No single-language sections are allowed.

---

## 6. UI Style Lock

Mandatory website style:

- Dark engineering theme
- Glass-morphism cards
- Subtle glow effects
- Soft animations only
- No flashy marketing UI
- No crypto / gaming / cartoon styles

This is a serious engineering company website.

---

## 7. Project Images Rule (Critical)

All project images MUST:

- ✅ Come ONLY from:
  `https://cloud.diynet.club/`
- ✅ Be real engineering photos
- ✅ Use JPG or PNG only

Forbidden:

- ❌ AI-generated stock images
- ❌ Base64 images
- ❌ Unsplash / Pexels / placeholder services

Max images per project: 6

---

## 8. Project Data Management Rule

All real project data MUST be written in:

PROJECTS_DATA.md

Codex is NEVER allowed to hardcode new project data directly without syncing from `PROJECTS_DATA.md`.

Project structure MUST include:

- Chinese Title
- English Title
- Capacity (kW)
- Duration (Days)
- Location
- Usage Description
- Image URLs (from cloud.diynet.club only)
- Delivery Status

---

## 9. Safe Modification Mode (Default Behavior)

Unless explicitly stated otherwise:

- Modify ONLY one component at a time
- Do NOT refactor unrelated files
- Do NOT cascade changes
- Do NOT optimize randomly
- Do NOT change build tools
- Do NOT touch Docker or Nginx configs

---

## 10. Failure Protection Rule

If a request:

- Requires backend
- Requires database
- Breaks static hosting
- Violates any rule above

Codex MUST STOP and return:

"⚠️ This request violates README.md production rules and is blocked for safety."

---

## 11. Current Task Lock

The ONLY active allowed tasks are:

✅ Sync real solar project data from `PROJECTS_DATA.md`  
✅ Bind real images from `cloud.diynet.club`  
✅ Enhance project visual presentation  
✅ Improve content clarity  
✅ Keep all animations and glass UI unchanged  

All other tasks are FROZEN unless manually unlocked.

---

## 12. How to Instruct Codex (Mandatory Prompt Prefix)

Every Codex instruction MUST start with:

Follow README.md strictly.

Example:

Follow README.md strictly. Read PROJECTS_DATA.md. Sync all projects into components/ProjectsSection.tsx. Do not modify any other file.

---

## ✅ Final Directive

Codex must act as:

- A Senior Frontend Engineer
- A DevOps-Safe Operator
- A Production Website Maintainer

NOT as a creative playground tool.

All changes MUST be:

✅ Minimal  
✅ Controlled  
✅ Reversible  
✅ Production-safe


---

✅ 你现在的正确使用方式（这句你可以直接复制当“口令”）

以后你每次让 Codex 改东西，都这样开头：

Follow README.md strictly.

然后再说你要它干什么，它就不敢乱动、不敢乱联动、不敢乱升级依赖 ✅


---

✅ 下一步我强烈建议你立刻补这个文件（我也可以直接帮你生成）：

PROJECTS_DATA.md

这是你未来所有工程项目的“数据库文件”，
Codex 以后 只认这一份，不乱造数据。


---

✅ 你现在可以直接回我一句：

👉「帮我生成 PROJECTS_DATA.md 初始模板」

或

👉「我现在就要加第二个项目 PROJECT-002」


我就按你刚刚这个 README 规则，继续为你生成“完全受控、不翻车”的工程内容系统。
