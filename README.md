<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# DOCUMENTACION ANIBAL MORALES

```bash
# Creación del proyecto
nest new my-nest-project
cd my-nest-project

# Instalar las dependencias de Prisma
npm install @prisma/client
npm install -D prisma

# Inicializar Prisma
npx prisma init

# Generar el cliente de Prisma
npx prisma generate

# Ejecutar migraciones
# Cuando ejecutas el comando npx prisma migrate dev --name <nombre>, el argumento <nombre> es una etiqueta descriptiva que tú elijes para identificar la migración que estás creando. Esta etiqueta te ayuda a recordar qué cambios se incluyeron en esa migración específica.
npx prisma migrate dev --name init

```
# datasource Azure SQL
```js
datasource db {
  provider          = "sqlserver"
  url               = env("DATABASE_URL")
  shadowDatabaseUrl = env("SHADOW_DATABASE_URL")
}
```

# datasource sqlite
```js
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}
```
# .ENV
```bash
# AZURE SQL
DATABASE_URL="sqlserver://192.168.10.25;database=nest;user=sa;password=clave;trustServerCertificate=true;"
SHADOW_DATABASE_URL="sqlserver://192.168.10.25;database=nest_shadow;user=sa;password=clave;trustServerCertificate=true;"

# SQLITE
DATABASE_URL="file:./dev.db"

# SQL SERVER

# POSTGRESQL
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"

# MYSQL
```

# RESUMEN
**npx prisma generate:** Genera el cliente de Prisma basado en tu esquema.

*Cuándo Ejecutarlo:*
- Al inicializar el proyecto.
- Cada vez que hagas cambios en el esquema Prisma.
- Después de actualizar Prisma a una nueva versión.

**npx prisma migrate dev --name <nombre>:** Crea y aplica una nueva migración basada en los cambios en tu esquema Prisma.

*Cuándo Ejecutarlo:*
- Al inicializar el proyecto para crear la estructura inicial de la base de datos.
- Cada vez que realices cambios en el esquema Prisma.
- Durante el desarrollo activo para mantener la base de datos sincronizada con el esquema.