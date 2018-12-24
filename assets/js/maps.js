// Initialize and add the map
function initMap() {
  var labels = "ABCDEFGH";
  var Munich = {lat: 48.13, lng: 11.58};
  var Ulm = {lat: 48.4, lng: 10.0};
  var Bergamo = {lat: 45.69, lng: 9.67};
  var Madrid = {lat: 40.41, lng: -3.7};
  var Malaga = {lat: 37.72, lng: -4.42};
  var London = {lat: 51.5, lng: 0.0};
  var Dublin = {lat: 53.34, lng: -6.3};
  var Angers = {lat: 47.5, lng: -0.5};
  
  var locations = [
      Munich, Ulm, Bergamo, Madrid, Malaga, London, Dublin, Angers
      ];
  // The location of Uluru
  var uluru = {lat: 46.344, lng: 7.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
 // var marker = new google.maps.Marker({position: uluru, map: map});
  
  var markers = locations.map(function(location, i) {
      return new google.maps.Marker({
          position: location, 
          label: labels[i % labels.length]
      });
  });
  var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    }