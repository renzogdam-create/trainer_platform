# Phase 1: Foundation - Setup & Testing Guide

## ✅ What's Been Created

Phase 1 includes the complete foundation for TrainerPro Academy:

### 1. **Database Layer**
- ✅ Prisma schema with 12 interconnected models
- ✅ User authentication model
- ✅ Team and player management
- ✅ Complete training planning hierarchy
- ✅ Drill database structure
- ✅ Game sheet and player selection models

### 2. **Backend Setup**
- ✅ Prisma client configuration
- ✅ Database connection pooling
- ✅ Zod validation schemas for all models
- ✅ TypeScript type exports

### 3. **Frontend Foundation**
- ✅ Next.js App Router structure
- ✅ Root layout with metadata
- ✅ Home/landing page
- ✅ Authentication pages (login/signup)
- ✅ Dashboard layout with sidebar
- ✅ Top bar with search and user menu
- ✅ Responsive mobile navigation

### 4. **Configuration**
- ✅ TypeScript configuration
- ✅ Tailwind CSS setup
- ✅ PostCSS configuration
- ✅ Next.js configuration
- ✅ Environment variables template

---

## 🚀 Step-by-Step Setup Instructions

### Step 1: Clone the Repository
```bash
cd trainer_platform
```

### Step 2: Install Dependencies
```bash
npm install
```

This installs all required packages:
- Next.js 14+
- React
- TypeScript
- Tailwind CSS
- Prisma
- Zod
- lucide-react
- date-fns

### Step 3: Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in
3. Create a new project
4. Choose PostgreSQL
5. Wait for the database to be created (2-3 minutes)
6. Note these from your project:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **Anon Key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Step 4: Get Database Connection String

1. In Supabase, go to **Project Settings** → **Database**
2. Find the **Connection string** section
3. Select **Node.js** from the dropdown
4. Copy the connection string
5. Replace `[YOUR-PASSWORD]` with your database password (saved when you created the project)

Example:
```
postgresql://postgres:password123@db.supabase.co:5432/postgres?schema=public
```

### Step 5: Set Environment Variables

Create `.env.local` in your project root:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
DATABASE_URL=postgresql://postgres:password@db.supabase.co:5432/postgres?schema=public
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

### Step 6: Run Database Migration

```bash
npx prisma migrate dev --name init
```

This will:
- Create all tables in your PostgreSQL database
- Generate the Prisma client
- Ask you to name the migration (type "init" and press Enter)

**Expected output:**
```
✔ Database connection string is valid!
✔ Created migration folder and migration_lock.toml
✔ Your database is now in sync with your schema. Migrations status:

> Status: 1 migration have been applied.
✔ Generated Prisma Client
```

### Step 7: Test Database Connection

Open Prisma Studio (visual database browser):

```bash
npx prisma studio
```

This opens a web interface at `http://localhost:5555` showing your database tables.

### Step 8: Run Development Server

```bash
npm run dev
```

**Output:**
```
> trainer_platform@0.1.0 dev
> next dev

  ▲ Next.js 14.0.0
  - Local:        http://localhost:3000
  - Environments: .env.local

  ✓ Ready in 1.5s
```

---

## 🧪 Testing Phase 1

### Test 1: Home Page
1. Open http://localhost:3000
2. You should see the landing page with "TrainerPro Academy"
3. Check the "Sign In" and "Sign Up" buttons

**Expected:** Landing page loads with navigation buttons

### Test 2: Authentication Pages

**Login Page:**
```
http://localhost:3000/login
```
- Check form layout
- Email and password fields
- "Sign in" button
- Link to signup

**Signup Page:**
```
http://localhost:3000/signup
```
- Check form layout
- Name, email, password, confirm password fields
- "Create account" button
- Link to login

**Expected:** Both pages display correctly with proper form fields

### Test 3: Dashboard Layout

1. Navigate to `http://localhost:3000/dashboard`
2. You should see:
   - Left sidebar with navigation items
   - Top bar with search and user profile
   - Main content area with dashboard content
   - Stats cards
   - Quick actions buttons

