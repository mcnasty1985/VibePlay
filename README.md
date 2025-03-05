# VibePlay

![VibePlay Logo](public/placeholder-logo.svg)

## Come vibe with us

VibePlay is a vibrant social platform where creativity thrives and connections flourish. This Next.js application empowers users to express themselves through customizable spaces, AI-generated designs, and interactive communities.

## Features

### Core Features
- **AI-Powered Page Builder**: Create unique, personalized spaces with our AI designer
- **Customizable Profiles**: Express yourself with music integration, custom themes, and more
- **Content Creation**: Share your creativity through various media formats
- **Community Engagement**: Connect with like-minded creators in community groups

### Subscription Tiers
- **Basic Vibe (Free)**
  - Create your Vibe space
  - Basic customization
  - Ad-supported experience
  
- **Vibe+ ($9.99/month)**
  - Ad-free experience
  - Advanced customization
  - Exclusive themes
  - Priority support
  - Extended content limits
  
- **Vibe Pro+ ($29.99/month)**
  - All Vibe+ features
  - Monetization tools
  - Payout system
  - Analytics dashboard
  - Exclusive creator workshops
  - Verified creator badge

### Authentication & Security
- Email/password authentication
- OAuth with Google
- Role-based access control
- Route protection based on subscription level

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Frontend**: React, TypeScript, Tailwind CSS
- **Authentication**: NextAuth.js
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: Tailwind CSS with custom UI components
- **State Management**: React Context API

## Getting Started

### Prerequisites

- Node.js 18.x or later
- PostgreSQL database
- Google OAuth credentials (for Google login)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mcnasty1985/VibePlay.git
   cd VibePlay
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a .env.local file in the project root with the following variables:
   ```
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret_here
   
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/vibeplay?schema=public"
   
   # OAuth providers
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

4. Initialize the database:
   ```bash
   npx prisma db push
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/              # About page
│   ├── ai-builder/         # AI page builder
│   ├── api/                # API routes
│   │   ├── auth/           # Authentication API endpoints
│   │   └── blog-posts/     # Blog posts API
│   ├── blog/               # Blog page
│   ├── careers/            # Careers page
│   ├── community/          # Community page
│   ├── dashboard/          # User dashboard
│   └── ...                 # Other pages
├── components/             # Reusable UI components
│   ├── ui/                 # Shadcn UI components
│   └── ...                 # Custom components
├── lib/                    # Utility functions and helpers
│   ├── auth-context.tsx    # Authentication context provider
│   └── utils.ts            # Utility functions
├── prisma/                 # Prisma ORM configuration
│   └── schema.prisma       # Database schema
├── public/                 # Static assets
└── styles/                 # Global styles
```

## Authentication System

The authentication system uses NextAuth.js with:

- Credentials provider for email/password login
- Google OAuth for social login
- JWT session strategy for session management
- Route protection via middleware
- User roles and subscription tiers

Authentication flows include:
- Sign up with email/password
- Sign in with email/password or Google
- Protected routes based on authentication status and subscription level
- User profile management

## Key Pages

- **Home**: Introduction to VibePlay and its features
- **AI Builder**: Create custom pages with AI assistance
- **Dashboard**: User's personal dashboard with stats and content
- **Explore**: Discover featured creators and trending content
- **Community**: Connect with other creators in specialized groups
- **Upgrade**: Subscribe to Vibe+ or Vibe Pro+
- **Creator Settings**: Tools for Pro+ users to monetize content

## Development

### Running Tests

```bash
npm run test
```

### Linting

```bash
npm run lint
```

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to your preferred hosting service. We recommend Vercel for the best experience with Next.js applications.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary and not licensed for redistribution or reuse without explicit permission.

## Contact

For any questions or suggestions, please contact the VibePlay team.

---

Built with ❤️ for creative expression and community building.