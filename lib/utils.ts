import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { format, formatDistanceToNow, parse } from 'date-fns'

// ============================================================================
// CLASS NAME UTILITIES
// ============================================================================

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ============================================================================
// DATE & TIME UTILITIES
// ============================================================================

export function formatDate(date: Date | string, formatStr: string = 'MMM d, yyyy'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return format(dateObj, formatStr)
}

export function formatDateTime(date: Date | string, formatStr: string = 'MMM d, yyyy HH:mm'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return format(dateObj, formatStr)
}

export function formatRelativeTime(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return formatDistanceToNow(dateObj, { addSuffix: true })
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes}m`
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`
}

export function datesRange(startDate: Date | string, endDate: Date | string): string {
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate
  const end = typeof endDate === 'string' ? new Date(endDate) : endDate
  return `${formatDate(start)} - ${formatDate(end)}`
}

// ============================================================================
// STRING UTILITIES
// ============================================================================

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export function capitalizeWords(str: string): string {
  return str
    .split(' ')
    .map((word) => capitalize(word))
    .join(' ')
}

export function truncate(str: string, length: number): string {
  return str.length > length ? `${str.substring(0, length)}...` : str
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n.charAt(0))
    .join('')
    .toUpperCase()
    .substring(0, 2)
}

export function camelCase(str: string): string {
  return str
    .split(/[-_\s]/)
    .map((word, index) => {
      if (index === 0) return word.toLowerCase()
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join('')
}

export function toPascalCase(str: string): string {
  return str
    .split(/[-_\s]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')
}

export function toKebabCase(str: string): string {
  return str
    .split(/[-_\s]/)
    .map((word) => word.toLowerCase())
    .join('-')
}

// ============================================================================
// ARRAY UTILITIES
// ============================================================================

export function chunk<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = []
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size))
  }
  return chunks
}

export function groupBy<T>(arr: T[], key: keyof T): Record<string, T[]> {
  return arr.reduce(
    (result, item) => {
      const groupKey = String(item[key])
      if (!result[groupKey]) result[groupKey] = []
      result[groupKey].push(item)
      return result
    },
    {} as Record<string, T[]>,
  )
}

export function unique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr))
}

export function uniqueBy<T>(arr: T[], key: keyof T): T[] {
  const seen = new Set<unknown>()
  return arr.filter((item) => {
    const value = item[key]
    if (seen.has(value)) return false
    seen.add(value)
    return true
  })
}

export function flatten<T>(arr: T[][]): T[] {
  return arr.reduce((flat, toFlatten) => flat.concat(toFlatten), [])
}

export function shuffle<T>(arr: T[]): T[] {
  const array = [...arr]
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

// ============================================================================
// OBJECT UTILITIES
// ============================================================================

export function omit<T extends Record<string, any>>(
  obj: T,
  keys: (keyof T)[],
): Partial<T> {
  const result = { ...obj }
  keys.forEach((key) => delete result[key])
  return result
}

export function pick<T extends Record<string, any>>(
  obj: T,
  keys: (keyof T)[],
): Partial<T> {
  const result: Partial<T> = {}
  keys.forEach((key) => {
    result[key] = obj[key]
  })
  return result
}

export function filterObject<T extends Record<string, any>>(
  obj: T,
  predicate: (value: any, key: keyof T) => boolean,
): Partial<T> {
  const result: Partial<T> = {}
  for (const key in obj) {
    if (predicate(obj[key], key as keyof T)) {
      result[key as keyof T] = obj[key]
    }
  }
  return result
}

export function deepMerge<T extends Record<string, any>>(
  target: T,
  source: Partial<T>,
): T {
  const result = { ...target }
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object') {
      result[key] = deepMerge(target[key] || {}, source[key] as any)
    } else {
      result[key] = source[key] as any
    }
  }
  return result
}

// ============================================================================
// VALIDATION UTILITIES
// ============================================================================

export function isEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export function isUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export function isPhoneNumber(phone: string): boolean {
  const re = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/
  return re.test(phone.replace(/\s/g, ''))
}

export function isNumeric(str: string): boolean {
  return !isNaN(parseFloat(str)) && isFinite(Number(str))
}

// ============================================================================
// STORAGE UTILITIES
// ============================================================================

export function getFromStorage<T>(key: string, defaultValue?: T): T | null {
  if (typeof window === 'undefined') return null
  try {
    const item = window.localStorage.getItem(key)
    return item ? (JSON.parse(item) as T) : defaultValue ?? null
  } catch {
    return defaultValue ?? null
  }
}

export function setInStorage<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch {
    console.error(`Failed to set item in localStorage: ${key}`)
  }
}

export function removeFromStorage(key: string): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.removeItem(key)
  } catch {
    console.error(`Failed to remove item from localStorage: ${key}`)
  }
}

// ============================================================================
// ERROR HANDLING
// ============================================================================

export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message
  if (typeof error === 'string') return error
  return 'An unknown error occurred'
}

export function isDevelopment(): boolean {
  return process.env.NODE_ENV === 'development'
}

export function logDev(...args: any[]): void {
  if (isDevelopment()) {
    console.log(...args)
  }
}

// ============================================================================
// TYPE GUARDS
// ============================================================================

export function isObject(value: unknown): value is Record<string, any> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

export function isEmpty<T>(value: T | null | undefined | ''): boolean {
  if (value === null || value === undefined || value === '') return true
  if (Array.isArray(value)) return value.length === 0
  if (isObject(value)) return Object.keys(value).length === 0
  return false
}
