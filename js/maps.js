
var map = L.mapbox.map('map', 'karloskatt.h7jkaadl')
    .setView([40, -74.50], 9);
function markerrender ( )
{
    if (navigator.geolocation) {
        map.locate();
    }
    setTimeout(markerrender, 10000);
};

var testJson = {
    "error": 0, // Om det blir någon error är det här > 0


    "circles": [ // Array med alla ens cirklar
        {
            "id": 0, // Gruppens id-nummer
            "name": "Dundergruppen", // Gruppens namn
            "started": true, // Om gruppen är startad för kvällen
            "startedBy": 0, // Vem gruppen är startad av (id-nummer) (uppdateras när gruppen startas)
            "startedByName": "Anton Lejon", // Vem gruppen är startad av (namn)
            "startedTime": "2014-02-08 20:04:54", // Tid gruppen startades
            "users": [
                { // Array med gruppens användare som är på (eller kanske på, men i alla fall inte "inte på")
                    "id": 0, // Användarens id
                    "longitude": 59.5, // position, långitud
                    "latitude": 18.7, // position, latitud
                    "name": "Anton Lejon", // Användarens namn
                    "place_name": "Entrepenörskyrkan", // platsens namn
                    "cred": -7.2, // Användarens credighet
                    "single": false, // Huruvida användaren är singel eller inte
                    "gender": 0, // Man/kvinna med stöd för fler siffror á la hbtq (INT)
                    "profile_picture": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/t1/c0.0.200.200/p200x200/65061_10151199243733520_444342855_n.jpg", // URL till profilbild
                    "upForTonight": 10, // status för om man är på - ni får bestämma vilka siffror man kan ange
                    "adminlevel": 0, // vilken admin-nivå man har i cirkeln
                },
                { // Array med gruppens användare som är på (eller kanske på, men i alla fall inte "inte på")
                    "id": 0, // Användarens id
                    "longitude": 59.5, // position, långitud
                    "latitude": 18.7, // position, latitud
                    "name": "Anton Lejon", // Användarens namn
                    "place_name": "Entrepenörskyrkan", // platsens namn
                    "cred": -7.2, // Användarens credighet
                    "single": false, // Huruvida användaren är singel eller inte
                    "gender": 0, // Man/kvinna med stöd för fler siffror á la hbtq (INT)
                    "profile_picture": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/t1/c0.0.200.200/p200x200/65061_10151199243733520_444342855_n.jpg", // URL till profilbild
                    "upForTonight": 10, // status för om man är på - ni får bestämma vilka siffror man kan ange
                    "adminlevel": 0, // vilken admin-nivå man har i cirkeln
                },
                { // Array med gruppens användare som är på (eller kanske på, men i alla fall inte "inte på")
                    "id": 0, // Användarens id
                    "longitude": 59.5, // position, långitud
                    "latitude": 18.7, // position, latitud
                    "name": "Anton Lejon", // Användarens namn
                    "place_name": "Entrepenörskyrkan", // platsens namn
                    "cred": -7.2, // Användarens credighet
                    "single": false, // Huruvida användaren är singel eller inte
                    "gender": 0, // Man/kvinna med stöd för fler siffror á la hbtq (INT)
                    "profile_picture": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/t1/c0.0.200.200/p200x200/65061_10151199243733520_444342855_n.jpg", // URL till profilbild
                    "upForTonight": 10, // status för om man är på - ni får bestämma vilka siffror man kan ange
                    "adminlevel": 0, // vilken admin-nivå man har i cirkeln
                }
            ],
            "chat": [ // Array med gruppens chattmeddelanden
                { "message": "Hej på dig! <3<3<3", "name": "Anton Lejon", "userId": 0, "time_posted": "2014-02-08 22:46:01" }, // Meddelande 1...
                { "message": "hej", "name": "Ludvig Lejon", "userId": 1,  "time_posted": "2014-02-08 22:46:17" }, // Meddelande 2...
                { "message": "Vi är bröder. Jippi!", "name": "Anton Lejon", "userId": 0,  "time_posted": "2014-02-08 22:46:42" } // Meddelande 3...
            ]
        },

        // Sen kommer flera likadana
        {
            "id": 0, // Gruppens id-nummer
            "name": "Dundergruppen", // Gruppens namn
            "started": true, // Om gruppen är startad för kvällen
            "startedBy": 0, // Vem gruppen är startad av (id-nummer) (uppdateras när gruppen startas)
            "startedByName": "Anton Lejon", // Vem gruppen är startad av (namn)
            "startedTime": "2014-02-08 20:04:54", // Tid gruppen startades
            "users": [
                { // Array med gruppens användare som är på (eller kanske på, men i alla fall inte "inte på")
                    "id": 0, // Användarens id
                    "longitude": 59.5, // position, långitud
                    "latitude": 18.7, // position, latitud
                    "name": "Anton Lejon", // Användarens namn
                    "place_name": "Entrepenörskyrkan", // platsens namn
                    "cred": -7.2, // Användarens credighet
                    "single": false, // Huruvida användaren är singel eller inte
                    "gender": 0, // Man/kvinna med stöd för fler siffror á la hbtq (INT)
                    "profile_picture": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/t1/c0.0.200.200/p200x200/65061_10151199243733520_444342855_n.jpg", // URL till profilbild
                    "upForTonight": 10, // status för om man är på - ni får bestämma vilka siffror man kan ange
                    "adminlevel": 0, // vilken admin-nivå man har i cirkeln
                },
                { // Array med gruppens användare som är på (eller kanske på, men i alla fall inte "inte på")
                    "id": 0, // Användarens id
                    "longitude": 59.5, // position, långitud
                    "latitude": 18.7, // position, latitud
                    "name": "Anton Lejon", // Användarens namn
                    "place_name": "Entrepenörskyrkan", // platsens namn
                    "cred": -7.2, // Användarens credighet
                    "single": false, // Huruvida användaren är singel eller inte
                    "gender": 0, // Man/kvinna med stöd för fler siffror á la hbtq (INT)
                    "profile_picture": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/t1/c0.0.200.200/p200x200/65061_10151199243733520_444342855_n.jpg", // URL till profilbild
                    "upForTonight": 10, // status för om man är på - ni får bestämma vilka siffror man kan ange
                    "adminlevel": 0, // vilken admin-nivå man har i cirkeln
                },
                { // Array med gruppens användare som är på (eller kanske på, men i alla fall inte "inte på")
                    "id": 0, // Användarens id
                    "longitude": 59.5, // position, långitud
                    "latitude": 18.7, // position, latitud
                    "name": "Anton Lejon", // Användarens namn
                    "place_name": "Entrepenörskyrkan", // platsens namn
                    "cred": -7.2, // Användarens credighet
                    "single": false, // Huruvida användaren är singel eller inte
                    "gender": 0, // Man/kvinna med stöd för fler siffror á la hbtq (INT)
                    "profile_picture": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/t1/c0.0.200.200/p200x200/65061_10151199243733520_444342855_n.jpg", // URL till profilbild
                    "upForTonight": 10, // status för om man är på - ni får bestämma vilka siffror man kan ange
                    "adminlevel": 0, // vilken admin-nivå man har i cirkeln
                }
            ],
            "chat": [ // Array med gruppens chattmeddelanden
                { "message": "Hej på dig! <3<3<3", "name": "Anton Lejon", "userId": 0, "time_posted": "2014-02-08 22:46:01" }, // Meddelande 1...
                { "message": "hej", "name": "Ludvig Lejon", "userId": 1,  "time_posted": "2014-02-08 22:46:17" }, // Meddelande 2...
                { "message": "Vi är bröder. Jippi!", "name": "Anton Lejon", "userId": 0,  "time_posted": "2014-02-08 22:46:42" } // Meddelande 3...
            ]
        },
        {
            "id": 0, // Gruppens id-nummer
            "name": "Dundergruppen", // Gruppens namn
            "started": true, // Om gruppen är startad för kvällen
            "startedBy": 0, // Vem gruppen är startad av (id-nummer) (uppdateras när gruppen startas)
            "startedByName": "Anton Lejon", // Vem gruppen är startad av (namn)
            "startedTime": "2014-02-08 20:04:54", // Tid gruppen startades
            "users": [
                { // Array med gruppens användare som är på (eller kanske på, men i alla fall inte "inte på")
                    "id": 0, // Användarens id
                    "longitude": 59.5, // position, långitud
                    "latitude": 18.7, // position, latitud
                    "name": "Anton Lejon", // Användarens namn
                    "place_name": "Entrepenörskyrkan", // platsens namn
                    "cred": -7.2, // Användarens credighet
                    "single": false, // Huruvida användaren är singel eller inte
                    "gender": 0, // Man/kvinna med stöd för fler siffror á la hbtq (INT)
                    "profile_picture": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/t1/c0.0.200.200/p200x200/65061_10151199243733520_444342855_n.jpg", // URL till profilbild
                    "upForTonight": 10, // status för om man är på - ni får bestämma vilka siffror man kan ange
                    "adminlevel": 0, // vilken admin-nivå man har i cirkeln
                },
                { // Array med gruppens användare som är på (eller kanske på, men i alla fall inte "inte på")
                    "id": 0, // Användarens id
                    "longitude": 59.5, // position, långitud
                    "latitude": 18.7, // position, latitud
                    "name": "Anton Lejon", // Användarens namn
                    "place_name": "Entrepenörskyrkan", // platsens namn
                    "cred": -7.2, // Användarens credighet
                    "single": false, // Huruvida användaren är singel eller inte
                    "gender": 0, // Man/kvinna med stöd för fler siffror á la hbtq (INT)
                    "profile_picture": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/t1/c0.0.200.200/p200x200/65061_10151199243733520_444342855_n.jpg", // URL till profilbild
                    "upForTonight": 10, // status för om man är på - ni får bestämma vilka siffror man kan ange
                    "adminlevel": 0, // vilken admin-nivå man har i cirkeln
                },
                { // Array med gruppens användare som är på (eller kanske på, men i alla fall inte "inte på")
                    "id": 0, // Användarens id
                    "longitude": 59.5, // position, långitud
                    "latitude": 18.7, // position, latitud
                    "name": "Anton Lejon", // Användarens namn
                    "place_name": "Entrepenörskyrkan", // platsens namn
                    "cred": -7.2, // Användarens credighet
                    "single": false, // Huruvida användaren är singel eller inte
                    "gender": 0, // Man/kvinna med stöd för fler siffror á la hbtq (INT)
                    "profile_picture": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/t1/c0.0.200.200/p200x200/65061_10151199243733520_444342855_n.jpg", // URL till profilbild
                    "upForTonight": 10, // status för om man är på - ni får bestämma vilka siffror man kan ange
                    "adminlevel": 0, // vilken admin-nivå man har i cirkeln
                }
            ],
            "chat": [ // Array med gruppens chattmeddelanden
                { "message": "Hej på dig! <3<3<3", "name": "Anton Lejon", "userId": 0, "time_posted": "2014-02-08 22:46:01" }, // Meddelande 1...
                { "message": "hej", "name": "Ludvig Lejon", "userId": 1,  "time_posted": "2014-02-08 22:46:17" }, // Meddelande 2...
                { "message": "Vi är bröder. Jippi!", "name": "Anton Lejon", "userId": 0,  "time_posted": "2014-02-08 22:46:42" } // Meddelande 3...
            ]
        }
    ]
};

function extractgeos(){
    var longitude;
    var latitude ;
    var feuture =  {type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [longitude, latitude]
        },
        properties: {
            'marker-color': '#014051',
            'marker-symbol': 'star-stroked'
        }
    };
    var Feutures = [];
    var geoJson = {};
    geoJson.type = "FeatureCollection";
    geoJson.features = Feutures;
    console.log(testJson.circles)
    for (var key in testJson.circles) {
        for(var user in testJson.circles[key].users ){
      //      longitude = testJson.circles[key].users[user].longitude;
        //    latitude = testJson.circles[key].users[user].latitude;
            feuture.geometry.coordinates = [testJson.circles[key].users[user].latitude,testJson.circles[key].users[user].longitude];
            geoJson.features.push(feuture);
            console.log(feuture, "feuture");
        }
    }
    console.log(geoJson, "geojson");
    map.markerLayer.setGeoJSON(geoJson);
    map.fitBounds(map.markerLayer.getBounds());
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

//markerrender();
extractgeos();



// If the user chooses not to allow their location
// to be shared, display an error message.
map.on('locationerror', function() {
    alert('position could not be found');
});

//map.Layers.addOverlay(heat);
