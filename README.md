# 🌦️ Simple Weather App

A clean, modern web app that provides real-time weather data for any city. Built with vanilla JavaScript and the OpenWeatherMap API.

---
## 🚀 Live Demo

[**Check out the live app here!**](https://dikshit-raj-sharma.github.io/Weather-App/)

---
## ✨ Features

* **Real-time Data:** Fetches current temperature, condition, and a dynamic weather icon from the OpenWeatherMap API.
* **Smooth Animations:** The results card animates smoothly into view using CSS transitions.
* **Clean UI:** Uses a modern two-column layout (built with Flexbox) to clearly display data.
* **Graceful Error Handling:** Shows a user-friendly error message if a city is not found and hides the data fields.

---

## 🧰 Tech Used

* **HTML5:** For the core structure and content.
* **CSS3:** For all styling, including the Flexbox layout, transitions, and responsive design.
* **JavaScript (ES6+):** For all application logic:
    * `fetch()` API with `async/await` for network requests.
    * DOM manipulation to display data.
    * Event handling.
    * Error handling with `try...catch` blocks.

---

## 🛰️ API

* Uses the [OpenWeatherMap API](https://openweathermap.org/api) to get live weather data.

---

## 🔧 How to Run Locally

This project uses a hidden API key. To run it locally, you will need to create your own.

1. **Clone the repository:**
    ```bash
    git clone https://github.com/dikshit-raj-sharma/Weather-App.git
    cd Weather-App
    ```

2.  **Get your API Key:**
    * Go to [OpenWeatherMap](https://openweathermap.org/) and create a free account.
    * Find and copy your new API key.

3.  **Create `config.js`:**
    * In the root of the project, create a new file named `config.js`.
    * Add the following line to this file, pasting in your key:
    ```javascript
    const apiKey = "YOUR_API_KEY_GOES_HERE";
    ```
    *(This file is already listed in `.gitignore` and will not be pushed to GitHub.)*

4.  **Open `index.html`:**
    * You're all set! Just open the `index.html` file in your browser.

---
