# TrainerPro Academy - Project Architecture

## Project Overview

**TrainerPro Academy** is a professional web-based Soccer Trainer Platform for youth football coaches. It enables coaches to plan, create, organize, and manage training from annual planning down to individual drills and player profiles.

---

## 1. Recommended Folder Structure

```
trainer_platform/
├── app/                           # Next.js App Router
│   ├── (auth)/                    # Auth layout group
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── signup/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── (dashboard)/               # Protected dashboard layout group
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── annual-plans/
│   │   │   ├── page.tsx
│   │   │   ├── [id]/page.tsx
│   │   │   └── new/page.tsx
│   │   ├── mesocycles/
│   │   │   ├── [id]/page.tsx
│   │   │   └── new/page.tsx
│   │   ├── microcycles/
│   │   │   ├── [id]/page.tsx
│   │   │   └── new/page.tsx
│   │   ├── training-sessions/
│   │   │   ├── page.tsx
│   │   │   ├── [id]/page.tsx
│   │   │   └── new/page.tsx
│   │   ├── drills/
│   │   │   ├── page.tsx
│   │   │   ├── [id]/page.tsx
│   │   │   └── new/page.tsx
│   │   ├── players/
│   │   │   ├── page.tsx
│   │   │   ├── [id]/page.tsx
│   │   │   └── new/page.tsx
│   │   ├── game-sheets/
│   │   │   ├── page.tsx
│   │   │   ├── [id]/page.tsx
│   │   │   └── new/page.tsx
│   │   ├── training-concepts/
│   │   │   └── page.tsx
│   │   ├── reports/
│   │   │   └── page.tsx
│   │   ├── settings/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── api/                       # API routes
│   │   ├── auth/
│   │   ├── teams/
│   │   ├── players/
│   │   ├── drills/
│   │   ├── training-sessions/
│   │   ├── annual-plans/
│   │   ├── mesocycles/
│   │   ├── microcycles/
│   │   ├── game-sheets/
│   │   └── player-selections/
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Home/landing
│   └── not-found.tsx
├── components/
│   ├── auth/
│   │   ├── LoginForm.tsx
│   │   └── SignupForm.tsx
│   ├── layout/
│   │   ├── Sidebar.tsx
│   │   ├── TopBar.tsx
│   │   ├── MobileNav.tsx
│   │   └── DashboardLayout.tsx
│   ├── dashboard/
│   │   ├── StatsCard.tsx
│   │   ├── UpcomingSessions.tsx
│   │   ├── QuickActions.tsx
│   │   └── RecentDrills.tsx
│   ├── annual-plans/
│   │   ├── AnnualPlanForm.tsx
│   │   ├── AnnualPlanCard.tsx
│   │   ├── MesocycleList.tsx
│   │   └── TimelineView.tsx
│   ├── mesocycles/
│   │   ├── MesocycleForm.tsx
│   │   ├── MesocycleCard.tsx
│   │   └── MesocycleDragList.tsx
│   ├── microcycles/
│   │   ├── MicrocycleForm.tsx
│   │   ├── MicrocycleCard.tsx
│   │   └── WeeklyPreview.tsx
│   ├── training-sessions/
│   │   ├── SessionForm.tsx
│   │   ├── SessionBuilder.tsx
│   │   ├── SessionBlockEditor.tsx
│   │   └── SessionPreview.tsx
│   ├── drills/
│   │   ├── DrillForm.tsx
│   │   ├── DrillCard.tsx
│   │   ├── DrillSheet.tsx
│   │   ├── DrillFilters.tsx
│   │   └── DrillSearch.tsx
│   ├── players/
│   │   ├── PlayerForm.tsx
│   │   ├── PlayerCard.tsx
│   │   ├── PlayerProfile.tsx
│   │   └── PlayerDevelopmentForm.tsx
│   ├── game-sheets/
│   │   ├── GameSheetForm.tsx
│   │   ├── GameSheetTactical.tsx
│   │   ├── GameSheetLineup.tsx
│   │   └── GameSheetPostMatch.tsx
│   ├── player-selection/
│   │   ├── DragDropPlayerSelector.tsx
│   │   ├── PlayerGroup.tsx
│   │   ├── AvailablePlayersList.tsx
│   │   └── PlayerFieldPositioner.tsx
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── FormField.tsx
│   │   ├── Modal.tsx
│   │   ├── Toast.tsx
│   │   ├── ConfirmDialog.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── EmptyState.tsx
│   │   └── SearchInput.tsx
│   └── ui/                        # shadcn/ui components (auto-generated)
├── lib/
│   ├── auth.ts                    # Auth utilities
│   ├── db.ts                      # Prisma client
│   ├── hooks.ts                   # Custom React hooks
│   ├── utils.ts                   # Utility functions
│   ├── validators.ts              # Zod schemas
│   └── constants.ts               # App constants
├── prisma/
│   ├── schema.prisma              # Database schema
│   └── seed.ts                    # Database seeding (optional)
├── styles/
│   └── globals.css                # Global styles
├── public/
│   ├── images/
│   └── icons/
├── .env.local                     # Environment variables (git ignored)
├── .env.example                   # Example env file
├── .gitignore
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── tailwind.config.js
├── postcss.config.mjs
├── package.json
├── README.md
└── PROJECT_ARCHITECTURE.md        # This file
```

