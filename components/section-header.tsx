interface SectionHeaderProps {
  title: string
  subtitle?: string
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-header text-theme-primary mb-4">{title}</h2>
      {subtitle && (
        <p className="text-xl text-theme-primary max-w-2xl mx-auto font-body">{subtitle}</p>
      )}
    </div>
  )
}
