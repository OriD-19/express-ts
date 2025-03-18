# Tutorial para la creación del proyecto de Express + TypeScript
Desarrollo web II, 18/03/2025

## Configurar el servidor de desarrollo

Instalamos los siguientes paquetes dentro de nuestro proyecto:

```npm install -D tsx```
```npm install -D @types/express```

Luego, corremos el comando `npm run dev` para ejectuar el servidor con TypeScript instalado.

## Conexión a MongoDB

Mongoose es un ODM para Node, lo que nos facilita la comunicación entre la base de datos y nuestro servidor.
Las entidades de la base de datos se definen mediante *Schemas*, que contienen los atributos y las funcionalidades necesarias para interactur con ellos desde el código. Estos se "mappean", o se corresponden directamente con algún tipo de dato dentro del gestor de base de datos (en este caso, MongoDB).

### Setup

Primero, creamos una cuenta de MongoDB Atlas (conectada con Google). Desplegamos un Cluster con la configuración predeterminada, y debemos guardar la contraseña de usuario que nos brinda la plataforma.

Después, MongoDB Atlas nos dará las instrucciones para conectarnos y nuestro "connection string".

Ahora, ejecutamos el comando de instalación para Mongoose.

```npm install mongoose```

## Configurar la base de datos en Node

Finalmente, debemos configurar el archivo `db.ts` para incluir nuestras credenciales en el connection string.

Esta tiene la siguiente forma:
```mongodb+srv://<db_username>:<db_password>@backend-db.4dyny.mongodb.net/?retryWrites=true&w=majority&appName=backend-db```

Como se puede ver, debemos modificar los valores de "db_username" y "db_password" para que se adecúen a las credenciales que hemos generado en el paso anterior.

Para seguir mejores prácticas, he creado un archivo `.env` en la raíz del proyecto, donde iría toda la información sensible (como el nombre de usuario y la contraseña de la base de datos). Además, debemos instalar un paquete adicional para las variables de entorno:

```npm install dotenv --save```