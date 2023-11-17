/**
 * queryString converts a filter object into a query string
 * @param filter filter object
 * @returns query string
 */
export const queryString = <T>(filter?: T): string => {
  // if filter is undefined or null, return empty string
  if (!filter) {
    return "";
  }

  const query = Object.entries(filter)
    .filter(([_, value]) => value !== undefined)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  return `?${query}`;
};
