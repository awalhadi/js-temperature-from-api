document.getElementById('search-btn').addEventListener("click", function(){
    const inputcity = document.getElementById('input-city').value;
    const city = inputcity.charAt(0).toUpperCase() + inputcity.slice(1).toLowerCase();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0d0fd22ae9fbcad866bf9658694e9373`;
    fetch(url)
    .then(res => res.json())
    .then(data => showData(data))
})

function showData(weatherData) {
    const isData = weatherData.cod;
    if (isData == 200) {
        const cityName = weatherData.name;
        const temperatureInKelvin = weatherData.main.temp;
        const tempInCelsius = (parseFloat(temperatureInKelvin) - 273.15).toFixed(2);
        document.getElementById('city-name').innerText = cityName;
        document.getElementById('temperature').innerText = tempInCelsius;

        const weatherIcon = weatherData.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
        document.getElementById('weatherImg').src = iconUrl;

    }else{
        document.getElementById('city-name').innerText = 'City Not Found';
        const temp = document.getElementById('temperature');
        temp.style.display = 'none';
    }
        
}