function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = '8a244ab44f29188d4f217a4fd775a67c'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                              <p>Temperature: ${data.main.temp} &#8451;</p>
                              <p>Weather: ${data.weather[0].description}</p>`;
    })
}
document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );
// por qué esto tiene que hacerse asincronico y no sincrónico
// por que van dos then, podría ir solo 1?

function showweatherDetails2(event2) {
    event2.preventDefault();
    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('lon').value;
    const apiKey = '8a244ab44f29188d4f217a4fd775a67c'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    fetch(apiUrl2)
    .then(response => response.json())
    .then(data2 => {
      const weatherInfo2 = document.getElementById('weatherInfo2');
      weatherInfo2.innerHTML = `<h2>Weather at lattitude ${data2.coord.lat} and longittude ${data2.coord.lon}</h2>
                              <p>Temperature: ${data2.main.temp} &#8451;</p>
                              <p>Weather: ${data2.weather[0].description}</p>`;
    })
}
document.getElementById('weatherForm2').addEventListener('submit',showweatherDetails2 );
// 8a244ab44f29188d4f217a4fd775a67c
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}