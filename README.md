# 🎓 SkillSphere – Online Learning Platform

Welcome to **SkillSphere**, a modern online single-page e-learning web space built with the Next.js App Router. This platform allows students to browse programming tracks, manage profiles, search syllabus courses dynamically by keywords, and authenticate securely using email configurations or single-click OAuth mechanisms.

---

## 🔗 Project Links

*   **Live Application URL:** [https://vercel.app](https://vercel.app) *(Replace with your actual deployment link)*
*   **GitHub Source Repository:** [https://github.com](https://github.com) *(Replace with your repository link)*

---

## ⚡ Key Architecture & Features

1.  **Dynamic Filtering Search Engine (Challenge 1):** Real-time text-query index filtering on the All Courses track page allows querying items instantly by title keywords.
2.  **Protected Operations Middlewares (Section 7):** Shielded file trees block non-authenticated guests from extracting dynamic routes like `/courses/[id]` and account panels, bouncing requests instantly out to login parameters.
3.  **Context-Driven Core Navigation (Section 5):** The persistent horizontal navbar context tracks login sessions conditionally, swapping authentication triggers with avatar imagery dropdown lists seamlessly.
4.  **Credential Modification Modules (Challenge 2 & 3):** Fully features automated name mutations and avatar image overrides directly on the custom profile sub-route view through active hook integrations.
5.  **Robust Fallbacks (Other Requirements):** Custom, stylish loading spinners handle state transitions (`loading.jsx`), while custom catch-all boundaries intercept invalid directory parameters (`not-found.jsx`).

---

## 🛠️ Complete Package Directory Listings

The project relies on these core dependencies to deliver smooth animations, state streaming, notification banners, and responsive layouts:

*   **Framework Layer:** Next.js (v15.2.x Architecture Model using App Router)
*   **Styling Engine:** Tailwind CSS alongside DaisyUI Utility Components
*   **Authentication Suite:** BetterAuth Component Services
*   **Notification Elements:** `react-hot-toast` Layering Extensions
*   **Animation System Integration:** `motion` *(Installed to satisfy optional challenge requirements)*

---

## 💻 Local Workspace Configuration Setup

To clone the source repository locally and deploy your development runtime execution scripts, follow these parameters:

```bash
# 1. Initialize cloning scripts
git clone https://github.com.git
cd SkillSphere-Online-Learning-Platform

# 2. Extract dependencies locally
npm install

# 3. Mount environment configuration references (.env.local)
NEXT_PUBLIC_APP_URL=http://localhost:3000
BETTER_AUTH_SECRET=your_configured_auth_secret_key

# 4. Turn on local compilation engines
npm run dev
```
