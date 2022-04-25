import geoCoder from './geoCoder';
import locationWeatherAPI from './locationWeatherAPI';
import dailyForecast from './dailyForecast';
import displayWeather from './displayWeather';
import displayDailyForecast from './displayDailyForecast';
// This function is going to request a location and display it when the page loads
export default async function initPage() {
  const placeData = await geoCoder('Los Mochis');
  // Call OpenWeather API for location info and display it
  const myJson = await locationWeatherAPI(placeData);
  displayWeather(myJson);
  // Call Openweather API for location forecast
  const myForecast = await dailyForecast(placeData);
  displayDailyForecast(myForecast);
}
