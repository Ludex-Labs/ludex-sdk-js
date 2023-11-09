export const queryString = <T>(filter: T): string => {
  const query = Object.entries(filter)
    .filter(([_, value]) => value !== undefined)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  return query;
};
