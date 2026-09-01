# Kasi Naveen K — Futuristic Developer Portfolio OS

A professional, high-performance, animation-heavy developer portfolio & digital engineering lab for **Kasi Naveen K** (Computer Science & Engineering Student, Full-Stack Developer, App Developer, Java Specialist).

## 🚀 Technology Stack
- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS + Custom Cyberpunk Design System
- **Animation**: Framer Motion + Canvas Syntax Code Rain + SVG Pipelines
- **Icons**: Lucide React
- **Audio Engine**: Synthesized Web Audio API (Toggleable UI FX)

## 📁 Customizing Content & Assets

All content is managed centrally in [`src/data/portfolioData.ts`](src/data/portfolioData.ts).

### 1. Profile Picture
Place your photograph in:
```
/public/images/profile.jpg
```
The portfolio automatically detects and renders it within the 3D tilt cyber holographic frame!

### 2. Resume PDF
Place your updated resume PDF in:
```
/public/Kasi_Naveen_K_Resume.pdf
```
Both the `[Download Resume]` and `[View Resume]` buttons automatically point to this file.

### 3. Project Screenshots & Certificates
- Place project screenshots in `/public/images/projects/`
- Place certificate files in `/public/certificates/`

### 4. External Social URLs
Update your GitHub and LinkedIn usernames in `src/data/portfolioData.ts`:
```ts
export const SOCIAL_LINKS = {
  github: "https://github.com/YOUR_USERNAME",
  linkedin: "https://linkedin.com/in/YOUR_USERNAME",
  email: "kkasinaveen@gmail.com",
  phone: "6381246015",
  ...
};
```

## 🛠️ Running Locally
```bash
npm install
npm run dev
```

## 📦 Building for Production
```bash
npm run build
```
