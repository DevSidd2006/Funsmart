# Website Handover Guide (For Non-Technical Users)

Welcome to your new FunSmartism website! 

Your website has been built with modern, high-performance tools (Next.js, Tailwind CSS) and is hosted securely on Vercel. Because the site is stored on **GitHub** and deployed automatically by **Vercel**, making changes is surprisingly easy and does not require you to write code or hire a developer for simple text or image updates.

This guide will teach you exactly how to safely change any text, image, or content on your website.

---

## 🚀 How Your Website Works (The Basics)

1. **GitHub (The Storage)**: Think of GitHub like a Google Drive for your website. It holds all the text, images, and code.
2. **Vercel (The Engine)**: Vercel "watches" your GitHub. The moment you save a change in GitHub, Vercel automatically builds and updates the live website within 2-3 minutes.

---

## 📝 How to Change Text / Content

To edit the text on your website, you will navigate through your GitHub folders. Almost all of your website's content is stored in two main folders:

1. **`src/components/sections/`** (This contains the main visual sections like Hero, About, Comparison, etc.)
2. **`src/data/`** (This contains structured text like FAQs, Testimonials, and Programs.)

### Step-by-Step Instructions:

1. Go to your GitHub repository in your web browser.
2. Click on the **`src`** folder, then click on the **`components`** folder, and then the **`sections`** folder.
3. Click on the file you want to edit. For example, to change the main headline on the homepage, click on `Hero.tsx`.
4. In the top right corner of the file box, click the **Pencil Icon ✏️** (Edit this file).
5. Look closely at the file. You will see code, but if you read carefully, you will spot your main English text. 
   **Example from `Hero.tsx`**:
   ```tsx
   <h1 className="...">
      Many capable children struggle in the wrong environment.
   </h1>
   ```
6. **Carefully** delete the old text and type your new text. 
   **🚨 GOLDEN RULES OF EDITING:**
   - **Do NOT** delete any brackets like `< >` or `{ }`.
   - **Do NOT** delete any quotation marks like `"` or `'`.
   - ONLY change the plain English text between the `<tags>` and `</tags>`.
7. Once you are done typing, scroll to the top right and click the green **"Commit changes..."** button.
8. A small box will pop up. Write a short note about what you changed (e.g., "Updated Hero Headline") and click the green **"Commit changes"** button again.
9. **You're done!** Go to your live website, wait 2-3 minutes, and refresh the page.

---

## 🗺️ Where to Find Specific Content

Here is a map of where all your website content lives. If you want to change something, find it in the list below to know which file to edit.

### Homepage Content (`src/components/sections/`)
- **Main Top Banner (Hero)**: `Hero.tsx`
- **What Makes This Different (Comparison Tracker)**: `Comparison.tsx`
- **How It Works (10 days vs Year-Long)**: `HowItWorks.tsx`
- **Programs Overview**: `FeaturedActivities.tsx`
- **Bottom Call to Action**: `FinalCTA.tsx`
- **Website Footer (Links)**: `Footer.tsx`

### Structured Data (`src/data/`)
Some data is stored as simple lists. These are incredibly easy to edit!
- **FAQs (Frequently Asked Questions)**: Edit `src/data/faqs.ts`
- **Parent Testimonials**: Edit `src/data/testimonials.ts`
- **Detailed Programs**: Edit `src/data/programs.ts`

**Example of editing a Testimonial:**
When you open `testimonials.ts`, you will see something like this:
```typescript
{
  author: "Mrs. Sharma",
  role: "Parent of 12-year old",
  quote: "This lab changed my child's thinking completely."
}
```
Simply change the text inside the quotation marks `""` and save (Commit).

---

## 🖼️ How to Change Images

Your website images are located in the **`public/images/`** folder.

1. First, prepare your new image on your computer. Ideally, name it exactly the same as the image you want to replace (e.g., `hero-child-discovery.png`).
2. Go to your GitHub repository.
3. Click on the **`public`** folder, then the **`images`** folder.
4. Click on the **"Add file"** button near the top right, then click **"Upload files"**.
5. Drag and drop your new image from your computer into the box.
6. Scroll down and click the green **"Commit changes"** button.
   *(Note: If you uploaded an image with the exact same name, it will replace the old one automatically, and the website will update!)*

---

## 🩺 Troubleshooting & Safety Nets

- **"I saved a change and my website broke!"** 
  Don't panic! GitHub remembers every single change you've ever made. You can view the file's "History" (a button at the top right of the file) and restore an older, working version with one click.
- **"The text isn't updating!"**
  Make sure you waited at least 3 minutes. Vercel needs time to rebuild the site. Try doing a "Hard Refresh" on your browser (`Ctrl + F5` on Windows, or `Cmd + Shift + R` on Mac).
- **Tip**: Only edit one file at a time until you get comfortable.

---

## 🗝️ Ownership & Accounts

To ensure you have full control, we will transfer two main accounts to you:

1. **GitHub (The Code Laboratory)**: 
   - You will receive an invitation to accept ownership of the "FunSmartism" repository. 
   - This ensures that even if I am unavailable, you own 100% of your website's files.
2. **Vercel (The Hosting & Domain)**: 
   - I will help you set up a Vercel dashboard. 
   - This is where your custom domain (e.g., `funsmart.in`) is managed. 
   - You will see a "Production Deployment" here—think of this as the "On/Off" switch for your site.

**Action Item for Client:** Please provide the email address you used to sign up for GitHub and Vercel.

---

## 📞 Support

If you wish to make massive structural changes (like adding 5 new pages or changing the core colors of the site), it is recommended to have a developer assist you. But for day-to-day text editing, adding new testimonials, fixing typos, and changing images, this guide gives you full power over your website!

