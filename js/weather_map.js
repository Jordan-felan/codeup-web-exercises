"use strict"

//MAPBOX
mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
var map = new mapboxgl.Map({
    container: 'map', // container ID
    zoom: 9,
    center:[-98.4916, 29.4252],
    style:"mapbox://styles/mapbox/dark-v10"

});
map.addControl(new mapboxgl.NavigationControl())





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
//geocode search results
var search = document.getElementById("search-city");
var token = MAPBOX_ACCESS_TOKEN;
var submitButton = document.querySelector("#submitSearch");
submitButton.addEventListener("click", searchCity);
//flag variable
var searchResult = false;
function searchCity () {
    geocode(search.value, token).then(function (results) {
        console.log(results);
        searchResult = true;
        var lat = results.features[0].center[1];
        var long = results.features[0].center[0];
        renderDailyWeather(lat,long);
        marker.setLngLat([long,lat]);
        map.flyTo({center: [long,lat], zoom: 9,speed:0.8});
    })
    // function reverseGeo(lat,long) {
    //     $.get("http://api.openweathermap.org/geo/1.0/reverse?lat=" + lat + "&lon=" + long + "&limit=" + 5 + "&appid=" + OPEN_WEATHER_APPID)
    //         .done(function (data) {
    //             var city = data[0].name
    //             var state = data[0].state
    //             $("#subHead").html("");
    //             var html = city + ', ' + state;
    //             $('#subHead').append(html);
    //         });
    // }
    // reverseGeo();
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
            for (var i = 0; i < 4; i++) {

                var html = '';
                var icon = "http://openweathermap.org/img/w/" + data.daily[i].weather[0].icon + ".png";
                var iconID = data.daily[i].weather[0].icon;
                var today = (data).daily[i];

                var todayDate = new Date(today.dt * 1000);
                html = '<div class="card bg-secondary col-3 heading-footer">';
                html += '<div class="card-header w-100 text-dark text-center ">' + todayDate + '</div>';
                html += '<div class="text-center text-light">';
                html += "<img src='" + "http://openweathermap.org/img/wn/" + data.daily[i].weather[0].icon +"@2x.png'>"
                html += '<div class="description">' + data.daily[i].weather[0].description + '</div>';
                html += '<div class="temp">' + 'High:' + Math.round(parseFloat(data.daily[i].temp.max)) + '&deg' +  '</div>';
                html += '<div class="temp">' + 'Low:' + Math.round(parseFloat(data.daily[i].temp.min)) + '&deg' +  '</div>';
                html += '<div class="humidity">' + "Humidity:" + Math.round(parseFloat(data.daily[i].humidity)) + '</div>';
                html += '</div></div>';
                // using flag variable to either use base location and append its weather, or if search is triggered will append new weather info

                if(!searchResult){
                    $('#weather').append(html);
                } else {
                    if(i === 0){
                        $("#weather").html('');
                    }
                    $('#weather').append(html);
                }
            }

            });

};
var defaultLat = 32.7174;
var defaultLong = -117.1628;

    renderDailyWeather(defaultLat,defaultLong);
console.log(renderDailyWeather);




