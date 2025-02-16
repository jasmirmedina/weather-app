export default function domInit() {
  const app = createElement("div", "app");

  const searchBar = createSearchBar();
  const main = createElement("div", "main");
  const info = createInfo();
  const weatherInfo = createWeatherInfo();
  const quoteWrapper = createQuote();

  main.appendChild(info);
  main.appendChild(weatherInfo);
  main.appendChild(quoteWrapper);

  app.appendChild(searchBar);
  app.appendChild(main);

  document.body.appendChild(app);
}

function createElement(tag, className) {
  const element = document.createElement(tag);

  if (className) {
    element.classList.add(className);
  }

  return element;
}

function createSearchBar() {
  const searchBar = createElement("div", "search-bar");

  const input = createElement("input", "search-bar-input");
  input.type = "text";

  const buttonWrapper = createElement("div");
  const button = createElement("button", "search-bar-btn");

  button.type = "button";
  button.textContent = "Search";

  buttonWrapper.appendChild(button);
  searchBar.appendChild(input);
  searchBar.appendChild(buttonWrapper);

  return searchBar;
}

function createInfo() {
  const info = createElement("div", "info");

  const placeInfo = createElement("div", "place-info");
  const cityCountryName = createElement("p", "city-country-name");
  const latitudeLongitude = createElement("p", "latitude-longitude");

  placeInfo.appendChild(cityCountryName);
  placeInfo.appendChild(latitudeLongitude);

  const temperature = createElement("p", "temperature");

  info.appendChild(placeInfo);
  info.appendChild(temperature);

  return info;
}

function createWeatherInfo() {
  const weatherInfo = createElement("div", "weather-info");

  const weatherItems = [
    { label: "Wind", icon: "wind", value: "" },
    { label: "Wind Dirctn", icon: "wind-arrow-down", value: "" },
    { label: "Humidity", icon: "cloud-fog", value: "" },
    { label: "Rain", icon: "cloud-rain", value: "" },
  ];

  weatherItems.forEach((item) => {
    const weatherItem = createWeatherInfoItem(
      item.label,
      item.icon,
      item.value,
    );

    weatherInfo.appendChild(weatherItem);
  });

  return weatherInfo;
}

function createWeatherInfoItem(label, icon, value) {
  const item = createElement("div", label.toLowerCase().replace(/\s+/g, "-"));

  const iconWrapper = createElement("div");

  const iconElement = createElement("i");
  iconElement.setAttribute("data-lucide", icon);

  const labelElement = createElement("p");
  labelElement.textContent = label;

  iconWrapper.appendChild(iconElement);
  iconWrapper.appendChild(labelElement);

  const valueElement = createElement(
    "p",
    `${label.toLowerCase().replace(/\s+/g, "-")}-value`,
  );

  valueElement.textContent = value;

  item.appendChild(iconWrapper);
  item.appendChild(valueElement);

  return item;
}

function createQuote() {
  const quoteWrapper = createElement("div");
  const quote = createElement("p", "quote");

  quote.textContent = "";

  quoteWrapper.appendChild(quote);

  return quoteWrapper;
}
