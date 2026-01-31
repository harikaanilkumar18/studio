# FinOptimize: Smart Financial Analysis & Voucher Exchange

Welcome to FinOptimize, a modern web application designed to provide users with intelligent insights into their spending habits and a marketplace to trade unused vouchers. This application is built with a powerful, modern tech stack and leverages generative AI to offer personalized financial advice.

## Features

- **Financial Dashboard**: An overview of your financial health, including an AI-generated summary, spending breakdowns by category, and recent transactions.
- **AI-Powered Recommendations**: Get personalized, actionable tips to reduce spending and improve your savings, powered by Google's Gemini model through Genkit.
- **Transaction Management**: A detailed and sortable log of all your financial activities.
- **Voucher Marketplace**: A platform for users to buy and sell unused gift cards and vouchers at a discount.
- **Secure Authentication**: User accounts are managed through Firebase Authentication (coming soon).
- **Modern & Responsive UI**: A sleek, user-friendly interface built with ShadCN UI and Tailwind CSS that works beautifully on all devices.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 15 (with App Router & Turbopack)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Generative AI**: [Genkit](https://firebase.google.com/docs/genkit) with Google Gemini
- **Database & Auth**: [Firebase](https://firebase.google.com/) (Firestore & Authentication)
- **Charting**: [Recharts](https://recharts.org/)
- **Form Management**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or later)
- [npm](https://www.npmjs.com/) (or another package manager like yarn or pnpm)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <repository-folder>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Environment Variables

The generative AI features in this application require an API key from Google AI Studio.

1.  Create a new file named `.env` in the root of your project.
2.  Add your API key to the file:
    ```
    GEMINI_API_KEY="your_api_key_here"
    ```
3.  You can obtain a key from [Google AI Studio](https://aistudio.google.com/app/apikey).

> **Note**: If you do not provide an API key, the application will still run, but the AI-powered features (Spending Summary and Recommendations) will be gracefully disabled.

### Running the Application

To start the development server, run:

```bash
npm run dev
```

The application will be available at `http://localhost:9005` and on your local network.

## Available Scripts

- `npm run dev`: Starts the Next.js development server with Turbopack.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts a production server.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run typecheck`: Runs the TypeScript compiler to check for type errors.
