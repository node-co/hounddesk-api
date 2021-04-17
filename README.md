# 👋 Welcome to Hounddesk API

Welcome to Hounddesk, we're an Open Source project from the [NodeCo](https://github.com/node-co) community.
Our goal is to provide a better way to connect with your community. Our roadmap is under construction at the moment.

**Join our community**

<a target="_blank" href="https://node-colombia.slack.com">![alt text](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white "Slack logo")</a>

## 🧑‍🤝‍🧑 Contributing

Currently we're planning the project and preparing an early version, but no worries, you will be able to collaborate soon !

## 🧰 Our Stack

We are using many different technologies, but our main stack is Node.js using the following tools:

| Name         |          Type           |
| ------------ | :---------------------: |
| Mongo        |         Storage         |
| Google Cloud |   API hosting via GKE   |
| Firebase     |          Authz          |
| Typescript   | Static type definitions |
| Bugsnag      |   API logs management   |

## 📘 Concepts

Hounddesk is build around the concept of creating plugable modules in order to encourage low coupling (that means reducing the direct dependency for another component).

# Hounddesk Authorization and Authentication

Authentication and Authorization is one of the core modules of any application.
For Hounddesk is not the exception, we want to be able to provide a secure system without compromising flexibility.

We will leverage Hapi authentication strategy for that.

### Supported strategies:

| Name                                                                                               |                Type                |
| -------------------------------------------------------------------------------------------------- | :--------------------------------: |
| [@hounddesk/plugin-firebase-authz](https://www.npmjs.com/package/@hounddesk/plugin-firebase-authz) |           Authorization            |
| [@hounddesk/plugin-firebase-users](https://www.npmjs.com/package/@hounddesk/plugin-firebase-users) | Authentication and User management |
| [@hounddesk/password-policy](https://www.npmjs.com/package/@hounddesk/password-policy)             |          Password policy           |

## ✏️ Notes

Hounddesk core libraries are Open Source too!
They are under the project [Bones](https://github.com/hounddesk/bones#readme)

Hounddesk and Hounddesk core libraries are officially supported by [NodeCo Community](https://github.com/node-co)

## 💻 Installation

This is a GitHub template repository created from our open source project [pkg-template](https://github.com/hounddesk/pkg-template)

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
