import getHumanDate from './getHumanDate';

function displayWeather(myJson) {
  console.log(myJson);
  // Validate file
  if (myJson === null || myJson === undefined) {
    return;
  }
  // Display weather values
  // Left Panel
  const $condition = document.querySelector('#condition');
  $condition.textContent = myJson.weather[0].description;
  const $place = document.querySelector('#place');
  $place.textContent = myJson.name;
  const unixTime = myJson.dt;
  const myDate = getHumanDate(unixTime);
  const $dateOfFetch = document.querySelector('#date');
  $dateOfFetch.textContent = `${myDate.day} ${myDate.month} ${myDate.date}`;
  const $hour = document.querySelector('#currentHour');
  $hour.textContent = `${myDate.hour}:${myDate.minute}`;
  const $currentTemp = document.querySelector('#currentTemp');
  $currentTemp.textContent = `${myJson.main.temp}°C`;
  const $tempIcon = document.querySelector('#tempIcon');
  // delete icon if $tempIcon already has one
  if ($tempIcon.firstChild) {
    $tempIcon.removeChild($tempIcon.firstChild);
  }
  const iconRef = myJson.weather[0].icon;
  const tempIcon = new Image();
  tempIcon.id = 'mainIcon';
  tempIcon.src = `http://openweathermap.org/img/wn/${iconRef}.png`;
  $tempIcon.append(tempIcon);
  // Right panel
  const $feelsLike = document.querySelector('#feelsLike');
  $feelsLike.textContent = `${myJson.main.feels_like}°C`;
  const minTemp = document.querySelector('#minTempValue');
  minTemp.textContent = `${myJson.main.temp_min}°C`;
  const maxTemp = document.querySelector('#maxTempValue');
  maxTemp.textContent = `${myJson.main.temp_max}°C`;
  const $humidity = document.querySelector('#humidityValue');
  $humidity.textContent = `${myJson.main.humidity}%`;
  const $windSpeed = document.querySelector('#windSpeedValue');
  $windSpeed.textContent = `${myJson.wind.speed} Km/h`;
}
export default displayWeather;
