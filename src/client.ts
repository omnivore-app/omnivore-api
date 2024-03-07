import { Client, fetchExchange } from 'urql'
import { buildOmnivoreError } from './errors'
import {
  DeleteMutation,
  SearchQuery,
  UpdatesSinceQuery,
  saveByURLMutation,
} from './graphql'

export interface ClientOptions {
  authToken: string
  baseUrl?: string
  timeoutMs?: number
}

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
      url: `${clientOptions.baseUrl || 'https://api-prod.omnivore.app'}/api/graphql`,
      exchanges: [fetchExchange],
      fetchOptions: () => ({
        headers: {
          Authorization: clientOptions.authToken,
        },
        timeout: clientOptions.timeoutMs || 0,
      }),
    })
  }

  // Omnivore API methods
  public readonly items = {
    // search for items
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

    // get updates since a given date
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

    // delete an item
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

    // save an item by URL
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
