# Burguer Queen

Hoy en día el desarrollo de tecnologías para hacer más expeditos los servicios es fundamental, por lo que, dentro de un restaurant surge la necesidad de elaborar un sistema que acelere y haga más eficiente la tarea de realizar pedidos, enviarlos a cocina y entregarlos a sus respectivas mesas.


## Objetivo del proyecto 

El objetivo principal de este proyecto es elaborar un sistema web eficiente para el funcionamiento de la cadena de pedidos dentro de un restaurant usando un framework, en este caso **React**. Este sistema está diseñado exclusivamente para dos usuarios, el/la mesero/a y para el/la jefe de cocina; ambos deben interactuar con la pantalla de un dispositivo (tablet) tanto para realizar los pedidos o marcar los estados de estos. Por esta misma razón, el diseño de la interfaz es muy importante, ya que debe ser intuitiva y rápida de manejar.

## Flujo Inicial

<a href="https://imgbb.com"><img alt="flujo img" src="https://i.ibb.co/5WCs4wx/Burger-Queen-2.jpg"></a>

## Historias de Usuario

En este proyecto es primordial el trabajo por historias de usuario, ya que, cada tarea debe funcionar a la perfección para que el sistema se completamente eficiente.

- **Historia de usuario 1: Mesero/a debe poder tomar pedido de cliente** 
>Yo como mesero/a quiero tomar el pedido de un cliente para no depender de mi mala memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y que se puedan ir preparando en orden.


-  **Historia de usuario 2: Jefe de cocina debe ver los pedidos** 
> Yo como jefe/a de cocina quiero ver los pedidos de los clientes en orden y marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs que un pedido está listo para servirlo a un cliente.

-  **Historia de usuario 3: Meserx debe ver pedidos listos para servir** 
> Yo como mesero/a quiero ver los pedidos que están preparados para entregarlos rápidamente a los clientes que las hicieron.


## Proceso de diseño

Para el diseño de la interfaz, nos centramos en un formato de tablet apaisado, ya que encontramos que de esta manera los elementos tenían una mejor disposición para la navegación del usuario. Para poder determinar la ubicación de los elementos, el tamaño de las fuentes y la navegación, en una primera instancia hicimos un prototipo de baja fidelidad.

### Prototipo de Baja Fidelidad

<a  href="https://imgbb.com"><img  src="https://i.ibb.co/tm91W8f/baja01.png"  alt="Primera pantalla"></a>
En esta primera pantalla, el usuario elige como ingresar a la aplicación, como mesero/a o jefe/a de cocina.

<a  href="https://imgbb.com"><img  src="https://i.ibb.co/dKqjmPf/baja02.png"  alt="Segunda pantalla"></a>
En el caso de haber elegido **"Mesero/a"** , el navegador abre el menú de desayuno o almuerzo, según la opción que elija el usuario. En esta pantalla se visualiza el menú de desayuno, en donde se muestran las opciones del menú en tarjetas individuales, una barra lateral derecha en donde se muestra el detalle del pedido que se esta haciendo, y una barra lateral izquierda en donde se muestra el estado de pedidos realizados, estos puedes ser **"en cocina"**, **"listos para servir"** o **"entregados"**.

<a  href="https://imgbb.com"><img  src="https://i.ibb.co/BCj9XpV/baja03.png"  alt="Tercera pantalla"></a>

En esta pantalla se muestra el menú de almuerzo, con las distantas opciones en tarjetas individuales. Cabe destacar que en la barra lateral derecha, donde sale el detalle del pedido que se esta realizando, también encontramos dos inputs en donde se ingresa el nombre del cliente y su número de mesa, para que luego el mesero no tenga confusión al servirlos.

<a  href="https://imgbb.com"><img  src="https://i.ibb.co/dg1myC1/baja04.png"  alt="Cuarta pantalla"></a>

En el caso de haber elegido **"Jefe/a de cocina"**, se abre esta pantalla en donde sale el detalle de los pedidos realizados por el/la mesero/a y  un contador sobre cada pedido, del tiempo que demora desde que entra a cocina, hasta que se marca como pedido listo para ser retirado y entregado. El contador se detiene al momento de presionar sobre el botón con un "ticket" bajo cada pedido, luego el pedido pasa a una barra lateral derecha, que podrá visualizar el/la mesero/a, detallando el estado del pedido.

