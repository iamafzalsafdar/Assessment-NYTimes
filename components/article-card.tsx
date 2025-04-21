import type { Article } from '@/lib/types'
import { formatDate } from '@/lib/utils'
import { Calendar, Eye } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface ArticleCardProps {
  article: Article
}

export default function ArticleCard({ article }: ArticleCardProps) {
  // Get the medium-sized image if available
  const imageUrl =
    article.media.length > 0 && article.media[0]['media-metadata']
      ? article.media[0]['media-metadata'][1].url
      : '/placeholder.svg?height=210&width=375'

  return (
    <Link href={`/articles/${article.id}`}>
      <article className="h-full flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
        <div className="relative h-48">
          <Image
            src={imageUrl || '/placeholder.svg'}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col flex-1 p-4 space-y-2">
          <h3 className="font-semibold line-clamp-2">{article.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{article.abstract}</p>

          <div className="mt-auto pt-4 flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <time dateTime={article.published_date}>{formatDate(article.published_date)}</time>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              <span>{article.views} views</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
