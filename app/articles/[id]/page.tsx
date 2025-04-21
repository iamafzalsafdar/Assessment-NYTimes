import { getArticleById } from '@/lib/api'
import { formatDate } from '@/lib/utils'
import { ArrowLeft, Calendar, Eye, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function ArticleDetailPage({ params }: { params: { id: string } }) {
  const article = await getArticleById(params.id)

  if (!article) {
    notFound()
  }

  return (
    <main className="container max-w-4xl py-6 md:py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 mb-6 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to articles
      </Link>

      <article className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold md:text-4xl">{article.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{article.byline.replace('By ', '')}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <time dateTime={article.published_date}>{formatDate(article.published_date)}</time>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              <span>{article.views} views</span>
            </div>
          </div>
        </div>

        {article.media.length > 0 && article.media[0]['media-metadata'] && (
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={article.media[0]['media-metadata'][2].url || '/placeholder.svg'}
              alt={article.media[0].caption || article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="space-y-4">
          <p className="text-xl font-medium">{article.abstract}</p>
          <p>{article.snippet}</p>

          <div className="pt-4">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Read full article on NY Times
            </a>
          </div>
        </div>
      </article>
    </main>
  )
}