---

## 2. Prisma Schema

The complete database schema is defined in `prisma/schema.prisma` with the following models:

### Core Entities:
1. **User** - Coach/admin authentication
2. **Team** - Soccer team/squad
3. **Player** - Individual player profile
4. **AnnualTrainingPlan** - Yearly planning
5. **Mesocycle** - Training block (3-6 weeks)
6. **Microcycle** - Weekly training plan
7. **TrainingSession** - Individual training session
8. **SessionBlock** - Drill/activity within session
9. **Drill** - Reusable drill template
10. **GameSheet** - Match preparation
11. **PlayerSelection** - Drag-drop player grouping
12. **TrainingConcept** - Methodology library

### Relationships:
- User → Teams (1:many)
- Team → Players (1:many)
- Team → AnnualTrainingPlan (1:many)
- AnnualTrainingPlan → Mesocycles (1:many)
- Mesocycle → Microcycles (1:many)
- Microcycle → TrainingSessions (1:many)
- TrainingSession → SessionBlocks (1:many)
- SessionBlock → Drill (many:1)
- Team → Drills (1:many)
- Team → GameSheets (1:many)
- TrainingSession → PlayerSelections (1:many)
- PlayerSelection → Player (many:1)

---

## 3. Main Routes/Pages

### Authentication Routes
- `/login` - Login page
- `/signup` - Sign up page
- `/logout` - Logout action

### Protected Routes (Dashboard)
- `/dashboard` - Main dashboard
- `/annual-plans` - List annual plans
- `/annual-plans/[id]` - View annual plan
- `/annual-plans/new` - Create annual plan
- `/mesocycles/[id]` - Edit mesocycle
- `/mesocycles/new` - Create mesocycle
- `/microcycles/[id]` - Edit microcycle
- `/microcycles/new` - Create microcycle
- `/training-sessions` - List sessions
- `/training-sessions/[id]` - View session
- `/training-sessions/new` - Create session
- `/drills` - Drill database
- `/drills/[id]` - Drill detail/sheet
- `/drills/new` - Create drill
- `/players` - Squad management
- `/players/[id]` - Player profile
- `/players/new` - Add player
- `/game-sheets` - Match planning
- `/game-sheets/[id]` - Game sheet detail
- `/game-sheets/new` - Create game sheet
- `/training-concepts` - Methodology library
- `/reports` - Reports/export
- `/settings` - Team settings

---

## 4. Component Structure

### Layout Components
- `DashboardLayout` - Main layout with sidebar, topbar, main content
- `Sidebar` - Navigation sidebar
- `TopBar` - Header with search, profile, actions
- `MobileNav` - Mobile navigation

### Feature Components
- **Annual Plans**: Form, card, list, timeline
- **Mesocycles**: Form, card, drag list
- **Microcycles**: Form, card, weekly preview
- **Training Sessions**: Form, builder, blocks, preview
- **Drills**: Form, card, sheet, filters, search
- **Players**: Form, card, profile, development
- **Game Sheets**: Form, tactical, lineup, post-match
- **Player Selection**: Drag-drop selector, grouping, positioning

### Common Components
- Buttons, inputs, forms, modals, toasts, loaders, empty states

---

## 5. Database Relationships Explanation

### Hierarchical Planning Structure:
```
User
 └─ Team
     ├─ Player
     ├─ AnnualTrainingPlan
     │   └─ Mesocycle (3-6 weeks)
     │       └─ Microcycle (1 week)
     │           └─ TrainingSession (1 day)
     │               └─ SessionBlock (exercise)
     │                   └─ Drill (template)
     ├─ Drill (database)
     └─ GameSheet (match)
```

### Player Selection Flow:
```
TrainingSession
 └─ PlayerSelection
     ├─ Player
     ├─ Group (Team A, Team B, etc.)
     └─ Position/Zone
```

