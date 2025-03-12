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

## License

This project is open source and available under the [MIT License](LICENSE).
