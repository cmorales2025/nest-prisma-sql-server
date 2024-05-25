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

## Configuración base de datos
```bash
# POSTGRESQL
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"

# SQL SERVER
DATABASE_URL="sqlserver://username:password@localhost:1433;database=mydatabase;encrypt=true"
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