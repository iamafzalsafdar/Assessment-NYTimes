import { getArticles } from '@/lib/api'
import ArticleCard from './article-card'
import { PeriodSelector } from './period-selector'

export default async function ArticleList({ period = '1' }: { period?: string }) {
  try {
    const articles = await getArticles(period)

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Most Viewed Articles</h2>
          <PeriodSelector currentPeriod={period} />
        </div>

        {articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No articles found for this time period.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>
    )
  } catch (error) {
    throw error
  }
}
