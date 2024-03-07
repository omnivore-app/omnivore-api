# Omnivore API

Omnivore API Client Library for Node.js

![Build status](https://github.com/omnivore-app/omnivore-api/actions/workflows/ci.yml/badge.svg)

## Installation

```bash
npm install @omnivore/api
```

## Usage

Import the `Omnivore` class and create a new instance with your `authToken` and `baseUrl`. Then you can use the instance to make requests to the Omnivore API.

```javascript
import { Omnivore } from '@omnivore/api'

const omnivore = new Omnivore({
  authToken: 'your-auth-token',
  baseUrl: 'https://api-prod.omnivore.app',
})

const items = await omnivore.search({
  // ...
})
```

## Error handling

The library will throw an error if the request fails. You can catch the error and handle it as needed.

```javascript
try {
  const items = await omnivore.search({
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