### Data Isolation:
- Each user can manage multiple teams
- Each team has its own players, plans, drills, and game sheets
- Drills are shared within a team but isolated between teams
- Players belong to a team
- All queries filter by authenticated user's team

---

## 6. Step-by-Step Setup Instructions

### Step 1: Prerequisites
- Node.js 18+ installed
- Git installed
- GitHub account
- Vercel account (free)
- Supabase account (free)

### Step 2: Initialize Next.js Project
```bash
npx create-next-app@latest trainer_platform --typescript --tailwind --app
cd trainer_platform
```

### Step 3: Install Dependencies
```bash
npm install \
  @prisma/client \
  prisma \
  @supabase/supabase-js \
  @supabase/auth-helpers-nextjs \
  zod \
  @hookform/resolvers \
  react-hook-form \
  @dnd-kit/core \
  @dnd-kit/utilities \
  @dnd-kit/sortable \
  lucide-react \
  date-fns \
  clsx \
  class-variance-authority \
  tailwind-merge

npm install -D @types/node @types/react @types/react-dom
```

### Step 4: Add shadcn/ui Components
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button input form label card dialog \
  tabs accordion dropdown-menu sheet badge select checkbox \
  textarea select toast
```

### Step 5: Create Supabase Project
1. Go to https://supabase.com
2. Create new project
3. Note the **Project URL** and **Anon Key**
4. Create a new PostgreSQL database (done automatically)

### Step 6: Set Environment Variables
Create `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
DATABASE_URL=your_postgresql_connection_string
```

Get `DATABASE_URL` from Supabase:
- Go to Project Settings → Database → Connection string
- Select Node.js
- Copy the connection string
- Replace [YOUR-PASSWORD] with your database password

### Step 7: Initialize Prisma
```bash
npx prisma init
```

Update `.env.local` with your DATABASE_URL if not already set.

### Step 8: Create Prisma Schema
Add the complete schema to `prisma/schema.prisma` (see section below).

### Step 9: Migrate Database
```bash
npx prisma migrate dev --name init
```

This will:
- Create all tables in your Supabase PostgreSQL database
- Generate Prisma client

### Step 10: Set Up Git
```bash
git init
git add .
git commit -m "Initial commit"
```

### Step 11: Deploy to Vercel
1. Push to GitHub:
```bash
git remote add origin https://github.com/renzogdam-create/trainer_platform.git
git branch -M main
git push -u origin main
```

2. Go to https://vercel.com
3. Import project from GitHub
4. Add environment variables:
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
   - DATABASE_URL
5. Click Deploy

### Step 12: Test Locally
```bash
npm run dev
# Visit http://localhost:3000
```

---

## 7. Free-Tier Deployment Architecture

### Frontend (Vercel)
- Unlimited free deployments
- Automatic CI/CD from GitHub
- Built-in serverless functions (Next.js API routes)

### Backend (Supabase)
- PostgreSQL database (free tier: 500MB)
- Authentication (Supabase Auth)
- Storage (Supabase Storage, free tier: 1GB)
- Real-time (optional)

### Total Cost
**$0/month** for a small to medium football academy

---

## 8. Tech Stack Summary

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | Next.js + React | Full-stack framework |
| Language | TypeScript | Type safety |
| Styling | Tailwind CSS | Utility-first CSS |
| UI Components | shadcn/ui | Pre-built components |
| Icons | lucide-react | Icon library |
| Database | PostgreSQL (Supabase) | Relational DB |
| ORM | Prisma | Database access |
| Forms | React Hook Form | Form management |
| Validation | Zod | Schema validation |
| Drag-Drop | dnd-kit | Drag-and-drop |
| Date Handling | date-fns | Date utilities |
| Auth | Supabase Auth | User authentication |
| Deployment | Vercel + Supabase | Hosting |

---

## 9. Development Workflow

### Local Development
```bash
npm run dev
```

### Prisma Studio (Visual DB Browser)
```bash
npx prisma studio
```

### Create Database Migration
```bash
npx prisma migrate dev --name feature_name
```

### Git Workflow
```bash
git checkout -b feature/feature-name
# Make changes
git add .
git commit -m "feat: description"
git push origin feature/feature-name
# Create pull request
```

---

## 10. Next Steps

You are ready for **Phase 1: Foundation**. This includes:
1. Creating the Next.js project structure
2. Setting up Tailwind CSS and shadcn/ui
3. Creating the dashboard layout with sidebar
4. Setting up Supabase authentication
5. Creating the base database schema

Ready to proceed? I will now provide the complete Prisma schema and Phase 1 implementation.
