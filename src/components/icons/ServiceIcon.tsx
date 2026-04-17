import {
  HeartPulse,
  LifeBuoy,
  Shield,
  Smile,
  Sparkles,
  Stethoscope,
  type LucideIcon,
} from 'lucide-react'

const map: Record<string, LucideIcon> = {
  shield: Shield,
  sparkles: Sparkles,
  smile: Smile,
  'life-buoy': LifeBuoy,
  stethoscope: Stethoscope,
  heart: HeartPulse,
}

type ServiceIconProps = {
  name: string
  className?: string
}

export function ServiceIcon({ name, className }: ServiceIconProps) {
  const Icon = map[name] ?? Stethoscope
  return <Icon className={className} aria-hidden />
}
