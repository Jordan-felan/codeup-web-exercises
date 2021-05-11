"use strict"

//MAPBOX
mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
var map = new mapboxgl.Map({
    container: 'map', // container ID
    zoom: 9,
    center:[-98.4916, 29.4252],
    style:"mapbox://styles/mapbox/dark-v10"

});


// map.setStyle("mapbox://styles/mapbox/dark-v10")
// map.setZoom(9)
// map.setCenter([-98.4916, 29.4252])
// console.log(map.getCenter());




var marker = new mapboxgl.Marker({
    color:"red",
})
    .setLngLat([-98.4916, 29.4252])
    .setDraggable(true)
    .addTo(map);

marker.on('dragend', function(){
    console.log(marker.getLngLat());
    $("#weather").html('');
    renderDailyWeather(marker.getLngLat().lat,marker.getLngLat().lng);
});


//GEOCODER
function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        })


}
var search = document.getElementById("search-city");
var token = MAPBOX_ACCESS_TOKEN
var submitButton = document.querySelector("#submitSearch");
submitButton.addEventListener("click", searchCity);
var searchResult = false;
function searchCity () {
    geocode(search.value, token).then(function (results) {
        console.log(results);
        searchResult = true;
        var lat = results.features[0].center[1]
        var long = results.features[0].center[0]
        renderDailyWeather(lat,long)
        marker.setLngLat([long,lat])
        map.flyTo({center: [long,lat], zoom: 12})
    })


}




//RENDER WEATHER
function renderDailyWeather (lat,long){
    $.get("https://api.openweathermap.org/data/2.5/onecall", {
        APPID: WEATHER_MAP_TOKEN,
        lat: lat,
        lon: long,
        units: "imperial",
        exclude: "current,hourly,minutely"
    })
        .done(function (data) {

        console.log(data);
            // $("#weather").html('');
            for (var i = 0; i < 4; i++) {

                var html = '';
                var today = (data).daily[i];
                var todayDate = new Date(today.dt * 1000);
                html = '<div class="card col-3">';
                html += '<div class="card-header bg-light text-dark text-center">' + todayDate + '</div>';
                html += '<div class="text-center">';
                html += '<div class="description">' + data.daily[i].weather[0].description + '</div>';
                html += '<div class="temp">' + 'Temp:' + Math.round(parseFloat(data.daily[i].temp.day)) + '&deg' +  '</div>';
                html += '<div class="humidity">' + "humidity:" + Math.round(parseFloat(data.daily[i].humidity)) + '</div>';
                html += '</div></div>'
                if(!searchResult){
                    $('#weather').append(html);
                } else {
                    if(i === 0){
                        $("#weather").html('')
                    }
                    $('#weather').append(html);
                }
            }
            });

};
var defaultLat = 32.7174
var defaultLong = -117.1628

    renderDailyWeather(defaultLat,defaultLong)
console.log(renderDailyWeather);




//
// lat: 32.7174,
//     lon: -117.1628,