# Outjector

A PoC for using Injector.js as a standalone dependency in apps outside of the CMS.

### Requirements

- Node 10.x
- Yarn

### Getting Started

1. Run `yarn` in all three directories (injector, primary, secondary)
2. Run `yarn dev` in the `injector` directory (this will produce a dist build of Injector.js)
3. Run `yarn watch` in each of the `primary` and `secondary` directories (this will build both apps whenever they're changed)
4. Serve the root directory somehow (simplest approach: `php -S 127.0.0.1:7777`)
5. Visit the served site in your browser and observe magic

### Core concepts

The intention here is to allow a front-end app to be extended by / utilise code that can't be baked into its dist build.
This could be caused by a variety of factors, but the use-case that sparked this PoC is the SilverStripe MFA module,
which will have an environment-agnostic app (can be rendered in the CMS or front-end) that needs to make use of UI
components defined in 'plugin' modules (which handle specific authentication methods).

The `primary` folder / build in this PoC is the environment-agnostic 'host' application, while the `secondary` folder /
build serves to register additional components for the host app, and to modify its behaviour via transformations.

### Current state

This copy of Injector.js includes all four providers (Components, Reducers, Forms and GraphQL Queries), but so far only
the Component and Reducer providers have undergone testing. The following features are confirmed to either be working or
broken.

#### Component Provider

- [x] Simple component registration / consumption (via `Injector.component.register()` and `Injector.component.get()`)
- [x] Simple component transformations (used to wrap existing components in HOCs via `Injector.transform()`)
- [x] Dependency injection in component definitions via `inject()()` HOC (used to inject components as props)

#### Reducer Provider

- [x] Initialisation of store (via `Injector.reducer.setStore()`)
- [x] Consumption of store with `react-redux`'s `connect()` pattern
- [x] Reducer transformations (used to modify / overload the behaviour of store actions via `Injector.transform()`)
    _(NOTE: These transformations don't seem to be receiving globalState correctly at the moment)_