**Expected:** Dashboard loads with sidebar, topbar, and content area

### Test 4: Responsive Design

1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M or Cmd+Shift+M)
3. Test on mobile (375px), tablet (768px), and desktop sizes

**Expected:** 
- Sidebar collapses on mobile with hamburger menu
- Layout adapts to screen size
- All content remains readable

### Test 5: Database Connection

```bash
npx prisma studio
```

Open http://localhost:5555

**Expected:**
- Shows all 12 models: User, Team, Player, Drill, etc.
- No errors
- Can browse empty tables

### Test 6: Navigation

In the sidebar, test navigation items:
- Dashboard → `/dashboard`
- Annual Plans → `/annual-plans` (might not have content yet, that's ok)
- Drills → `/drills`
- Players → `/players`
- Matches → `/game-sheets`

**Expected:** Pages load without errors (placeholder content is ok)

---

## 📝 Common Issues & Troubleshooting

### Issue: "Database connection failed"
**Solution:**
- Check DATABASE_URL is correct in .env.local
- Verify password is correct
- Verify Supabase is running
- Try: `npx prisma db push` instead of migrate

### Issue: "Cannot find module '@/lib/db'"
**Solution:**
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Make sure tsconfig.json has proper path aliases

### Issue: "Module not found: Can't resolve 'lucide-react'"
**Solution:**
```bash
npm install lucide-react
```

### Issue: Styles not applying (Tailwind)
**Solution:**
- Check globals.css is imported in layout.tsx
- Restart dev server: `npm run dev`
- Clear .next folder: `rm -rf .next && npm run dev`

### Issue: Sidebar overlaps content on desktop
**Solution:**
- Check DashboardLayout component has proper margin
- Should have `lg:ml-64` class

---

## 📊 Database Schema Verification

To verify the schema was created correctly:

```bash
npx prisma studio
```

You should see these 12 models in the left sidebar:
1. ✅ User
2. ✅ Team
3. ✅ Player
4. ✅ AnnualTrainingPlan
5. ✅ Mesocycle
6. ✅ Microcycle
7. ✅ TrainingSession
8. ✅ SessionBlock
9. ✅ Drill
10. ✅ GameSheet
11. ✅ PlayerSelection
12. ✅ TrainingConcept

---

## 🎯 What's Next (Phase 2)

After Phase 1 is successfully running, Phase 2 will include:

### Phase 2: Core Data Models & CRUD
- Implement Supabase Auth
- Create API routes for all models
- Implement create/read/update/delete operations
- Add server actions for database mutations
- Create forms for data entry
- Add validation with error handling

### Phase 3: Drill Database
- Drill list with filters
- Drill creation form
- Drill detail view
- Search functionality
- Tags and categories

And so on...

---

## ✨ Success Checklist

- ✅ Node.js 18+ installed
- ✅ Dependencies installed (`npm install`)
- ✅ Supabase project created
- ✅ Environment variables set in `.env.local`
- ✅ Database migration ran successfully (`npx prisma migrate dev`)
- ✅ Development server runs (`npm run dev`)
- ✅ Home page loads at http://localhost:3000
- ✅ Dashboard layout displays correctly
- ✅ Responsive design works on mobile/tablet/desktop
- ✅ Database tables visible in Prisma Studio

---

## 🔗 Useful Commands

```bash
# Start development server
npm run dev

# Run database migration
npx prisma migrate dev --name feature_name

# Open database GUI
npx prisma studio

# Generate Prisma client
npx prisma generate

# Format Prisma schema
npx prisma format

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## 📚 Documentation

- **Project Architecture**: See `PROJECT_ARCHITECTURE.md`
- **Prisma Docs**: https://www.prisma.io/docs/
- **Next.js Docs**: https://nextjs.org/docs
- **Supabase Docs**: https://supabase.com/docs
- **Tailwind CSS**: https://tailwindcss.com/docs

---

## 🎉 You're Ready!

Phase 1 foundation is complete. Your development environment is set up and ready for Phase 2 implementation.

Good luck with TrainerPro Academy! ⚽🎯
