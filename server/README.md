## README

Backend service writeen in Typescript, using Prisma ORM, a PostgreSQL Database and:

  <p align="center"><b><a style="color: white" href="https://nestjs.com/" target="_blank">NestJS:</a></b> A progressive <a style="color: white" href="http://nodejs.org" target="_blank">node.js</a> framework for building efficient and scalable server-side applications.</p>

<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy"></a>
</p>

## Installation

```bash
$ yarn install
```

## Setup a local dev PostgreSQL DataBase
```bash
# run the docker daemon ( usually done by starting the docker desktop app )
$ open --background -a Docker

# run docker-compose to start the postges serviçe
$ docker-compse up

# migrate the database to generate the tables
$ pnpm prisma migrate dev

# seed the database with records
$ pnpm prisma db seed
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Development

- Update the database in:  __*/prisma/schema.prisma*__
```bash
# prisma dev migration
$ yarn prisma migrate dev --name migration_name

# nest resource generation
$ nest generate resource resource_name           
```
- Edit the __*resource/resource_name.graphql*__

- Rerun the app ```$ yarn start:dev```



## Prisma ORM Studio
```bash
# setup prisma studio
$ yarn prisma studio
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
