# Diario de viajes

## Funcionamiento backend

### Rutas

- /entries - GET - devolverá un JSON con la lista de últimos post
- /entries - POST - creará un nuevo post y devolverá un JSON con los datos del post
- /entries/(ID) - DELETE - borrará el post con al id (ID)

### Definición de post

- id (autonumerico)
- date (datetime)
- description (text)
- place (text)
  ...
- image(text)

## Funcionamiento fronted

http://127.0.0.1:3000

- Mostrará un formulario de creación de nuevo post
- Lista de post
- Cada post con un botón de borrar
