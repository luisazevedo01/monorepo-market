## README

This is a monorepo containing both client and server for the traditional market personal project.

## Installation

```bash
$ pnpm install
```

## Setup a local dev PostgreSQL DataBase
```bash
# run the docker daemon ( usually done by starting the docker desktop app )
$ open --background -a Docker

# run docker-compose to start the postges serviçe
$ docker-compse up

# migrate the database to generate the tables
$ cd server
$ pnpm prisma migrate dev

# seed the database with records
$ pnpm prisma db seed
```

## Running the app

```bash
$ pnpm start:dev
```