# 🌿 Plants - Plant Care Tracker

A beautiful and interactive plant management web application to help you explore, track, and purchase plants suited for your space and style.

🔗 **Live Preview**: [https://plants-auth-client.web.app]( https://plants-auth-client.web.app )

![Screenshot of Plant Care Tracker]( https://i.ibb.co/35hsYTNv/screencapture-localhost-5173-2025-05-27-00-12-28.png )

---

## ✨ Key Features

- 🌱 **Plant Explorer** – Browse a wide variety of plants with pricing, categories, and attractive visuals.
- 🩺 **Plant Details** – Learn about the plant’s uses, care tips, and specialty (like `Aloe Vera` – widely known for anti-inflammatory and skincare properties).
- 🛒 **Daily Deals Section** – Highlighted deal cards for popular plants (e.g., Rose, Fern, Zebra Succulent).
- 🏢 **Plants for Offices & Homes** – Curated section suggesting plants for specific environments.
- 🧭 **Smooth Navigation** – Seamless routing through pages like `All Plants`, `My Plants`, `Add Plants`.
- 🌙 **Dark Theme** – Modern, responsive dark-mode design.
- ⚡ **Animations** – Beautiful transitions using Lottie and Framer Motion.

---

## 🛠️ Technologies & Packages Used

### 🧩 Framework & Tooling
- **React** – UI library
- **Vite** – Lightning-fast bundler and dev server
- **Firebase** – Authentication and backend services

### 🎨 Styling & Animation
- **TailwindCSS** – Utility-first CSS
- **@tailwindcss/vite** – Tailwind + Vite integration
- **Framer Motion** – Animation library
- **Lottie React** – Integration of JSON animations

### 📦 Utility Libraries
- `react-dom` – React DOM manipulation
- `react-router` – Page routing
- `react-toastify` – Toast notifications
- `sweetalert2` – Alert modals
- `swiper` – Touch slider (used for main plant banner)
- `react-icons` – Icon support
- `react-datepicker` – Calendar picker for plant care scheduling
- `react-tooltip` – Tooltips on hover
- `date-fns` – Date formatting
- `dotenv` – Secure environment variables

---

## ⚙️ How to Run Locally

Follow these steps to set up and run the project on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:
*   [Node.js](https://nodejs.org/en/download/) (LTS version recommended)
*   [npm](https://www.npmjs.com/get-npm) (Node Package Manager, usually comes with Node.js) or [Yarn](https://yarnpkg.com/getting-started/install)

### Setup Steps

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Rahmat15/Plant-Care-Tracker-client-side.git
    ```
2.  **Navigate into the project directory:**
    ```bash
    cd Plant-Care-Tracker-client-side
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
4.  **Create a `.env` file:**
    In the root of your project directory, create a file named `.env` and add your Firebase configuration details. Replace the placeholder values with your actual credentials obtained from your Firebase project settings.

    ```
    # Firebase Configuration
    VITE_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
    VITE_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
    VITE_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
    VITE_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
    VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
    VITE_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
    VITE_FIREBASE_MEASUREMENT_ID=YOUR_FIREBASE_MEASUREMENT_ID
    ```
    *Note: If your project interacts with any other external APIs, include those environment variables here as well.*

5.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application should now be running locally, usually accessible at `http://localhost:5173`.

---

## 🔗 Other Resources

*   **Live Frontend Application:** [Plants - Plant Care Tracker Live Site](https://plants-auth-client.web.app)
*   **Firebase Project Console:** [Link to your Firebase Project Console (Optional)](YOUR_FIREBASE_CONSOLE_URL)
    *   *If you want to provide access to your Firebase project for other developers/collaborators, include this link here. Replace `YOUR_FIREBASE_CONSOLE_URL`.*
*   **API Documentation:** [Link to any API Documentation (e.g., if you have Firebase Cloud Functions with specific endpoints)](https://plantserver.vercel.app/)
    *   *If you don't have separate API documentation, you can remove this line. Replace `YOUR_API_DOCS_URL`.*

---

## 🙌 Credits
Designed & developed by Md Rahmatulla

## 📜 License
This project is licensed for personal and educational use.
