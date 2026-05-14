// Navigation items for sidebar
export const NAVIGATION_ITEMS = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: 'LayoutDashboard',
  },
  {
    label: 'Planning',
    icon: 'Calendar',
    submenu: [
      { label: 'Annual Plans', href: '/annual-plans' },
      { label: 'Mesocycles', href: '/mesocycles' },
      { label: 'Microcycles', href: '/microcycles' },
      { label: 'Training Sessions', href: '/training-sessions' },
    ],
  },
  {
    label: 'Drills',
    href: '/drills',
    icon: 'Lightbulb',
  },
  {
    label: 'Players',
    href: '/players',
    icon: 'Users',
  },
  {
    label: 'Matches',
    href: '/game-sheets',
    icon: 'Trophy',
  },
  {
    label: 'Methodology',
    href: '/training-concepts',
    icon: 'BookOpen',
  },
  {
    label: 'Reports',
    href: '/reports',
    icon: 'BarChart3',
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: 'Settings',
  },
];

// Drill types
export const DRILL_TYPES = [
  'Rondo',
  'Possession Game',
  'Positional Game',
  'Progression Game',
  'Finishing',
  'Attacking',
  'Defending',
  'Control & Pass',
  'Small-Sided Game',
  'Technical/Tactical Drill',
  'Activation',
  'Other',
];

// Session preferences
export const SESSION_PREFERENCES = [
  'Coordinative',
  'Cognitive',
  'Game Contextual',
  'Recovery',
  'Match Preparation',
  'Other',
];

// Cognitive blocks
export const COGNITIVE_BLOCKS = [
  'Creation & Occupation of Space',
  'Movement of the Ball',
  'Management of Advantages and Disadvantages',
  'Finishing',
];

// Default session blocks
export const DEFAULT_SESSION_BLOCKS = [
  { title: '00 Warm-up', order: 0 },
  { title: '01 Initiation', order: 1 },
  { title: '02 Main Stage', order: 2 },
  { title: '03 Implementation / SSG', order: 3 },
];

// Player positions
export const PLAYER_POSITIONS = [
  'GK',
  'CB',
  'LB',
  'RB',
  'LWB',
  'RWB',
  'CM',
  'CDM',
  'CAM',
  'LM',
  'RM',
  'LW',
  'RW',
  'ST',
  'CF',
];

// Difficulty levels
export const DIFFICULTY_LEVELS = ['Beginner', 'Intermediate', 'Advanced'];

// User roles
export const USER_ROLES = ['COACH', 'ADMIN', 'ASSISTANT'];

// Rating scales
export const RATING_SCALE = {
  min: 1,
  max: 10,
  labels: {
    1: 'Poor',
    2: 'Below Average',
    3: 'Average',
    4: 'Good',
    5: 'Very Good',
    6: 'Excellent',
    7: 'Outstanding',
    8: 'Elite',
    9: 'World Class',
    10: 'Exceptional',
  },
};

// Date formats
export const DATE_FORMATS = {
  date: 'dd/MM/yyyy',
  datetime: 'dd/MM/yyyy HH:mm',
  time: 'HH:mm',
};
