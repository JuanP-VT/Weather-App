import requestWeather from './requestWeather';

function loadFormEvent() {
  const myBtn = document.querySelector('#submit');
  myBtn.addEventListener('click', requestWeather);
}
export default loadFormEvent;
