var APIKey = "AIzaSyAASdEbImyKmxzYvC1Dl672n0doZmc5GPQ";
var restrict = "key=API_KEY--AIzaSyAvUKXxRGX3q5SeRGinCXnna0ALPxcEa0g";


// Initialize and add the map
function initMap() {
  var labels = "ABCDEFGH";
  var locations = [
      {lat: 46.24, lng: 10.936},
      {lat: 52.344, lng: -9.73},
      {lat: 36.344, lng: -4.036},
      {lat: 47.84, lng: 12.046}
      ];
  // The location of Uluru
  var uluru = {lat: 46.344, lng: 11.036};
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
