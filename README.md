# Lord of the Rings API SDK

This SDK provides a simple interface to interact with the [Lord of the Rings API](https://the-one-api.dev/v2/). It currently only includes methods to retrieve information about movies and quotes ONLY.

## Installation

To install the SDK, run:

```bash
yarn add @layoolar/lotr_sdk
```

or 

```
npm i @layoolar/lotr_sdk
```

## Build

To build the SDK, run:

```bash
yarn build
```
or

```bash
npm run build
```

## Tests

To execute the tests, run:

```bash
yarn test
```
or 

```
npm run test
```

## Usage

```
Import LordOfTheRingsSDK from @layoolar/lotr_sdk;


const apiKey = "YOUR_API_KEY";
const lotrClient = new LordOfTheRingsSDK({
  apiKey: apiKey,
});
```
*Note: Replace "YOUR_API_KEY" with your actual API key!*

### List All Movies

```typescript
const movies = await lotrClient.getMovies();
```

### Get Single Movie

```typescript
const movieId = '5cd95395de30eff6ebccde5c';
const movie = await lotrClient.getMovieById(movieId);
```

### Get Movie Quotes

```typescript
const movieId = '5cd95395de30eff6ebccde5c';
const quotes = await lotrClient.getMovieQuotes(movieId);
```

### Get Quotes

```typescript
const quotes = await lotrClient.getQuotes();
```

### Get Quote
```typescript
const quoteId = '5cd96e05de30eff6ebccde56';
const quote = await lotrClient.getQuotesById(quoteId);
```

## Handling Errors

The SDK throws an `APIError` when an API call fails. You can handle errors by wrapping the method calls in try-catch blocks:

```typescript
try {
  const movies = await lotrClient.getMovies();
  console.log(movies);
} catch (error) {
  console.error('Error fetching movies:', error.message);
}
```

## Paginating Results

Pagination is supported for results that return lists of movies or quotes. To paginate the results, you can use the offset and limit query parameters when calling the relevant SDK methods. To paginate, create an object with `offset` and `limit` parameters (integers) and pass it to one of the following functions:

- `getMovies()`
- `getMovieQuotes()`
- `getQuotes()`

Example:

```typescript
const options = { limit: 2, offset: 0 };
const movies = await lotrClient.getMovies(options);
```

## License

This SDK is released under the MIT License. See the [LICENSE](LICENSE) file for more details.
