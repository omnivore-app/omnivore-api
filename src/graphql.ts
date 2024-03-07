import { initGraphQLTada } from 'gql.tada'
import type { introspection } from './graphql-env.d.ts'

const graphql = initGraphQLTada<{
  introspection: introspection

  scalars: {
    ID: string
    Date: string
    JSON: any
  }
}>()

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

export const SearchQuery = graphql(
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
  `,
  [SearchItemFragment],
)

export const UpdatesSinceQuery = graphql(
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
  `,
  [SearchItemFragment],
)

export const DeleteMutation = graphql(`
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

export const saveByURLMutation = graphql(`
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
