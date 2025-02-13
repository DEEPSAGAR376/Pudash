interface ContentCardProps {
  children: React.ReactNode;
}

export function ContentCard({ children }: ContentCardProps) {
  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-red-500/20">
      {children}
    </div>
  )
}

