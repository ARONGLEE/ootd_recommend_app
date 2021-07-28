
const API_KEY = "3b4fa3ed7ba9793ead0dc8bc71c770e4";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
   
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather");
        const city = document.querySelector("#city");
        city.innerText = data.name; 
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)