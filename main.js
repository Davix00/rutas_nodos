let mapa;

// Funcion initMap para especificar todas las caracteristicas del mapa y crearlo.
function initMap() {
  // Arreglo de los lugares que se van a mostrar al principio.
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
    {
      nombre: "Casita de Perla",
      latitud: 18.95295,
      longitud: -98.2433,
    },
    {
      nombre: "Casita de David",
      latitud: 19.062275,
      longitud: -98.188391,
    },
  ];
  
  // Creamos un nuevo mapa.
  mapa = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 19.044774, lng: -98.198309 }, // Cordenadas centrales del mapa {Centro de Puebla}.
    zoom: 10, // Zoom del mapa.
  });

  for (const lugar of lugares) {
    agregarMarcador(lugar.nombre, lugar.latitud, lugar.longitud);
  }
}

// Funcion para creear los marcadores.
function agregarMarcador(nombre, latitud, longitud) {
  const marker = new google.maps.Marker({
    position: { lat: latitud, lng: longitud }, // Coordenadas del marcador.
    map: mapa, // El lugar a donde se va añadir.
    title: nombre, // Nombre del marcador.
    draggable: true, // Propiedad para que sea arrastrable.
    animation: google.maps.Animation.DROP,
    icon: {
      url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png', // URL de la imagen del marcador
      scaledSize: new google.maps.Size(50, 50), // Tamaño del marcador
    }
  });
  //new google.maps.Marker({

}

// Trazar una ruta entre dos puntos.
function trazarRuta() {
  // Treamos los lugares al que le vamos a crear la ruta.
  const origen = document.getElementById("origenInput").value;
  const destino = document.getElementById("destinoInput").value;
  

  // Servicio que solicita las rutas y las calcula.
  const directionsService = new google.maps.DirectionsService();
  // Servicio que muestra las rutas en el mapa.
  const directionsRenderer = new google.maps.DirectionsRenderer({
    polylineOptions: {
      strokeColor: '#aa6581' // Cambia '#FF0000' al color que desees para la línea de la ruta
    },});

  // Establecemos el lugar donde se van a renderizar las rutas.
  directionsRenderer.setMap(mapa);
  
  // Le damos las direcciones para que sean calculadas.
  directionsService.route(
    {
      origin: origen,
      destination: destino,
      travelMode: "DRIVING", // Tipo de ruta que se va a calcular {WALKING', 'BICYCLING', o 'TRANSIT}.
    },
    (response, status) => { // Evaluamos el http status code.
      if (status === "OK") {
        directionsRenderer.setDirections(response); // Renderizamos la ruta.

        // Obtenemos la duración del viaje desde la respuesta.
        const duration = response.routes[0].legs[0].duration.text;

        document.getElementById("tiempoViaje").textContent = "Tiempo estimado: " + duration; // Rendirezamos la ruta.
      } else {
        window.alert("No se pudo calcular la ruta:" + status); // Mostramos un mensjae de error. 
      }
    }
  );
  document.getElementById("origenInput").value = "";
  document.getElementById("destinoInput").value = "";
}

initMap(); //Inicializamos la funcion que creea el mapa.
