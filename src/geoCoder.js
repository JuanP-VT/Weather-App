async function geoCoder(userInput) {
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${userInput}&limit=5&appid=ab1d1113b6a62c828014bb7acb72f558`);
  const myJSON = await response.json();
  // Check if APIs response is not an empty array
  if (myJSON.length <= 0) {
    alert('Location Not Found');
    return false;
  }
  // If response contain an array with many items just grab the first one
  const myPlace = myJSON[0];
  const latitude = myPlace.lat;
  const longitude = myPlace.lon;
  return { latitude, longitude };
}
export default geoCoder;
