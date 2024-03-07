import { CombinedError } from 'urql'

export enum OmnivoreErrorCode {
  GraphQLError = 'GRAPHQL_ERROR',
  NetworkError = 'NETWORK_ERROR',
  UnknownError = 'UNKNOWN_ERROR',
}

abstract class OmnivoreErrorBase<Code extends OmnivoreErrorCode> extends Error {
  abstract code: Code
}

class GraphQLError extends OmnivoreErrorBase<OmnivoreErrorCode> {
  code = OmnivoreErrorCode.GraphQLError
  constructor(public messages?: string[]) {
    super(messages?.join(', '))
  }
}

class NetworkError extends OmnivoreErrorBase<OmnivoreErrorCode> {
  code = OmnivoreErrorCode.NetworkError
  constructor(public message: string) {
    super(message)
  }
}

class UnknownError extends OmnivoreErrorBase<OmnivoreErrorCode> {
  code = OmnivoreErrorCode.UnknownError
  constructor(public message: string) {
    super(message)
  }
}

export type OmnivoreError = GraphQLError | NetworkError | UnknownError

export const buildOmnivoreError = (
  data?: { __typename: string; errorCodes?: string[] },
  error?: CombinedError,
): OmnivoreError => {
  if (error) {
    if (error.graphQLErrors.length > 0) {
      return new GraphQLError(error.graphQLErrors.map((e) => e.message))
    }

    if (error.networkError) {
      return new NetworkError(error.networkError.message)
    }
  }

  if (!data) {
    return new UnknownError('No data returned')
  }

  return new GraphQLError(data.errorCodes)
}
