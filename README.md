# Huellitas: Adopción de mascotas

## Descripción

Huellitas es una plataforma web dedicada a facilitar el proceso de adopción de mascotas, específicamente perros y gatos. Mi objetivo es proporcionar un espacio donde los refugios y personas particulares puedan publicar información sobre animales que necesitan un hogar o se encuentran perdidos, también donde las personas interesadas en adoptar puedan buscar y encontrar a su nuevo compañero o quienes busquen la ubicación de su mascota tal vez pueda encontrarla publicada.

La plataforma permite a los usuarios:

- Buscar mascotas disponibles para adopción: La página principal muestra una lista de todas las mascotas disponibles para adopción. Cada mascota se muestra en una tarjeta individual, que se genera utilizando el componente `Card`. Al hacer clic en una tarjeta, los usuarios son redirigidos a una página con más detalles sobre la mascota seleccionada.
- Publicar información sobre mascotas que necesitan un hogar: Los usuarios registrados pueden agregar nuevas mascotas a la plataforma. Esto se realiza a través de un formulario de registro de mascotas, al que se puede acceder a través de un botón en la página principal.
- Crear y gestionar su cuenta de usuario: Los usuarios pueden registrarse e iniciar sesión en la plataforma. 
- Contactar con los dueños o refugios para iniciar el proceso de adopción.

