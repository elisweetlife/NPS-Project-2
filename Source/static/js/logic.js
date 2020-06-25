// Create the tile layer that will be the background of our map
//var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
//var lightmap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    var lightmap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {

        // https://TyuZrBgyshbHS2txyIXVovjDPtLAp8jYUJPSa1hf@developer.nps.gov/api/v1/parks?parkCode=acad
        
          attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
        
          maxZoom: 18,
        
          //id: "mapbox.light",
            id: "mapbox/satellite-streets-v11",
        
          accessToken: API_KEY
        });
        

        // Initialize all of the LayerGroups we'll be using
        var layers = {
          CAMPNG_SOON: new L.LayerGroup(),
          EMPTY: new L.LayerGroup(),
          LOW: new L.LayerGroup(),
          NORMAL: new L.LayerGroup(),
          OUT_OF_ORDER: new L.LayerGroup()
        };
        
        // Create the map with our layers
        
        var map = L.map("map-id", {
          //center: [40.73, -74.0059], //NYC
          center: [37.09, -95.71], //USA CENTER
          //center: [37.8651, -119.5383], //Yosemite
        
          zoom:5,
          //zoom: 12,
          layers: [
            layers.CAMPNG_SOON,
            layers.EMPTY,
            layers.LOW,
            layers.NORMAL,
            layers.OUT_OF_ORDER
          ]
        });
        
        // Add our 'lightmap' tile layer to the map
        lightmap.addTo(map);

        