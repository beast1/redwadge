var map;
function initMap() {
  
  console.log("Map start");
  
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 52.974576, lng: 37.444967},
    zoom: 5
  });
  var optrfLocation = {lat: 55.674576, lng: 37.444967};
  var optrfMarker = new google.maps.Marker({
    position: optrfLocation,
    map: map,
    title: "Большая Очаковская улица, 47, Москва, Россия"
  });
  
  console.log("Map finish");
  
  console.log("MapE start");
  
  optrfMarker.addListener("click", function() {
    $(".representatives__item")
      .removeClass("current");
    $(".representatives__item--optrf")
      .addClass("current");
  });
  
  console.log("MapE finish");
}