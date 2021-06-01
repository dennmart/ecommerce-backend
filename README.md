# Ecommerce Backend Example

An example application using [Express](https://expressjs.com/) to use for performance testing with [Artillery](https://artillery.io/).

## Setup

- Make sure you have [Node.js](https://nodejs.org/en/) and [PostgreSQL](https://www.postgresql.org/) installed.
- Install dependencies with `npm install`.
- Run the server with `npm run start`.

## Load testing

This repo contains an [Artillery](https://artillery.io/) load test script in `tests/performance/search-and-add.yml`. To run the load test:

- Modify the `config.target` setting in `tests/performance/search-and-add.yml` to point to your domain (for example, `http://localhost:3000`).
- Install Artillery (`npm install -g artillery@latest`).
- Run the test with `artillery run tests/performance/search-and-add.yml`.
