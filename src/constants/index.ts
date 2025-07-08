export const SORT_OPTIONS = {
  NEWEST: 'newest',
  OLDEST: 'oldest',
  POPULAR: 'popular'
} as const

export const DATE_FORMATS = {
  ONE_DAY: '1 day ago',
  DAYS: 'days ago',
  WEEKS: 'weeks ago',
  MONTHS: 'months ago',
  YEARS: 'years ago'
} as const

export const TIME_CONSTANTS = {
  MILLISECONDS_PER_DAY: 1000 * 60 * 60 * 24,
  DAYS_PER_WEEK: 7,
  DAYS_PER_MONTH: 30,
  DAYS_PER_YEAR: 365
} as const

export const ROUTES = {
  HOME: '/',
  BLOG: '/blog',
  ABOUT: '/about',
  BLOG_POST: '/blog'
} as const

export const SITE_CONFIG = {
  BASE_URL: 'https://frederiksahlholdt.com',
  TITLE: 'Frederik Sahlholdt | Blog',
  DESCRIPTION: 'A personal blog by Frederik Sahlholdt. I write about software development, technology, and other things I find interesting.',
  AUTHOR: 'Frederik Sahlholdt',
  KEYWORDS: 'blog, frederik sahlholdt, software development, technology, javascript, typescript, vue, node'
} as const

export const DEFAULT_AUTHOR = 'Frederik Sahlholdt'
export const CONTACT_EMAIL = 'frederikksnielsen@gmail.com'
export const LINKEDIN_URL = 'https://dk.linkedin.com/in/frederik-sahlholdt-0b00ab1a7' 