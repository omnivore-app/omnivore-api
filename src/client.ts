import { Client, fetchExchange } from 'urql'
import { graphql } from './graphql'

const LabelFragment = graphql(`
  fragment LabelFragment on Label @_unmask {
    name
    color
    createdAt
    id
    internal
    source
    description
  }
`)

const HighlightFragment = graphql(
  `
    fragment HighlightFragment on Highlight @_unmask {
      id
      quote
      annotation
      patch
      updatedAt
      labels {
        ...LabelFragment
      }
      type
      highlightPositionPercent
      color
      highlightPositionAnchorIndex
      prefix
      suffix
      createdAt
    }
  `,
  [LabelFragment],
)

const SearchItemFragment = graphql(
  `
    fragment SearchItemFragment on SearchItem @_unmask {
      id
      title
      siteName
      originalArticleUrl
      author
      description
      slug
      labels {
        ...LabelFragment
      }
      highlights {
        ...HighlightFragment
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
  `,
  [LabelFragment, HighlightFragment],
)

const PageInfoFragment = graphql(`
  fragment PageInfoFragment on PageInfo @_unmask {
    hasNextPage
    hasPreviousPage
    startCursor
    endCursor
    totalCount
  }
`)

const SearchQuery = graphql(
  `
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
              ...SearchItemFragment
            }
          }
          pageInfo {
            ...PageInfoFragment
          }
        }
        ... on SearchError {
          errorCodes
        }
      }
    }
  `,
  [SearchItemFragment, PageInfoFragment],
)

const UpdatesSinceQuery = graphql(
  `
    query UpdatesSince($since: Date!) {
      updatesSince(since: $since) {
        __typename
        ... on UpdatesSinceSuccess {
          edges {
            itemID
            updateReason
            node {
              ...SearchItemFragment
            }
          }
          pageInfo {
            ...PageInfoFragment
          }
        }
        ... on UpdatesSinceError {
          errorCodes
        }
      }
    }
  `,
  [SearchItemFragment, PageInfoFragment],
)

const DeleteMutation = graphql(`
  mutation Delete($input: SetBookmarkArticleInput!) {
    setBookmarkArticle(input: $input) {
      __typename
      ... on SetBookmarkArticleSuccess {
        bookmarkedArticle {
          id
        }
      }
      ... on SetBookmarkArticleError {
        errorCodes
      }
    }
  }
`)

const saveByURLMutation = graphql(`
  mutation SaveByURL($input: SaveUrlInput!) {
    saveUrl(input: $input) {
      __typename
      ... on SaveSuccess {
        clientRequestId
      }
      ... on SaveError {
        errorCodes
      }
    }
  }
`)

export type PageType =
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

export interface Label {
  name: string
}

export type HighlightType = 'HIGHLIGHT' | 'NOTE' | 'REDACTION'

export interface Highlight {
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

export interface Node {
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

export interface PageInfo {
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

export interface UpdatesSinceResponse {
  edges: {
    itemID: string
    updateReason: 'CREATED' | 'UPDATED' | 'DELETED'
    node: Node | null
  }[]
  pageInfo: PageInfo
}

export interface SaveByURLParameters {
  url: string
  clientRequestId?: string
  source?: string
  state?:
    | 'DELETED'
    | 'ARCHIVED'
    | 'CONTENT_NOT_FETCHED'
    | 'FAILED'
    | 'PROCESSING'
    | 'SUCCEEDED'
  timezone?: string
  locale?: string
  folder?: string
  labels?: {
    name: string
    color?: string
    description?: string
  }[]
  publishedAt: string
  savedAt: string
}

export interface DeleteResponse {
  id: string
}

export interface SaveByURLResponse {
  id: string
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
      throw new Error(`Search error: ${error.message}`)
    }

    if (!data) {
      throw new Error('Search error: No data returned')
    }

    if (data.search.__typename === 'SearchError') {
      throw new Error(`Search error: ${data.search.errorCodes.join(', ')}`)
    }

    return data.search
  }

  async updatesSince(since: string): Promise<UpdatesSinceResponse> {
    const { data, error } = await this._client
      .query(UpdatesSinceQuery, { since })
      .toPromise()
    if (error) {
      throw new Error(`UpdatesSince error: ${error.message}`)
    }

    if (!data) {
      throw new Error('UpdatesSince error: No data returned')
    }

    if (data.updatesSince.__typename === 'UpdatesSinceError') {
      throw new Error(
        `UpdatesSince error: ${data.updatesSince.errorCodes.join(', ')}`,
      )
    }

    return data.updatesSince
  }

  async delete(id: string): Promise<DeleteResponse> {
    const { data, error } = await this._client
      .mutation(DeleteMutation, { input: { articleID: id, bookmark: false } })
      .toPromise()
    if (error) {
      throw new Error(`Delete error: ${error.message}`)
    }

    if (!data) {
      throw new Error('Delete error: No data returned')
    }

    if (data.setBookmarkArticle.__typename === 'SetBookmarkArticleError') {
      throw new Error(
        `Delete error: ${data.setBookmarkArticle.errorCodes.join(', ')}`,
      )
    }

    return { id: data.setBookmarkArticle.bookmarkedArticle.id }
  }

  async saveByURL(params: SaveByURLParameters): Promise<SaveByURLResponse> {
    const { data, error } = await this._client
      .mutation(saveByURLMutation, {
        input: {
          ...params,
          source: params.source || 'API-Client',
          clientRequestId: params.clientRequestId || '',
        },
      })
      .toPromise()
    if (error) {
      throw new Error(`SaveByURL error: ${error.message}`)
    }

    if (!data) {
      throw new Error('SaveByURL error: No data returned')
    }

    if (data.saveUrl.__typename === 'SaveError') {
      throw new Error(`SaveByURL error: ${data.saveUrl.errorCodes.join(', ')}`)
    }

    return { id: data.saveUrl.clientRequestId }
  }
}
