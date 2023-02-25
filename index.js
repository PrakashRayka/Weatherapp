"use strict";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d77ad2e386mshdd3acfe04138d0bp10e907jsne8f6f37aaa3c",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      console.log(city);
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Delhi");

// a function for displaying Livetime
function displayTime() {
  var c = moment().format("MMMM Do YYYY, h:mm:ss a");
  document.getElementById("time").innerHTML = c;
  document.getElementById("time1").innerHTML = c;
  document.getElementById("time2").innerHTML = c;
}
setInterval(displayTime, 1000);

// Code for displaying all weather details at the end of the page in a table
const getRow = document.querySelectorAll(".weather-row");

// for (let j = 0; j < 4; j++) {
//   console.log(getWeather(getRow[j].innerHTML));
// }

const weatherRowDetails1 = document.querySelectorAll(".row-num1");
const weatherRowDetails2 = document.querySelectorAll(".row-num2");
const weatherRowDetails3 = document.querySelectorAll(".row-num3");
const weatherRowDetails4 = document.querySelectorAll(".row-num4");

// console.log(weatherRowDetails1);
// console.log(weatherRowDetails2);
// console.log(weatherRowDetails3);
// console.log(weatherRowDetails4);

const getAllWeatherDetails = (city, allDetails) => {
  getRow.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(city);
      console.log(response);
      allDetails[0].innerHTML = response.wind_speed;
      allDetails[1].innerHTML = response.wind_degrees;
      allDetails[2].innerHTML = response.temp;
      allDetails[3].innerHTML = response.humidity;
      allDetails[4].innerHTML = response.sunset;
      allDetails[5].innerHTML = response.min_temp;
      allDetails[6].innerHTML = response.cloud_pct;
      allDetails[7].innerHTML = response.feels_like;
      allDetails[8].innerHTML = response.sunrise;
      allDetails[9].innerHTML = response.max_temp;
    })
    .catch((err) => console.error(err));
};

getAllWeatherDetails(getRow[0].innerHTML, weatherRowDetails1);
getAllWeatherDetails(getRow[1].innerHTML, weatherRowDetails2);
getAllWeatherDetails(getRow[2].innerHTML, weatherRowDetails3);
getAllWeatherDetails(getRow[3].innerHTML, weatherRowDetails4);

// ********************************************************************

// Example array of city names
// const cities = ['Udaipur', 'Chennai', 'Banglore', 'Delhi'];

// // Loop through the array and store each city name in a variable
// for (let i = 0; i < cities.length; i++) {
//   const city = cities[i];
//   console.log(city); // Output the city name
//   // You can do whatever you need with the city name here, such as store it in an array or use it to make an API call
// }

// const endpoint = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
// const apiKey = '3TahZJE0hT6mmmda6tT5eaRQd1B7J9P7op0oE5uq';
// const city = 'Udaipur';

// const apiUrl = `${endpoint}?q=${city}&appid=${apiKey}`;

// // Fetch the weather data from the API
// fetch(apiUrl)
// .then(response => response.json())
//   .then((response) => {
//     console.log(response);

//     wind_speed3.innerHTML = response.wind_speed

//   })
//   .catch(error => {
//     console.error('Error fetching weather data:', error);
//   });
