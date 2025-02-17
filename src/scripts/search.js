import getWeatherData from "./get-weather-data";
import loader from "./loader";
import quotes from "./quotes";

import {
  cityCountryName,
  humidityVal,
  latitudeLongitude,
  quote,
  rainVal,
  temperature,
  windDirectionValue,
  windVal,
} from "./initial";

const searchBarInput = document.querySelector(".search-bar-input");
const searchBatBtn = document.querySelector(".search-bar-btn");

async function searchBar() {
  const sValue = searchBarInput.value.trim();

  loader();

  const geoData = await getWeatherData(sValue);

  loader();

  if (sValue.length >= 2 && geoData) {
    cityCountryName.textContent = `${geoData.name}, ${geoData.country}`;
    latitudeLongitude.textContent = `${geoData.weatherData.latitude}° N, ${geoData.weatherData.longitude}° W`;
    temperature.innerHTML = `${geoData.weatherData.current.temperature_2m}<span>${geoData.weatherData.current_units.temperature_2m}</span>`;
    windVal.textContent = `${geoData.weatherData.current.wind_speed_10m} ${geoData.weatherData.current_units.wind_speed_10m}`;
    windDirectionValue.textContent = `${geoData.weatherData.current.wind_direction_10m}${geoData.weatherData.current_units.wind_direction_10m}`;
    humidityVal.textContent = `${geoData.weatherData.current.relative_humidity_2m}${geoData.weatherData.current_units.relative_humidity_2m}`;
    rainVal.textContent = `${geoData.weatherData.current.rain}${geoData.weatherData.current_units.rain}`;
    quote.textContent = quotes(geoData.weatherData.current.temperature_2m);
  } else {
    alert("No results found");
  }
}

export default function search() {
  searchBatBtn.addEventListener("click", searchBar);

  searchBarInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();

      searchBar();
    }
  });
}
