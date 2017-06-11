var map;
// Create a new blank array for all the listing markers.
var markers = [];
function initMap() {
  // Constructor creates a new map - only center and zoom are required.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 55.749047, lng: 37.539108},
    zoom: 13
  });
  // These are the real estate listings that will be shown to the user.
  // Normally we'd have these in a database instead.
  var locations = [
    {
      title: "<a href='http://hookah-like.ru/'>Hookah-Like.ru</a><br>+7 (918) 044-11-20<br>+7 (903) 447-22-55", 
      location: {lat: 45.0392674, lng: 38.987221} //Краснодар
    },
    {
      title: "<a href='http://www.tornado-hs.com.ua/'>Tornado-hs.com.ua</a><br>+380 (63) 104 66 93<br>Tornado_hookah_shop@mail.ru", 
      location: {lat: 50.4501, lng: 30.5234} //Киев
    },
    {
      title: "<a href='http://optrf.com/'>OPTRF.com</a><br>8-800-350-05-90<br>7-499-705-95-31<br>Info@optrf.com", 
      location: {lat: 55.749047, lng: 37.539108} //Москва
    },
    {
      title: "<a href='https://vk.com/hookahbreak55'>Hookah Break</a><br>8(913)644-77-70", 
      location: {lat: 54.9884804, lng: 73.3242361} //Омск
    }
  ];
  var largeInfowindow = new google.maps.InfoWindow();
  var bounds = new google.maps.LatLngBounds();
  // The following group uses the location array to create an array of markers on initialize.
  for (var i = 0; i < locations.length; i++) {
    // Get the position from the location array.
    var position = locations[i].location;
    var title = locations[i].title;
    // Create a marker per location, and put into markers array.
    var marker = new google.maps.Marker({
      map: map,
      position: position,
      title: title,
      animation: google.maps.Animation.DROP,
      id: i
    });
    // Push the marker to our array of markers.
    markers.push(marker);
    // Create an onclick event to open an infowindow at each marker.
    marker.addListener('click', function() {
      populateInfoWindow(this, largeInfowindow);
    });
    bounds.extend(markers[i].position);
  }
  // Extend the boundaries of the map for each marker
  map.fitBounds(bounds);
}
// This function populates the infowindow when the marker is clicked. We'll only allow
// one infowindow which will open at the marker that is clicked, and populate based
// on that markers position.
function populateInfoWindow(marker, infowindow) {
  // Check to make sure the infowindow is not already opened on this marker.
  if (infowindow.marker != marker) {
    infowindow.marker = marker;
    infowindow.setContent('<div>' + marker.title + '</div>');
    infowindow.open(map, marker);
    // Make sure the marker property is cleared if the infowindow is closed.
    infowindow.addListener('closeclick',function(){
      infowindow.setMarker = null;
    });
  }
}