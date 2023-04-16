const city = document.querySelector('.city');
const cityName = document.querySelector('.name');
const cityTemp = document.querySelector('.temp');
const cityDescription = document.querySelector('.description');
const cityHumidity = document.querySelector('.humidity');
const cityWind = document.querySelector('.wind');
const cityFeelsLike = document.querySelector('.feelsLike');

const displayWeather = (currentWeather) => {
  const name = document.createElement('p');
  const temp = document.createElement('p');
  const description = document.createElement('p');
  const humidity = document.createElement('p');
  const wind = document.createElement('p');
  const feels = document.createElement('p');

  name.classList.add('cityName');
  temp.classList.add('cityTemp');
  description.classList.add('cityDescription');
  humidity.classList.add('cityHumidity');
  wind.classList.add('cityWind');
  feels.classList.add('cityFeels');

  name.style.color = 'black';
  name.textContent = currentWeather.name;
  temp.style.color = 'red';
  temp.textContent = currentWeather.temp;
  description.style.color = 'blue';
  description.textContent = currentWeather.description;
  humidity.style.color = 'purple';
  humidity.textContent = currentWeather.humidity
  wind.style.color = 'green';
  wind.textContent = currentWeather.wind
  feels.style.color = 'skyblue';
  feels.textContent = currentWeather.feels;

  cityName.appendChild(name);
  cityTemp.appendChild(temp);
  cityDescription.appendChild(description);
  cityHumidity.appendChild(humidity);
  cityWind.appendChild(wind);
  cityFeelsLike.appendChild(feels);
  
}

const clear = () => {
  const name = document.querySelector('.cityName');
  const temp = document.querySelector('.cityTemp');
  const description = document.querySelector('.cityDescription');
  const humidity = document.querySelector('.cityHumidity');
  const wind = document.querySelector('.cityWind');
  const feels = document.querySelector('.cityFeels');
  
  name.remove();
  temp.remove();
  description.remove();
  humidity.remove();
  wind.remove();
  feels.remove();
}

export { displayWeather, clear };
