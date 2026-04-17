import type { ReactNode } from 'react'

type FormFieldProps = {
  label: string
  htmlFor: string
  error?: string
  hint?: string
  children: ReactNode
}

export function FormField({
  label,
  htmlFor,
  error,
  hint,
  children,
}: FormFieldProps) {
  return (
    <label className="block" htmlFor={htmlFor}>
      <span className="mb-1.5 block text-sm font-medium text-slate-800">{label}</span>
      {children}
      {hint && !error ? (
        <span className="mt-1 block text-xs text-slate-500">{hint}</span>
      ) : null}
      {error ? <span className="mt-1 block text-sm text-red-600">{error}</span> : null}
    </label>
  )
}
