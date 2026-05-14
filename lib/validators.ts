import { z } from 'zod';

// User validation
export const userCreateSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const userLoginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

// Team validation
export const teamCreateSchema = z.object({
  name: z.string().min(1, 'Team name is required'),
  clubName: z.string().optional(),
  ageGroup: z.string().optional(),
  season: z.string().min(1, 'Season is required'),
});

export const teamUpdateSchema = z.object({
  name: z.string().min(1, 'Team name is required').optional(),
  clubName: z.string().optional(),
  ageGroup: z.string().optional(),
  season: z.string().optional(),
});

// Player validation
export const playerCreateSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  dateOfBirth: z.string().optional(),
  position: z.string().optional(),
  preferredFoot: z.enum(['LEFT', 'RIGHT', 'BOTH']).optional(),
  shirtNumber: z.number().int().optional(),
  photoUrl: z.string().url().optional(),
  notes: z.string().optional(),
  technicalRating: z.number().int().min(1).max(10).optional(),
  tacticalRating: z.number().int().min(1).max(10).optional(),
  physicalRating: z.number().int().min(1).max(10).optional(),
  psychologicalRating: z.number().int().min(1).max(10).optional(),
  socialRating: z.number().int().min(1).max(10).optional(),
  strengths: z.string().optional(),
  developmentAreas: z.string().optional(),
  individualObjectives: z.string().optional(),
});

export const playerUpdateSchema = playerCreateSchema.partial();

// Annual Training Plan validation
export const annualTrainingPlanCreateSchema = z.object({
  season: z.string().min(1, 'Season is required'),
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  mainObjectives: z.string().optional(),
});

export const annualTrainingPlanUpdateSchema = annualTrainingPlanCreateSchema.partial();

// Mesocycle validation
export const mesocycleCreateSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
  mainObjective: z.string().optional(),
  cognitiveBlock: z.string().optional(),
  notes: z.string().optional(),
  order: z.number().int().optional(),
});

export const mesocycleUpdateSchema = mesocycleCreateSchema.partial();

// Microcycle validation
export const microcycleCreateSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  weekNumber: z.number().int().min(1),
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
  objective: z.string().optional(),
  cognitiveBlock: z.string().optional(),
  coordinativeFocus: z.string().optional(),
  tacticalFocus: z.string().optional(),
  gameContext: z.string().optional(),
  notes: z.string().optional(),
  order: z.number().int().optional(),
});

export const microcycleUpdateSchema = microcycleCreateSchema.partial();

// Training Session validation
export const trainingSessionCreateSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  sessionNumber: z.number().int().min(1),
  date: z.string().datetime(),
  duration: z.number().int().min(1, 'Duration must be at least 1 minute'),
  location: z.string().optional(),
  preference: z.string().optional(),
  sessionObjective: z.string().optional(),
  objectiveInPossession: z.string().optional(),
  operationalFocusInPossession: z.string().optional(),
  objectiveInRecovery: z.string().optional(),
  operationalFocusInRecovery: z.string().optional(),
  coachNotes: z.string().optional(),
});

export const trainingSessionUpdateSchema = trainingSessionCreateSchema.partial();

// Drill validation
export const drillCreateSchema = z.object({
  title: z.string().min(1, 'Drill title is required'),
  type: z.string().min(1, 'Drill type is required'),
  ageGroup: z.string().optional(),
  duration: z.number().int().optional(),
  load: z.string().optional(),
  restBetweenRounds: z.number().int().optional(),
  minPlayers: z.number().int().optional(),
  recommendedPlayers: z.number().int().optional(),
  footballVariant: z.string().optional(),
  difficulty: z.string().optional(),
  area: z.string().optional(),
  materialNeeded: z.string().optional(),
  generalObjective: z.string().optional(),
  organization: z.string().optional(),
  description: z.string().optional(),
  drillFlow: z.string().optional(),
  rulesAndConstraints: z.string().optional(),
  coachingFocusInPossession: z.string().optional(),
  coachingFocusInRecovery: z.string().optional(),
  scoringSystem: z.string().optional(),
  progressions: z.string().optional(),
  keyTransferToGame: z.string().optional(),
  graphicUrl: z.string().url().optional(),
  tags: z.string().optional(),
});

export const drillUpdateSchema = drillCreateSchema.partial();

// Game Sheet validation
export const gameSheetCreateSchema = z.object({
  opponent: z.string().min(1, 'Opponent name is required'),
  date: z.string().datetime(),
  competition: z.string().optional(),
  venue: z.string().optional(),
  formation: z.string().optional(),
  gameModel: z.string().optional(),
  startingLineup: z.string().optional(),
  substitutes: z.string().optional(),
  tacticalObjectives: z.string().optional(),
  inPossessionPlan: z.string().optional(),
  outOfPossessionPlan: z.string().optional(),
  transitionAttackPlan: z.string().optional(),
  transitionDefensePlan: z.string().optional(),
  setPieces: z.string().optional(),
  playerMinutes: z.string().optional(),
  matchNotes: z.string().optional(),
  postMatchReflection: z.string().optional(),
  score: z.string().optional(),
});

export const gameSheetUpdateSchema = gameSheetCreateSchema.partial();

// Session Block validation
export const sessionBlockCreateSchema = z.object({
  title: z.string().min(1, 'Block title is required'),
  duration: z.number().int().optional(),
  pssType: z.string().optional(),
  drillId: z.string().optional(),
  notes: z.string().optional(),
  order: z.number().int().optional(),
});

export const sessionBlockUpdateSchema = sessionBlockCreateSchema.partial();

// Player Selection validation
export const playerSelectionCreateSchema = z.object({
  playerId: z.string().min(1, 'Player is required'),
  groupName: z.string().optional(),
  positionInGrid: z.string().optional(),
});

// Training Concept validation
export const trainingConceptCreateSchema = z.object({
  block: z.string().min(1, 'Block is required'),
  title: z.string().min(1, 'Title is required'),
  content: z.string().optional(),
  order: z.number().int().optional(),
  tags: z.string().optional(),
});

export const trainingConceptUpdateSchema = trainingConceptCreateSchema.partial();

// Export types
export type UserCreate = z.infer<typeof userCreateSchema>;
export type UserLogin = z.infer<typeof userLoginSchema>;
export type TeamCreate = z.infer<typeof teamCreateSchema>;
export type PlayerCreate = z.infer<typeof playerCreateSchema>;
export type DrillCreate = z.infer<typeof drillCreateSchema>;
export type TrainingSessionCreate = z.infer<typeof trainingSessionCreateSchema>;
export type MesocycleCreate = z.infer<typeof mesocycleCreateSchema>;
export type MicrocycleCreate = z.infer<typeof microcycleCreateSchema>;
