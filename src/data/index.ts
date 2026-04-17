import type {
  BlogPost,
  Navigation,
  Service,
  SiteInfo,
  SoleasleepContent,
  TeamMember,
  Testimonial,
} from '../lib/types'
import about from './about.json'
import blog from './blog.json'
import completeServices from './completeServices.json'
import featuredServices from './featuredServices.json'
import mercuryContent from './mercuryContent.json'
import navigation from './navigation.json'
import patientForms from './patientForms.json'
import personalMessage from './personalMessage.json'
import approach from './approach.json'
import serviceDetails from './serviceDetails.json'
import services from './services.json'
import site from './site.json'
import soleasleep from './soleasleep.json'
import team from './team.json'
import technology from './technology.json'
import testimonialsFile from './testimonials.json'
import smsDisclaimer from './smsDisclaimer.json'

export const siteData = site as SiteInfo
export const navigationData = navigation as Navigation
export const aboutData = about as {
  id: number
  documentId: string
  title: string
  lead: string
  mission: string[]
  values: { title: string; text: string }[]
  seo: { title: string; description: string }
}
export const servicesData = services.data as Service[]
export const testimonialsData = testimonialsFile.data as Testimonial[]
export const patientReviewsSection = {
  eyebrow: (testimonialsFile as { sectionEyebrow?: string }).sectionEyebrow ?? '',
  title: (testimonialsFile as { sectionTitle?: string }).sectionTitle ?? 'Patient reviews',
}
export const blogPageMeta = blog.page as {
  eyebrow: string
  title: string
  intro: string
  sectionTitle: string
  sectionDescription: string
  seo: { title: string; description: string }
}
export const blogData = blog.data as BlogPost[]
export const teamData = team.data as TeamMember[]
export const soleasleepData = soleasleep as SoleasleepContent
export const personalMessageData = personalMessage as {
  id: number
  documentId: string
  title: string
  quote: string
  signature: string
  seo: { title: string; description: string }
}
export const approachData = approach as {
  id: number
  documentId: string
  sectionTitle: string
  heroQuote: string
  heroTestimonials: { quote: string; author: string; role: string }[]
  heroInstruction: string
  columns: { id: string; title: string; paragraphs: string[] }[]
  seo: { title: string; description: string }
}
export const mercuryContentData = mercuryContent as {
  id: number
  documentId: string
  bannerTitle: string
  intro: string
  videoSectionTitle: string
  videoCaption: string
  amalgamSectionTitle: string
  amalgamReplacement: { title: string; body: string }
  seo: { title: string; description: string }
}
export const technologyData = technology as {
  id: number
  documentId: string
  title: string
  intro: string
  items: { id: string; title: string; body: string }[]
  seo: { title: string; description: string }
}
export const featuredServicesData = featuredServices as {
  id: number
  documentId: string
  title: string
  subtitle: string
  intro: string
  items: { id: string; title: string; imageAlt: string; href: string }[]
  seo: { title: string; description: string }
}
export const completeServicesData = completeServices as {
  id: number
  documentId: string
  title: string
  intro: string
  columns: {
    id: string
    items: { label: string; expandable: boolean; slug: string | null }[]
  }[]
  seo: { title: string; description: string }
}
export const patientFormsData = patientForms as {
  id: number
  documentId: string
  title: string
  subtitle: string
  notice: string
  downloads: {
    id: string
    label: string
    language: string
    href: string
    variant: string
  }[]
  seo: { title: string; description: string }
}
export const serviceDetailsData = serviceDetails.data as {
  slug: string
  title: string
  body: string[]
}[]
export const smsDisclaimerData = smsDisclaimer as {
  id: number
  documentId: string
  title: string
  body: string
  privacyUrl: string
  privacyLabel: string
}

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find((s) => s.slug === slug)
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogData.find((p) => p.slug === slug)
}

export function getServiceDetailBySlug(slug: string) {
  return serviceDetailsData.find((s) => s.slug === slug)
}
