const searchBtn = document.getElementById("search");
const placeInput = document.getElementById("place");
const weatherIcon = document.getElementById("weather-icon");
const cityName = document.getElementById("city-name");
const condition = document.getElementById("condition");
const err = document.getElementById("error-message");
const temperature = document.getElementById("temperature");
const weatherResult = document.getElementById("weather-results");
const dataContainer = document.querySelector(".data-container");

searchBtn.addEventListener('click', () => {
    const inputText = placeInput.value.toLowerCase();
    fetchData(inputText);
});
async function fetchData(location) {
    cityName.textContent="";
    weatherIcon.src="";
    condition.textContent="";
    err.textContent="";
    temperature.textContent="";
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);

        if (!response.ok) {
            throw new Error("City Not Found. Please Try again.");
        }
        const data = await response.json();
        cityName.textContent=data.name;
        temperature.textContent=`${Math.round(data.main.temp)}°C`;
        condition.textContent=data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        weatherIcon.src=iconUrl;
        weatherIcon.alt=data.weather[0].description;
        dataContainer.style.display = "block";
        weatherIcon.style.display = "inline-block";
        weatherResult.classList.add("active");
    }

    catch (error) {
        err.textContent=error.message;
        weatherIcon.style.display = "none";
        dataContainer.style.display = "none";
        weatherResult.classList.add("active");
    }
}