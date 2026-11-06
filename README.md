# 🌱 SocialServe

**SocialServe** is a community-driven event platform built with Next.js. It brings people together to make a positive impact through community activities such as blood donation, helping others, environmental initiatives, and more.

Users can discover upcoming events, create their own events, join activities organized by others, and manage everything from their personal profile.

---

## ✨ Features

- **Explore Events** — Discover upcoming community events and activities.
- **Create Events** — Publish events and invite others to participate.
- **Event Management** — Edit or delete events you have created.
- **Join Events** — Participate in events organized by other users.
- **Personal Profile** — View and manage your profile, created events, and joined events.
- **Profile Editing** — Update your personal information.
- **Authentication** — Sign up, sign in, and sign out using Better Auth.
- **Google Authentication** — Supports Google sign-in.
- **Dark & Light Mode** — Switch between themes for a comfortable experience.
- **Gallery** — Explore moments and activities from the community.
- **User-Friendly Interface** — A clean, minimal, and easy-to-use design.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| [Next.js](https://nextjs.org/) | React framework |
| [React](https://react.dev/) | UI development |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [shadcn/ui](https://ui.shadcn.com/) | UI components |
| [Better Auth](https://www.better-auth.com/) | Authentication |
| [MongoDB](https://www.mongodb.com/) | Authentication data storage |
| [next-themes](https://github.com/pacocoursey/next-themes) | Theme management |
| [ESLint](https://eslint.org/) | Code linting |
| [Prettier](https://prettier.io/) | Code formatting |

---

## 🚀 Getting Started

Follow these instructions to run SocialServe on your local machine.

### 1. Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v20.9.0 or later)
- npm or pnpm
- A MongoDB database
- Google OAuth credentials (for Google sign-in)

### 2. Clone the Repository

```bash
git clone https://github.com/mdmoshiurrahman-dev/ASSIGNMENT-9-FRONT-END.git

cd ASSIGNMENT-9-FRONT-END
```

### 3. Install Dependencies

Using npm:

```bash
npm install
```

Or using pnpm:

```bash
pnpm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
# Backend API
NEXT_PUBLIC_API_URL=your_api_base_url

# Better Auth Configuration
BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000

# MongoDB Connection
MONGO_AUTH_URL=your_mongodb_connection_string

# Google OAuth Credentials
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

**Important:** Replace the placeholder values with your actual credentials. Never commit your `.env` file or expose your secrets publicly.

### 5. Run the Development Server

Using npm:

```bash
npm run dev
```

Or using pnpm:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to explore SocialServe.

---

## 📁 Project Structure

Here is an overview of the main project directories:

```text
social-serve/
├── public/
│   └── images/
│       ├── avatars/
│       └── events/
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/
│   │   ├── events/
│   │   ├── gallery/
│   │   ├── create-event/
│   │   ├── event-details/
│   │   ├── profile/
│   │   ├── signin/
│   │   ├── signup/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── nav/
│   │   ├── footer/
│   │   ├── home/
│   │   ├── events/
│   │   ├── gallery/
│   │   ├── create-event/
│   │   ├── event-details/
│   │   ├── profile/
│   │   └── ui/
│   │
│   ├── lib/
│   │   ├── auth.ts
│   │   ├── auth-client.ts
│   │   ├── getJwtTokenFromClient.ts
│   │   ├── getJwtTokenFromServer.ts
│   │   └── utils.ts
│   │
│   ├── types/
│   └── proxy.ts
│
├── .env
├── .gitignore
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🔧 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server. |
| `npm run build` | Builds the application for production. |
| `npm run start` | Starts the production server. |
| `npm run lint` | Runs ESLint to check for code issues. |

---

## 🌐 Deployment

SocialServe can be deployed using the [Vercel Platform](https://vercel.com/).

For more information, check out the official [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---