### Prototipo de Alta Fidelidad
A continuación veremos imágenes de las pantalla definitivas, con diseño, colores y tipografías escogidas para la interfaz de este sistema de pedidos.

<a  href="https://imgbb.com"><img  src="https://i.ibb.co/S04TSLD/alta01.png"  alt="primera pantalla"></a>
Pantalla inicial de la aplicación.

<a  href="https://imgbb.com"><img  src="https://i.ibb.co/DrDKZ9S/alta02.png"  alt="primera pantalla"></a>
Pantalla inicial de Mesero/a.

<a  href="https://imgbb.com"><img  src="https://i.ibb.co/k8d7TbP/alta03.png"  alt="primera pantalla"></a>
Pantalla menú desayuno.

<a  href="https://imgbb.com"><img  src="https://i.ibb.co/1Mjq9Nk/alta05.png"  alt="primera pantalla"></a>
Pantalla menú desayuno, donde se detalla el pedido realizado en la barra azul lateral derecha, con el botón presionado con el pedido listo para enviar a cocina.

<a  href="https://imgbb.com"><img  src="https://i.ibb.co/GRRk1GL/alta07.png"  alt="primera pantalla"></a>
Pantalla menú almuerzo. En la barra amarilla lateral izquierda, se puede ver un pedido en estado **" Servir"**

<a  href="https://imgbb.com"><img  src="https://i.ibb.co/pw7YLJG/alta09.png"  alt="primera pantalla"></a>
Pantalla menú almuerzo en donde se da la opción para elegir una de las tres proteínas posibles para la hamburguesa.

<a  href="https://imgbb.com"><img  src="https://i.ibb.co/0F3Xxkm/alta013.png"  alt="primera pantalla"></a>
Pantalla inicial **" Jefe/a de cocina"** en donde ya hay tres pedidos realizados que están en proceso de preparación.

<a  href="https://imgbb.com"><img  src="https://i.ibb.co/z5JsMw1/alta014.png"  alt="primera pantalla"></a>
Pantalla donde se presiona el botón de ticket bajo uno de los pedidos, indicando un cambio de estado, ahora el pedido pasa al estado **"Servir"**.

<a  href="https://imgbb.com"><img  src="https://i.ibb.co/4tzPc8w/alta015.png"  alt="primera pantalla"></a>
Pantalla donde se visualiza la barra amarilla lateral derecha con el pedido en estado **"Servir"**. En la pantalla general aún se visualizan los dos pedidos que están en preparación.

## Test de Usabilidad

Luego de la realización del diseño, hemos realizado test de usabilidad a dos trabajadores de una cafetería. Los cuales ambos cumplían la labor de cocina como también de mesero según variara su turno.

El test se llevó a cabo en 2 minutos por rol (_mesero y cocina_) desde una tablet, teniendo como objetivo que el usuario pudiese interactuar _en tiempo real_ y observar cuál era su reacción al relacionarse con nuestra plataforma.

Dentro de estos dos minutos, se le pidió al usuario que completara las siguientes acciones:

- _Ingresar a la vista mesero_
- _Ingresar producto a la orden_
- _Ver productos de ambos menú_
- _Completar la orden enviando pedid a cocina_

Al observar al usuario interactuando pudimos observar que la navegación a través de la aplicación fue plenamente intuitivo. Cuando le pedíamos ejecutar alguna acción sabía donde dirigirse en el espacio de la pantalla y no tuvo confusiones dentro del test.

Testimonio del usuario: _"Me gustaron mucho los colores, son muy llamativos y a su vez muy ordenado. No sobrecarga la pantalla de información a pesar de tener todo lo necesario dentro de una misma pantalla. Se siente rápido para usarlo en la práctica, me gustaría que los nombres de los productos resaltaran más."_


#### Iteración

- A partir del testimonio de los usuarios, iteramos en diseño modificando el tamaño de los nombres de los productos.

## Planificación


<a href="https://imgbb.com"><img alt="project-preview" src="https://i.ibb.co/RSHnHKG/Screen-Shot-2020-01-02-at-09-52-18.png"></a>

Para este proyecto, hemos decidido utilizar "_Projects_" de GitHub, organiznado la planificación en Milestones e Issues cada historia de usuario, así emplear metodologías ágiles en el desarrollo de nuestra plataforma.

<a href="https://imgbb.com"><img src="https://i.ibb.co/Phbz959/Screen-Shot-2020-01-02-at-09-55-27.png" alt="planificacion-preview"></a>





