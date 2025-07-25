const API_KEY = "16f18c6699c510820fdba03773eb3e1f";

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const resultDiv = document.getElementById("weatherResult");

  try {
    if (!city) {
      throw new Error("Please enter a city name.");
    }

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found or API request failed.");
    }

    const data = await response.json();

    const weather = {
      city: data.name,
      temp: Math.round(data.main.temp),
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      humidity: data.main.humidity,
      wind: data.wind.speed,
    };

    resultDiv.innerHTML = `
      <div class="weather-card">
        <h2>${weather.city}</h2>
        <img src="http://openweathermap.org/img/wn/${weather.icon}@2x.png" alt="${weather.description}" />
        <p class="temp">${weather.temp}°C</p>
        <p class="description">${weather.description}</p>
        <p>💧 Humidity: ${weather.humidity}%</p>
        <p>🌬 Wind Speed: ${weather.wind} m/s</p>
      </div>
    `;
  } catch (err) {
    resultDiv.innerHTML = `<p class="error">${err.message}</p>`;
  }
}

// Keypress listener outside the function
document.getElementById("cityInput").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getWeather();
  }
});
