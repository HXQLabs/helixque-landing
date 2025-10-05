# Contributing to Helixque Landing

Thank you for your interest in contributing to the **Helixque Landing Page**! We're building the front door to a professional networking platform where developers, designers, founders, and learners connect through instant matching based on skills, industry, and language.

Whether you're fixing bugs, improving documentation, enhancing UI/UX, or adding new features, your contributions help make Helixque more accessible and engaging for everyone.

---

## Hacktoberfest 2025

We're excited to participate in **Hacktoberfest 2025**! This is a great opportunity to contribute to open source and earn recognition.

### What Counts as Valid Contributions

 **Bug Fixes**: Fix issues and improve stability  
 **New Features**: Add sections, components, or interactive elements  
 **UI/UX Improvements**: Enhance design, animations, and user experience  
 **Accessibility**: Improve keyboard navigation, screen reader support, WCAG compliance  
 **Documentation**: Improve README, code comments, or guides  

### Guidelines for Hacktoberfest

-  PRs must be *meaningful* and add value to the project
-  **Spam or low-quality PRs will be marked as `invalid` or `spam`**
-  Follow our contribution guidelines below
-  Be patient while waiting for reviews - maintainers will review all PRs thoroughly!

---

## 🏁 Getting Started

### Prerequisites

Before contributing, ensure you have:

