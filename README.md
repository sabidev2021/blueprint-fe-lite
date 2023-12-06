![Scheme](src/assets/logo/logo.svg)

# BLUEPRINT-FE ( LITE VERSION )

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.4.

### What is this repository for? ###

* As a reference in making multiple applications idea build with Angular + PrimeNg UI Framework + Firebase Starter Kit.
* As a basis for the design of new applications
* Ehance your project development speed.
* Sample Working with Authentication Service Token (JWT) using Angular Http Client.

**How to Running:**
```sh
  npm run start : build config-local ( localhost env )
```
```sh
  npm run build:dev : build config-dev
```
```sh
  npm run build:staging : build config-staging
```
```sh
  npm run build:production : build config-production
```
```sh
  "scripts": {
    "start": "ng serve --configuration local",
    "start:dev": "ng serve --configuration development",
    "start:staging": "ng serve --configuration staging",
    "build": "ng build",
    "build:dev": "ng build --configuration development",
    "build:staging": "ng build --configuration staging",
    "build:production": "ng build --configuration production --stats-json",
  }
```

### Configuration Environment (API, Keycloak, Menu etc):

```sh
  Go to folder blueprint-fe /src/ environments
```

```sh
  You can see at inside folder a files configuration options :
  1. environment.dev.ts
  2. environment.local.ts
  3. environment.prod.ts
  4. environment.staging.ts
```

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
