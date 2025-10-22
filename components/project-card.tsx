import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  slug: string
  category?: string
  date?: string
  client?: string
}

export function ProjectCard({ title, description, image, slug, category, date, client }: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="group block">
      <div className="relative overflow-hidden rounded-lg bg-muted aspect-[4/3] mb-4">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors text-balance">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{description}</p>
          {(category || date || client) && (
            <div className="flex flex-wrap gap-2 mt-3">
              {category && (
                <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                  {category}
                </span>
              )}
              {date && (
                <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">{date}</span>
              )}
              {client && (
                <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">{client}</span>
              )}
            </div>
          )}
        </div>

        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>
    </Link>
  )
}
