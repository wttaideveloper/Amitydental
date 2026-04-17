import { Link } from 'react-router-dom'
import { SITE_LOGO_ALT, SITE_LOGO_HEIGHT, SITE_LOGO_SRC, SITE_LOGO_WIDTH } from '../../lib/branding'

type LogoProps = {
  className?: string
  variant?: 'header' | 'footer'
}

/**
 * Official raster lockup (`SITE_LOGO_SRC`). If the asset uses a black plate behind
 * white artwork, `mix-blend-screen` lets it sit cleanly on the brand blue bar.
 */
export function Logo({ className = '', variant = 'header' }: LogoProps) {
  const imgClass =
    variant === 'header'
      ? [
          'block h-11 max-h-12 w-auto max-w-full min-w-0 object-contain object-left',
          'sm:h-12 sm:max-h-[3.25rem] md:h-[3.35rem] md:max-h-14',
          'lg:h-14 lg:max-h-[3.75rem]',
          'max-w-[min(100%,20rem)] sm:max-w-[min(100%,24rem)] lg:max-w-[min(100%,26rem)]',
          'mix-blend-screen',
        ].join(' ')
      : [
          'block h-9 max-h-10 w-auto max-w-full object-contain object-left',
          'sm:h-10 sm:max-h-11',
          'max-w-[min(100%,18rem)] sm:max-w-[min(100%,20rem)]',
          'mix-blend-screen',
        ].join(' ')

  return (
    <Link
      to="/"
      className={`inline-flex max-w-full min-w-0 items-center leading-none outline-none focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-header-bar ${className}`}
    >
      <img
        src={SITE_LOGO_SRC}
        alt={SITE_LOGO_ALT}
        className={imgClass}
        width={SITE_LOGO_WIDTH}
        height={SITE_LOGO_HEIGHT}
        loading="eager"
        decoding="async"
        draggable={false}
        fetchPriority={variant === 'header' ? 'high' : 'auto'}
      />
    </Link>
  )
}
