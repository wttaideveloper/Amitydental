import { Navigate, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { MainLayout } from './components/layout/MainLayout'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { AppointmentsPage } from './pages/AppointmentsPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { SitemapPage } from './pages/SitemapPage'

export default function App() {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="appointments" element={<AppointmentsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="sitemap" element={<SitemapPage />} />
          <Route
            path="about"
            element={<Navigate to="/" replace />}
          />
          <Route path="meet-mr-clark" element={<Navigate to="/" replace />} />
          <Route path="our-approach" element={<Navigate to="/" replace />} />
          <Route path="services" element={<Navigate to="/" replace />} />
          <Route path="services/:slug" element={<Navigate to="/" replace />} />
          <Route path="procedures" element={<Navigate to="/" replace />} />
          <Route path="procedures/:slug" element={<Navigate to="/" replace />} />
          <Route path="mercury-fillings" element={<Navigate to="/" replace />} />
          <Route path="technology" element={<Navigate to="/" replace />} />
          <Route path="soleasleep" element={<Navigate to="/" replace />} />
          <Route path="patient-forms" element={<Navigate to="/" replace />} />
          <Route path="office" element={<Navigate to="/" replace />} />
          <Route path="blog" element={<Navigate to="/" replace />} />
          <Route path="blog/:slug" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HelmetProvider>
  )
}
