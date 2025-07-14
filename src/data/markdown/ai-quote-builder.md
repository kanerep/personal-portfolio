# AI Quote Builder (PoC)

Modern, AI-powered quote generation platform for businesses and professionals

---

## Overview

AI Quote Builder is a web application designed to streamline the process of generating, managing, and exporting professional quotes. Leveraging the latest in AI, modern web technologies, and best practices, this project demonstrates expertise in scalable, maintainable, and accessible application development.

---

## Key Features

- AI-powered quote generation and field extraction
- Voice input and transcription for hands-free operation
- PDF export and document management
- Quote history and user authentication
- Responsive, accessible UI with Shadcn UI & Tailwind CSS
- Robust form validation with Zod
- Global state management with Zustand

---

## Technologies Used

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, Shadcn UI, Radix UI
- **State Management:** Zustand
- **Validation:** Zod
- **Database:** Supabase w/Drizzle ORM
- **Authentication:** Clerk
- **API**: OpenAI utilising 4o and Whisper-1 models

---

## Architecture & Best Practices

- Functional, component-driven architecture
- DRY principles and type safety throughout
- Custom hooks for reusable logic
- App Router and Server Components by default; 'use client' only where necessary
- Strict linting and formatting rules
- Accessibility (a11y) ready
- Error boundaries and robust error handling

---

## Screenshots & Demo

**Create Your Quote Flow**

<video controls playsInline preload="metadata" style="width: 100%; max-width: 800px; margin: 2rem auto; display: block;">
  <source src="/demo/ai-quote-builder-demo.mp4" type="video/mp4" />
  Your browser does not support the video tag. 
  <a href="/demo/ai-quote-builder-demo.mp4" target="_blank" rel="noopener noreferrer">
    View the video here
  </a>
</video>

Watch how the AI-powered quote builder streamlines the entire quote creation process with intelligent field extraction and voice input capabilities.

---

### What I Learned / Challenges Overcome

- Implemented AI features and prompt engineering
- Ensured accessibility and responsive design across devices
- Integrated multiple modern libraries for a seamless developer experience
- Overcame challenges with server/client component boundaries in Next.js
- Maintained clean, scalable codebase with TypeScript
