const apiKey =//Api id (confidential); 

function fetchWeather() {
    const location = document.getElementById('location-input').value;
    if (!location) {
        alert('Please enter a location');
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;


    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                alert(data.message);
                return;
            }
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            alert('Error fetching the weather data');
        });
}

function displayWeather(data) {
    const description = data.weather[0].description;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const wind = data.wind.speed;

    document.getElementById('description').innerText = `Description: ${description}`;
    document.getElementById('temperature').innerText = `Temperature: ${temperature}°C`;
    document.getElementById('humidity').innerText = `Humidity: ${humidity}%`;
    document.getElementById('wind').innerText = `Wind Speed: ${wind} m/s`;
}
