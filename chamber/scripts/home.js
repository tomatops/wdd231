const key = "1aef5c44d4a3aa39d45d76e843e1f0d3";
const lat = "14.146010515179718";
const long = "121.31089727816854";

// Current Weather
const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#temp');
const weatherDesc = document.querySelector('#desc');
const maxTemp = document.querySelector('#temp-max');
const minTemp = document.querySelector('#temp-min');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${key}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
apiFetch();

function displayResults(data) {
    let desc = data.weather[0].description;

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherIcon.setAttribute('loading', 'lazy');

    currentTemp.innerHTML = `<strong>${data.main.temp}</strong>&deg; C`;

    const lowerDesc = desc;
    const wordsDesc = lowerDesc.split(" ");
    for (let i = 0; i < wordsDesc.length; i++) {
        wordsDesc[i] = wordsDesc[i][0].toUpperCase() + wordsDesc[i].substr(1);
    }
    weatherDesc.textContent = wordsDesc.join(" ");

    maxTemp.innerHTML = `High: ${data.main.temp_max}&deg;`;
    minTemp.innerHTML = `Low: ${data.main.temp_min}&deg;`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;

    const convertTime = (unix) =>
        new Date((unix + data.timezone) * 1000)
            .toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

    sunrise.innerHTML = `Sunrise: ${convertTime(data.sys.sunrise)}`;
    sunset.innerHTML = `Sunset: ${convertTime(data.sys.sunset)}`;
}

// 3-Day Forecast
const weatherDay1 = document.querySelector('#day1');
const weatherDay2 = document.querySelector('#day2');
const weatherDay3 = document.querySelector('#day3');

const url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&appid=${key}`;

async function apiFetch2() {
    try {
        const response2 = await fetch(url2);
        if (response2.ok) {
            const data2 = await response2.json();
            console.log(data2);
            displayResults2(data2);
        } else {
            throw Error(await response2.text());
        }
    } catch (error) {
        console.log(error);
    }
}
apiFetch2();

function displayResults2(data) {
    const convertDay = (timestamp) => {
        return new Date(timestamp * 1000).toLocaleDateString('en-US', { weekday: 'long' });
    };

    weatherDay1.innerHTML = `Today: <strong>${data.list[0].main.temp}&deg; C</strong>`;
    weatherDay2.innerHTML = `${convertDay(data.list[2].dt)}: <strong>${data.list[2].main.temp}&deg; C</strong>`;
    weatherDay3.innerHTML = `${convertDay(data.list[10].dt)}: <strong>${data.list[10].main.temp}&deg; C</strong>`;
}