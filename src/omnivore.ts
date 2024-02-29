import { GraphQLClient } from 'graphql-request'

export class Omnivore {
  _client: GraphQLClient

  constructor(endpoint: string, authToken: string) {
    this._client = new GraphQLClient(endpoint, {
      headers: {
        Authorization: authToken,
      },
    })
  }

  async query(queryString, variables) {
    try {
      const data = await this._client.request(queryString, variables)
      return data
    } catch (error) {
      throw new Error(`GraphQL query error: ${error.message}`)
    }
  }

  async mutation(mutationString, variables) {
    try {
      const data = await this._client.request(mutationString, variables)
      return data
    } catch (error) {
      throw new Error(`GraphQL mutation error: ${error.message}`)
    }
  }
}
