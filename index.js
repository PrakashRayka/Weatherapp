
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd77ad2e386mshdd3acfe04138d0bp10e907jsne8f6f37aaa3c',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            // cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset


        })
        .catch(err => console.error(err));

}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")


// a function for displaying Livetime 
function displayTime() {
    var c = moment().format('MMMM Do YYYY, h:mm:ss a');
    document.getElementById("time").innerHTML = c;
    document.getElementById("time1").innerHTML = c;
    document.getElementById("time2").innerHTML = c;

}
setInterval(displayTime, 1000)

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

  