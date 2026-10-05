# Node.js Express API Template

A clean and reusable API template built with Express, TypeScript, and Zod.

This project is a **template**, not a complete application. It is intentionally
small so that developers can customize the structure, configuration, and
dependencies for their own API.

## Contents

- [Features](#features)
- [Requirements](#requirements)
- [Getting started](#getting-started)
- [Available commands](#available-commands)
- [Project structure](#project-structure)
- [CORS customization](#cors-customization)
- [Adding routes](#adding-routes)
- [Customization checklist](#customization-checklist)
- [License](#license)

## Features

- Express 5
- TypeScript with strict type checking
- Zod for environment configuration validation
- CORS configuration
- Separate application and server entry points
- Example route and controller structure
- ES modules

## Requirements

- Node.js 18 or later
- pnpm

You can use another package manager if preferred, but the repository includes a
`pnpm-lock.yaml` file and the commands below use pnpm.

## Getting started

Clone or use this repository as the starting point for your API, then install
the dependencies:

```bash
pnpm install
```

Copy or rename the provided environment example as appropriate for your
project. The current template intentionally loads the example file from
`src/.env.example` so that the example configuration is included in the
repository:

```text
src/.env.example
```

Before using this template for your own application, update the path in
[`src/config/env.ts`](src/config/env.ts) to point to the environment file you
want to use.

The example configuration contains:

```env
SERVER_PORT=3000
NODE_ENV=development
```

## Available commands

Start the development server with file watching:

```bash
pnpm dev
```

Build the TypeScript source:

```bash
pnpm build
```

Start the compiled application:

```bash
pnpm start
```

## Project structure

```text
src/
├── config/
│   ├── cors.ts
│   └── env.ts
├── controllers/
│   └── example.controller.ts
├── routes/
│   ├── example.route.ts
│   └── index.ts
├── app.ts
└── server.ts
```

The structure is only a starting point. Add, remove, or reorganize directories
as the needs of your application grow.

- `app.ts` creates and configures the Express application.
- `server.ts` starts the HTTP server.
- `config/` contains application configuration.
- `routes/` defines API routes.
- `controllers/` contains request handlers.

## CORS customization

CORS is configured in [`src/config/cors.ts`](src/config/cors.ts). The template
currently allows requests from every origin:

```ts
origin: '*',
```

This is a flexible default for a template, but it may not be appropriate for
your application. Customize it according to the clients that should be
allowed to access your API.

For a restricted list of origins, use an array instead:

```ts
origin: ['https://your-frontend.example.com', 'https://your-other-origin.example.com'],
```

The alternative is included as a comment in `src/config/cors.ts`. You should
remove or replace the wildcard configuration when your application requires
restricted access. Other CORS options can be added there as needed.

## Adding routes

The example router is exported from [`src/routes/index.ts`](src/routes/index.ts)
and mounted in [`src/app.ts`](src/app.ts). To add a new resource:

1. Create a controller in `src/controllers/`.
2. Create a router in `src/routes/`.
3. Export the router from `src/routes/index.ts`.
4. Mount the router in `src/app.ts`.
5. Add request validation and application-specific services as needed.

The example controller is intentionally minimal. Replace it with your own
domain logic or use it as a reference for the conventions you want to adopt.

## Customization checklist

Before treating the template as a production application, review and adapt:

- Environment file loading and required environment variables.
- CORS origins and other CORS options.
- Routes, controllers, and domain structure.
- Request validation and response formats.
- Error handling and logging.
- Authentication and authorization.
- Rate limiting and other security middleware.
- Health checks and graceful shutdown.
- Database, cache, queue, or external service integrations.
- Tests, linting, formatting, and CI.

There is no single configuration that is correct for every API. This template
provides a starting point and is intended to be changed by the developer using
it.

## License

This project is licensed under the MIT License. See [LICENSE.md](LICENSE.md).
