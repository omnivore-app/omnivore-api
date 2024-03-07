import { Client, fetchExchange } from 'urql'
import { buildOmnivoreError } from './errors'
import { graphql } from './graphql'

export interface ClientOptions {
  authToken: string
  baseUrl: string
  timeoutMs?: number
}

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
  private client: Client

  constructor(clientOptions: ClientOptions) {
    this.client = new Client({
      url: `${clientOptions.baseUrl}/api/graphql`,
      exchanges: [fetchExchange],
      fetchOptions: () => ({
        headers: {
          Authorization: clientOptions.authToken,
        },
        timeout: clientOptions.timeoutMs || 0,
      }),
    })
  }

  public readonly items = {
    search: async (params: SearchParameters): Promise<SearchResponse> => {
      const { data, error } = await this.client
        .query(SearchQuery, params)
        .toPromise()

      const search = data?.search
      if (error || !search || search.__typename === 'SearchError') {
        const err = buildOmnivoreError(search, error)
        console.error('Search error', err)
        throw err
      }

      return search
    },

    updates: async (since: string): Promise<UpdatesSinceResponse> => {
      const { data, error } = await this.client
        .query(UpdatesSinceQuery, { since })
        .toPromise()

      const updatesSince = data?.updatesSince
      if (
        error ||
        !updatesSince ||
        updatesSince.__typename === 'UpdatesSinceError'
      ) {
        const err = buildOmnivoreError(updatesSince, error)
        console.error('UpdatesSince error', err)
        throw err
      }

      return updatesSince
    },

    delete: async (id: string): Promise<DeleteResponse> => {
      const { data, error } = await this.client
        .mutation(DeleteMutation, { input: { articleID: id, bookmark: false } })
        .toPromise()

      const deleteArticle = data?.setBookmarkArticle
      if (
        error ||
        !deleteArticle ||
        deleteArticle.__typename === 'SetBookmarkArticleError'
      ) {
        const err = buildOmnivoreError(deleteArticle, error)
        console.error('Delete error', err)
        throw err
      }

      return { id: deleteArticle.bookmarkedArticle.id }
    },

    saveByUrl: async (
      params: SaveByURLParameters,
    ): Promise<SaveByURLResponse> => {
      const { data, error } = await this.client
        .mutation(saveByURLMutation, {
          input: {
            ...params,
            source: params.source || 'API-Client',
            clientRequestId: params.clientRequestId || '',
          },
        })
        .toPromise()

      const saveUrl = data?.saveUrl
      if (error || !saveUrl || saveUrl.__typename === 'SaveError') {
        const err = buildOmnivoreError(saveUrl, error)
        console.error('SaveByURL error', err)
        throw err
      }

      return { id: saveUrl.clientRequestId }
    },
  }
}
