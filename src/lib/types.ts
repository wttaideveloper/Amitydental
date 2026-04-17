/** Shapes mirror common Strapi REST patterns for easier future mapping */

export interface SeoMeta {
  title: string
  description: string
}

export interface SiteInfo {
  id: number
  documentId: string
  name: string
  tagline: string
  headlineAccent: string
  practiceSubtitle: string
  address: {
    line1: string
    line2?: string
    city: string
    state: string
    zip: string
  }
  phone: string
  email: string
  social?: {
    facebook: string
    linkedin: string
    google: string
  }
  credit?: {
    copyrightYear: number
    designer: string
  }
  hours: { day: string; hours: string }[]
  seo: SeoMeta
}

export interface NavItem {
  id: string
  label: string
  href: string
  highlight?: boolean
}

export interface Navigation {
  items: NavItem[]
}

export interface Service {
  id: number
  documentId: string
  slug: string
  title: string
  excerpt: string
  icon: string
  body: string[]
  seo: SeoMeta
}

export interface Testimonial {
  id: number
  quote: string
  author: string
  context?: string
}

export interface BlogPost {
  id: number
  documentId: string
  slug: string
  title: string
  excerpt: string
  publishedAt: string
  coverImageAlt: string
  body: string[]
  seo: SeoMeta
}

export interface TeamMember {
  id: number
  documentId: string
  name: string
  shortName?: string
  role: string
  pageTitle?: string
  /** Legacy short bio blocks (optional if using intro/community) */
  bio?: string[]
  intro?: string[]
  community?: string[]
  organizationsAfter?: string
  organizations?: string[]
  credentials?: string[]
  family?: string
  interests?: string[]
  imageAlt: string
  seo: SeoMeta
}

export interface SoleasleepContent {
  id: number
  documentId: string
  heroTitle: string
  heroSubtitle: string
  sections: { title: string; body: string[] }[]
  faq: { q: string; a: string }[]
  seo: SeoMeta
}
