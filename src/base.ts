import * as fetchImport from 'isomorphic-unfetch'
const fetch = (fetchImport.default || fetchImport) as typeof fetchImport.default

/**
 * Configuration object for the Base class.
 */
type Config = {
  apiKey: string;
  baseUrl?: string;
};

/**
 * An abstract base class that provides common functionality for API resources.
 */
export abstract class Base {
  private apiKey: string;
  private baseUrl: string;

  /**
   * Creates an instance of the Base class.
   * @param {Config} config - The configuration object containing the API key and optional base URL.
   */
  constructor(config: Config) {
    this.apiKey = config.apiKey;
    this.baseUrl = config.baseUrl || "https://the-one-api.dev/v2";
  }

  /**
   * Makes a request to the API endpoint.
   * @param {string} endpoint - The endpoint URL.
   * @param {RequestInit} options - Additional options for the request.
   * @returns {Promise<T>} A promise that resolves to the response data.
   * @protected
   */
  protected request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${this.apiKey}`
    };
    const config = {
      ...options,
      headers,
    };

    return fetch(url, config).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    });
  }
}


/**
 * Options for pagination.
 */
export type PaginationOptions = {
  limit?: number;
  page?: number;
  offset?: number;
};

