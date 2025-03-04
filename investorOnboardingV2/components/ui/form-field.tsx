import type { ReactNode } from "react"

interface FormFieldProps {
  label?: string
  children: ReactNode
  error?: string
}

export function FormField({ label, children, error }: FormFieldProps) {
  return (
    <div className="space-y-2">
      {label && <div className="font-medium text-white">{label}</div>}
      {children}
      {error && <div className="text-red-500 text-sm">{error}</div>}
    </div>
  )
}

