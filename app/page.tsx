import ArticleList from '@/components/article-list'
import { Suspense } from 'react'
import Loading from './loading'

export default function Home({ searchParams }: { searchParams: { period?: string } }) {
  const period = searchParams?.period || '1'

  return (
    <main className="min-h-screen p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">NY Times Most Popular Articles</h1>
        <p className="text-muted-foreground mt-2">
          Browse the most viewed articles from the New York Times
        </p>
      </header>
      <Suspense fallback={<Loading />}>
        <ArticleList period={period} />
      </Suspense>
    </main>
  )
}
