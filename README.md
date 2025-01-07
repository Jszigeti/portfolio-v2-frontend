# Portfolio Frontend v2.0.0

This repository contains the frontend code for the second version of my portfolio. Built with modern web technologies like React, TypeScript, TailwindCSS, and Vite, this project is designed to showcase my skills as a web developer and provide a smooth, interactive user experience.

---

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Scripts](#scripts)
- [Environment Variables](#environment-variables)
- [Docker Integration](#docker-integration)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

---

## Features

- **Responsive Design**: Optimized for all screen sizes.
- **Interactive Animations**: Smooth transitions using `framer-motion`.
- **Modular Components**: Built with reusability in mind.
- **Form Handling**: Integration with `formik` and `react-hook-form`.
- **Validation**: Powered by `yup` for robust form validation.
- **Routing**: Client-side navigation with `react-router-dom`.
- **Toast Notifications**: Built-in feedback system using `react-toastify`.
- **TailwindCSS**: Utility-first CSS for rapid UI development.
- **PWA**: Progressive Web App capabilities with offline support.

---

## Technologies

- **Frontend**: React, TypeScript
- **Styling**: TailwindCSS, `clsx`, `tailwind-merge`
- **State Management**: Hooks and Context API
- **Animations**: Framer Motion
- **Form Management**: Formik, React Hook Form
- **Build Tool**: Vite
- **Linting**: ESLint
- **API Handling**: Axios, `axios-error-handler-ts`
- **PWA Tools**: Vite PWA plugin, PWA assets generator

---

## Prerequisites

Make sure you have the following installed:

- Node.js (>= 18.x)
- npm (>= 9.x) or pnpm
- Docker (for containerized deployment)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Jszigeti/portfolio-v2-front.git
   cd portfolio-front
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

---

## Scripts

| Command                       | Description                       |
| ----------------------------- | --------------------------------- |
| `npm run dev`                 | Start the development server      |
| `npm run build`               | Build the project for production  |
| `npm run preview`             | Preview the production build      |
| `npm run lint`                | Lint the codebase using ESLint    |
| `npm run generate-pwa-assets` | Generate PWA assets from the logo |

---

## Environment Variables

Create a `.env` file in the root directory and define the following variables:

```env
VITE_API_BASE_URL=<your_backend_api_url>
```

---

## Docker Integration

This project includes a `Dockerfile` for containerized deployment. To build and run the application using Docker:

1. Build the Docker image:

   ```bash
   docker build -t portfolio-front:v2 --build-arg VITE_API_BASE_URL=<your_backend_api_url> .
   ```

2. Run the Docker container:

   ```bash
   docker run -d -p 80:80 portfolio-front:v2
   ```

3. Access the application at `http://localhost:80`.

---

## Project Structure

```
portfolio-front/
├── public/                 # Static assets
├── src/                    # Application source code
│   ├── components/         # Reusable React components
│   ├── hooks/              # Custom hooks
│   ├── pages/              # Page components
│   ├── styles/             # Global and utility styles
│   ├── utils/              # Helper functions
│   ├── App.tsx             # Root component
│   ├── main.tsx            # Application entry point
├── Dockerfile              # Docker configuration
├── tailwind.config.js      # TailwindCSS configuration
├── vite.config.ts          # Vite configuration
└── package.json            # Project metadata and scripts
```

---

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your proposed changes.

---
