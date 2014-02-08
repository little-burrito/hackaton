
var map = L.mapbox.map('map', 'examples.map-9ijuk24y')
    .setView([40, -74.50], 9);
function markerrender ( )
{
    if (navigator.geolocation) {
        map.locate();
    }
    setTimeout(markerrender, 10000);
};
var geoJson = {};

function extractgeos(){
    for (var key in geoJson.features) {
        console.log(geoJson.features[key].geometry.coordinates , "test");
        // to do
    }
};
// Once we've got a position, zoom and center the map
// on it, and add a single marker.
map.on('locationfound', function(e) {
    //map.fitBounds(e.getBounds());
    geoJson = {
        type: 'FeatureCollection',
        features: [
            {type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [e.latlng.lng, e.latlng.lat]
                },
                properties: {
                    'marker-color': '#000',
                    'marker-symbol': 'star-stroked'
                }
            },
            {
                type: 'Feature',
                properties: {
                    title: 'Pelle.',
                    'marker-color': '#f00',
                    'marker-size': 'large',
                    url: 'http://en.wikipedia.org/wiki/Washington,_D.C.'
                },
                geometry: {
                    type: 'Point',
                    coordinates: [e.latlng.lng + 0.001, e.latlng.lat +0.001]
                }
            },
            {
                type: 'Feature',
                properties: {
                    "title": "kalle",
                    'marker-color': '#014051',
                    'marker-size': 'large',
                    url: 'http://en.wikipedia.org/wiki/Baltimore'
                },
                geometry: {
                    type: 'Point',
                    coordinates: [e.latlng.lng+0.001, e.latlng.lat -0.001]
                }
            }]

    };
//    heat = L.heatLayer(e.latlng, {radius: 25});
    map.markerLayer.on('click', function(e) {
        e.layer.unbindPopup();
        window.open(e.layer.feature.properties.url);
    });
    map.markerLayer.setGeoJSON(geoJson);
    map.fitBounds(map.markerLayer.getBounds());
    extractgeos();
});

markerrender();


// If the user chooses not to allow their location
// to be shared, display an error message.
map.on('locationerror', function() {
    alert('position could not be found');
});

map.Layers.addOverlay(heat);
