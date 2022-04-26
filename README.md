# TypeScript Skeleton (base / project starter)

Repository intended to serve as a starting point if you want to bootstrap a project in TypeScript.

The intention with this repository is to leave it with the bare minimum dependencies and tools needed to run TypeScript snippets or start you projects without any opinionated decision already made.

However, if you want an opinionated TypeScript skeleton we also have the following alternatives ready for different purposes:

- [🔷🕸️ TypeScript Web Skeleton](https://github.com/CodelyTV/typescript-web-skeleton)
- [🔷🌍 TypeScript API Skeleton](https://github.com/CodelyTV/typescript-api-skeleton)
- [🔷✨ TypeScript DDD Skeleton](https://github.com/CodelyTV/typescript-ddd-skeleton)

If you want this very same skeleton philosophy but with other languages we have you covered also 😊:

- [✨ JavaScript Basic Skeleton](https://github.com/CodelyTV/javascript-basic-skeleton)
- [☕ Java Basic Skeleton](https://github.com/CodelyTV/java-basic-skeleton)
- [📍 Kotlin Basic Skeleton](https://github.com/CodelyTV/kotlin-basic-skeleton)
- [🧬 Scala Basic Skeleton](https://github.com/CodelyTV/scala-basic-skeleton)
- [🦈 C# Basic Skeleton](https://github.com/CodelyTV/csharp-basic-skeleton)
- [🐘 PHP Basic Skeleton](https://github.com/CodelyTV/php-basic-skeleton)

## Features

- [TypeScript](https://www.typescriptlang.org/) (v4)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/) with:
  - [Simple Import Sort](https://github.com/lydell/eslint-plugin-simple-import-sort/)
  - [Import plugin](https://github.com/benmosher/eslint-plugin-import/)
  - [HTML plugin](https://github.com/BenoitZugmeyer/eslint-plugin-html)
  - And a few other ES2015+ related rules
- [Jest](https://jestjs.io) with [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro)
- [GitHub Action workflows](https://github.com/features/actions) set up to run tests and linting on push

## Running the app

```
# install dependencies
npm install

# run in dev mode on port 8080
npm run dev

# generate production build
npm run build

# run generated content in dist folder on port 8080
npm run start
```

## Testing

### Jest with Testing Library

```
npm run test
```

## Linting

```
# run linter
npm run lint

# fix lint issues
npm run lint:fix
```
