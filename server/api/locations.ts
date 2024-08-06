export default defineEventHandler(async (event) => {
  const queryParams = getQuery(event);
  const url = process.env.VITE_LOCATION_URL;
  const apiKey = process.env.VITE_API_KEY;
  const query = `?apikey=${apiKey}&q=${queryParams.keyword}`;

  try {
    const response = await fetch(url + query);
    const result = await response.json();
    if (Array.isArray(result)) return result;
    return false;
  } catch (e) {
    return false;
  }
});
