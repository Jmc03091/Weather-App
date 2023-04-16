import { displayWeather, clear } from './indexDOM.js';

const button = document.querySelector('button');
const input = document.querySelector('input');

let count = 0;

button.addEventListener('click', (e) => {
  
  async function getWeather() {
    const location = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=&appid=dfbd6f7239bc6078a720e43ea127a749&q=${input.value}`, {mode: 'cors'})
    const data = await location.json();
    console.log(data);
    const currentWeather = {
      name: data.name,
      temp: `${(data.main.temp - 273.15).toFixed(2)}` + ' Celcius',
      description: data.weather[0].description,
      humidity: data.main.humidity + '%',
      wind: data.wind.speed + ' m/s',
      feels: `${(data.main.feels_like - 273.15).toFixed(2)}` + ' Celcius'
    };
    // loops back to 0 so it wont work;
    
    if(count == 0) {
      displayWeather(currentWeather);
      console.log(currentWeather);
      count = 1;
    }
    else if (count == 1) {
      clear();
      displayWeather(currentWeather);
      count = 1;
    }
    else e.preventDefault();
  }
  console.log(count);
    
getWeather()
  
  
});
  
const toUpper = (input) => {
  input.toUpperCase();
}

toUpper(input.value);
