# TrainerPro Academy - Soccer Training Platform

A professional web-based training platform for youth football coaches built with Next.js, React, TypeScript, Tailwind CSS, and PostgreSQL.

## Features

- 📋 **Annual Training Plans** - Plan your season with mesocycles and microcycles
- 🎯 **Training Sessions** - Create and organize daily training sessions
- 🔷 **Drill Database** - Build and manage a comprehensive drill library
- 👥 **Player Management** - Track player profiles, development, and statistics
- 🎮 **Game Sheets** - Prepare matches with tactical planning
- 📊 **Drag-and-Drop** - Intuitive player selection and session building
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 🔒 **User Authentication** - Secure login with Supabase Auth

## Tech Stack

- **Frontend**: Next.js 14+, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Server Actions
- **Database**: PostgreSQL (Supabase)
- **ORM**: Prisma
- **Validation**: Zod
- **UI Components**: shadcn/ui
- **Icons**: lucide-react
- **Drag-and-Drop**: dnd-kit
- **Deployment**: Vercel + Supabase

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account (free)
- Vercel account (free)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/renzogdam-create/trainer_platform.git
   cd trainer_platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your Supabase credentials:
   - `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anon key
   - `DATABASE_URL` - Your PostgreSQL connection string

4. **Set up the database**
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
trainer_platform/
├── app/                    # Next.js App Router
├── components/             # React components
├── lib/                    # Utility functions, hooks, validators
├── prisma/                 # Database schema
├── public/                 # Static files
├── styles/                 # Global styles
└── README.md
```

## Database Models

The platform includes 12 interconnected models:

- **User** - Coach/admin authentication
- **Team** - Soccer team/squad
- **Player** - Individual player profile
- **AnnualTrainingPlan** - Yearly planning
- **Mesocycle** - Training block (3-6 weeks)
- **Microcycle** - Weekly training plan
- **TrainingSession** - Individual training session
- **SessionBlock** - Drill/activity within session
- **Drill** - Reusable drill template
- **GameSheet** - Match preparation
- **PlayerSelection** - Player grouping for drills
- **TrainingConcept** - Methodology library

See `PROJECT_ARCHITECTURE.md` for detailed information.

## Deployment

### Deploy to Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import the repository
4. Add environment variables
5. Click Deploy

### Database Migration on Production

```bash
npx prisma migrate deploy
```

## Development Workflow

### View the database GUI
```bash
npx prisma studio
```

### Create a migration
```bash
npx prisma migrate dev --name feature_name
```

### Generate Prisma client
```bash
npx prisma generate
```

## Cost

**Completely free** using:
- Vercel (free tier)
- Supabase (free tier: 500MB database, 1GB storage)
- Open-source tools

## Contributing

This is a personal project, but contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Author

Created by renzogdam-create

## Support

For issues or questions, please create an issue on GitHub.
