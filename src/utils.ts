import { PaginationOptions } from "./base";

/**
 * Applies mixins to a derived class by copying properties from the base classes.
 * @param {any} derivedCtor - The derived class constructor.
 * @param {any[]} baseCtors - An array of base class constructors.
 */
export function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name)
      );
    });
  });
}

/**
 * Builds query parameters from the pagination options.
 * @param {PaginationOptions} options - The pagination options.
 * @returns {string} The query parameters string.
 */
export function buildQueryParams(options?: PaginationOptions): string {
  const { limit, page, offset } = options || {};

  const queryParams = [];

  if (limit !== undefined) {
    queryParams.push(`limit=${limit}`);
  }

  if (page !== undefined) {
    queryParams.push(`page=${page}`);
  }

  if (offset !== undefined) {
    queryParams.push(`offset=${offset}`);
  }
  
  return queryParams.length > 0 ? `?${queryParams.join("&")}` : "";
}

