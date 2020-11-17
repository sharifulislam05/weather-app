const displayTemp = document.querySelector('.temperature')
function showWeather() {
    const city = document.querySelector(".input-city").value
    loadData(city)
}
async function loadData(city) {
    try{
        const fetchData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=57d6acfb4e5e5ec7a0b06d008b935209`)
        const data = await fetchData.json()
        showTemp(data)
    }
    catch(err) {
        alert("city is not found, please enter correct city name");
        document.querySelector(".input-city").value = ""
    }
}
function showTemp(result) {
    const weather = result.weather[0].main;
    const temp = result.main.temp
    const {name} = result;
    const tempCelsius = Math.floor(temp - 273.15)
    document.querySelector('.temperature').innerText = tempCelsius
    document.querySelector('.city').innerText = name
    document.querySelector('.weather').innerText = weather
}