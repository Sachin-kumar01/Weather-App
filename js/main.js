//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=29be45137808ed1863359e05b9d8fbe5

const text = document.getElementById('text');
const temp = document.getElementById('temp');
const cityname = document.getElementById('cityname');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');


async function  search() {
    if(text.value == ""){
        window.alert("Enter city name!");
        return
    }
    
    try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${text.value}&appid=29be45137808ed1863359e05b9d8fbe5`;
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        cityname.innerHTML = data.name;
        temp.innerHTML = data.main.temp+ "℃";
        humidity.innerHTML = data.main.humidity+ "%";
        wind.innerHTML = data.wind.speed +"km/h";

    }
    catch{
        window.alert("City not found!");
    }
}