const searchBtn = document.getElementById("search");
const placeInput = document.getElementById("place");
const apiKey = "646486bcc4955c3ae6c1030129fee1f2";

searchBtn.addEventListener('click', () => {
    const inputText = placeInput.value.toLowerCase();
    fetchData(inputText);
});
async function fetchData(location) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);

        if (!response.ok) {
            throw new Error("An error occurred :(");
        }
        const data = await response.json();
        console.log("City:", data.name);
        console.log("Temperature:", data.main.temp);
        console.log("Condition:", data.weather[0].description);
    }

    catch (error) {
        console.error(error.message);
    }
}