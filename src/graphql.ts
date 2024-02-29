import { initGraphQLTada } from 'gql.tada'
import type { introspection } from './graphql-env.d.ts'

export const graphql = initGraphQLTada<{
  introspection: introspection

  scalars: {
    Date: any
    JSON: any
  }
}>()

export { readFragment } from 'gql.tada'
export type { FragmentOf, ResultOf, VariablesOf } from 'gql.tada'
