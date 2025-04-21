export interface Article {
  id: number
  title: string
  abstract: string
  url: string
  byline: string
  published_date: string
  updated: string
  section: string
  subsection: string
  snippet: string
  views: number
  media: Array<{
    type: string
    subtype: string
    caption: string
    copyright: string
    'media-metadata': Array<{
      url: string
      format: string
      height: number
      width: number
    }>
  }>
}
