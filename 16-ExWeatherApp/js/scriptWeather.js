let cityInput = document.querySelector("#cityInput");
let citySpan = document.querySelector("#citySpan");
let weatherIcon = document.querySelector(".effectIcon");
let tempSpan = document.querySelector(".temp");
let humiditySpan = document.querySelector(".humidity");
let pressureSpan = document.querySelector(".pressure");
let windSpan = document.querySelector(".wind");
let askButton = document.querySelector("#btnAsk");



askButton.addEventListener("click", function(){
    let myCity = cityInput.value;

    let endpointWeather = `https://api.openweathermap.org/data/2.5/weather?q=${myCity}&appid=25202f8c577c4d5be06610d472fc87a4`

    fetch(endpointWeather)
        .then(data =>{
            return data.json()
        })
        .then(city => {
            printResults(city);
        })
})

function printResults(city){

    weatherIcon.setAttribute("src", `http://openweathermap.org/img/w/${city.weather[0].icon}.png`)
    citySpan.textContent = city.name;
    tempSpan.textContent = (city.main.temp - 273.15).toFixed(2) + "°C";
    humiditySpan.textContent = city.main.humidity+"%";
    pressureSpan.textContent = city.main.pressure+ "bar";
    windSpan.textContent = city.wind.speed+"mph";

}