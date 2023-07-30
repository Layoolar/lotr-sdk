import { Base, PaginationOptions} from "../base";
import { MoviesList, Movie } from "./types";
import { QuotesList } from "../quotes/types"
import { buildQueryParams } from "../utils";

/**
 * A class that provides methods for interacting with movie resources.
 */
export class Movies extends Base {
   /**
   * Retrieves a movie by its ID.
   * @param {string} id - The ID of the movie to retrieve.
   * @returns {Promise<Movie>} A promise that resolves to the movie object.
   */
  getMovieById(id: string): Promise<Movie> {
    const resourceName = this.getResource();
    return this.request(`/${resourceName}/${id}`);
  }

  /**
   * Retrieves a list of movies.
   * @param {PaginationOptions} options - An optional object specifying pagination options.
   * @returns {Promise<MoviesList>} A promise that resolves to the list of movies.
   */
  getMovies(options?: PaginationOptions): Promise<MoviesList> {
    const resourceName = this.getResource();
    const queryParams = buildQueryParams(options);
    return this.request(`/${resourceName}${queryParams}`);
  }

  /**
   * Retrieves a list of quotes for a specific movie.
   * @param {string} id - The ID of the movie.
   * @param {PaginationOptions} options - An optional object specifying pagination options.
   * @returns {Promise<QuotesList>} A promise that resolves to the list of quotes.
   */
  getMovieQuotes(id: string, options?: PaginationOptions): Promise<QuotesList> {
    const resourceName = this.getResource();
    const queryParams = buildQueryParams(options);
    return this.request(`/${resourceName}/${id}/quote`);
  }

  
  /**
   * Returns the resource name for movies.
   * @returns {string} The resource name.
   * @protected
   */
  protected getResource(): string {
    return "movie";
  }
}