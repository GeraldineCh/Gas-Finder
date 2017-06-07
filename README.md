# Gas Finder

## Instrucciones

1. Clonar el repositorio hacia tu cuenta personal para empezar con las modificaciones.
2. Crea el componente search
3. Crea el componente stationDetails
4. Crea el componente gmap

## Objetivos

1. Construir la pantalla que permita hacer la búsqueda en tiempo real
2. Construir la pantalla que muestre el detalle de la estación
3. Hacer que se vea bien en las diferentes vistas

## Patrón de diseño de la aplicación

La principal característica de la aplicación es el uso del patrón de composición de componentes. Los componentes son entidades independientes que retornan elementos jquery los cuales se adjunta al dom para mostrarse.

Además la aplicación maneja un estado compartido (único lugar donde vamos a guardar información que se compartirá entre los distintos componentes).

Además la aplicación tiene algunas funciones extra para cargar la data de la aplicación.

## Librerias externas

Se está incluyendo las siguientes librerias:
- gmaps ([https://hpneo.github.io/gmaps/](https://hpneo.github.io/gmaps/))
- font awesome ([http://fontawesome.io/](http://fontawesome.io/))
- jquery ([https://jquery.com/](https://jquery.com/))

