let mapa;

function initMap() {
  const lugares = [
    {
      nombre: "Universidad Tecnológica de Puebla",
      latitud: 19.058254567837125,
      longitud: -98.15176854635202,
    },
    {
      nombre: "Catedral de Puebla",
      latitud: 19.04275386855139,
      longitud: -98.19853892873248,
    },
    {
      nombre: "Museo del Fuerte de Loreto",
      latitud: 19.057773947180998,
      longitud: -98.18704062289943,
    },
    {
      nombre: "Fuente de los Frailes",
      latitud: 19.096620535720444,
      longitud: -98.23356690237293,
    },
  ];

  mapa = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 19.044774, lng: -98.198309 }, // Centro en Puebla
    zoom: 12, // Zoom más cercano para ver los lugares con detalle
  });

  // Agregar marcadores para los lugares
  for (const lugar of lugares) {
    agregarMarcador(lugar.nombre, lugar.latitud, lugar.longitud);
  }
}

// Agregar un marcador en el mapa
function agregarMarcador(nombre, latitud, longitud) {
  new google.maps.Marker({
    position: { lat: latitud, lng: longitud },
    map: mapa,
    title: nombre,
    draggable: true,
    animation: google.maps.Animation.DROP,
  });
}

// Trazar una ruta entre dos puntos
function trazarRuta() {
  const origen = document.getElementById("origenInput").value;
  const destino = document.getElementById("destinoInput").value;

  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();

  directionsRenderer.setMap(mapa);

  directionsService.route(
    {
      origin: origen,
      destination: destino,
      travelMode: "DRIVING",
    },
    (response, status) => {
      if (status === "OK") {
        directionsRenderer.setDirections(response);
      } else {
        window.alert("No se pudo calcular la ruta: " + status);
      }
    }
  );
}

initMap()
