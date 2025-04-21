import type { Article } from './types'

const API_KEY = process.env.NY_TIMES_API_KEY

export async function getArticles(period = '1'): Promise<Article[]> {
  if (!API_KEY) {
    console.error('NY Times API key is not defined')
    throw new Error('NY Times API key is not defined')
  }

  try {
    const apiUrl = `https://api.nytimes.com/svc/mostpopular/v2/viewed/${period}.json?api-key=${API_KEY}`

    const response = await fetch(apiUrl, {
      next: { revalidate: 3600 },
      headers: {
        Accept: 'application/json',
      },
    })
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`)
    }

    const data = await response.json()

    if (!data.results || !Array.isArray(data.results)) {
      throw new Error('Unexpected API response format')
    }

    return data.results.map((article: any) => ({
      ...article,
      views: Math.floor(
        Math.random() * (period === '1' ? 1000 : period === '7' ? 5000 : 10000) + 500
      ),
    }))
  } catch (error) {
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error(
        'Network error while connecting to NY Times API. Please check your internet connection.'
      )
    }

    throw error
  }
}

export async function getArticleById(id: string): Promise<Article | null> {
  const articles = await getArticles('7')

  const article = articles.find(article => article.id.toString() === id)

  return article || null
}
