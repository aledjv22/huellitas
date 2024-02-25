# Huellitas: Adopción de mascotas

## Descripción

Huellitas es una plataforma web dedicada a facilitar el proceso de adopción de mascotas, específicamente perros y gatos. Mi objetivo es proporcionar un espacio donde los refugios y personas particulares puedan publicar información sobre animales que necesitan un hogar o se encuentran perdidos, también donde las personas interesadas en adoptar puedan buscar y encontrar a su nuevo compañero o quienes busquen la ubicación de su mascota tal vez pueda encontrarla publicada.

La plataforma permite a los usuarios:

- Buscar mascotas disponibles para adopción: La página principal muestra una lista de todas las mascotas disponibles para adopción. Cada mascota se muestra en una tarjeta individual, que se genera utilizando el componente `Card`. Al hacer clic en una tarjeta, los usuarios son redirigidos a una página con más detalles sobre la mascota seleccionada.
- Publicar información sobre mascotas que necesitan un hogar: Los usuarios registrados pueden agregar nuevas mascotas a la plataforma. Esto se realiza a través de un formulario de registro de mascotas, al que se puede acceder a través de un botón en la página principal.
- Crear y gestionar su cuenta de usuario: Los usuarios pueden registrarse e iniciar sesión en la plataforma. 
- Contactar con los dueños o refugios para iniciar el proceso de adopción.

Huellitas está construida con React y utiliza React Router para la navegación. La información de las mascotas se obtiene de una API externa creada por mi a la cual puede acceder a su repositorio con este [link](https://github.com/aledjv22/db-huellitas "link"), y se utilizan hooks personalizados para realizar las diversas operaciones

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