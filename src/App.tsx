import { Navigate, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { MainLayout } from './components/layout/MainLayout'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { AboutPage } from './pages/AboutPage'
import { AppointmentsPage } from './pages/AppointmentsPage'
import { BlogPage } from './pages/BlogPage'
import { BlogPostPage } from './pages/BlogPostPage'
import { CompleteServicesPage } from './pages/CompleteServicesPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { MeetDrClarkPage } from './pages/MeetDrClarkPage'
import { MercuryFillingsPage } from './pages/MercuryFillingsPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { OfficePage } from './pages/OfficePage'
import { OurApproachPage } from './pages/OurApproachPage'
import { PatientFormsPage } from './pages/PatientFormsPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { ProcedureDetailPage } from './pages/ProcedureDetailPage'
import { ServiceDetailPage } from './pages/ServiceDetailPage'
import { SitemapPage } from './pages/SitemapPage'
import { SoleasleepPage } from './pages/SoleasleepPage'
import { TechnologyPage } from './pages/TechnologyPage'

export default function App() {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="meet-mr-clark" element={<MeetDrClarkPage />} />
          <Route path="our-approach" element={<OurApproachPage />} />
          <Route path="services" element={<CompleteServicesPage />} />
          <Route path="services/:slug" element={<ServiceDetailPage />} />
          <Route path="procedures" element={<Navigate to="/services" replace />} />
          <Route path="procedures/:slug" element={<ProcedureDetailPage />} />
          <Route path="mercury-fillings" element={<MercuryFillingsPage />} />
          <Route path="technology" element={<TechnologyPage />} />
          <Route path="soleasleep" element={<SoleasleepPage />} />
          <Route path="patient-forms" element={<PatientFormsPage />} />
          <Route path="office" element={<OfficePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="appointments" element={<AppointmentsPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogPostPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="sitemap" element={<SitemapPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HelmetProvider>
  )
}
