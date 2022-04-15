
function getData(){
    document.getElementById("doge").innerHTML = null;
    let city = document.getElementById("city").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d11d263aad330777246c53832bacb088`;

    fetch(url).then(function(res){
        return res.json();
    })
    .then(function(res){
        append(res);
        console.log(res);
    }).catch(function(err){
        console.log(err);
    })

}



function getLocation(lat,lon){
    document.getElementById("doge").innerHTML = null;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d11d263aad330777246c53832bacb088`;

    fetch(url).then(function(res){
        return res.json();
    })
    .then(function(res){
        append(res);
        console.log(res);
    }).catch(function(err){
        console.log(err);
    })

}



function append(data){
    
    let container = document.getElementById("container");
    let map = document.getElementById("gmap_canvas");
    container.innerHTML = null;

    let city  = document.createElement("h1")
    city.innerText ="City: " + " " + data.name + "," + data.sys.country;

    let temp = document.createElement("h1")
    temp.innerText = "Temperature: " + " " + Math.round(data.main.temp - 273.15) + "°C";

    let feel = document.createElement("h1")
    feel.innerText = "Feels Like: " + " " + Math.round(data.main.feels_like - 273.15) + "°C";

    let humidity = document.createElement("h1")
    humidity.innerText ="Humidity: " + " " + data.main.humidity + "%";

    let wind = document.createElement("h1")
    wind.innerText = "Wind: " + " " + data.wind.speed + "KM/H";

    let max = document.createElement("h1")
    max.innerText = "Max Temp: " + " " + Math.round(data.main.temp_max - 273.15) + "°C";

    map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`



    container.append(city,temp,feel,humidity,wind,max)

}

function getWeather(){
navigator.geolocation.getCurrentPosition(success);

 function success(pos) {
     let crd = pos.coords;
   
     console.log('Your current position is:');
     console.log(`Latitude : ${crd.latitude}`);
     console.log(`Longitude: ${crd.longitude}`);
     console.log(`More or less ${crd.accuracy} meters.`);

     getLocation(crd.latitude, crd.longitude)
 }
 
}
