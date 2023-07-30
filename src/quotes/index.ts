import { Base, PaginationOptions} from "../base";
import { QuotesList, Quote } from "./types";
import { buildQueryParams } from "../utils";

/**
 * A class that provides methods for interacting with quote resources.
 */
export class Quotes extends Base {
  /**
     * Retrieves a quote by its ID.
     * @param {string} id - The ID of the quote to retrieve.
     * @returns {Promise<Quote>} A promise that resolves to the quote object.
     */
  getQuoteById(id: string): Promise<Quote> {
    const resourceName = this.getResourceName();
    return this.request(`/${resourceName}/${id}`);
  }

  /**
   * Retrieves a list of quotes.
   * @param {PaginationOptions} options - An optional object specifying pagination options.
   * @returns {Promise<QuotesList>} A promise that resolves to the list of quotes.
   */
  getQuotes(options?: PaginationOptions): Promise<QuotesList> {
    const resourceName = this.getResourceName();
    const queryParams = buildQueryParams(options);
    return this.request(`/${resourceName}${queryParams}`);
  }

   /**
   * Returns the resource name for quotes.
   * @returns {string} The resource name.
   * @protected
   */
   protected getResourceName(): string {
    return "quote";
  }
}