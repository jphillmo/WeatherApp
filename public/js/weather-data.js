window.addEventListener('load', ()=> {
  let long;
  let lat;
  let temperatureDescription = document.querySelector('.temperature-description');
  let temperatureDegree = document.querySelector('.temperature-degree');
  let locationTimezone = document.querySelector('.location-timezone');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=7749e2c8272363efc86f69296b337a27`;

      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
          const {temp, humidity, feels_like, temp_min, temp_max, pressure} = data.main;
          const {main, description, icon} = data.weather[0];
          const timezone = data.timezone;
          // Set DOM Elements from the API
          temperatureDegree.textContent = temp;
          temperatureDescription.textContent = description;
        })  
    });
  } 
  else {
    h1.textContent = "This is not working for reasons..."
  }
});
