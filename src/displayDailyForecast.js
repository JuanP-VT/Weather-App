import getHumanDate from './getHumanDate';

export default function displayDailyForecast(myForecast) {
  console.log(myForecast);
  const $hourlyForecast = document.querySelector('#dailyForecast');
  if ($hourlyForecast.firstChild) {
    while ($hourlyForecast.firstChild) {
      $hourlyForecast.removeChild($hourlyForecast.firstChild);
    }
  }

  myForecast.forEach((item) => {
    // Clear hourly forecast screen
    // Create card for each item
    const card = document.createElement('div');
    card.classList.add('card');
    const day = document.createElement('div');
    day.classList.add('day');
    const mainTemp = document.createElement('div');
    mainTemp.classList.add('big');
    const minTemp = document.createElement('div');
    minTemp.classList.add('small');
    const iconDiv = document.createElement('div');
    iconDiv.classList.add('dailyIcon');
    card.append(day, mainTemp, minTemp, iconDiv);
    const itemDate = getHumanDate(item.dt);
    console.log(itemDate);
    day.textContent = itemDate.day;
    mainTemp.textContent = item.temp.max;
    minTemp.textContent = `${item.temp.min} C`;
    const iconRef = item.weather[0].icon;
    const myIcon = new Image();
    myIcon.src = `http://openweathermap.org/img/wn/${iconRef}.png`;
    myIcon.classList.add('dailyIcon');
    iconDiv.append(myIcon);
    $hourlyForecast.append(card.cloneNode(true));
  });
}
