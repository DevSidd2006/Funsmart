# Website Handover Guide (For Non-Technical Users)

Welcome to your new FunSmartism website! 

Your website has been built with modern, high-performance tools (Next.js, Tailwind CSS) and is hosted securely on Vercel. Because the site is stored on **GitHub** and deployed automatically by **Vercel**, making changes is surprisingly easy and does not require you to write code or hire a developer for simple text or image updates.

This guide will teach you exactly how to safely change any text, image, or content on your website.

---

## 🚀 How Your Website Works (The Basics)

1. **GitHub (The Storage)**: Think of GitHub like a Google Drive for your website. It holds all the text, images, and code.
2. **Vercel (The Engine)**: Vercel "watches" your GitHub. The moment you save a change in GitHub, Vercel automatically builds and updates the live website within 2-3 minutes.

---

## 🚀 How to Manage Your Content (The Easy Way)

Your website is equipped with a professional **Content Management System (Sanity CMS)**. This allows you to update information without ever looking at code.

### 1. Accessing the Dashboard
Go to: **`your-domain.com/studio`** (or `localhost:3000/studio` during testing).

### 2. How to Edit
1.  **Log In**: Use your invited email account.
2.  **Choose a Section**: On the left, you will see categories like **FAQs, Testimonials, Programs,** and **Gallery**.
3.  **Edit**: Click on an item, change the text or upload a new image.
4.  **Publish**: Click the green **"Publish"** button at the bottom right.
5.  **View Changes**: Refresh your website. The changes are usually live within seconds!

---

## 🛠️ Where to Find Specific Settings in the Studio

*   **Main Headlines**: Go to the **"Homepage Hero"** section.
*   **Programs & Pricing**: Go to the **"Programs"** section. You can even change the card colors here!
*   **Customer Reviews**: Go to the **"Parent Testimonials"** section.
*   **Gallery Photos**: Go to **"Gallery Moments"**. Tip: You can click the "Hotspot" on images to ensure the most important part of the photo is never cropped.
*   **Contact Info**: Go to **"Site Settings"** to update your email, phone, or social media links.

---

## ⚠️ Technical Backup (GitHub)
*If for any reason the dashboard is unavailable, you can still edit files manually on GitHub as a backup.*


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

