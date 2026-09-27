# SafeMed — Research & Healthcare Technology Showcase

> A research-driven showcase website exploring digital approaches to Adverse Drug Reaction (ADR) and Adverse Drug Event (ADE) reporting, data integration, artificial intelligence, and emerging quantum computational methods.

---

## 🔬 Project Overview

This repository hosts the **informational and research showcase website** for the SafeMed project.

SafeMed communicates a 6-stage chronological research and product journey:
1. **Experience & Observation** — Identifying clinical and patient friction in adverse drug reaction intake.
2. **SafeMed Prototype** — Developing a full-stack digital workflow with prescription OCR and analytics.
3. **Literature Survey** — Mapping contemporary pharmacovigilance methods and computational gaps.
4. **Research Paper 01** — Establishing computational baselines and structured data modeling.
5. **Research Paper 02 (Quantum Models)** — Investigating quantum state encoding and variational circuits.
6. **Research Paper 03 (Deep Learning + Quantum)** — Unifying deep neural representations with quantum variational layers.

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Routing**: [React Router DOM 6](https://reactrouter.com/) (Single Page Application)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Hosting & CI/CD**: [Vercel](https://vercel.com/) (automatic deployments from `main`)

---

## 🚀 Local Development

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm (v9.0.0 or higher)

### Setup & Run
```bash
# Clone the repository
git clone https://github.com/<YOUR_USERNAME>/SafeMed-info-web.git
cd SafeMed-info-web

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:3000/`.

### Production Build & Preview
```bash
# Generate production bundle in dist/
npm run build

# Preview production build locally
npm run preview
```

---

## 🌿 Collaborative Git Workflow

Production deployments are automated through **Vercel** connected to the `main` branch.

```text
main branch (Production)
   │
   ├── Feature / Content updates
   │      │
   │      ▼
   │   Git Branch (`feature/your-update`)
   │      │
   │      ▼
   │   Push to GitHub
   │      │
   │      ▼
   │   Vercel Preview Deployment (Test & verify live)
   │      │
   │      ▼
   │   Open Pull Request → Code Review
   │      │
   │      ▼
   │   Merge into main
   │      │
   │      ▼
   └── Automatic Vercel Production Deployment
```

### Steps for Collaborators / Editors
1. **Pull the latest `main`**:
   ```bash
   git checkout main
   git pull origin main
   ```
2. **Create a descriptive feature branch**:
   ```bash
   git checkout -b feature/update-paper-1-abstract
   ```
3. **Make and verify your changes locally**:
   ```bash
   npm run build
   ```
4. **Commit and push to GitHub**:
   ```bash
   git add .
   git commit -m "docs: update Paper 1 abstract and author details"
   git push -u origin feature/update-paper-1-abstract
   ```
5. **Open a Pull Request on GitHub**:
   - Vercel will automatically generate a **Preview Deployment** URL on the Pull Request.
   - Test and verify the preview URL.
   - Once approved, merge into `main` to trigger the production deployment.

---

## 📂 Key Content Files (To Update Placeholders)

- `src/data/research.js` — All 3 research paper details, abstracts, authors, and 19 section narratives.
- `src/data/journey.js` — Timeline descriptions and evolutionary notes.
- `src/data/project.js` — Central project metadata, whySafeMed cards, origin story, and external links.
- `src/data/technology.js` — Technology explanations.

---

## 📄 License & Attribution

© SafeMed — Research & Project Showcase. Academic information portal.
