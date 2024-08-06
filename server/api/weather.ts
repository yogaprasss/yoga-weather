export default defineEventHandler(async (event) => {
  const queryParams = getQuery(event);
  const url = process.env.VITE_WEATHER_URL;
  const apiKey = process.env.VITE_API_KEY;
  const query = `/${queryParams.locationid}?apikey=${apiKey}&details=true`;

  try {
    const response = await fetch(url + query);
    const result = await response.json();
    return result;
  } catch (e) {
    return false;
  }
});
