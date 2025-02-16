export default async function getGeocodingData(placeName) {
  try {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${placeName}&count=10&language=en&format=json`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();

    if (!Object.hasOwn(data, "results")) {
      throw new Error("No results found");
    }

    const dr = data.results[0];

    return {
      name: dr.name,
      country: dr.country,
      latitude: dr.latitude,
      longitude: dr.longitude,
    };
  } catch (error) {
    console.error(error.message);
  }
}
