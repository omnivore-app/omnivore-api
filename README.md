# Omnivore API

[Omnivore](https://omnivore.app) API Client Library for Node.js

![Build status](https://github.com/omnivore-app/omnivore-api/actions/workflows/ci.yml/badge.svg)

## Installation

```bash
npm install @omnivore-app/api
```

## Usage

> Create an [API key](https://omnivore.app/settings/api) and use it to authenticate requests to the Omnivore API.

Import the `Omnivore` class and create a new instance with your **API Key** and **Base URL**. Then you can use the instance to make requests to the Omnivore API.

```javascript
import { Omnivore } from '@omnivore-app/api'

const omnivore = new Omnivore({
  authToken: 'your api key',
  baseUrl: 'https://api-prod.omnivore.app',
})

const items = await omnivore.items.search({
  // ...
})
```

## API

Currently, the library supports the following API methods:

### `items.search`

Search for items.

### Request

```typescript
interface SearchItemParameters {
  after?: string
  first?: number
  format?: string
  includeContent?: boolean
  query?: string
}
```

### Response

```typescript
export interface SearchItemResponse {
  edges: {
    node: Node
  }[]
  pageInfo: PageInfo
}
```

### `items.updates`

Get updates for items.

### Request

```typescript
export interface ItemUpdatesRequest {
  since: string
}
```

### Response

```typescript
export interface ItemUpdatesResponse {
  edges: {
    itemID: string
    updateReason: 'CREATED' | 'UPDATED' | 'DELETED'
    node: Node | null
  }[]
  pageInfo: PageInfo
}
```

### `items.saveByUrl`

Save an item by URL.

### Request

```typescript
export interface SaveItemByUrlParameters {
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
```

### Response

```typescript
export interface SaveItemByUrlResponse {
  id: string
}
```

### `items.delete`

Delete an item.

### Request

```typescript
export interface DeleteItemParameters {
  id: string
}
```

### Response

```typescript
export interface DeleteItemResponse {
  id: string
}
```

> For more API methods, check the [API documentation](https://docs.omnivore.app/integrations/api.html).

## Error handling

The library will throw an error if the request fails. You can catch the error and handle it as needed.

```javascript
try {
  const items = await omnivore.items.search({
    // ...
  })
} catch (error: unknown) {
  if (isOmnivoreError(error)) {
    switch (error.code) {
      case OmnivoreErrorCode.GraphQLError:
        // Handle GraphQL error
      case OmnivoreErrorCode.NetworkError:
        // Handle network error
      default:
        // Handle other errors
    }
  }
}
```

## Client options

The `Omnivore` class accepts an options object with the following properties:

| Option      | Default value                     | Type     | Description                                                                          |
| ----------- | --------------------------------- | -------- | ------------------------------------------------------------------------------------ |
| `authToken` | `undefined`                       | `string` | API key required for authentication.                                                 |
| `baseUrl`   | `"https://api-prod.omnivore.app"` | `string` | The base URL for sending API requests. This can be changed to a local-hosted server. |
| `timeoutMs` | `0`                               | `number` | Number of milliseconds to wait before timeout.                                       |

## Requirements

- Node.js 18 or later

## License

This library is licensed under BSD-3-Clause. See [LICENSE](LICENSE) for more details.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Support

For support, please open an issue in this repository, [email](mailto:feedback@omnivore.app) us or join our [Discord server](https://discord.gg/h2z5rppzz9).
