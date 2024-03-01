import { graphql } from './graphql'
import { Client, fetchExchange } from 'urql'

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
          cursor
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

export interface SearchParameters {
  after?: string
  first?: number
  format?: string
  includeContent?: boolean
  query?: string
}

export interface SearchResponse {
  edges: {
    node: {
      id: string
      title: string
      siteName: string | null
      originalArticleUrl: string | null
      savedAt: string
    }
    cursor: string
  }[]
  pageInfo: {
    hasNextPage: boolean
  }
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
}
