const key = '9a9b77b0b1782df1b2f3164db0e2580e';
const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const btn = document.getElementById("btn");
const inputBox = document.getElementById("search");
const iconImg = document.getElementById("icon-img");

async function weather(city) {
    const response = await fetch(url + city + `&appid=${key}`);
    let data = await response.json();
    document.querySelector(".place").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&#176;C"
    document.querySelector(".humidity-percentage").innerHTML = data.main.humidity + "%"
    document.querySelector(".speed").innerHTML = data.wind.speed + " km/h"

    if (data.weather[0].main == "Clouds") {
        iconImg.src = "images/clouds.png"
    } else if (data.weather[0].main == "Clear") {
        iconImg.src = "images/clear.png"
    } else if (data.weather[0].main == "Drizzle") {
        iconImg.src = "images/drizzle.png"
    } else if (data.weather[0].main == "Mist") {
        iconImg.src = "images/mist.png"
    } else if (data.weather[0].main == "Rain") {
        iconImg.src = "images/rain.png"
    } else if (data.weather[0].main == "Snow") {
        iconImg.src = "images/snow.png"
    }
    console.log(data)

    document.querySelector(".main-container").style.display = "flex"
}

btn.addEventListener("click", () => {
    weather(inputBox.value)
})

weather()