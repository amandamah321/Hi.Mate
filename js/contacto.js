let options = {
  enableHighAccurancy: true,
  timeout: 5000,
  maximumAge: 0,
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error, options);
} else {
  alert("Servicios de geolocalización no disponibles");
}

function success(positions) {
  let latitude = positions.coords.latitude;
  let longitude = positions.coords.longitude;

  let map = L.map("map", {
    center: [latitude, longitude],
    zoom: 14,
  });

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "Hello.mate openStreetMap",
  }).addTo(map);

  let control = L.Routing.control({
    waypoints: [
      L.latLng(latitude, longitude), //valor inicial da rota
      L.latLng(38.34119131344963, -0.4931417349046349), //valor final da rota
    ],
    language: "es",
  }).addTo(map);
}

function error() {
  let map = L.map("map", {
    center: [38.34119131344963, -0.4931417349046349],
    zoom: 14,
  });

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "Hello.mate openStreetMap",
  }).addTo(map);
}
