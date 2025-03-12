# Personal Portfolio

A modern portfolio website for a front-end engineer. Built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- Responsive design that works on all devices
- Modern UI with subtle animations
- Dark/light mode support
- Contact form with email functionality
- Project showcase
- Blog
- About page with skills and experience

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kanerep/personal-portfolio.git
   cd personal-portfolio
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Create a `.env.local` file in the root directory and add the following variables:

   ```
   EMAIL_USER=your_gmail_address@gmail.com
   EMAIL_PASS=your_app_password
   ```

   **Note:** For Gmail, you need to use an "App Password" rather than your regular password. To generate an App Password:

   1. Go to your Google Account settings
   2. Select "Security"
   3. Under "Signing in to Google," select "2-Step Verification"
   4. At the bottom of the page, select "App passwords"
   5. Select "Mail" as the app and "Other (Custom name)" as the device
   6. Name it "Portfolio Contact Form" or something similar
   7. Copy the generated 16-character password

4. Run the development server:

   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customisation

### Content

Most of the content is stored in the page files:

- Home: `src/app/page.tsx`
- About: `src/app/about/page.tsx`
- Projects: `src/app/projects/page.tsx`
- Blog: `src/app/blog/page.tsx`
- Contact: `src/app/contact/page.tsx`

### Images

Place your images in the `public/images` directory and update the image paths in the components.

### Styling

The project uses Tailwind CSS for styling. You can customise the colours and other design tokens in the `tailwind.config.js` file.

## Deployment

This project can be easily deployed on Vercel:

1. Push your code to a GitHub repository
2. Sign up for a Vercel account at [vercel.com](https://vercel.com)
3. Connect your GitHub repository
4. Configure the environment variables (EMAIL_USER and EMAIL_PASS)
5. Deploy!

## Commit Strategy

### Purpose

These guidelines ensure a **consistent**, **structured**, and **informative** commit history that aligns with the [Conventional Commits](https://www.conventionalcommits.org/) specification. This approach:

- Helps **automate changelogs**
- Enables **semantic versioning**
- Improves **collaboration** by making changes clearer
- Allows easy **rollback and debugging**

---

### Commit Message Format

Each commit message **MUST** follow this format:

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

#### Example Commit Messages

##### ✅ With a description and breaking change in the body:

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files.
```

##### ✅ Simple documentation fix:

```
docs: correct spelling of CHANGELOG
```

##### ✅ Commit message with scope:

```
feat(lang): add support for Polish language
```

##### ✅ Bug fix with issue reference:

```
fix: minor typos in code

See the issue for details on the typos fixed.

Fixes #12
```

---

### Commit Types

The following commit types are **allowed and recommended**:

#### 🚀 Feature Additions

- **`feat:`** Introduces a new feature (**MINOR** version bump in SemVer)

  _Example:_

  ```
  feat: add dark mode support
  ```

#### 🐛 Bug Fixes

- **`fix:`** Fixes a bug (**PATCH** version bump in SemVer)

  _Example:_

  ```
  fix: resolve issue with image loading on mobile
  ```

#### 💥 Breaking Changes

- **`BREAKING CHANGE:`** Any breaking API change (**MAJOR** version bump in SemVer)

  _Example:_

  ```
  feat: migrate to new authentication system

  BREAKING CHANGE: OAuth 1.0 authentication has been removed in favor of OAuth 2.0.
  ```

#### 📜 Documentation Updates

- **`docs:`** Updates to documentation only (README, comments, etc.)

  _Example:_

  ```
  docs: add installation guide to README
  ```

#### 🎨 Code Style Changes (No Functional Changes)

- **`style:`** Formatting, missing semicolons, white-space, etc.

  _Example:_

  ```
  style: reformat code using Prettier
  ```

#### 🛠 Code Refactoring

- **`refactor:`** Code restructuring without fixing a bug or adding a feature

  _Example:_

  ```
  refactor: simplify state management logic
  ```

#### ⚡ Performance Improvements

- **`perf:`** Improves performance

  _Example:_

  ```
  perf: optimize image rendering for faster load times
  ```

#### 🧪 Tests

- **`test:`** Adds or updates tests

  _Example:_

  ```
  test: add unit tests for authentication service
  ```

#### 🏗 Build System or Dependency Changes

- **`build:`** Changes affecting the build system or dependencies (npm, Webpack, etc.)

  _Example:_

  ```
  build: update dependencies to latest versions
  ```

#### 🚀 Continuous Integration / Deployment

- **`ci:`** Changes to CI/CD configuration (GitHub Actions, Docker, etc.)

  _Example:_

  ```
  ci: update GitHub Actions workflow for automatic deployment
  ```

#### 🛠 Maintenance and Chores

- **`chore:`** Miscellaneous changes that don’t modify the source code or tests

  _Example:_

  ```
  chore: update issue templates for GitHub
  ```

---

### Additional Guidelines

#### 1️⃣ Use **Present-Tense, Imperative Mood**

**✅ Good:** `fix: resolve login issue`
**❌ Bad:** `fixed login issue`

#### 2️⃣ Keep Descriptions Concise

- Keep the first line **under 72 characters**.
- Additional details should go in the **body section**.

#### 3️⃣ Reference Issues When Relevant

Use `Fixes #123`, `Closes #456`, or `See #789` in the footer to link commits to issues.

#### 4️⃣ Squash and Merge Feature Branches

When merging a feature branch, **squash commits** into a single commit and follow these guidelines for writing the final commit message.

#### 5️⃣ Breaking Changes Must Be Explicit

Use `BREAKING CHANGE:` in the **footer** to clearly indicate breaking changes.

---

### Why Use These Guidelines?

✔ **Automated Changelogs** – Helps generate changelogs automatically.
✔ **Semantic Versioning** – Ensures proper version increments (MAJOR.MINOR.PATCH).
✔ **Better Collaboration** – Clear commit history makes team contributions easier.
✔ **Faster Debugging** – Helps track when and why changes were made.
✔ **Improved Deployment** – Works seamlessly with CI/CD pipelines.

By following these commit guidelines, we ensure a **clean, maintainable, and professional** commit history for the development portfolio codebase.

Happy coding! 🚀

## License

This project is open source and available under the [MIT License](LICENSE).
