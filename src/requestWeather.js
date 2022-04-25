import displayWeather from './displayWeather';
import dailyForecast from './dailyForecast';
import geoCoder from './geoCoder';
import locationWeatherAPI from './locationWeatherAPI';
import displayDailyForecast from './displayDailyForecast';

async function requestWeather(e) {
  e.preventDefault();
  // Get User Input
  const input = document.querySelector('#userInput');
  const userInput = input.value;
  // Request a latitude and a longitude to the geoCoderAPI for the user input
  const placeData = await geoCoder(userInput);
  // Call OpenWeather API for location info and display it
  const myJson = await locationWeatherAPI(placeData);
  displayWeather(myJson);
  // Call Openweather API for location forecast
  const myForecast = await dailyForecast(placeData);
  displayDailyForecast(myForecast);
}

export default requestWeather;
