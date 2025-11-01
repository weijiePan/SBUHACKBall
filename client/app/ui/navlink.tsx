'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

export default function NavLink({
  slug,
  children,
}: {
  slug: string | null
  children: React.ReactNode
}) {
  // Navigating to `/blog/hello-world` will return 'hello-world'
  // for the selected layout segment
  const segment = useSelectedLayoutSegment()
  // console.log(segment);
  // "" === null is false so account for the case when segment is null
  const isActive = (slug == "" && !segment) || (slug === segment)

  return (
    <div className={`h-10 flex flex-row px-2 py-1 rounded w-full ${isActive ? 'bg-foreground text-background' : 'text-foreground'}`}>
      <Link className="flex items-center flex-row gap-2" href={`/${slug}`}>
        {children}
        <p className="max-w-md text-md font-medium leading-8 text-text truncate">
        {!slug ? "Video Analysis" : slug}
        </p>
      </Link>
    </div>
  )
}