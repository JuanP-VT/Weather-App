import displayWeather from './displayWeather';
import geoCoder from './geoCoder';
import locationWeatherAPI from './locationWeatherAPI';

async function requestWeather(e) {
  e.preventDefault();
  // Get User Input
  const input = document.querySelector('#userInput');
  const userInput = input.value;
  // Request a latitude and a longitude to the geoCoderAPI for the user input
  const placeData = await geoCoder(userInput);
  // Call OpenWeather APIs for location info
  const myJson = await locationWeatherAPI(placeData);
  displayWeather(myJson);
}

export default requestWeather;
