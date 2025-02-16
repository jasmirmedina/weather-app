import getGeocodingData from "./get-geocoding-data";

export default async function getWeatherData(placeName) {
  try {
    const geoData = await getGeocodingData(placeName);

    if (!geoData) throw new Error("Failed to fetch weather data");

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${geoData.latitude}&longitude=${geoData.longitude}&current=temperature_2m,relative_humidity_2m,rain,wind_speed_10m,wind_direction_10m`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();

    return { name: geoData.name, country: geoData.country, weatherData: data };
  } catch (error) {
    console.error(error.message);
  }
}
