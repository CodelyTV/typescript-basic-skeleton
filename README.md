# 🔷🌱 TypeScript Basic Skeleton

Template intended to serve as a starting point if you want to bootstrap a project in TypeScript.

The purpose of this repository is to leave it with the bare minimum dependencies and tools needed to run TypeScript snippets or start you project without any opinionated decision already made.

## Features

- [TypeScript](https://www.typescriptlang.org/) (v5)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/) with:
  - [Codely's config](https://github.com/lydell/eslint-plugin-simple-import-sort/) (includes ESLint's recommended rules, Prettier, Import plugin and more)
  - [Jest plugin](https://www.npmjs.com/package/eslint-plugin-jest)
- [Jest](https://jestjs.io)
- [GitHub Action workflows](https://github.com/features/actions) set up to run tests and linting on push
- [SWC](https://swc.rs/): Execute your tests in less than 200ms

## Working with this project

- Install the dependencies: `npm install`
- Execute the tests: `npm run test`
- Check linter errors: `npm run lint`
- Fix linter errors: `npm run lint:fix`

There is no specific command to start the app, we leave that up to you. If you wish to create a specific type of app (web, API…), we recommend checking the templates below.

## Related skeleton templates

Opinionated TypeScript skeletons ready for different purposes:

- [🔷🕸️ TypeScript Web Skeleton](https://github.com/CodelyTV/typescript-web-skeleton)
- [🔷🌍 TypeScript API Skeleton](https://github.com/CodelyTV/typescript-api-skeleton)
- [🔷✨ TypeScript DDD Skeleton](https://github.com/CodelyTV/typescript-ddd-skeleton)

This very same basic skeleton philosophy implemented in other programming languages:

- [✨ JavaScript Basic Skeleton](https://github.com/CodelyTV/javascript-basic-skeleton)
- [☕ Java Basic Skeleton](https://github.com/CodelyTV/java-basic-skeleton)
- [📍 Kotlin Basic Skeleton](https://github.com/CodelyTV/kotlin-basic-skeleton)
- [🧬 Scala Basic Skeleton](https://github.com/CodelyTV/scala-basic-skeleton)
- [🦈 C# Basic Skeleton](https://github.com/CodelyTV/csharp-basic-skeleton)
- [🐘 PHP Basic Skeleton](https://github.com/CodelyTV/php-basic-skeleton)
