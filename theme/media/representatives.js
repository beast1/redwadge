// Массив представителей
var stores = [
  {
    title: "Hookah-Like", 
    location: {lat: 45.0392674, lng: 38.987221}, //Краснодар
    name: "Hookah-Like",
    sites: ["http://hookah-like.ru/"],
    phones: [
      "+7 (918) 044-11-20", 
      "+7 (903) 447-22-55"
    ],
    emails: []
  },
  {
    title: "Tornado-hs", 
    location: {lat: 50.4501, lng: 30.5234}, //Киев
    name: "Tornado-hs",
    sites: ["http://www.tornado-hs.com.ua/"],
    phones: ["+8 (063) 104 66 93"],
    emails: ["Tornado_hookah_shop@mail.ru"]
  },
  {
    title: "OPTRF", 
    location: {lat: 55.749047, lng: 37.539108}, //Москва
    name: "OPTRF",
    sites: ["http://optrf.com/"],
    phones: [
      "+8 (800) 350-05-90", 
      "+7 (499) 705-95-31"
    ],
    emails: ["Info@optrf.com"]
  },
  {
    title: "Hookah Break", 
    location: {lat: 54.9884804, lng: 73.3242361}, //Омск
    name: "Hookah Break",
    sites: ["https://vk.com/hookahbreak55"],
    phones: ["+8 (913) 644-77-70"],
    emails: []
  }
]

// Генерируем инфо-окно
function createInfo(id) {
  var body = document.querySelector(".map__info");
  var exit = document.querySelector(".map__info-exit");
  var title = document.querySelector(".map__info-title");

  //Генерируем контакты
  function createList(listSelector, itemSelector, hrefVal, arr) {
    var infoList = document.querySelector(listSelector);

    //Уберем класс скрытия, на случай если при прошлых открытиях некоторые поля были скрыты
    infoList.classList.remove("hide");

    // Если параметр магазина имеет менее одного значения, скрыть его
    if (arr.length == 0) {
      infoList.classList.add("hide");
    } else {
      // Сгенерируем строку для каждого значения в массиве значений параметра
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] != undefined) {
          var info = document.createElement("a");
          info.classList.add("map__info-item", itemSelector);
          info.setAttribute("href", hrefVal + arr[i]);
          info.textContent = arr[i];
          infoList.appendChild(info);

          //Если значение в массиве не последнее, добавить после него перенос стоки
          if (i != (arr.length - 1)) {
            var wrap = document.createElement("br");
            infoList.appendChild(wrap);
          }
        }
      }
    }
  }

  // Выведем название магазина
  title.textContent = stores[id].name;

  // На случай если окно уже открывалось, найдем все поля и переносы, сгенерированные тогда и удалим
  var beforeItems = document.querySelectorAll(".map__info-item");
  var beforeSpaces = document.querySelectorAll(".map__info br");

  beforeItems.forEach(function(item, i, arr) {
    item.remove();
  });

  beforeSpaces.forEach(function(item, i, arr) {
    item.remove();
  });

  // Инициируем функцию генерации полей для каждого типа контактов
  createList(".map__phones", "map__phones-item", "tel:", stores[id].phones);
  createList(".map__emails", "map__emails-item", "mailto:", stores[id].emails);
  createList(".map__sites", "map__sites-item", "", stores[id].sites);

  // Дадим кнопке закрытия скрипт для закрытия окна
  exit.addEventListener("click", function(e) {
    e.preventDefault();
    
    body.classList.remove("visible");

    markers.forEach(function(item, i, arr) {
      item.setAnimation(null);
    });
  });

  //Покажем сгенерированное окно
  body.classList.add("visible");
}

var map;
var markers = [];

function initMap() {

  // Создадим карту
  // Constructor creates a new map - only center and zoom are required.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 55.749047, lng: 37.539108},
    zoom: 13,
    mapTypeId: 'satellite',
    scrollwheel: false,
    fullscreenControl: false
  });

  // Создадим массив локаций
  // These are the real estate listings that will be shown to the user.
  // Normally we'd have these in a database instead.
  var locations = [];

  // Зальем в массив локаций необходимые параметры из массива магазинов
  for (var i = 0; i < stores.length; i++) {
    locations.push({});
    locations[i].title = stores[i].title;
    locations[i].location = stores[i].location;
  }

  var largeInfowindow = new google.maps.InfoWindow();
  var bounds = new google.maps.LatLngBounds(); 

  // Создадим маркеры для кадой локации в массиве локаций
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

    // По клику на маркер вызовем инфо-окно
    // Create an onclick event to open an infowindow at each marker.
    marker.addListener('click', function() {
      populateInfoWindow(this, largeInfowindow);


    });

    // marker.addListener('click', toggleBounce);

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

    // Вызовем инфо-окно
    createInfo(marker.id);

    // Включим анимацию маркера
    toggleBounce(marker);
  }
}

// Функция анимации маркера
function toggleBounce(marker) {
  // На случай, если анимация ууже включалась, заберем ее у всех маркеров
  markers.forEach(function(item, i, arr) {
    item.setAnimation(null);
  });

  // Включим анимацию
  marker.setAnimation(google.maps.Animation.BOUNCE);
}