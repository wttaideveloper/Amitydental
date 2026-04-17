/**
 * Images — local assets preferred so cards and heroes always load (no broken Unsplash links).
 */

const q = '85'

function u(photoPath: string, w: number, h?: number) {
  const hParam = typeof h === 'number' ? `&h=${h}` : ''
  return `https://images.unsplash.com/${photoPath}?auto=format&fit=crop&fm=webp&q=${q}&w=${w}${hParam}`
}

/** Local assets (Vite serves from /public) */
export const local = {
  drClark: '/images/dr-clark.jpg',
  drClarkOfficeSignage: '/images/dr-clark-office-signage.png',
  /** Home featured cards (generated) — amalgam + sleep airway */
  featMercuryAmalgam: '/images/feat-mercury-amalgam.png',
  featSleepAirway: '/images/feat-sleep-airway.png',

  /** Full-bleed heroes */
  soleasleepHero: '/images/soleasleep-hero.png',
  approachWellness: '/images/approach-wellness.png',
  technologyDental: '/images/technology-dental.png',
} as const

/** Generated page hero strips — inner routes */
export const pageBanners = {
  contact: '/images/page-contact-banner.png',
  appointments: '/images/page-appointments-banner.png',
  forms: '/images/page-forms-banner.png',
  privacy: '/images/page-privacy-banner.png',
  sitemap: '/images/page-sitemap-banner.png',
  notFound: '/images/page-404-banner.png',
  services: '/images/page-services-banner.png',
  procedures: '/images/page-procedures-banner.png',
  blog: '/images/page-blog-banner.png',
  serviceDetail: '/images/page-service-detail-banner.png',
  procedureDetail: '/images/page-procedure-detail-banner.png',
} as const

export const images = {
  hero: local.drClarkOfficeSignage,

  homePersonalMessage: local.drClark,

  drPortrait: local.drClarkOfficeSignage,

  featuredMercury: local.featMercuryAmalgam,

  featuredSleep: local.featSleepAirway,

  /** Mercury page — same clinical asset as home featured card (loads reliably) */
  mercuryVideoThumb: local.featMercuryAmalgam,

  reviewsBg: u('photo-1576091160399-112ba8d25d1d', 1920, 1080),

  blogDefault: u('photo-1522202176988-66273c2fd55f', 1200, 750),

  blogBrushing: u('photo-1609840114035-3c981b782dfe', 1200, 750),

  blogAnxiety: u('photo-1582719478250-c89cae4dc85b', 1200, 750),

  blogKids: u('photo-1503454537195-1dcabb73ffb9', 1200, 750),

  approachTeam: local.approachWellness,

  soleaComfort: local.soleasleepHero,

  technologyBanner: local.technologyDental,

  aboutOffice: local.drClarkOfficeSignage,

  officePage: local.drClarkOfficeSignage,
} as const

const blogCoverBySlug: Record<string, keyof typeof images> = {
  'brushing-basics-that-actually-stick': 'blogBrushing',
  'when-dental-anxiety-shows-up': 'blogAnxiety',
  'first-visits-for-kids-what-to-expect': 'blogKids',
}

export function getBlogCoverImage(slug: string): string {
  const key = blogCoverBySlug[slug]
  if (key) {
    return images[key]
  }
  return images.blogDefault
}