- **Node.js 18+** or **[Bun](https://bun.sh/)**
- **Git** installed on your machine
- A **GitHub account**
- Basic knowledge of **React**, **TypeScript**, and **Tailwind CSS**

### Technology Stack

The landing page is built with modern web technologies:

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [Tabler Icons](https://tabler.io/icons)
- **UI Primitives**: [Radix UI](https://www.radix-ui.com/)
- **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Package Manager**: [Bun](https://bun.sh/) (preferred) or npm

---

## 📖 How to Contribute

### 1. Fork the Repository

Click the **"Fork"** button at the top right of the [repository page](https://github.com/HXQLabs/helixque-landing) to create your own copy.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/helixque-landing.git
cd helixque-landing
```

### 3. Create a Branch

Create a new branch for your contribution using our naming conventions:

```bash
git checkout -b feature/your-feature-name
```

**Branch Naming Conventions (Optional):**
- `feature/` - for new features (e.g., `feature/add-testimonials-section`)
- `fix/` - for bug fixes (e.g., `fix/mobile-menu-scroll`)
- `docs/` - for documentation updates (e.g., `docs/update-readme`)
- `refactor/` - for code refactoring (e.g., `refactor/hero-component`)
- `style/` - for styling changes (e.g., `style/update-button-hover`)
- `perf/` - for performance improvements (e.g., `perf/optimize-images`)

### 4. Install Dependencies

Using **Bun**:
```bash
bun install
```

Or using **npm**:
```bash
npm install
```

### 5. Start the Development Server

Using **Bun**:
```bash
bun dev
```

Or using **npm**:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### 6. Make Your Changes

#### Project Structure

```text
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Main landing page
│   └── globals.css        # Global styles and animations
├── components/            # Reusable UI components
│   ├── common/           # Shared components (header, footer)
│   ├── fancy/            # Advanced text animations
│   ├── magicui/          # Interactive UI elements
│   ├── sections/         # Page sections (hero, features, etc.)
│   ├── ui/               # Base UI components
│   └── utils/            # Utility components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── public/               # Static assets
```

#### Development Tips

- **Components**: Create reusable, modular components in appropriate folders
- **Styling**: Use Tailwind utility classes; follow existing patterns
- **Animations**: Leverage Framer Motion for smooth, performant animations
- **Accessibility**: Ensure keyboard navigation and screen reader support
- **Responsiveness**: Test across mobile, tablet, and desktop breakpoints
- **Performance**: Optimize images with Next.js Image component
- **Theme Support**: Ensure components work in both light and dark modes

### 7. Test Your Changes

Before committing, ensure:

-  The app runs without errors at `http://localhost:3000`
-  Changes work on mobile, tablet, and desktop
-  No console errors or warnings
-  Accessibility features work (keyboard navigation, screen readers)
-  Code follows TypeScript best practices

### 8. Commit Your Changes

Write clear, descriptive commit messages:

```bash
git add .
git commit -m "Add: Brief description of your changes"
```

**Commit Message Prefixes:**
- `Add:` - for new features or components
- `Fix:` - for bug fixes
- `Update:` - for updates to existing features
- `Remove:` - for removing code or files
- `Docs:` - for documentation changes
- `Style:` - for formatting/styling changes
- `Refactor:` - for code refactoring
- `Perf:` - for performance improvements

**Examples:**
```bash
git commit -m "Add: animated gradient background to hero section"
git commit -m "Fix: mobile menu overflow on small screens"
git commit -m "Update: testimonial card hover effects"
git commit -m "Docs: improve component documentation"
```

### 9. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 10. Create a Pull Request

1. Go to the [original repository](https://github.com/HXQLabs/helixque-landing)
2. Click **"Pull Requests"** → **"New Pull Request"** or **Compare & Pull Request**
3. Click **"compare across forks"** (if you selected **New Pull Request**)
4. Select your fork and branch
5. Fill out the PR template (see below) [recommended]
6. Click **"Create Pull Request"**

---

## 🚩 Creating An Issue:

Please create an issue with the following information:

## Suggesting Features/Bug Fixes/UI Enhancements

Have an idea to improve the landing page? Create an issue with:

### Template

```markdown
##  Feature Description
Clear description of the proposed feature

##  Problem It Solves
What problem does this feature address?

##  Proposed Solution
Your proposed implementation

##  Alternatives Considered
Other approaches you've thought about

##  Additional Context
Any relevant information, mockups, or examples

```

---
## 📝 Pull Request Guidelines

### Before Submitting Your PR

- [ ] Code runs without errors locally
- [ ] Changes tested on multiple screen sizes
- [ ] Dark mode and light mode both work
- [ ] No TypeScript errors
- [ ] Code follows existing style and conventions
- [ ] Commit messages are clear and descriptive
- [ ] PR description is complete and detailed

### PR Description Template

Use this template for your pull request description:

```markdown
## Brief description of what you changed or added.

## Explain why this change is needed or what problem it solves.

## For UI/UX changes, include before/after screenshots or screen recordings:

### Before
[Screenshot or description of previous state]

### After
[Screenshot of your changes]

## Testing [**Important**]

Describe how you tested your changes:
- [ ] Tested on Chrome, Firefox, and Safari
- [ ] Verified mobile responsiveness
- [ ] Checked dark mode compatibility
- [ ] Tested keyboard navigation
- [ ] Confirmed smooth animations (60fps)

Closes #[issue number] (if applicable)
```
---
## 💻 Code Style Guidelines

### TypeScript

-  Use TypeScript for all new files
-  Define proper types and interfaces
-  Avoid using `any` type
-  Use meaningful variable and function names
-  Add JSDoc comments for complex functions

```typescript
// Good
interface HeroProps {
  title: string;
  subtitle: string;
  onCTAClick: () => void;
}

// Avoid
const data: any = {};
```

### React/Next.js

-  Use functional components with hooks
-  Follow React best practices and conventions
-  Use Next.js App Router patterns
-  Implement proper error boundaries
-  Optimize with React.memo when appropriate

```tsx
// Good
export function HeroSection({ title, subtitle }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <section className="...">
      {/* Component content */}
    </section>
  );
}
```

### Tailwind CSS

-  Use Tailwind utility classes for styling
-  Follow responsive design patterns (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`)
-  Maintain consistency with existing color and spacing scales
-  Use dark mode variants (`dark:`)
-  Avoid inline styles unless absolutely necessary

```tsx
// Good
<div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg md:p-8 lg:p-12">

// Avoid
<div style={{ backgroundColor: 'white', padding: '24px' }}>
```

### Animations

-  Use Framer Motion for complex animations
-  Keep animation durations reasonable (150-500ms for most interactions)

```tsx
// Good
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
```

### File Organization

-  Components in `/components` with appropriate subfolders
-  Hooks in `/hooks`
-  Utilities in `/lib`
-  Use descriptive file names (kebab-case for files, PascalCase for components)
-  Keep components focused and single-purpose

---

## 🎯 Accessibility Standards

We're committed to making Helixque accessible to everyone. When contributing:

### Requirements

-  **Keyboard Navigation**: All interactive elements must be keyboard accessible
-  **Screen Reader Support**: Use semantic HTML and ARIA labels
-  **Color Contrast**: Meet WCAG 2.1 AA standards (4.5:1 for normal text)
-  **Alt Text**: Descriptive alt text for all images

### Testing Accessibility

- **Keyboard**: Tab through all interactive elements
- **Screen Reader**: Test with NVDA (Windows) or VoiceOver (Mac)
- **Contrast**: Use browser DevTools or [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- **Lighthouse**: Run accessibility audits in Chrome DevTools

---

## ⚡ Performance Guidelines

We strive for excellent Core Web Vitals scores:

-  **Images**: Use Next.js Image component with proper sizing
-  **Bundle Size**: Keep JavaScript bundles minimal
-  **Code Splitting**: Lazy load components when appropriate
-  **Font Loading**: Optimize with `next/font`
-  **Animations**: Ensure 60fps with CSS transforms and opacity

### Performance Testing

- Run Lighthouse audits regularly
- Test on slower networks (throttle in DevTools)
- Monitor bundle size with `npm run build`

---

## 💬 Getting Help

Need assistance? Here's how to get help:

-  **Discord**: [Join our community server](https://discord.gg/helixque)
-  **Issues**: Create a GitHub issue for bugs or questions
-  **Community**: Reach out to the maintainers
-  **Documentation**: Check the [README](README.md) for detailed information

## 🤝 Code of Conduct

We are committed to providing a welcoming and inclusive environment for all contributors.

### ✅ Our Standards

 **Be respectful and inclusive** of all backgrounds and identities  
 **Welcome newcomers** and be patient with questions  
 **Accept constructive criticism** gracefully  
 **Focus on what's best** for the community and project  
 **Show empathy** towards other community members  

### ❌ Unacceptable Behavior

 Harassment or discriminatory language  
 Trolling, insulting, or derogatory comments  
 Personal or political attacks  
 Publishing others' private information  
 Spam or low-effort contributions  

---

## 📜 License

By contributing to Helixque Landing, you agree that your contributions will be licensed under the project's **MIT License**.


## 🙏 Thank You!

Your contributions help make Helixque more accessible and engaging for professionals worldwide. Whether you're fixing a typo or adding a major feature, every contribution matters!

**Thank you for being part of the Helixque community!** 🚀


Built with ❤️ for the Helixque Community


*Connecting professionals, one conversation at a time.*
