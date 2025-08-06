# CBT Frontend Application

This is a React-based frontend application for a Cognitive Behavioral Therapy (CBT) platform, built with Vite and styled using Tailwind CSS.

## Features

*   **Authentication UI & Logic**:
    *   Reusable UI components: `InputField`, `Button`, `PasswordToggle`.
    *   Login and Signup pages with form validation.
    *   Axios integration for simulated API calls.
    *   `react-hot-toast` for user notifications.
    *   Loading spinners for better user experience.
    *   Temporary authentication token storage in LocalStorage.

*   **Routing**:
    *   `react-router-dom` for navigation.
    *   `ProtectedRoute` to secure routes (e.g., `/dashboard`).

*   **Enhanced Homepage**:
    *   Visually appealing and interactive homepage with a Hero Section, Features Section, and Call to Action.
    *   Utilizes Tailwind CSS for modern design, including gradients, shadows, and hover effects.
    *   Includes animations for dynamic content presentation.
    *   Integrates `react-icons` for feature icons.

## Technologies Used

*   React 19
*   Vite
*   Tailwind CSS 4
*   React Router DOM 7
*   Axios
*   `lucide-react` (for icons, though `react-icons` is now also used)
*   `react-hot-toast`
*   `react-icons`

## Getting Started

### Prerequisites

*   Node.js (v18 or higher recommended)
*   npm (Node Package Manager)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/y-naaz/CBT.git
    cd cbt-frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

```bash
npm run dev
```
This will start the development server, usually at `http://localhost:5173/`.

### Building for Production

```bash
npm run build
```

## Project Structure

```
cbt-frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── InputField.jsx
│   │   ├── Navbar.jsx
│   │   └── PasswordToggle.jsx
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   ├── routes/
│   │   ├── index.jsx
│   │   └── ProtectedRoute.jsx
│   ├── services/
│   │   └── api.js
│   ├── utils/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
