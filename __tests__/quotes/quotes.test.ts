import { Quotes } from "../../src/quotes";
import { expect, describe, it, beforeAll, afterEach } from '@jest/globals';
import fetch from "isomorphic-unfetch";

// Mocking the fetch function
jest.mock("isomorphic-unfetch", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("Quotes API", () => {
  let quotes: Quotes;

  beforeAll(() => {
    quotes = new Quotes({ apiKey: "4pHuNs5ablGahCgi50Fa" });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("getQuoteById", () => {
    it("should return a quote object", async () => {
      const mockQuote = { id: "1", text: "One ring to rule them all" };

      // Mocking the fetch response
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(mockQuote),
      });

      const result = await quotes.getQuoteById("1");

      // Expectations
      expect(fetch).toHaveBeenCalledWith(
        "https://the-one-api.dev/v2/quote/1",
        expect.objectContaining({
          headers: expect.objectContaining({
            Authorization: "Bearer 4pHuNs5ablGahCgi50Fa",
          }),
        })
      );
      expect(result).toEqual(mockQuote);
    });

    it("should throw an error if the response is not ok", async () => {
      // Mocking the fetch response
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        statusText: "Not Found",
      });

      // Expecting the promise to reject with an error
      await expect(quotes.getQuoteById("1")).rejects.toThrow("Not Found");
    });
  });

  describe("getQuotes", () => {
    it("should return a list of quotes", async () => {
      const mockQuotes = [
        { id: "1", text: "One ring to rule them all" },
        { id: "2", text: "You shall not pass" },
      ];

      // Mocking the fetch response
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(mockQuotes),
      });

      const result = await quotes.getQuotes();

      // Expectations
      expect(fetch).toHaveBeenCalledWith(
        "https://the-one-api.dev/v2/quote",
        expect.objectContaining({
          headers: expect.objectContaining({
            Authorization: "Bearer 4pHuNs5ablGahCgi50Fa",
          }),
        })
      );
      expect(result).toEqual(mockQuotes);
    });

    it("should throw an error if the response is not ok", async () => {
      // Mocking the fetch response
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        statusText: "Not Found",
      });

      // Expecting the promise to reject with an error
      await expect(quotes.getQuotes()).rejects.toThrow("Not Found");
    });
  });
});
