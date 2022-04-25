export default async function dailyForecast(placeData) {
  const lat = placeData.latitude;
  const lon = placeData.longitude;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=metric&appid=ab1d1113b6a62c828014bb7acb72f558`);
  const myJson = await response.json();
  return myJson.daily;
}
