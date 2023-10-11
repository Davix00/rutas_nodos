# <h1 align="center">  Nodos & Rutas con Google MAPS API  </h1>
## Visualización general de la página:
![image](https://github.com/Davix00/rutas_nodos/assets/59744172/bb6f7181-49d4-4d5c-96a4-5a46ad7e5a00)

### 1. Index.html
En este archivo se muestra la interfaz de la página web, como se puede ver, también   se hacen referencias como la hoja de estilos, nuestro archivo JavaScript y elementos Bootstrap.

Al final podemos visualizar las referencias para el consumo de API de Google Maps

![image](https://github.com/Davix00/rutas_nodos/assets/59744172/cc6cdebb-4696-4742-8f2d-fc93e569ca93)

### 2. main.js
Se agrega una funcion en la que se especifican las caracteristicas generales del mapa, así como su modificación.
Se crea una constante "lugares", la cual contiene un arreglo de los lugares que se van a visualizar al momento de ver la página, es decir, los nodos.

![image](https://github.com/Davix00/rutas_nodos/assets/59744172/6785a4a0-7b08-4da1-85e5-a15549e31826)

Después se crea un nuevo mapa en la cual se muestran propiedades como zoom y las coordenadas que hace que se vea el centro de la Ciudad de Puebla.

![image](https://github.com/Davix00/rutas_nodos/assets/59744172/ca02f729-8b43-4893-b18e-4b9f22d88136)

Posteriormente, se define una función llamada agregarMarcador que acepta tres parámetros: nombre, latitud y longitud. Se crea un nuevo objeto de marcador utilizando la clase google.maps.Marker. Este objeto representa el marcador en el mapa.
En la posicion se establecen las coordenadas del marcador utilizando los valores pasados como argumentos latitud y longitud.

"map: mapa"- Se asocia el marcador con el mapa identificado por la variable mapa. Esto indica en qué mapa debe aparecer el marcador.

"draggable: true," Permite que el marcador sea arrastrable, lo que significa que el usuario puede hacer clic y arrastrar el marcador a una nueva ubicación en el mapa.

Con "animation: google.maps.Animation.DROP,:" Se establece un efecto de animación para el marcador cuando se agrega al mapa.
Al final con "icon: { ... }:" Se definen las propiedades del icono del marcador.

En la url "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" Se especifica la URL de la imagen que se usará como icono del marcador. En este caso, es un marcador azul de Google Maps.

Con "scaledSize: new google.maps.Size(50, 50)" Definimos el tamaño del marcador en píxeles. En este caso, el marcador se mostrará como una imagen de 50x50 píxeles en el mapa.

![image](https://github.com/Davix00/rutas_nodos/assets/59744172/ef3f0416-6896-4ee3-bb20-0f0bf6373771)

En esta sección de código, se crea una función "trazarRuta" en la cual se calcula y mostrar una ruta en un mapa de Google Maps, gracias a los lugares de origen y destino proporcionados por el usuario a través de dos elementos con los ids "origenInput" y "destinoInput".

En "const directionsService = new google.maps.DirectionsService();" se crea un objeto del servicio de direcciones de Google Maps que se utiliza para solicitar y calcular las rutas.

"const directionsRenderer = new google.maps.DirectionsRenderer({ ... })" Se crea un objeto que se utiliza para mostrar la ruta en el mapa. Tiene ciertas configuraciones, como el color de la línea de la ruta.

En "directionsRenderer.setMap(mapa);" Se establece el mapa en el que se van a mostrar las rutas.

Para solicitar una ruta por el lugar de origen, el lugar de destino y su modo de viaje se utiliza "directionsService.route(...);: "

Con "directionsRenderer.setDirections(response);:" Se ve la ruta en el mapa utilizando la respuesta del servicio de direcciones.

Para obtener la duración del viaje y su visualizacion con el id "tiempoViaje", se utiliza "document.getElementById("tiempoViaje").textContent = "Tiempo estimado: " + duration;:".

Con una alerta "window.alert("No se pudo calcular la ruta:" + status);:" se visualiza si no se puede calcular la ruta y proporciona su estado.

Para limpiar los campos despues de calcular la ruta, se emplea "document.getElementById("origen/destinoInput").value = "";".
Por ultimo, se inicializa la función a través de "initMap();"
![image](https://github.com/Davix00/rutas_nodos/assets/59744172/33c0abf8-6718-4b27-8599-741711d421ef)

### 3. style.css
Gracias a este archivo, se le pueden dar estilos a la página, tales como el color del título, los campos que se requieren y el lugar donde se van a escribir.
De igual manera se le da estilo al botón y el tamaño del mapa.
Se le agrega un evento "hover" al botón para que resalte su letra y se vea un sombreado, así como el color del texto que marca el tiempo estimado.

![image](https://github.com/Davix00/rutas_nodos/assets/59744172/fe1b05e7-9886-4c6b-b01d-f19cbd85fbd4)


## Resultado final con trazado de ruta
![image](https://github.com/Davix00/rutas_nodos/assets/59744172/447dd17d-8c75-4557-b629-3342da7ff4c2)
