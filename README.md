# 🏢 FunSmartism Website: Control Center

Welcome to your website’s command center! This repository holds all the files, photos, and settings for the **FunSmartism Intelligence Center** website.

---

## 📖 Quick Links for You
Use these links to quickly manage your website:

*   **[📘 THE MASTER HANDOVER GUIDE](./CLIENT_HANDOVER_GUIDE.md)**: Open this first! It contains step-by-step instructions on how to change text, photos, and prices.
*   **[💰 Manage Programs & Prices](./src/data/programs.ts)**: Edit your 10-day workshop or year-long program details here.
*   **[💬 Manage Testimonials](./src/data/testimonials.ts)**: Add new feedback from parents.
*   **[❓ Manage FAQs](./src/data/faqs.ts)**: Change the questions and answers in your "Parent Concerns" section.

---

## 🚀 How to Make Quick Changes

1.  Click on one of the **Manage** links above.
2.  Click the **Pencil Icon (✏️)** at the top right of the file.
3.  Change the text inside the quotation marks `" "`.
4.  Click the green **"Commit changes"** button at the top right.
5.  **Done!** Your website will update automatically in 2-3 minutes.

---

## 🖼️ Where is the Content?

If you want to find specific sections of your website to edit, use this map:

| Section | File to Edit |
| :--- | :--- |
| **Top Banner (Hero)** | `src/components/sections/Hero.tsx` |
| **Comparison Table** | `src/components/sections/Comparison.tsx` |
| **How It Works** | `src/components/sections/HowItWorks.tsx` |
| **All Website Photos** | `public/images/` folder |

---

## 🔒 Safety & Support

*   **Undo Changes**: GitHub remembers everything. If you make a mistake, you can always "Revert" to a previous version.
*   **Hosting**: Your site is hosted on **Vercel**. Every time you save a change here on GitHub, Vercel updates the live site.
*   **Manual**: For detailed instructions on ownership, domains, and troubleshooting, read the **[Handover Guide](./CLIENT_HANDOVER_GUIDE.md)**.

---

## 🛠️ Technical Details (For Developers)

*If you hire a developer in the future, show them this section.*

### Tech Stack
- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel

### Local Development
```bash
npm install
npm run dev
```

---
**Made with ❤️ for FunSmartism Intelligence Center**
