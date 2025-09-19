# Fiza — Nutritionist & Dietitian Portfolio

A modern, responsive portfolio website for a professional nutritionist and dietitian built with Next.js, React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional design with custom brand colors
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Smooth animations and transitions using Framer Motion
- **Interactive Forms**: Contact and appointment booking forms with validation
- **Blog System**: Complete blog with search, filtering, and pagination
- **Diet Plans**: Detailed diet plan pages with nutrition facts and recipes
- **SEO Optimized**: Proper metadata and semantic HTML structure

## 🎨 Design & Branding

- **Primary Green**: #4CAF50 (health, freshness)
- **Accent Orange**: #FF9800 (energy, fruits)
- **Background**: #FFFFFF (cleanliness)
- **Typography**: Poppins font family
- **Icons**: Lucide React icons

## 📱 Pages

1. **Home Page** - Hero section, services overview, featured diet plans, testimonials
2. **About Page** - Professional bio, qualifications, specialties, timeline
3. **Services/Diet Plans** - Grid of available nutrition programs
4. **Diet Plan Detail** - Individual plan details with nutrition facts and recipes
5. **Blog** - Article listing with search and category filters
6. **Blog Detail** - Full article layout with suggested posts
7. **Contact** - Contact form and information
8. **Book Appointment** - Appointment booking form with calendar

## 🛠️ Technology Stack

- **Framework**: Next.js 15.5.3 (App Router)
- **Frontend**: React 19.1.0
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel Ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ahmad-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── appointment/       # Appointment booking
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── services/          # Diet plans pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── not-found.tsx      # 404 page
├── components/            # Reusable components
│   ├── layout/           # Layout components (Navbar, Footer)
│   └── ui/               # UI components (Button, Card, etc.)
├── data/                 # Static data and demo content
└── lib/                  # Utility functions
```

## 🎯 Key Components

- **Navbar**: Responsive navigation with active link highlighting
- **Footer**: Contact information and social links
- **Button**: Animated button component with variants
- **Card**: Reusable card component with hover effects
- **Input/Textarea**: Form input components with validation
- **Modal**: Animated modal component
- **Toast**: Notification component for form feedback

## 📊 Demo Data

The website includes comprehensive demo data for:
- Diet plans with nutrition facts and recipes
- Blog posts with categories and tags
- Client testimonials
- Service offerings

## 🎨 Customization

### Colors
Update the brand colors in `src/app/globals.css`:
```css
:root {
  --brand-green: #4CAF50;
  --brand-orange: #FF9800;
  --bg-white: #FFFFFF;
}
```

### Content
- Update demo data in `src/data/demoData.ts`
- Replace placeholder images in `public/images/`
- Modify metadata in `src/app/layout.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project is compatible with any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, email fiza@nutrition.com or create an issue in the repository.
