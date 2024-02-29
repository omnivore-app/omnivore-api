import { graphql } from 'gql.tada'
import { GraphQLClient } from 'graphql-request'

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
            }
            highlights {
              id
              quote
              annotation
              patch
              updatedAt
              labels {
                name
              }
              type
              highlightPositionPercent
              color
              highlightPositionAnchorIndex
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
        }
      }
      ... on SearchError {
        errorCodes
      }
    }
  }
`)

export interface SearchParams {
  after: string
  first: number
  format: string
  includeContent: boolean
  query: string
}

export class Omnivore {
  _client: GraphQLClient

  constructor(endpoint: string, authToken: string) {
    this._client = new GraphQLClient(`${endpoint}/graphql`, {
      headers: {
        Authorization: authToken,
      },
    })
  }

  async search(params: SearchParams) {
    return this._client.request(SearchQuery, params)
  }
}
