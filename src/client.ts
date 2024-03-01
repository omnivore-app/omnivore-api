import { Client, fetchExchange } from 'urql'
import { graphql } from './graphql'

const SearchQuery = graphql(`
  query Search(
    $after: String
    $first: Int
    $format: String
    $includeContent: Boolean
    $query: String
  ) {
    search(
      after: $after
      first: $first
      format: $format
      includeContent: $includeContent
      query: $query
    ) {
      __typename
      ... on SearchSuccess {
        edges {
          cursor
          node {
            id
            title
            siteName
            originalArticleUrl
            author
            description
            slug
            labels {
              name
              color
              createdAt
              id
              internal
              source
              description
            }
            highlights {
              id
              quote
              annotation
              patch
              updatedAt
              labels {
                name
                color
                createdAt
                id
                internal
                source
                description
              }
              type
              highlightPositionPercent
              color
              highlightPositionAnchorIndex
              prefix
              suffix
              createdByMe
              createdAt
            }
            updatedAt
            savedAt
            pageType
            content
            publishedAt
            url
            image
            readAt
            wordsCount
            readingProgressPercent
            isArchived
            archivedAt
            contentReader
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
          totalCount
        }
      }
      ... on SearchError {
        errorCodes
      }
    }
  }
`)

type PageType =
  | 'ARTICLE'
  | 'BOOK'
  | 'FILE'
  | 'PROFILE'
  | 'UNKNOWN'
  | 'WEBSITE'
  | 'TWEET'
  | 'VIDEO'
  | 'IMAGE'
  | 'HIGHLIGHTS' // This is a special page type for the highlights page

interface Label {
  name: string
}

type HighlightType = 'HIGHLIGHT' | 'NOTE' | 'REDACTION'

interface Highlight {
  id: string
  quote: string | null
  annotation: string | null
  patch: string | null
  updatedAt: string | null
  labels: Label[] | null
  type: HighlightType
  highlightPositionPercent: number | null
  color: string | null
  highlightPositionAnchorIndex: number | null
}

interface Node {
  id: string
  title: string
  siteName: string | null
  originalArticleUrl: string | null
  author: string | null
  description: string | null
  slug: string
  labels: Label[] | null
  highlights: Highlight[] | null
  updatedAt: string | null
  savedAt: string
  pageType: PageType
  content: string | null
  publishedAt: string | null
  url: string
  image: string | null
  readAt: string | null
  wordsCount: number | null
  readingProgressPercent: number
  isArchived: boolean
  archivedAt: string | null
  contentReader: string | null
}

interface PageInfo {
  hasNextPage: boolean
  hasPreviousPage: boolean
  startCursor: string | null
  endCursor: string | null
  totalCount: number | null
}

export interface SearchParameters {
  after?: string
  first?: number
  format?: string
  includeContent?: boolean
  query?: string
}

export interface SearchResponse {
  edges: {
    node: Node
  }[]
  pageInfo: PageInfo
}

const UpdatesSinceQuery = graphql(`
  query UpdatesSince($since: Date!) {
    updatesSince(since: $since) {
      __typename
      ... on UpdatesSinceSuccess {
        edges {
          cursor
          itemID
          updateReason
          node {
            id
            title
            siteName
            originalArticleUrl
            author
            description
            slug
            labels {
              name
              color
              createdAt
              id
              internal
              source
              description
            }
            highlights {
              id
              quote
              annotation
              patch
              updatedAt
              labels {
                name
                color
                createdAt
                id
                internal
                source
                description
              }
              type
              highlightPositionPercent
              color
              highlightPositionAnchorIndex
              prefix
              suffix
              createdByMe
              createdAt
            }
            updatedAt
            savedAt
            pageType
            content
            publishedAt
            url
            image
            readAt
            wordsCount
            readingProgressPercent
            isArchived
            archivedAt
            contentReader
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
          totalCount
        }
      }
      ... on UpdatesSinceError {
        errorCodes
      }
    }
  }
`)

export interface UpdatesSinceParameters {
  since: string
}

export interface UpdatesSinceResponse {
  edges: {
    node: Node | null
  }[]
  pageInfo: PageInfo
}

export class Omnivore {
  _client: Client

  constructor(endpoint: string, authToken: string) {
    this._client = new Client({
      url: `${endpoint}/api/graphql`,
      exchanges: [fetchExchange],
      fetchOptions: () => ({
        headers: {
          Authorization: authToken,
        },
      }),
    })
  }
  // TODO-1: Implement a generic method to handle the query and mutation
  // TODO-2: Implement a generic method to handle the response and error

  async search(params: SearchParameters): Promise<SearchResponse> {
    const { data, error } = await this._client
      .query(SearchQuery, params)
      .toPromise()
    if (error) {
      console.error('Search error:', error)
      throw error
    }

    if (!data) {
      const error = new Error('No data returned from search query')
      console.error(error)
      throw error
    }

    if (data.search.__typename === 'SearchError') {
      throw new Error(`Search error: ${data.search.errorCodes.join(', ')}`)
    }

    return data.search
  }

  async updatesSince(
    params: UpdatesSinceParameters,
  ): Promise<UpdatesSinceResponse> {
    const { data, error } = await this._client
      .query(UpdatesSinceQuery, params)
      .toPromise()
    if (error) {
      console.error('UpdatesSince error:', error)
      throw error
    }

    if (!data) {
      const error = new Error('No data returned from updatesSince query')
      console.error(error)
      throw error
    }

    if (data.updatesSince.__typename === 'UpdatesSinceError') {
      throw new Error(
        `UpdatesSince error: ${data.updatesSince.errorCodes.join(', ')}`,
      )
    }

    return data.updatesSince
  }
}
