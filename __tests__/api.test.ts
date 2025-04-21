import { getArticles, getArticleById } from '@/lib/api'

global.fetch = jest.fn()

describe('API functions', () => {
  beforeEach(() => {
    jest.resetAllMocks()
    process.env.NY_TIMES_API_KEY = 'HyCiufuksVI5GXnyp8D2YShc8TXXp25D'
  })

  describe('getArticles', () => {
    it('fetches articles with the correct URL and parameters', async () => {
      const mockResponse = {
        ok: true,
        json: jest.fn().mockResolvedValue({
          results: [
            {
              id: 1,
              title: 'Test Article',
              abstract: 'Test Abstract',
            },
          ],
        }),
      }

      // @ts-ignore - Mocking fetch
      global.fetch.mockResolvedValue(mockResponse)

      const articles = await getArticles('7')

      expect(global.fetch).toHaveBeenCalledWith(
        'https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=HyCiufuksVI5GXnyp8D2YShc8TXXp25D',
        expect.objectContaining({
          next: { revalidate: 3600 },
          headers: expect.any(Object),
        })
      )

      expect(articles.length).toBe(1)
      expect(articles[0].id).toBe(1)
      expect(articles[0].title).toBe('Test Article')
      expect(articles[0].abstract).toBe('Test Abstract')
      expect(articles[0].views).toBeDefined()
    })

    it('throws an error when API key is not defined', async () => {
      const originalEnv = process.env.NY_TIMES_API_KEY
      delete process.env.NY_TIMES_API_KEY

      await expect(getArticles()).rejects.toThrow('NY Times API key is not defined')

      process.env.NY_TIMES_API_KEY = originalEnv
    })

    it('throws an error when fetch fails', async () => {
      const mockResponse = {
        ok: false,
        status: 404,
        text: jest.fn().mockResolvedValue('Not Found'),
      }

      // @ts-ignore - Mocking fetch
      global.fetch.mockResolvedValue(mockResponse)

      await expect(getArticles()).rejects.toThrow('API responded with status: 404')
    })
  })

})
