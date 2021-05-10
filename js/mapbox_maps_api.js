"use strict"

mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
var map = new mapboxgl.Map({
    container: 'map', // container ID

});
//map

map.setStyle("mapbox://styles/mapbox/dark-v10")
map.setZoom(8)
map.setCenter([-98.4916, 29.4252])

//markers



var markerGogi = new mapboxgl.Marker({
    color:"red",
})
    .setLngLat([-98.50641, 29.52258])
    .setDraggable(false)
    .addTo(map);


//Popups
var popup = new mapboxgl.Popup()
    .setLngLat(markerGogi.getLngLat())
    .setHTML("<h3>Wild Gogi</h3>")

$(markerGogi).click(function(){
    popup.addTo(map);
})
markerGogi.setPopup(popup);




