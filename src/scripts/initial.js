import getWeatherData from "./get-weather-data";
import quotes from "./quotes";
import loader from "./loader";

export const cityCountryName = document.querySelector(".city-country-name");
export const latitudeLongitude = document.querySelector(".latitude-longitude");
export const quote = document.querySelector(".quote");
export const temperature = document.querySelector(".temperature");
export const windVal = document.querySelector(".wind-value");
export const humidityVal = document.querySelector(".humidity-value");
export const rainVal = document.querySelector(".rain-value");
export const windDirectionValue = document.querySelector(
  ".wind-direction-value",
);

export default async function initial() {
  loader();

  const geoData = await getWeatherData("León, Nicaragua");

  loader();

  cityCountryName.textContent = `${geoData.name}, ${geoData.country}`;
  latitudeLongitude.textContent = `${geoData.weatherData.latitude}° N, ${geoData.weatherData.longitude}° W`;
  temperature.innerHTML = `${geoData.weatherData.current.temperature_2m}<span>${geoData.weatherData.current_units.temperature_2m}</span>`;
  windVal.textContent = `${geoData.weatherData.current.wind_speed_10m} ${geoData.weatherData.current_units.wind_speed_10m}`;
  windDirectionValue.textContent = `${geoData.weatherData.current.wind_direction_10m}${geoData.weatherData.current_units.wind_direction_10m}`;
  humidityVal.textContent = `${geoData.weatherData.current.relative_humidity_2m}${geoData.weatherData.current_units.relative_humidity_2m}`;
  rainVal.textContent = `${geoData.weatherData.current.rain}${geoData.weatherData.current_units.rain}`;
  quote.textContent = quotes(geoData.weatherData.current.temperature_2m);
}
