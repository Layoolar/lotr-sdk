import { Movies } from "../../src/movies";
import { expect, describe, it, beforeAll, afterEach } from '@jest/globals';
import fetch from "isomorphic-unfetch";

jest.mock("isomorphic-unfetch", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("Movies API", () => {
  let movies: Movies;

  beforeAll(() => {
    movies = new Movies({ apiKey: "112z4pHuNs5ablGahCgi50Fa" });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("getMovieById", () => {
    it("should return a movie object", async () => {
      const mockMovie = { id: "1", title: "The Fellowship of the Ring" };

      // Mocking the fetch response
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(mockMovie) as () => Promise<any>,
      });

      const result = await movies.getMovieById("1");

      // Expectations
      expect(fetch).toHaveBeenCalledWith(
        "https://the-one-api.dev/v2/movie/1",
        expect.objectContaining({
          headers: expect.objectContaining({
            Authorization: "Bearer 112z4pHuNs5ablGahCgi50Fa",
          }),
        })
      );
      expect(result).toEqual(mockMovie);
    });

    it("should throw an error if the response is not ok", async () => {
      // Mocking the fetch response
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        statusText: "Not Found",
      });

      // Expecting the promise to reject with an error
      await expect(movies.getMovieById("1")).rejects.toThrow("Not Found");
    });
  });

  describe("getMovies", () => {
    it("should return a list of movies", async () => {
      const mockMoviesList = [{ id: "1", title: "The Fellowship of the Ring" }];

      // Mocking the fetch response
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(mockMoviesList) as () => Promise<any>,
      });

      const result = await movies.getMovies();

      // Expectations
      expect(fetch).toHaveBeenCalledWith(
        "https://the-one-api.dev/v2/movie",
        expect.objectContaining({
          headers: expect.objectContaining({
            Authorization: "Bearer 112z4pHuNs5ablGahCgi50Fa",
          }),
        })
      );
      expect(result).toEqual(mockMoviesList);
    });

    it("should throw an error if the response is not ok", async () => {
      // Mocking the fetch response
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        statusText: "Internal Server Error",
      });

      // Expecting the promise to reject with an error
      await expect(movies.getMovies()).rejects.toThrow("Internal Server Error");
    });
  });

  describe("getMovieQuotes", () => {
    it("should return a list of movie quotes", async () => {
      const movieId = "1";
      const mockQuotesList = [{ id: "1", quote: "You shall not pass!" }];

      // Mocking the fetch response
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(mockQuotesList) as () => Promise<any>,
      });

      const result = await movies.getMovieQuotes(movieId);

      // Expectations
      expect(fetch).toHaveBeenCalledWith(
        `https://the-one-api.dev/v2/movie/${movieId}/quote`,
        expect.objectContaining({
          headers: expect.objectContaining({
            Authorization: "Bearer 112z4pHuNs5ablGahCgi50Fa",
          }),
        })
      );
      expect(result).toEqual(mockQuotesList);
    });

    it("should throw an error if the response is not ok", async () => {
      const movieId = "1";
      // Mocking the fetch response
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        statusText: "Unauthorized",
      });

      await expect(movies.getMovieQuotes(movieId)).rejects.toThrow("Unauthorized");
    });
  });
});
