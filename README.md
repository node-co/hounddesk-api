# pkg-template

The best starting point for your new Node project

## Installation

This is a GitHub template repository [Read more](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template)

It provides basic foundations for package authors, but it can be used as a good starting point for your Node.js application

Before using, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 10.16.3 or higher is recommended.

## Available utilities enabled by default

- TypeScript
- Testing with [Jest](https://jestjs.io/) and [Tap reporter](https://www.npmjs.com/package/jest-tap-reporter)
- TypeScript linting using eslint
- TypeScript watch mode using ts-node-dev
- Formatting using Prettier
- Pre-commit hook using Husky (will run linter, formatting and unit tests before each commit)

## VSCode support

- Format on save / type enabled by default using Prettier
- Prettier extension configuration, [Read more](https://github.com/prettier/prettier-vscode)

## Conventions

- Source folder: src
- Output directory: dist
- Sourcemaps enabled by default
- Jest current file: Unit test debugging command for VSCode
- Debug: Node debugging command for VSCode
- All the eslint plugins are using the recommended defaults

## Available commands

### Start in development mode (watch mode with automatic restart)

```bash
$ npm run dev
```

### Build TypeScript

```bash
$ npm run build
```

### Build TypeScript in watch mode (without automatic restart)

```bash
$ npm run build:watch
```

### Run unit tests

```bash
$ npm test
```

### Run linter

```bash
$ npm run lint
```

### Run linter with auto fix

```bash
$ npm run lint:fix
```

### Run tests with coverage report

```bash
$ npm run coverage
```

## VSCode developer suggested extensions

The following extensions works great alongside with this setup:

- [Prettier](https://github.com/prettier/prettier-vscode)
- [Jest](https://github.com/jest-community/vscode-jest) - once installed, enable the runner >> Jest > Start runner

## Usage for publishing packages

The recommended approach is to create a scoped public package (if you are not using private packages)
[Read more about scoped packages here](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)

If you're using the package.json from the template you may want to change the name and references to pgk-template and change it to your library.
