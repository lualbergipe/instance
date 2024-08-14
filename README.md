# Instance app


## Características

- La aplicación contiene dos rutas principales home y ordenes, se escribes otra ruta diferente a estas dos el sistema te redirecciona a la pagina 404
- Topbar que muestra el nombre del usuario que agregamos desde el home del sitio construido con la libreria react bootstrap, este nombre de usuario funciona como un dropdown que si lo desplegamos nos muestra la opcion de cerrar sesión para borrar los datos del contexto.
- Sidebar donde tenemos el menu principal del sitio, construido con css
- En la ruta Home tenemos un resumen de ventas, este componente contiene datos quemados y es un componente estilizado desde su propio archivo css, ademas de contener un formulario con un campo para ingresar el nombre de usuario que al tener datos almacenados desaparece y muestra el nombre en el Topbar, esto gracias al contexto de react que estamos utilizando, el contexto contiene dos funciones (login y logout) ademas de dos variables una auth y otra username que almacenan un booleano y el nombre del usuario que agregamos desde el input del home. Ademas tenemos un hook personalizado llamado useUser que lo usamos para acceder a los datos del contexto, de esta manera persistimos los datos en las paginas del sitio.
- el la pagina orders tenemos una tabla que nos muestra la data que consumimos desde la api proporcionada, tenemos un loader que se muestra cuando estamos cargando la data y los filtros que se requieren uno para filtrar los numeros de orden y un dropdown para filtrar por el canal de venta, ademas se hace una funcion llamada chanelFilter para generar una lista donde filtramos  los canales de ventas y quitamos los valores duplicados y la renderizamos en el dropdown de esta manera esta lista es dinamica, finalmente la tabla que mjuestra los datos de las ordenes tienen un boton de detalla que despliega una ventana modal mostrando la información completa de cada orden  

## Tecnologías y librerias Utilizadas


- React
- typescript
- Bootstrap para React
- React icons
- react-router-dom
- formik
- Yup

## Instalación

Proporcione un paso a paso para configurar el entorno de desarrollo local:

##  Nota importante: Antes de ejecutar el proyecto se debe crear un fichero en la raiz del proyecto con el nombre .env y agregar las variables de esta manera:

REACT_APP_URL_BASE=URL_API<br />
REACT_APP_API_KEY=API_KEY<br />
REACT_APP_TOKEN=TOKEN<br />

```bash
git clone https://github.com/lualbergipe/instance
cd repositorio
npm install
npm start