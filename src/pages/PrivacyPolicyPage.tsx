import { SEOHead } from '../components/seo/SEOHead'
import { PageBanner } from '../components/ui/PageBanner'
import { pageBanners } from '../lib/images'
import { smsDisclaimerData } from '../data'

export function PrivacyPolicyPage() {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Amity Gentle Dental"
        description="Privacy policy and data practices for Amity Gentle Dental."
        path="/privacy-policy"
      />
      <PageBanner src={pageBanners.privacy} alt="Privacy and data protection" />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-semibold text-slate-900">Privacy Policy</h1>
        <p className="mt-6 text-slate-700">
          Static placeholder — replace with your finalized policy. The SMS disclaimer references{' '}
          <a className="font-semibold text-brand-800 underline" href={smsDisclaimerData.privacyUrl}>
            {smsDisclaimerData.privacyUrl}
          </a>{' '}
          as an interim link from the project PDF.
        </p>
      </div>
    </>
  )
}
