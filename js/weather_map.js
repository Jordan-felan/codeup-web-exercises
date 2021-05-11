"use strict"

function renderWeather (){
    $.get("https://api.openweathermap.org/data/2.5/onecall", {
        APPID: WEATHER_MAP_TOKEN,
        lat: 29.423017,
        lon: -98.48527,
        units: "imperial",
        exclude: "current,hourly,minutely"
    })
    //     var date = .done(function (data) {
    //     console.log(data);
    //     var today = (data).daily[0];
    //     var todayDate = new Date(today.dt * 1000);
    //     console.log(todayDate);
    //     console.log(data);
    // })


// var celcius = Math.round(parseFloat(resp.daily.temp)-273.15);
        var fahrenheit = Math.round(parseFloat(data.daily[0].temp.day));
        var description = data.daily[0].weather[0].description
        var humidity = Math.round(parseFloat(data.daily[0].humidity));
// var description =
        function render (){
            var html = '<div class="card">';
            html += '<div class="card-header bg-primary text-light"></div>'
            html += '<div class="row">'
            html += '<div class="card-header bg-light text-dark"> today </div>'
            html += '<div class="text-center">'
            html += '<div class="description"></div>'
            html += '<div class="temp"></div>'
            html += '<div class="humidity"> </div>'



        }


// // document.getElementById('description').innerHTML = description;
//         document.getElementById('temp').innerHTML = fahrenheit + '&deg;';
//         document.getElementById('description').innerHTML = description;
//         document.getElementById('humidity').innerHTML = humidity;

}