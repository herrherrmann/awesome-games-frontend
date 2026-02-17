# Awesome Multiplayer Games Frontend

[![Netlify status badge](https://api.netlify.com/api/v1/badges/59004dbe-87e5-4334-af70-beef1ced5499/deploy-status)](https://app.netlify.com/sites/awesome-games/deploys)
[![Lint status badge](https://github.com/herrherrmann/awesome-games-frontend/actions/workflows/lint.yml/badge.svg)](https://github.com/herrherrmann/awesome-games-frontend/actions/workflows/lint.yml)

The webapp for the [Awesome Multiplayer Games website](https://multiplayer.page), connecting to the [awesome-games-api](https://github.com/herrherrmann/awesome-games-api-v2).

![Screenshot](./screenshot.jpg)

## Setup

1. Install the node version defined in `.nvmrc` (e.g. via `nvm install` or `nvm use`)
2. Install dependencies via `npm install`
3. Copy `.env.example` to `.env` and replace the variables

## Available Scripts

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run format`

Format the code with Prettier.

### `npm run lint`

Lint the code with ESLint.

### `npm run build`

Builds the app for production to the `build` folder.
