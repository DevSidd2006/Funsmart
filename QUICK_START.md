# 🚀 FunSmartism — QUICK START GUIDE

Your Next.js + Tailwind CSS project is **ready to run**! Follow these steps:

---

## ⚡ 30-Second Setup

### 1. Install Dependencies
```bash
cd /home/devisdd/Funsmartism
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open Browser
Go to: **http://localhost:3000**

✅ **You should see the homepage!**

---

## 📦 What's Included

✓ All 11 homepage sections built
✓ Responsive design (mobile, tablet, desktop)
✓ UI component library (Button, Card, Input, Accordion)
✓ Real data (programs, testimonials, FAQs)
✓ Tailwind CSS configured with design tokens
✓ TypeScript support
✓ Accessibility best practices

---

## 🎯 What You Can Do Right Now

### View the Website
```bash
npm run dev
# Open http://localhost:3000
```

### Make Changes
- Edit `/src/components/sections/*.tsx` files
- Edit `/src/app/page.tsx` for homepage structure
- Edit `/tailwind.config.ts` for theme changes
- Edit `/src/data/*.ts` for content updates

Changes auto-reload in browser (HMR - Hot Module Reloading).

### Customize Content

**Change program names/prices:**
Edit `/src/data/programs.ts`

**Update testimonials:**
Edit `/src/data/testimonials.ts`

**Modify FAQ questions:**
Edit `/src/data/faqs.ts`

**Update button text:**
Search & replace in `/src/components/sections/*.tsx`

---

## 🛠️ Common Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)

# Type checking
npm run type-check      # Find TypeScript errors

# Linting
npm run lint            # Check code quality
npm run lint:fix        # Auto-fix linting issues

# Build
npm run build          # Create production build
npm start              # Run production build

# Formatting
npm run format         # Auto-format code
```

---

## 📱 Testing Responsive Design

### In Browser DevTools:
1. Press `F12` to open DevTools
2. Click device icon (top-left)
3. Select device sizes:
   - **Mobile**: iPhone 12 (390px)
   - **Tablet**: iPad (768px)
   - **Desktop**: 1200px

✓ Should look great on all sizes!

---

## 🎨 Customize Colors

Edit `/tailwind.config.ts`:

```typescript
colors: {
  primary: {
    400: '#4F8F7F',  // Change sage green
    600: '#3D6B65',  // Change hover color
    // ... more colors
  },
}
```

Restart: `npm run dev`

---

## 📂 Project Structure

```
Funsmartism/
├── src/
│   ├── app/
│   │   ├── page.tsx              ← Main homepage
│   │   ├── layout.tsx            ← Root layout
│   │   └── globals.css           ← Global styles
│   ├── components/
│   │   ├── ui/                   ← Reusable components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Input.tsx
│   │   └── sections/             ← Page sections
│   │       ├── Hero.tsx
│   │       ├── Testimonials.tsx
│   │       └── Footer.tsx
│   ├── lib/
│   │   ├── cn.ts                 ← Utilities
│   │   ├── constants.ts
│   │   └── types.ts
│   └── data/
│       ├── programs.ts
│       ├── testimonials.ts
│       └── faqs.ts
├── tailwind.config.ts            ← Theme config
├── package.json                  ← Dependencies
└── README.md                      ← Full documentation
```

---

## 🔧 Need Help?

### Styles not showing?
```bash
rm -rf .next && npm run dev
```

### TypeScript errors?
```bash
npm run type-check
```

### Linting issues?
```bash
npm run lint:fix
```

### Port already in use?
```bash
npm run dev -- -p 3001
```

---

## 🚀 Next Steps

### 1. Customize Content
- [ ] Update hero headline
- [ ] Add your logo
- [ ] Update program descriptions
- [ ] Add real testimonials
- [ ] Customize colors/fonts

### 2. Add Forms
- [ ] Connect "Schedule Visit" button
- [ ] Set up form backend (Typeform, Formspree)
- [ ] Add WhatsApp integration

### 3. Add Features
- [ ] Email notifications
- [ ] Google Analytics
- [ ] Contact form
- [ ] Newsletter signup

### 4. Deploy
- [ ] Push to GitHub
- [ ] Deploy to Vercel
- [ ] Custom domain setup
- [ ] SSL certificate

---

## 📚 Documentation

All design files are included:
- `HOMEPAGE_LAYOUT.md` – Detailed section layouts
- `DESIGN_SYSTEM.md` – Component specs
- `NEXTJS_TAILWIND_SETUP.md` – Technical reference
- `NEXTJS_PROJECT_STARTER.md` – Implementation guide

---

## 🎯 Key Files to Edit

**Change homepage content:**
- `/src/app/page.tsx` – Layout order
- `/src/components/sections/*.tsx` – Section content
- `/src/data/*.ts` – Data (programs, testimonials, FAQs)

**Customize styling:**
- `/tailwind.config.ts` – Colors, spacing, fonts
- `/src/app/globals.css` – Global styles
- Individual components props

**Update metadata:**
- `/src/app/layout.tsx` – SEO meta tags, title, description

---

## ✅ Verification Checklist

After `npm run dev`, verify:
- [ ] Page loads without errors
- [ ] All sections visible (scroll down)
- [ ] Buttons clickable (console shows no errors)
- [ ] Testimonials carousel works (click arrows)
- [ ] FAQ accordion expands/collapses
- [ ] Mobile responsive (open DevTools, toggle device)
- [ ] Links underline on hover
- [ ] Colors look like design (sage green CTAs)

---

## 🎓 Learning Resources

- **Next.js**: https://nextjs.org/docs
- **Tailwind**: https://tailwindcss.com/docs  
- **TypeScript**: https://www.typescriptlang.org/docs/
- **React**: https://react.dev

---

## 💡 Tips & Tricks

### Auto-format on save (VS Code)
Install Prettier extension, add to `.vscode/settings.json`:
```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

### Debug TypeScript
```bash
npm run type-check -- --pretty
```

### Test production build locally
```bash
npm run build
npm start  # Runs on http://localhost:3000
```

---

## 🎉 You're All Set!

```bash
npm run dev
# Visit: http://localhost:3000
# Start editing and watch changes live!
```

Happy building! 🚀

---

**Questions?** Check the documentation files in the project root.