Huellitas está construida con React y utiliza React Router para la navegación. La información de las mascotas se obtiene de una API externa creada por mi a la cual puede acceder a su repositorio con este [link](https://github.com/aledjv22/db-huellitas "link"), y se utilizan hooks personalizados para realizar las diversas operaciones

## Navegación en la página web

### Barra de navegación

Huellitas cuenta con una barra de navegación superior que se adapta tanto a dispositivos móviles como a pantallas de escritorio.

#### Barra de navegación en escritorio

En la versión de escritorio, la barra de navegación se encuentra en la parte superior de la página y se mantiene fija mientras se desplaza por la página. Contiene los siguientes elementos:

- **Logo: **Al hacer clic en el logo, se restablecen todos los filtros de búsqueda y se cierra cualquier submenú abierto.

- **Todos**: Este enlace lleva a la página principal y abre un submenú que permite filtrar la búsqueda por tipo, sexo, estado y tamaño de las mascotas.

- **Perros:** Este enlace filtra la búsqueda para mostrar solo perros y abre un submenú similar al anterior.

- **Gatos:** Este enlace filtra la búsqueda para mostrar solo gatos y abre un submenú similar al anterior.

- **Registrarse:** Este enlace solo es visible si el usuario no ha iniciado sesión. Lleva a la página de registro.

- **Ingresar:** Este enlace solo es visible si el usuario no ha iniciado sesión. Lleva a la página de inicio de sesión.

- **Mi Cuenta:** Este enlace solo es visible si el usuario ha iniciado sesión. Lleva a la página de la cuenta del usuario.

A continuación imagenes del mismo:

![navbar-Desktop](https://i.ibb.co/3RCsvV6/navbar-Desktop.png "navbar-Desktop")
Barra de navegación de escritorio

![submenu-Navbar-Desktop](https://i.ibb.co/Jpd081t/sub-Menu-Navbar-Desktop.png "submenu-Navbar-Desktop")
Submenú de filtrado

#### Barra de navegación en móviles

En la versión móvil, la barra de navegación se convierte en un menú desplegable que se puede abrir y cerrar haciendo clic en el icono del menú. Contiene los mismos elementos que la versión de escritorio, pero están organizados verticalmente en lugar de horizontalmente. Además, los enlaces "Registrarse", "Ingresar" y "Mi Cuenta" se muestran dentro del menú desplegable en lugar de en la barra de navegación.

A continuación imagenes del mismo:

![navbar-Mobile](https://i.ibb.co/c83mtxJ/navbar-Mobile.jpg "navbar-Mobile")
Barra de navegación de móvil

![navbar-Mobile-Open](https://i.ibb.co/C5xc2J5/nabvar-Mobile-open.jpg "navbar-Mobile-Open")
Barra de navegación móvil desplegada

![navbar-Mobile-Open-SumbmenuOpen](https://i.ibb.co/smKcgYW/nav-Bar-Mobile-submenuopen.jpg "navbar-Mobile-Open-SumbmenuOpen")
Submenú de filtrado despegado

### Página principal

La página principal de Huellitas presenta una lista de mascotas disponibles para adopción y en otros estados. Esta lista se adapta tanto a dispositivos móviles como a pantallas de escritorio.

#### Navegación en escritorio
En la versión de escritorio, la lista de mascotas se muestra en una cuadrícula con varias tarjetas por fila. Cada tarjeta representa una mascota y contiene una imagen de la mascota, su nombre y su tipo. Al hacer clic en una tarjeta, se redirige al usuario a una página de detalles para esa mascota.

Si el usuario ha iniciado sesión, se muestra un botón flotante en la parte inferior derecha de la pantalla. Este botón permite al usuario registrar una nueva mascota. Si el usuario no ha iniciado sesión, al hacer clic en este botón se le redirige a la página de inicio de sesión.

![home-desktop](https://i.ibb.co/gwqyQt1/home.png "home-desktop")
Vista de la página principal desde un escritorio.

#### Navegación en móviles
En la versión móvil, la lista de mascotas se muestra en una cuadrícula con una sola tarjeta por fila. Al igual que en la versión de escritorio, al hacer clic en una tarjeta se redirige al usuario a una página de detalles para esa mascota.

El botón para registrar una nueva mascota se muestra de la misma manera que en la versión de escritorio.

Si no se encuentran mascotas que coincidan con los criterios de búsqueda del usuario, se muestra un mensaje que indica que no se han encontrado resultados. Este mensaje se adapta a la pantalla del dispositivo y se muestra de manera prominente para que el usuario pueda verlo fácilmente.

![home-mobile](https://i.ibb.co/WxV31sL/home-mobile.png "home-mobile")
Vista de la página principal desde un dispositivo móvil.

### Página de detalle de mascota
La página de detalle de mascota es una de las páginas más importantes de la aplicación. Aquí es donde los usuarios pueden ver información detallada sobre una mascota específica. La página se adapta tanto para dispositivos móviles como para escritorio.

- **Botones de Edición y Eliminación:** Si el usuario está autenticado y es el dueño de la mascota, verá dos botones en la parte superior de la página: "Editar" y "Eliminar". Al hacer clic en "Editar", el usuario puede modificar los detalles de la mascota. Al hacer clic en "Eliminar", la mascota se eliminará de la base de datos.

- **Información de la Mascota:** A continuación, se muestra la información detallada de la mascota, incluyendo su nombre, edad, sexo, tamaño, tipo, estado, ubicación y fecha de ingreso.

- **Descripción de la Mascota:** Debajo de la información de la mascota, se encuentra una descripción detallada de la mascota.

- **Galería de Imágenes:** A continuación, se muestra una galería de imágenes de la mascota.

- **Información de la Fundación:** Si la mascota pertenece a una fundación, se muestra información detallada sobre la fundación.

- **Formulario de Contacto:** En la parte inferior de la página, hay un formulario de contacto que los usuarios pueden utilizar para ponerse en contacto con el dueño de la mascota.

![petDetailDesktop1](https://i.ibb.co/dt4SnGL/pet-Detail-Desktop1.png "petDetailDesktop1")

![petDetailDesktop2](https://i.ibb.co/SmG1N9c/pet-Detail-Desktop2.png "petDetailDesktop2")
Capturas de la ruta de detalles de mascotas vistas desde un escritorio.

![petDetailMobile1](https://i.ibb.co/tJMr9k9/pet-Detail-Mobile1.png "petDetailMobile1")

![petDetailMobile2](https://i.ibb.co/tz6Zs4Q/pet-Detail-Mobile2.png "petDetailMobile2")
Capturas de los detalles de las mascotas vistas desde un móvil.

### Página de registro de mascotas

La página de registro de mascotas es donde los usuarios pueden registrar una nueva mascota en la aplicación. La página se adapta tanto para dispositivos móviles como para escritorio.

- **Formulario de Registro:** El formulario de registro es el elemento principal de la página. Aquí, los usuarios pueden ingresar la información de la mascota, incluyendo su nombre, estado, ubicación, sexo, edad, descripción, tipo, tamaño, imagen principal y otras imágenes.

- **Botón de Registro:** Una vez que el usuario ha llenado toda la información requerida, puede hacer clic en el botón "Registrar mascota" para enviar el formulario. Si el registro es exitoso, se mostrará un mensaje de éxito.

- **Mensaje de Éxito:** Si el registro es exitoso, se mostrará un mensaje de éxito con un botón que lleva al usuario a la página de detalles de la mascota recién registrada.

![petRegisterDesktop](https://i.ibb.co/vhnJJK2/pet-Register-Desktop.png "petRegisterDesktop")
Imagen del formulario de registro de mascotas desde un escritorio.

![petRegisterMobile](https://i.ibb.co/qDg9Z1H/pet-Register-Mobile.png "petRegisterMobile")
Imagen del formulario de registro de mascotas desde un móvil.

### Página de inicio de sesión 

La página de inicio de sesión es donde los usuarios pueden iniciar sesión en la aplicación. La página se adapta tanto para dispositivos móviles como para escritorio.

- **Formulario de Inicio de Sesión:** El formulario de inicio de sesión es el elemento principal de la página. Aquí, los usuarios pueden ingresar su correo electrónico y contraseña.

- **Botón de Inicio de Sesión:** Una vez que el usuario ha llenado toda la información requerida, puede hacer clic en el botón "Iniciar sesión" para enviar el formulario. Si el inicio de sesión es exitoso, se mostrará un mensaje de éxito.

- **Mensaje de Éxito:** Si el inicio de sesión es exitoso, se mostrará un mensaje de éxito con un botón que lleva al usuario a la página principal.

- **Recuperación de Contraseña:** Si el usuario olvidó su contraseña, puede hacer clic en el enlace "¿Olvidaste tu contraseña?" para ir a la página de recuperación de contraseña.

![signInDesktop](https://i.ibb.co/C8nvxjJ/sign-In-Desktop.png "signInDesktop")
Vista desde un escritorio de la solicitud de ingreso.

![signInMobile](https://i.ibb.co/CnQ9r2B/sign-In-Mobile.png "signInMobile")
Vista desde un móvil de la solicitud de ingreso.

### Página de Registro

La página de Registro (SignUp) es donde los usuarios pueden crear una nueva cuenta en la aplicación. La página se adapta tanto para dispositivos móviles como para escritorio.

- **Formulario de Registro:** El formulario de registro es el elemento principal de la página. Aquí, los usuarios pueden ingresar su nombre, apellido, correo electrónico, contraseña y otros datos opcionales como teléfono, foto de perfil y detalles de la fundación (si representan a una).

- **Botón de Registro:** Una vez que el usuario ha llenado toda la información requerida, puede hacer clic en el botón "Crear cuenta" para enviar el formulario. Si el registro es exitoso, se mostrará un mensaje de éxito.

- **Mensaje de Éxito:** Si el registro es exitoso, se mostrará un mensaje de éxito con un botón que lleva al usuario a la página de inicio de sesión.

![signUpDesktop](https://i.ibb.co/mTVZKNv/sign-Up-Desktop.png "signUpDesktop")
Visualización desde el escritorio.

![signUpMobile](https://i.ibb.co/sKDfPX0/sign-Up-Mobile.png "signUpMobile")
Visualización desde un móvil

### Página de recuperación de contraseña 

La página de Recuperación de Contraseña es donde los usuarios pueden cambiar su contraseña si la han olvidado. La página se adapta tanto para dispositivos móviles como para escritorio.

- **Formulario de Cambio de Contraseña:** El formulario de cambio de contraseña es el elemento principal de la página. Aquí, los usuarios pueden ingresar su nueva contraseña y confirmarla.

- **Botón de Cambio de Contraseña:** Una vez que el usuario ha llenado toda la información requerida, puede hacer clic en el botón "Cambiar contraseña" para enviar el formulario. Si el cambio de contraseña es exitoso, se mostrará un mensaje de éxito.

- **Mensaje de Éxito:** Si el cambio de contraseña es exitoso, se mostrará un mensaje de éxito con un botón que lleva al usuario a la página de inicio de sesión.

![Captura del sistema de recuperación de contraseña en escritorio](https://i.ibb.co/3cLZpWb/recovery-Desktop.png)
Captura del sistema de recuperación de contraseña en escritorio.

![recoveryMobile](https://i.ibb.co/qp1gLvR/recovery-Mobile.png "recoveryMobile")
Captura del sistema de recuperación de contraseña en móvil.

### Página de mi cuenta

La página de mi cuenta es donde los usuarios pueden ver y editar su información personal, así como ver sus mascotas. La página se adapta tanto para dispositivos móviles como para escritorio.

- **Datos Personales:** Al hacer clic en "Datos Personales", se muestra la información personal del usuario.

- **Editar Perfil:** Al hacer clic en "Editar Perfil", se muestra un formulario que permite al usuario editar su información personal.

- **Mis Mascotas:** Al hacer clic en "Mis Mascotas", se muestra una lista de las mascotas del usuario.

- **Cerrar sesión:** Al hacer clic en "Cerrar sesión", el usuario cierra la sesión y se redirige a la página de inicio.

![myAccountDesktop](https://i.ibb.co/bddHvws/my-Account-Desktop.png "myAccountDesktop")
Vista de la cuenta del usuario desde un escritorio.

![myAccountMobile](https://i.ibb.co/6JFQZ8D/my-Account-Mobile.png "myAccountMobile")
Vista de la cuenta del usuario desde un móvil.

### Pie de página (Footer)

El pie de página (Footer) es donde los usuarios pueden encontrar información adicional sobre la página y el creador. El diseño del pie de página se adapta tanto para dispositivos móviles como para escritorio.

- **Derechos de Autor:** Se muestra un mensaje de derechos de autor que indica que todos los derechos están reservados.

- **Información del Creador:** Se muestra un mensaje que indica quién creó la página y por qué. Este mensaje incluye un enlace al perfil de Twitter del creador.

![footerDesktop](https://i.ibb.co/rydjSY3/footer-Desktop.png "footerDesktop")
Footer capturado desde un escritorio.

![footerMobile](https://i.ibb.co/d20grtq/footer-Mobile.png "footerMobile")
Footer capturado desde un móvil.

## Instalación

Para instalar Huellitas, sigue estos pasos:

1. Clona el repositorio.

2. Instala las dependencias usando `npm install`.

3. Inicia el servidor de desarrollo usando `npm run dev`.


## Uso

Huellitas es una página web diseñada para fomentar la adopción de perros y gatos, sin embargo, actualmente existe una limitación técnica que afecta la visualización del contenido de las mascotas directamente desde esta documentación.

Para acceder al contenido completo de las mascotas disponibles para adopción, por favor visita [Huellitas](https://www.huellitas.live/) en tu navegador. Ten en cuenta que debido a restricciones en la base de datos, el acceso directo a ciertas rutas desde esta documentación no está disponible en este momento.

Una vez en la página, podrás explorar las diferentes secciones dedicadas a perros y gatos disponibles para adopción. También podrás realizar búsquedas, filtrar resultados y ponerte en contacto con los refugios para obtener más información sobre las mascotas disponibles.

## Tecnologías

- React
- React Router
- Hooks
- Tailwind CSS
- HTML
- JavaScript

## Contribución

¡Estamos abiertos a contribuciones! Si deseas contribuir a Huellitas, te agradecemos tu interés y te pedimos que sigas estas pautas para enviar tus contribuciones de manera efectiva:

1. **Fork del repositorio:** Haz un fork del repositorio en GitHub haciendo clic en el botón "Fork" en la esquina superior derecha de esta página. Esto creará una copia del repositorio en tu propia cuenta.

2. **Clona tu fork:** Clona tu fork del repositorio a tu máquina local. Puedes hacerlo ejecutando el siguiente comando en tu terminal:

3. **Crea una nueva rama:** Antes de comenzar a hacer cambios, crea una nueva rama para tu contribución. Esto ayudará a mantener tu trabajo separado de la rama principal del repositorio. Puedes hacerlo ejecutando el siguiente comando:
```bash
git checkout -b nombre-de-tu-funcionalidad
```

4. **Realiza tus cambios:** Haz los cambios necesarios en tu código para implementar la funcionalidad que deseas agregar o corregir. Asegúrate de seguir las pautas de estilo y las mejores prácticas de codificación del proyecto.

5. **Haz commit de tus cambios:** Una vez que hayas terminado de hacer tus cambios, haz commit de ellos con un mensaje descriptivo. Puedes hacerlo ejecutando los siguientes comandos:
```bash
git add .
git commit -m "Agrega una descripción breve de tus cambios"
```

6. **Envía tus cambios:** Después de hacer commit de tus cambios, es hora de enviarlos a tu repositorio en GitHub. Puedes hacerlo ejecutando el siguiente comando:
```bash
git push origin nombre-de-tu-funcionalidad
```

7. **Abre una solicitud de extracción (Pull Request):** Una vez que tus cambios estén en tu fork del repositorio en GitHub, puedes abrir una solicitud de extracción para enviar tus cambios al repositorio original. Ve a la página de tu fork en GitHub y haz clic en el botón "Compare & pull request". Asegúrate de proporcionar una descripción detallada de tus cambios en la solicitud de extracción.

Una vez que hayas enviado tu solicitud de extracción, estaremos encantados de revisar tus cambios y fusionarlos en el repositorio principal si son apropiados. ¡Gracias por contribuir a Huellitas!

## Licencia

Huellitas está bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más información.

## Autor

[Victor Alejandro Díaz Jáuregui](https://twitter.com/v_alediaz_ "Victor Alejandro Díaz Jáuregui")